import { Controller, Post, Get, Req, Param } from '@nestjs/common';
import type { Request } from 'express';
import { request } from 'http';
@Controller('/api/users')
export class UserController {
  @Post()
  post(): string {
    return 'POST';
  }
  @Get('/sample')
  getall() {
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
}
