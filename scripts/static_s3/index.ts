import { S3Client } from '@aws-sdk/client-s3'
import { deleteStatic, uploadFileToBucket } from './s3'
import { getAllFiles } from './files'

const s3Client = new S3Client({
  region: 'ru-central1',
  endpoint: 'https://storage.yandexcloud.net'
})
const bucketName = process.env.UPLOAD_BUCKET_NAME || ''

const bootstrap = async () => {
  await deleteStatic(s3Client, bucketName)

  const files = getAllFiles('./build/static')
  const req$: Array<Promise<void>> = []
  for (const file of files) {
    req$.push(uploadFileToBucket({ filePath: file, s3Client, bucketName }))
  }
  await Promise.all(req$)
}

void bootstrap()
