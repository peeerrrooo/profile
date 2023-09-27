import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import fs from 'fs'
import path from 'path'

export async function uploadFileToBucket({
  filePath,
  bucketName,
  s3Client
}: {
  filePath: string
  bucketName: string
  s3Client: S3Client
}) {
  const content = fs.readFileSync(path.resolve('./', filePath))
  const putCommand = new PutObjectCommand({
    Bucket: bucketName,
    Key: filePath.replaceAll('build/', '_next/'),
    Body: content,
    ContentType: 'text/javascript'
  })
  await s3Client.send(putCommand)
}
