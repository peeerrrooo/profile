import { S3Client } from '@aws-sdk/client-s3'
import mime from 'mime'
import { uploadFileToBucket } from './s3'
import { getAllFiles } from './files'
import path from 'path'

const s3Client = new S3Client({
  region: 'ru-central1',
  endpoint: 'https://storage.yandexcloud.net'
})
const bucketName = process.env.UPLOAD_BUCKET_NAME || ''

const bootstrap = async () => {
  const files = getAllFiles('./public')
  const req$: Array<Promise<void>> = []
  for (const file of files) {
    const filePath = path.resolve('./', file)
    req$.push(
      uploadFileToBucket({
        filePath: filePath,
        key: `public/${file}`,
        s3Client,
        bucketName,
        contentType: mime.getType(filePath)
      })
    )
  }
  await Promise.all(req$)
}

void bootstrap()
