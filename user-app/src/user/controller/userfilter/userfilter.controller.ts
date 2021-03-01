import { Body, Controller, Get, Post, Put, Param, Delete, Res, HttpStatus, ConflictException } from '@nestjs/common';
import { UserDto } from '../../dto/user.dto';
import { FilterUserDto } from '../../dto/filter-user.dto';
import { UserService } from '../../service/user/user.service';


@Controller('userfilter')
export class UserfilterController {
    constructor(private usersService: UserService){}

    @Post()
    filterAll(@Body() userFilter : FilterUserDto): Promise<UserDto[]>{
        console.log(userFilter);
        return this.usersService.filterAll(userFilter);
    }
}
