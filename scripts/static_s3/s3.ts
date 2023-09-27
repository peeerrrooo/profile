import {
  PutObjectCommand,
  S3Client,
  DeleteObjectCommand
} from '@aws-sdk/client-s3'
import fs from 'fs'
import path from 'path'

export async function deleteStatic(s3Client: S3Client, bucketName) {
  // try {
  const deleteCommand = new DeleteObjectCommand({
    Bucket: bucketName,
    Key: '_next'
  })
  await s3Client.send(deleteCommand)
  // } catch {
  //   return
  // }
}

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
    Key: filePath.replaceAll('build', '_next'),
    Body: content
  })
  await s3Client.send(putCommand)
}
