import { Error } from 'src/data/error/interfaces';

export default class ErrorModel {
  public message: string;
  public status: number;
  public type: string;

  constructor(error: Error) {
    this.message = error.message;
    this.status = error.status;
    this.type = error.type;
  }
}
