import { Error } from 'src/data/error/interfaces';
import ErrorModel from 'src/models/error/error.model';

export default class ErrorMapper {
  public static toErrorModel(errorResponse: Error): ErrorModel {
    return new ErrorModel(errorResponse);
  }
}
