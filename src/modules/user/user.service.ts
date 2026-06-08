import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getByQuery(name: string, id: string, email: string) {
    return {
      message: 'success',
      data: {
        id,
        name,
        email,
      },
      status: 200,
    };
  }
}
