interface AllowCorsResponse {
  statusCode: number
  body: string
  headers: Record<string, unknown>
}

/**
 * A simple example includes a HTTP get method to get one item by id from a DynamoDB table.
 */
export const handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    throw new Error(`getMethod only accept GET method, you tried: ${event.httpMethod}`);
  }
  // All log statements are written to CloudWatch
  console.info('received:', event);

  const response: AllowCorsResponse = {
    statusCode: 200,
    body: JSON.stringify({ data: 'hi' }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*', // Allow from anywhere
      'Access-Control-Allow-Methods': 'GET', // Allow only GET request
    },
  };

  // All log statements are written to CloudWatch
  console.info(`response from: ${event.path} statusCode: ${response.statusCode}`);
  return response;
}
