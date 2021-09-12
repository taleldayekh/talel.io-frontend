interface Error {
  message: string;
  status: number;
  type: string;
}

export interface ErrorResponse {
  error: Error;
}

export interface ErrorDTO {
  error: Error;
}
