import { UserService } from '../service/user/user.service';
import { UserDto } from 'src/user/dto/user.dto';
export declare class UserController {
    private usersService;
    constructor(usersService: UserService);
    create(user: UserDto): Promise<UserDto>;
    findAll(): Promise<UserDto[]>;
}
