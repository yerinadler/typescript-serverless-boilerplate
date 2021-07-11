import { APIGatewayProxyResult } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';

export const createResponse = (statusCode: number, message: string, data: unknown): APIGatewayProxyResult => {
  return {
    statusCode,
    body: JSON.stringify({ message, data })
  };
}; 

export const ok = (message: string, data: unknown): APIGatewayProxyResult => {
  return createResponse(StatusCodes.OK, message, data);
};