import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from "src/user/dto/user.dto"
import { DeleteResult, Repository, UpdateResult, Raw } from 'typeorm';
import { UserEntity } from './../../entity/user.entity';
import { FilterUserDto } from 'src/user/dto/filter-user.dto';

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

    filterAll(user: FilterUserDto): Promise<UserDto[]>{
        console.log(user);
        var result = this.userRepository.find({
            where: [
              { name: Raw(alias =>`${alias} IN (:...name)`, { name: user.names })},
              { surname: Raw(alias =>`${alias} IN (:...surname)`, { surname: user.surnames })},
              { email: Raw(alias =>`${alias} IN (:...email)`, { email: user.emails })},
              { tcno: Raw(alias =>`${alias} IN (:...tcno)`, { tcno: user.tcnos })}
            ]
          });
          console.log(result)
          return result;
    }

    getById(id: number): Promise<UserDto> {
        return this.userRepository.findOne({ id });
    }

    update(id: number, user: UserDto): Promise<UpdateResult>{
        return this.userRepository.update(id, user); // or return this.userRepository.update(id, { surname: user.surname, name: user.name, tcno: user.tcno, email: user.email });
    }

    delete(id: number): Promise<DeleteResult>{
        return this.userRepository.update(id, { isDeleted: true } );
    }
}
