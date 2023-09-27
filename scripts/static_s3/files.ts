import fs from 'fs'
import path from 'path'

export function getAllFiles(dirPath) {
  return getFiles(dirPath, [])
}

function getFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach((file) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getFiles(dirPath + '/' + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, '/', file))
    }
  })

  return arrayOfFiles
}
