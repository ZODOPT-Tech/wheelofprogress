import AWS from "aws-sdk";
import { AWS_REGION, AWS_SECRET_ARN } from "./env.js";

const secretsManager = new AWS.SecretsManager({
  region: AWS_REGION
});

export const getSecrets = async () => {
  const res = await secretsManager.getSecretValue({
    SecretId: AWS_SECRET_ARN
  }).promise();

  return JSON.parse(res.SecretString);
};

export const getS3Client = async () => {
  const secrets = await getSecrets();

  return new AWS.S3({
    region: AWS_REGION,
    accessKeyId: secrets.AWS_ACCESS_KEY_ID,
    secretAccessKey: secrets.AWS_SECRET_ACCESS_KEY
  });
};
