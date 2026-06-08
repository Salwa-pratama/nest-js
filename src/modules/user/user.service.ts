import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getOne() {
        return {
            message : "berhasil mendapatkan"
        }
    }
}
