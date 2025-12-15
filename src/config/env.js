import dotenv from "dotenv";
dotenv.config();

export const {
  PORT = 5000,
  JWT_SECRET,
  AWS_REGION,
  AWS_SECRET_ARN,
  S3_BUCKET
} = process.env;
