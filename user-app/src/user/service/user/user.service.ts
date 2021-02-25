import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from "src/user/dto/user.dto"
import { Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './../../entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    create(user: UserDto): Promise<UserDto>{
        return this.userRepository.save(user);
    }

    getAll(): Promise<UserDto[]> {
        return this.userRepository.find();
    }

    getById(id: number): Promise<UserDto> {
        return this.userRepository.findOne({ id });
    }

    update(id: number, user: UserDto): Promise<UpdateResult>{
        return this.userRepository.update(id, user); // or return this.userRepository.update(id, { surname: user.surname, name: user.name, tcno: user.tcno, email: user.email });
    }
}
