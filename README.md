# Table of Contents

- [Development](#development)
  - [Setup](#setup)
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

