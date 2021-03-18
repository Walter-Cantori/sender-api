class RequestValidatorService {
  body;

  queryParameters;

  constructor(request, validator) {
    this.body = JSON.parse(request.body);
    this.queryParameters = JSON.parse(request.queryParameters);
    if (validator.body) this.validateBody();
    if (validator.queryParameters) this.validateQueryParams();
  }

  private validateBody() {
    // @ts-ignore
    const result = validator.body(this.body);
    if (result.error) {
      throw new Error('failed validation');
    }
  }

  private validateQueryParams() {
    // @ts-ignore
    const result = validator.queryParameters(this.body);
    if (result.error) {
      throw new Error('failed validation');
    }
  }
}

export { RequestValidatorService };
