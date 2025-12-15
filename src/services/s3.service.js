import { getS3Client } from "../config/aws.js";
import { S3_BUCKET, AWS_REGION } from "../config/env.js";

export const uploadToS3 = async (buffer, name, type, folder) => {
  const s3 = await getS3Client();
  const key = `${folder}/${Date.now()}-${name}`;

  await s3.putObject({
    Bucket: S3_BUCKET,
    Key: key,
    Body: buffer,
    ContentType: type
  }).promise();

  return `https://${S3_BUCKET}.s3.${AWS_REGION}.amazonaws.com/${key}`;
};
