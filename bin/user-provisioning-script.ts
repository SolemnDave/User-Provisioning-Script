#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { UserProvisioningScriptStack } from "../lib/user-provisioning-script-stack";

const app = new cdk.App();
new UserProvisioningScriptStack(app, "UserProvisioningScriptStack");
