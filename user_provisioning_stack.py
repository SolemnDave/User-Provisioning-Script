from aws_cdk import Stack, Tags
from aws_cdk import aws_iam as iam
from constructs import Construct
# Change from relative to absolute imports
from groups import create_groups
from policies import cloud_admin_policy, dev_ops_policy, solutions_architect_policy, security_engineer_policy



class UserProvisioningStack(Stack):
    def __init__(self, scope: Construct, id: str, **kwargs):
        super().__init__(scope, id, **kwargs)
        
        groups = create_groups(self)

        cloud_admin_group = groups['cloud_admin']
        devops_group = groups['dev_ops']
        solutions_architect_group = groups['solutions_architect']
        security_engineer_group = groups['security_engineer']

        cloud_admin_group.add_to_policy(cloud_admin_policy())
        devops_group.add_to_policy(dev_ops_policy())
        solutions_architect_group.add_to_policy(solutions_architect_policy())
        security_engineer_group.add_to_policy(security_engineer_policy())

        self.create_user("David", cloud_admin_group, "Cloud Team", True)
        self.create_user("Chris", devops_group, "Cloud Team", True)
        self.create_user("Christopher", solutions_architect_group, "Cloud Team", True)
        self.create_user("Alfonso", security_engineer_group, "Cloud Team", True)

    def create_user(self, user_name: str, group: iam.Group, department: str, enable_mfa: bool):
        user = iam.User(self, user_name, user_name=user_name)
        Tags.of(user).add("Department", department)
        group.add_user(user)

        if enable_mfa:
            iam.CfnVirtualMFADevice(self, f"{user_name}MFADevice",
                virtual_mfa_device_name=f"{user_name}MFA",
                users=[user.user_name])
