# Architecture

![User-Provisioning-Script Architecture](src/assets/images/UPS-Arch.png)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)

## Overview

The User Provisioning Script is an automated solution developed using the AWS CDK (Cloud Development Kit) with TypeScript. This script streamlines the process of creating and managing AWS IAM users, assigning them to specific groups, attaching relevant policies, tagging users for better organization, and enhancing security with Multi-Factor Authentication (MFA).

## Features

- **Automated User Creation:** Automatically create IAM users with specified configurations.
- **Group Assignment:** Assign users to predefined IAM groups based on their roles or job functions.
- **Policy Attachment:** Attach appropriate IAM policies to groups to control user permissions.
- **User Tagging:** Add tags to users for better organization and cost allocation.
- **Enhanced Security:** Implement Multi-Factor Authentication (MFA) for added security.

## Tech Stack

- **Amazon Web Services (AWS)**
  - **IAM:** For managing users, groups, roles, and policies.
  - **CDK (Cloud Development Kit):** For defining cloud infrastructure using TypeScript.
- **TypeScript:** Programming language used for writing the infrastructure code.
- **Node.js:** JavaScript runtime environment for executing code and managing dependencies.
- **AWS SDK for JavaScript:** To interact with AWS services programmatically.
- **Git:** Version control system for tracking changes in the project.
- **NPM:** Package manager for installing dependencies.

## Setup

1. **Install Node.js and NPM:**

   - Download and install Node.js and NPM.
   - Install AWS CLI:

   ```bash
     brew install awscli
   ```

   - Install and configure the AWS CLI with your AWS credentials by following the instructions here.

2. **Set up AWS CDK:** - Install the AWS CDK globally using NPM:

   ```bash
   npm install -g aws-cdk
   ```

3. **Bootstrap your AWS environment to set up the necessary resources for the AWS CDK:**

   ```bash
    cdk bootstrap
   ```

4. **Initialize a New CDK Project:**

   - Create a new directory for your project and navigate into it:

   ```bash
   mkdir user-provisioning-script
   cd user-provisioning-script
   ```

5. **Initialize a new CDK project in TypeScript:**

   ```bash
   cdk init app --language=typescript
   ```

6. **Install Required CDK Libraries:**

   - Install the necessary AWS CDK libraries for IAM, Lambda, and other services:

     ```bash
     npm install @aws-cdk/aws-iam @aws-cdk/aws-lambda @aws-cdk/aws-sns @aws-cdk/aws-sns-subscriptions @aws-cdk/aws-s3 @aws-cdk/aws-cloudtrail @aws-cdk/aws-s3-notifications constructs
     ```

7. **Define IAM Groups and Policies:**

   - Create IAM groups and define the policies for each group.

8. **Create IAM Users and Attach to Groups:**

   - Create IAM users and assign them to the predefined groups, add tags, and enable MFA.

9. **Deploy the Stack:**

- Deploy the CDK stack to your AWS account:

  ```bash
  cdk deploy
  ```

  ```

  ```
