# TypeScript Serverless Boilerplate
A TypeScript boilerplate designed for AWS Lambda via Serverless framework

## Description
The boilerplate comes with 2 functions that can be used as an example. One for GET request and another one for POST request. The latter incorporates Middy as a middleware to validate the request body

## Setup
Make sure you have `NodeJS 14` or later installed along with `npm` or `yarn`. And follow below steps to get started.

You also need `serverless` command to be available which could be accomplished using the command `yarn global add serverless` or `npm install -g serverless` 


1. Copy the `.env_example` into `.env` file for managing environment variables for local development or create one your own
2. Run `yarn` or `npm install` to install dependencies
3. Run the command `yarn start:dev` to start the local development server (via serverless-offline plugin)

## Packages & Dependencies
| Tool        | Library     | Version |
| ----------- | ----------- | ------- |
| IoC Container| Inversify | 5.1.1+ |
| Environment Management | serverless-dotenv-plugin | 3.9.0+ |
| Middleware | Middy | 2.4.3+ |
| Local Development | serverless-offline | 7.0.0+ |
| Test Runner | Jest | 27.0.6+ |
| Code Bundler | Webpack | 5.44.0+ |
| Linter | EsLint | 7.30.0+ |

## Project Structure
The project code is primarily stored in the `src` folder except some of the setup files e.g. Jest config, Webpack config, EsLine config, etc.

The Lambda handlers are in the `interfaces/handlers` directory along with `middlewares` and other `utils`

The overall project structure is shown below
````
├── src
│   ├── services
│   ├── data
│   ├── interfaces
│   │   ├── handlers
│   │   ├── middlewares
│   │   └── utils
│   ├── configuration.ts
│   ├── inversify.config.ts
│   └── types.ts
├── jest.config.js
├── jest.setup.ts
├── package.json
├── serverless.yml
├── tsconfig.json
├── webpack.config.js
````

