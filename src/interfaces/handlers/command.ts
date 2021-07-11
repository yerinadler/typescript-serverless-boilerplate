import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser';
import validator from '@middy/validator';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

import { errorHandlingMiddleware } from '../middlewares/error.middleware';

const baseHandler = async (event: APIGatewayProxyEvent, context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ event, context })
  };
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