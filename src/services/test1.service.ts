export function generateResponse(
  param: string
): { statusCode: number; message: string } {
  return {
    statusCode: 200,
    message: `hello service test 1 ${param}`,
  };
}
