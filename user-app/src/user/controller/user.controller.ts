import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user/user.service';
import { UserDto } from 'src/user/dto/user.dto';


@Controller('users')
export class UserController {
    constructor(private usersService: UserService){}

    @Post()
    create(@Body() user: UserDto): UserDto{
        return this.usersService.create(user);
    }

    @Get()
    findAll(): UserDto[]{
        return this.usersService.getAll();
    }
}
