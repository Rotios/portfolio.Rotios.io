import boto3
from botocore.client import Config
from io import BytesIO
import zipfile
import os
import mimetypes

def lambda_handler(event, context):
    try:
        s3 = boto3.resource('s3', config = Config(signature_version='s3v4'))
        sns = boto3.resource('sns')
        topic = sns.Topic('arn:aws:sns:us-east-1:504110333788:deployPortfolioTopic')

        portfolio_bucket = s3.Bucket('portfolio.rotios.io')
        build_bucket = s3.Bucket('portfoliobuild.rotios.io')
        
        portfolio_zip = BytesIO()
        object_to_download = build_bucket.Object('BuildPortfolio.zip')
        object_to_download.download_fileobj(portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        topic.publish(Subject="Rotios IO Portfolio built successfully", Message="The build was successful.")        
    except Exception as e:
        topic.publish(Subject="Rotios IO Portfolio build Failed", Message="The build failed with error:\n {}.".format(e))
        raise e

# if __name__ == '__main__':
#     lambda_handler(None, None)