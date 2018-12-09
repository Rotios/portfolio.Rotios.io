import boto3
from botocore.client import Config
from io import BytesIO
import zipfile
import os

s3 = boto3.resource('s3', config = Config(signature_version='s3v4'))

def lambda_handler(event, context):
    portfolio_bucket = s3.Bucket('portfolio.rotios.io')
    build_bucket = s3.Bucket('portfoliobuild.rotios.io')
    
    portfolio_zip = BytesIO()
    object_to_download = build_bucket.Object('BuildPortfolio.zip')
    object_to_download.download_fileobj(portfolio_zip)

    with zipfile.ZipFile(portfolio_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            portfolio_bucket.upload_fileobj(obj, nm)
            portfolio_bucket.Object(nm).Acl().put(ACL='public-read')


if __name__ == '__main__':
    lambda_handler(None, None)