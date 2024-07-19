from aws_cdk import App
from user_provisioning_stack import UserProvisioningStack

app = App()
UserProvisioningStack(app, "UserProvisioningStack")
app.synth()
