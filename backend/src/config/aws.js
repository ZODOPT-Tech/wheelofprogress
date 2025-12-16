import AWS from "aws-sdk";

/**
 * Global AWS config
 */
AWS.config.update({
  region: process.env.AWS_REGION,
});

/**
 * Clients
 */
const secretsManager = new AWS.SecretsManager();
const s3 = new AWS.S3();

/**
 * 🔐 Get secrets from AWS Secrets Manager
 */
export const getSecret = async () => {
  const data = await secretsManager
    .getSecretValue({
      SecretId: process.env.AWS_SECRET_ARN,
    })
    .promise();

  return JSON.parse(data.SecretString);
};

/**
 * 📦 Get S3 client
 */
export const getS3Client = () => {
  return s3;
};


