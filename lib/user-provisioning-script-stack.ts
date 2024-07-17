import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as iam from "aws-cdk-lib/aws-iam";
import { Groups } from "./groups";

export class UserProvisioningScriptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const groups = new Groups(this, "Groups");

    this.createUser("David", groups.cloudAdminGroup, "Cloud Team", true);
    this.createUser("Dave", groups.devOpsGroup, "Cloud Team", true);
    this.createUser(
      "Davidson",
      groups.solutionsArchitectGroup,

      "Cloud Team",
      true
    );
    this.createUser(
      "Davina",
      groups.securityEngineerGroup,

      "Cloud Team",
      true
    );
  }

  private createUser(
    userName: string,
    group: iam.Group,
    department: string,
    enableMfa: boolean
  ) {
    const user = new iam.User(this, `${userName}User`, {
      userName: userName,
    });

    cdk.Tags.of(user).add("Department", department);

    group.addUser(user);

    if (enableMfa) {
      const mfa = new iam.CfnVirtualMFADevice(this, `${userName}MFADevice`, {
        virtualMfaDeviceName: `${userName}MFA`,
        users: [user.userName],
      });
      new iam.CfnUserToGroupAddition(this, `${userName}AddToGroup`, {
        groupName: group.groupName,
        users: [user.userName],
      });
    }
  }
}
