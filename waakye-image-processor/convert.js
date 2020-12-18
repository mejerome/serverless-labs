'use strict'

const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec
const mime = require('mime')
const aws = require('aws-sdk')
const { stdout, stderr } = require('process')
const s3 = new aws.S3()

function convert(bucket, filePath) {
    const fileName = path.basename(filePath)
    console.log(bucket)

    return s3.getObject({
            Bucket: bucket,
            Key: filePath
        }).promise()
        .then(response => {
            return new Promise((resolve, reject) => {
                if (!fs.existsSync('/tmp/images/')) {
                    fs.mkdirSync('/tmp/images/')
                }
                if (!fs.existsSync('/tmp/thumbnails/')) {
                    fs.mkdirSync('/tmp/thumbnails/')
                }

                const localFilePath = path.join('/tmp/images/', fileName)
                fs.writeFile(localFilePath, response.Body, (err, fileName) => {
                    if (err) {
                        return reject(err)
                    }
                    resolve(filePath)
                })
            })
        })
        .then(filePath => {
            return new Promise((resolve, reject) => {
                const localFilePath = path.join('/tmp/images/', fileName)
                const localThumbnailPath = path.join('/tmp/thumbnails/', fileName)

                exec(`convert ${localFilePath} -resize 120x120\\> ${localThumbnailPath}`, (err, stdout, stderr) => {
                    if (err) {
                        return reject(err)
                    }
                    resolve(fileName)
                })
            })
        })
        .then(fileName => {
            const localThumbnailPath = path.join('/tmp/thumbnails/', fileName)

            return s3.putObject({
                Bucket: bucket,
                Key: `thumbnail/${fileName}`,
                Body: fs.readFileSync(localThumbnailPath),
                ContentType: mime.getType(localThumbnailPath),
                ACL: 'public-read'
            }).promise()
        })
}

module.exports = convert