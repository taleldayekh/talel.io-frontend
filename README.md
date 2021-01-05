![CI](https://github.com/taleldayekh/talel.io-frontend/workflows/CI/badge.svg) [![codecov](https://codecov.io/gh/taleldayekh/talel.io-frontend/branch/develop/graph/badge.svg?token=H787HD9CKJ)](https://codecov.io/gh/taleldayekh/talel.io-frontend)

# Table of Contents

- [Development](#development)
  - [Setup](#setup)
  - [Code Style](#code-style)
  - [Testing](#testing)
  - [CI/CD](#cicd)
- [Deployment](#deployment)
  - [Infrastructure Diagram](#infrastructure-diagram)
  - [Configurations](#configurations)

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

### CI

### CD

# Deployment

The _*talel.io*_ frontend is deployed on [GitHub Pages](https://pages.github.com) as a client-side rendered (CSR) React single-page application (SPA).

## Infrastructure Diagram

```
╭─── GitHub ───╮         ╭─── GitHub Pages ───╮ API req ╭─── AWS EC2 ───╮
│              │         │                    │ ──────► │               │
│ Client CI/CD │ ──────► │  Production Build  │         │    Backend    │
│              │         │                    │ ◄────── │               │
╰──────────────╯         ╰────────────────────╯	API res ╰───────────────╯
                                   │
                                   │
                                   ▼
                            ╭──────────────╮
                            │              │
                            │ www.talel.io │
                            │              │
                            ╰──────────────╯
```

1. **GitHub**  

   Any added code has to pass the GitHub Actions [CI and CD pipelines](#cicd) before the production build is committed to the `gh-pages` branch.

2. **GitHub Pages**  

   GitHub Pages looks on the `gh-pages` branch for the static files from the production build which then gets published on the internet and are accessible by visiting [www.talel.io](https://www.talel.io).

   The frontend is decoupled from the backend and communicates with the backend server via its [API](https://github.com/taleldayekh/talel.io-backend#api).

3. **AWS EC2**  

   The backend is hosted on a AWS EC2 instance. See the [deployment section](https://github.com/taleldayekh/talel.io-backend#deployment) in the [talel.io-backend repo](https://github.com/taleldayekh/talel.io-backend) for details on the server-side deployment infrastructure.

## Configurations
