import { getS3Client } from "../config/aws.js";
import { v4 as uuidv4 } from "uuid";

export const uploadToS3 = async ({ buffer, mimetype, folder }) => {
  const s3 = getS3Client();

  const key = `${folder}/${uuidv4()}`;

  const result = await s3
    .upload({
      Bucket: process.env.S3_BUCKET,
      Key: key,
      Body: buffer,
      ContentType: mimetype,
    })
    .promise();

  return result.Location;
};

