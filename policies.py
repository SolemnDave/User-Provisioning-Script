from aws_cdk import aws_iam as iam

def cloud_admin_policy():
    return iam.PolicyStatement(
        actions=["ec2:*", "s3:*", "iam:*", "rds:*", "cloudwatch:*"],
        resources=["*"]
    )

def dev_ops_policy():
    return iam.PolicyStatement(
        actions=["codepipeline:*", "codebuild:*", "ecs:*", "cloudformation:*", "cloudwatch:*"],
        resources=["*"]
    )

def solutions_architect_policy():
    return iam.PolicyStatement(
        actions=["ec2:*", "s3:*", "rds:*", "cloudfront:*", "lambda:*"],
        resources=["*"]
    )

def security_engineer_policy():
    return iam.PolicyStatement(
        actions=["iam:*", "cloudtrail:*", "guardduty:*", "config:*", "kms:*"],
        resources=["*"]
    )