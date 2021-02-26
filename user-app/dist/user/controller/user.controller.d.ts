import { UserService } from '../service/user/user.service';
import { UserDto } from '../dto/user.dto';
export declare class UserController {
    private usersService;
    constructor(usersService: UserService);
    create(user: UserDto): Promise<UserDto>;
    findAll(): Promise<UserDto[]>;
    findOne(id: number): Promise<UserDto>;
    filterAll(userFilter: any): Promise<UserDto[]>;
    update(id: number, userDto: UserDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
