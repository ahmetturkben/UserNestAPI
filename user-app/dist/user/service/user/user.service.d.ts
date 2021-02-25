import { UserDto } from "src/user/dto/user.dto";
import { Repository } from 'typeorm';
import { UserEntity } from './../../entity/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(user: UserDto): Promise<UserDto>;
    getAll(): Promise<UserDto[]>;
}
