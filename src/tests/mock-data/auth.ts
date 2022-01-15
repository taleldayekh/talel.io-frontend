import jwt from 'jsonwebtoken';
import { USERNAME_TALEL, INITIAL_USER_ID } from 'src/tests/constants';

const ACCESS_TOKEN = jwt.sign(
  {
    user_id: INITIAL_USER_ID,
    username: USERNAME_TALEL,
    exp: new Date().getTime(),
  },
  'secret key',
);

const EXPIRED_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InRhbGVsZGF5ZWtoIiwiZXhwIjo1MTgzMDY0MDB9.hpMuz--iQLSKOW1pkJfhs6mbl2wJo1rkwPfNWoWh-A8';

export { ACCESS_TOKEN, EXPIRED_ACCESS_TOKEN };
