import { UserService } from '../service/user/user.service';
import { UserDto } from 'src/user/dto/user.dto';
export declare class UserController {
    private usersService;
    constructor(usersService: UserService);
    create(user: UserDto): Promise<UserDto>;
    findAll(): Promise<UserDto[]>;
    findOne(id: number): Promise<UserDto>;
    update(id: number, userDto: UserDto): Promise<import("typeorm").UpdateResult>;
}
