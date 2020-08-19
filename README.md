[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

<h1 align="center">Ocean-lib</h1>

> JavaScript library to privately & securely publish, exchange, and consume data.

[![npm](https://img.shields.io/npm/v/@oceanprotocol/lib.svg)](https://www.npmjs.com/package/@oceanprotocol/lib)
[![Build Status](https://travis-ci.com/oceanprotocol/ocean-lib-js.svg?token=soMi2nNfCZq19zS1Rx4i&branch=main)](https://travis-ci.com/oceanprotocol/ocean-lib-js)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-7b1173.svg?style=flat-square)](https://github.com/prettier/prettier)
[![js oceanprotocol](https://img.shields.io/badge/js-oceanprotocol-7b1173.svg)](https://github.com/oceanprotocol/eslint-config-oceanprotocol)

With it, you can:

- **Publish** data services: downloadable files, streaming data, or compute-to-data.
  Ocean creates a new [ERC20](https://github.com/ethereum/EIPs/blob/7f4f0377730f5fc266824084188cc17cf246932e/EIPS/eip-20.md)
  data token for each data service or set of services.
- **Mint** data tokens for the service
- **Consume** data tokens, to access the service
- **Transfer** data tokens to another owner, and **all other ERC20 actions**
  using [web3.js](https://web3js.readthedocs.io/en/v1.2.9/web3-eth-contract.html) etc.

`ocean-lib` is part of the [Ocean Protocol](https://oceanprotocol.com) toolset.

This is in alpha state and you can expect running into problems. If you run into them, please open up a [new issue](/issues).

- [🏗 Installation](#-installation)
- [🏄 Quick Start](#-quick-start)
  - [Simple Flow](#simple-flow)
  - [Marketplace Flow](#marketplace-flow)
- [🦑 Development](#-development)
- [✨ Code Style](#-code-style)
- [🛳 Production](#-production)
- [⬆️ Releases](#️-releases)
  - [Production](#production)
- [🏛 License](#-license)

## 🏗 Installation

```bash
npm install @oceanprotocol/lib
```

## 🏄 Quick Start

### Simple Flow

This stripped-down flow shows the essence of Ocean. Just downloading, no metadata.

[Go to simple flow](docs/README_simple_flow.md)

### Marketplace Flow

This batteries-included flow includes metadata, multiple services for one datatoken, and compute-to-data.

[Go to marketplace flow](docs/README_marketplace_flow.md)

## 🦑 Development

The project is authored with TypeScript and compiled with `tsc`.

To start compiler in watch mode:

```bash
npm start
```

## ✨ Code Style

For linting and auto-formatting you can use from the root of the project:

```bash
# lint all js with eslint
npm run lint

# auto format all js & css with prettier, taking all configs into account
npm run format
```

## 🛳 Production

To create a production build, run from the root of the project:

```bash
npm run build
```

## ⬆️ Releases

Releases are managed semi-automatically. They are always manually triggered from a developer's machine with release scripts.

### Production

From a clean `main` branch you can run any release task bumping the version accordingly based on semantic versioning:

- To bump a patch version: `npm run release`
- To bump a minor version: `npm run release -- minor`
- To bump a major version: `npm run release -- major`

Every task does the following:

- bumps the project version in `package.json`, `package-lock.json`
- auto-generates and updates the CHANGELOG.md file from commit messages
- creates a Git tag
- commits and pushes everything
- creates a GitHub release with commit messages as description
- Git tag push will trigger Travis to do a npm release

For the GitHub releases steps a GitHub personal access token, exported as `GITHUB_TOKEN` is required. [Setup](https://github.com/release-it/release-it#github-releases)

## 🏛 License

```
Copyright ((C)) 2020 Ocean Protocol Foundation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
