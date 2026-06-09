import { Injectable } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Response, Request } from 'express';
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

  setCookie(access_key: string, response: Response) {
    response.cookie('access_key', access_key);

    return access_key;
  }

  getCookie(req: Request) {
    const cookie = req.cookies.access_key;

    return cookie;
  }

  removeCookie(res: Response) {
    res.clearCookie('access_key');
    return "cookie perhasil dihapus";
  }
}
