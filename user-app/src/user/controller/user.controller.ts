import { Body, Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';
import { UserService } from '../service/user/user.service';
import { UserDto } from 'src/user/dto/user.dto';
import { FilterUserDto } from 'src/user/dto/filter-user.dto';


@Controller('users')
export class UserController {
    constructor(private usersService: UserService){}

    @Post()
    create(@Body() user: UserDto): Promise<UserDto>{
        return this.usersService.create(user);
    }

    @Get()
    findAll(): Promise<UserDto[]>{
        return this.usersService.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<UserDto>{
        return this.usersService.getById(id);
    }

    @Get('/filter/:names/:surnames/:emails/:tcnos')
    filterAll(@Param() userFilter): Promise<UserDto[]>{
        var obj = new FilterUserDto()
        obj.emails = userFilter.emails.split(',');
        obj.names = userFilter.names.split(',');
        obj.surnames = userFilter.surnames.split(',');
        obj.tcnos = userFilter.tcnos.split(',');

        return this.usersService.filterAll(obj);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() userDto: UserDto) {
        return this.usersService.update(id, userDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.usersService.delete(id);
    }
}
