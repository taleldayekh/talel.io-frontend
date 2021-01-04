![CI](https://github.com/taleldayekh/talel.io-frontend/workflows/CI/badge.svg) [![codecov](https://codecov.io/gh/taleldayekh/talel.io-frontend/branch/develop/graph/badge.svg?token=H787HD9CKJ)](https://codecov.io/gh/taleldayekh/talel.io-frontend)

# Table of Contents

- [Development](#development)
  - [Setup](#setup)
  - [Code Style](#code-style)
  - [Testing](#testing)
  - [CI/CD](#cicd)
- [Deployment](#deployment)
  - [Infrastructure Diagram](#infrastructure-diagram)
  - [AWS ECR](#aws-ecr-elastic-container-registry)
  - [AWS ECS](#aws-ecs-elastic-container-service)

# Development

## Setup

1. **Clone repository**  

   ```bash
   git clone git@github.com:taleldayekh/talel.io-frontend.git
   ```

2. **Set Git Hooks path**  

   This is necessary for using the hooks located in the `.githooks` directory. The path is added locally for the git config of this repository.

   In the repository root, run:

   ```bash
   git config core.hooksPath .githooks
   ```

3. **Install dependencies**  

   ```bash
   yarn install
   ```

## Code Style

To help detect errors and reduce bugs, the project is:

- Written in [TypeScript](https://github.com/microsoft/TypeScript).

- Uses [ESLint](https://github.com/eslint/eslint) for checking programming errors.  

  ```bash
  yarn lint
  ```

To maintain consistency across the codebase, coding standards are enforced with the help of:

- [Prettier](https://github.com/prettier/prettier) for reformatting the code.  

  ```bash
  yarn prettier
  ```

## Testing

## CI/CD

# Deployment

## Infrastructure Diagram

```
╭─── GitHub ───╮         ╭─── AWS ECR ───╮         ╭─── AWS ECS ───╮
│ Server CI/CD │ ──────► │ Server Images │ ──────► │ ╭───────────╮ │         ╭──────────────╮
╰──────────────╯         ╰───────────────╯         │ │           │ │         │              │
                                                   │ │    EC2    │ │ ──────► │ www.talel.io │
╭─── GitHub ───╮         ╭─── AWS ECR ───╮         │ │           │ │         │              │
│ Client CI/CD │ ──────► │ Client Images │ ──────► │ ╰───────────╯ │         ╰──────────────╯
╰──────────────╯         ╰───────────────╯         ╰───────────────╯
```

## AWS ECR (Elastic Container Registry)

The Docker image artifacts which represents the application backend and frontend are hosted with [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/).

Each image has its separate repository containing all versions of a given image. The lifecycle policy for the repositories is however set to only keep the latest version of an image.

## AWS ECS (Elastic Container Service)

[Amazon Elastic Container Service](https://aws.amazon.com/ecs/) orchestration platform manages and deploys Docker containers based on the images from the ECR.

The _*talelio*_ ECS cluster (grouping of hardware resources) currently consists of one provisioned [t2.micro EC2](https://aws.amazon.com/ec2/instance-types/t2/) instance. Both the backend and frontend containers run on this EC2 instance.

### Configurations

