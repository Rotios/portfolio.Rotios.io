import boto3
from botocore.client import Config
from io import BytesIO
import zipfile
import os
import mimetypes

def lambda_handler(event, context):
    job = None
    try:
        job = event.get('CodePipeline.job')
        
        build_bucket_location = {
            'bucketName' : 'portfoliobuild.rotios.io',
            'objectKey' : 'BuildPortfolio.zip'
        }
        if job:
            for artifact in job['data']['inputArtifacts']:
                if artifact['name'] == 'MyAppBuild':
                    build_bucket_location = artifact['location']['s3Location']

        s3 = boto3.resource('s3', config = Config(signature_version='s3v4'))
        sns = boto3.resource('sns')
        topic = sns.Topic('arn:aws:sns:us-east-1:504110333788:deployPortfolioTopic')

        portfolio_bucket = s3.Bucket('portfolio.rotios.io')

        print("Build location from bucket {} and obj {}".format(build_bucket_location['bucketName'], build_bucket_location['objectKey']))
        build_bucket = s3.Bucket(build_bucket_location['bucketName'])
        
        portfolio_zip = BytesIO()
        object_to_download = build_bucket.Object(build_bucket_location['objectKey'])
        object_to_download.download_fileobj(portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        topic.publish(Subject="Rotios IO Portfolio built successfully", Message="The build was successful.")        
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job['id'])
        return "Success"
    except Exception as e:
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_failure_result(jobId=job['id'])
        topic.publish(Subject="Rotios IO Portfolio build Failed", Message="The build failed with error:\n {}.".format(e))
        raise e

# if __name__ == '__main__':
#     lambda_handler(None, None)ebbce766-abcf-448b-a166-bbbf48c07e93
#category=Invoke,owner=AWS,provider=Lambda,version=1