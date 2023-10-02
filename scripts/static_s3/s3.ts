import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import fs from 'fs'

export async function uploadFileToBucket({
  filePath,
  key,
  bucketName,
  s3Client,
  contentType
}: {
  filePath: string
  key: string
  bucketName: string
  s3Client: S3Client
  contentType: string
}) {
  const content = fs.readFileSync(filePath)
  const putCommand = new PutObjectCommand({
    Bucket: bucketName,
    Key: key,
    Body: content,
    ContentType: contentType
  })
  await s3Client.send(putCommand)
}
