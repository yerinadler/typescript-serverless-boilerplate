/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import middy from '@middy/core';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export const errorHandlingMiddleware = () => {
  const onError: middy.MiddlewareFn<APIGatewayProxyEvent, APIGatewayProxyResult> = (request: any) => {
    const {
      error: {
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
        message = getReasonPhrase(500)
      }
    } = request;

    console.log('test')
    
    request.response = {
      statusCode,
      body: JSON.stringify({ statusCode, message })
    };
  };
  
  return { onError };
};
