import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import configuration from 'src/configuration';

import container from '../../inversify.config';
import { TYPES } from '../../types';

import { HelloService } from '#services/hello.service';


export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const helloService = container.get<HelloService>(TYPES.HelloService);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: helloService.getHello(), event, data: helloService.getMockData(), environment: configuration.region })
  };
};