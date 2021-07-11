import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser';
import validator from '@middy/validator';
import { APIGatewayProxyEvent } from 'aws-lambda';

import { errorHandlingMiddleware } from '../middlewares/error.middleware';
import { ok } from '../utils/response';

const baseHandler = async (event: APIGatewayProxyEvent) => {
  const { body } = event;
  return ok('Successfully get the data', body);
};

const inputSchema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        name: { type: 'string' }
      },
      required: ['name']
    }
  }
};

export const handler = middy(baseHandler)
  .use([jsonBodyParser(), validator({ inputSchema }), errorHandlingMiddleware()]);