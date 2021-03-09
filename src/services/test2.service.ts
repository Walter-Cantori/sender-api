export function generateResponse(
  param: string
): { statusCode: number; body: string } {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `hello service test 2 v1 - ${param}` }),
  };
}
