import boto3
from botocore.client import Config
import StringIO
import zipfile

s3 = boto3.resource('s3', config = Config(signature_version='s3v4'))

def lambda_handler(event, context):
    portfolio_bucket = s3.Bucket('portfolio.rotios.io')
    build_bucket = s3.Bucket('portfoliobuild.rotios.io')
    
    import os
    path = os.getcwd() + 'portfoliobuild.zip'
    build_bucket.download_file('portfoliobuild.zip', path)

    portfolio_zip = StringIO.StringIO()
    build_bucket.download_file()