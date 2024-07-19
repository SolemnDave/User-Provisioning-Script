from aws_cdk import aws_iam as iam
from constructs import Construct

def create_groups(scope: Construct):
    cloud_admin_group = iam.Group(scope, "CloudAdminGroup", group_name="CloudAdminGroup")
    devops_group = iam.Group(scope, "DevOpsGroup", group_name="DevOpsGroup")
    solutions_architect_group = iam.Group(scope, "SolutionsArchitectGroup", group_name="SolutionsArchitectGroup")
    security_engineer_group = iam.Group(scope, "SecurityEngineerGroup", group_name="SecurityEngineerGroup")

    return {
        "cloud_admin": cloud_admin_group,
        "dev_ops": devops_group,
        "solutions_architect": solutions_architect_group,
        "security_engineer": security_engineer_group
    }