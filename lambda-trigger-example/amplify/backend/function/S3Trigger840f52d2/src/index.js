// eslint-disable-next-line
// import the sharp library
const sharp = require('sharp')
const aws = require('aws-sdk')
const s3 = new aws.S3()

exports.handler = async function(event, context) {
  if (event.Records[0].eventName === 'ObjectRemoved:Delete') return

  // console.log('Received S3 event:', JSON.stringify(event, null, 2));
  // Get the object from the event and show its content type
  const bucket = event.Records[0].s3.bucket.name; //eslint-disable-line
  const key = event.Records[0].s3.object.key; //eslint-disable-line
  try {
    let image = await s3.getObject({ Bucket: bucket, Key: key }).promise()
    image = await sharp(image.Body)

    const metadata = await image.metadata()
    if (metadata.width > 1000) {
      const resizedImage = await image.resize({ width: 1000 }).toBuffer()
      await s3.putObject({
        Bucket: bucket,
        Body: resizedImage,
        Key: key
      }).promise()
      return
    } else {
      return
    }
  } catch (err) {
    context.fail(`Error getting files: ${err}`)
  }

  // console.log(`Bucket: ${bucket}`, `Key: ${key}`);
  // context.done(null, 'Successfully processed S3 event'); // SUCCESS with message
};
