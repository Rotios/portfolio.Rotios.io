const dev = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "rotios-api-dev-attachmentsbucket-6wbhcogxihbo"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://api.serverless-stack.seed-demo.club/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_yKOQs2dWK",
    APP_CLIENT_ID: "1h0r8s763vnqj4id6dvguanp8f",
    IDENTITY_POOL_ID: "us-east-2:dedfd34a-9d7e-4bf2-a1dd-ef603bac2ecb"
  }
};

const prod = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "rotios-api-prod-attachmentsbucket-1h5n5ttet1hy0"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://api.serverless-stack.seed-demo.club/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_TwYpMXIJH",
    APP_CLIENT_ID: "6kfg0o7qo2i3ndk2ur906sc5fd",
    IDENTITY_POOL_ID: "us-east-2:f4c754b4-24f0-4754-8596-30afedece1fc"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
