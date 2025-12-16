import AWS from "aws-sdk";

AWS.config.update({
  region: process.env.AWS_REGION,
});

const secretsManager = new AWS.SecretsManager();

export const getSecret = async () => {
  const data = await secretsManager
    .getSecretValue({
      SecretId: process.env.AWS_SECRET_ARN,
    })
    .promise();

  return JSON.parse(data.SecretString);
};

