import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';
import validator from '@middy/validator';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

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
  .use(jsonBodyParser())
  .use(validator({ inputSchema }))
  .use(httpErrorHandler());