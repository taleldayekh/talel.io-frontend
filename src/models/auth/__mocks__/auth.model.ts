import { MockAuthModel } from 'src/models/auth/interfaces';
import { ACCESS_TOKEN } from 'src/tests/mock-data/auth';

export default function (): MockAuthModel {
  return {
    login: jest.fn().mockResolvedValue({ accessToken: ACCESS_TOKEN }),
  };
}
