import { UserDto } from '../../dto/user.dto';
import { FilterUserDto } from '../../dto/filter-user.dto';
import { UserService } from '../../service/user/user.service';
export declare class UserfilterController {
    private usersService;
    constructor(usersService: UserService);
    filterAll(userFilter: FilterUserDto): Promise<UserDto[]>;
}
