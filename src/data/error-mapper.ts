import { ErrorResponse, ErrorDTO } from 'src/data/error.interface';

export default class ErrorMapper {
  public static toErrorDTO(errorResponse: ErrorResponse): ErrorDTO {
    return {
      error: {
        message: errorResponse.error.message,
        status: errorResponse.error.status,
        type: errorResponse.error.type,
      },
    };
  }
}
