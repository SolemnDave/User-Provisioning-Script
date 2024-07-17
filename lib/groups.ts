import * as cdk from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import { Construct } from "constructs";
import {
  cloudAdminPolicyDocument,
  devOpsPolicyDocument,
  solutionsArchitectPolicyDocument,
  securityEngineerPolicyDocument,
} from "./policies";

export class Groups extends Construct {
  public readonly cloudAdminGroup: iam.Group;
  public readonly devOpsGroup: iam.Group;
  public readonly solutionsArchitectGroup: iam.Group;
  public readonly securityEngineerGroup: iam.Group;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    const uniqueSuffix = Date.now().toString();

    this.cloudAdminGroup = new iam.Group(this, "CloudAdminGroup", {
      groupName: "CloudAdminGroup",
    });
    new iam.ManagedPolicy(this, "CloudAdminManagedPolicy", {
      document: cloudAdminPolicyDocument,
      managedPolicyName: `CloudAdminPolicy-${uniqueSuffix}`,
      groups: [this.cloudAdminGroup],
    });

    this.devOpsGroup = new iam.Group(this, "DevOpsGroup", {
      groupName: "DevOpsGroup",
    });
    new iam.ManagedPolicy(this, "DevOpsManagedPolicy", {
      document: devOpsPolicyDocument,
      managedPolicyName: `DevOpsPolicy-${uniqueSuffix}`,
      groups: [this.devOpsGroup],
    });

    this.solutionsArchitectGroup = new iam.Group(
      this,
      "SolutionsArchitectGroup",
      { groupName: "SolutionsArchitectGroup" }
    );
    new iam.ManagedPolicy(this, "SolutionsArchitectManagedPolicy", {
      document: solutionsArchitectPolicyDocument,
      managedPolicyName: `SolutionsArchitectPolicy-${uniqueSuffix}`,
      groups: [this.solutionsArchitectGroup],
    });

    this.securityEngineerGroup = new iam.Group(this, "SecurityEngineerGroup", {
      groupName: "SecurityEngineerGroup",
    });
    new iam.ManagedPolicy(this, "SecurityEngineerManagedPolicy", {
      document: securityEngineerPolicyDocument,
      managedPolicyName: `SecurityEngineerPolicy-${uniqueSuffix}`,
      groups: [this.securityEngineerGroup],
    });
  }
}
