import { UserDto } from "src/user/dto/user.dto";
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './../../entity/user.entity';
import { FilterUserDto } from 'src/user/dto/filter-user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(user: UserDto): Promise<UserDto>;
    getAll(): Promise<UserDto[]>;
    filterAll(user: FilterUserDto): Promise<UserDto[]>;
    getById(id: number): Promise<UserDto>;
    update(id: number, user: UserDto): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
