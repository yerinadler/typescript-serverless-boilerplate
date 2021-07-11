/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const errorHandlingMiddleware = () => {
  return {
    onError: ({ error: { statusCode = 500, message = 'Internal server error' } }: any) => {
      return {
        statusCode,
        body: JSON.stringify({ statusCode, message })
      };
    }
  };
};