import { Controller, Post, Get, Req, Param, Query, Res } from '@nestjs/common';
import type { HttpRedirectResponse } from '@nestjs/common';
import type { Request, Response } from 'express';
import { UserService } from './user.service';
import { PassThrough } from 'stream';
@Controller('/api/users')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Post()
  post(): string {
    return 'POST';
  }
  @Get('/sample')
  getAll() {
    return {
      status: 'success get method',
      message: 'Data user berhasil didapatkan',
      data: {
        id: 1,
        username: 'ananda',
        role: 'admin',
      },
    };
  }

  // ini menyebut datanya langsung
  @Get('/:id')
  getOne(@Param('id') id: string): string {
    return `Berhasil mendapatkan nilai params ${id}`;
  }

  // ini menggunakan express
  @Get('/express/:nama')
  getOnce(@Req() request: Request): string {
    return `Get ${request.params.nama}`;
  }
  @Get('/query/hello')
  sayHello(@Query('name') name: string): string {
    return `Hello ${name || 'Guest'}`;
  }
  // Query lebih dari satu
  // Url nya jadi gini api/users/multiquery/coba?first_name=ananda&last_name=salwa-pratama
  @Get('/multiquery/coba')
  multiQuery(
    @Query('first_name') first_name: string,
    @Query('last_name') last_name: string,
  ) {
    return `hallo ${first_name} ${last_name}`;
  }

  @Get(`/byquery/coba`)
  onService(
    @Query('id') id: string,
    @Query('name') name: string,
    @Query('email') email: string,
  ) {
    return this.userservice.getByQuery(id, name, email);
  }

  @Get('/redirect/coba')
  redirect(): HttpRedirectResponse {
    return {
      url: '/api/users/sample-response',
      statusCode: 301,
    };
  }

  // Asyncrhonous method
  @Get('/async/coba')
  async Async(@Query('name') name: string): Promise<string> {
    return `Hello ${name}`;
  }

  @Get('/coba/set-cookie/:access_key')
  setCookie(
    @Param('access_key') access_key: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    return {
      status: 200,
      message: 'Berhasil set cookie',
      data: this.userservice.setCookie(access_key, response),
    };
  }

  @Get('/cookie/get')
  getCookie(@Req() req: Request) {
    return {
      status: 200,
      message: 'berhasil mendapatkan cookie',
      data: this.userservice.getCookie(req) || 'kosong',
    };
  }

  @Get('/cookie/remove')
  removeCookie(@Res({ passthrough: true }) res: Response) {
    return {
      status: 200,
      message: this.userservice.removeCookie(res),
    };
  }
}
