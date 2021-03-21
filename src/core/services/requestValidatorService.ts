class RequestValidatorService {
  body;

  queryParameters;

  validator;

  constructor(request, validator) {
    console.log(request);
    this.body = JSON.parse(request.body);
    this.validator = validator;
    this.queryParameters = request.queryParameters
      ? JSON.parse(request.queryParameters)
      : {};
    if (this.validator.body) this.validateBody();
    if (this.validator.queryParameters) this.validateQueryParams();
  }

  private validateBody() {
    // @ts-ignore
    const result = this.validator.body.validate(this.body);
    if (result.error) {
      throw new Error('failed validation');
    }
  }

  private validateQueryParams() {
    // @ts-ignore
    const result = this.validator.queryParameters(this.queryParameters);
    if (result.error) {
      throw new Error('failed validation');
    }
  }
}

export { RequestValidatorService };
