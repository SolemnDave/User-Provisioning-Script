import * as iam from "aws-cdk-lib/aws-iam";

export const cloudAdminPolicyDocument = new iam.PolicyDocument({
  statements: [
    new iam.PolicyStatement({
      actions: ["ec2:*", "s3:*", "iam:*", "rds:*", "cloudwatch:*"],
      resources: ["*"],
    }),
  ],
});

export const devOpsPolicyDocument = new iam.PolicyDocument({
  statements: [
    new iam.PolicyStatement({
      actions: [
        "codepipeline:*",
        "codebuild:*",
        "ecs:*",
        "cloudformation:*",
        "cloudwatch:*",
      ],
      resources: ["*"],
    }),
  ],
});

export const solutionsArchitectPolicyDocument = new iam.PolicyDocument({
  statements: [
    new iam.PolicyStatement({
      actions: ["ec2:*", "s3:*", "rds:*", "cloudfront:*", "lambda:*"],
      resources: ["*"],
    }),
  ],
});

export const securityEngineerPolicyDocument = new iam.PolicyDocument({
  statements: [
    new iam.PolicyStatement({
      actions: ["iam:*", "cloudtrail:*", "guardduty:*", "config:*", "kms:*"],
      resources: ["*"],
    }),
  ],
});
