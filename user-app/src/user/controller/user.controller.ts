import { Body, Controller, Get, Post, Put, Param, Delete, Res, HttpStatus, ConflictException } from '@nestjs/common';
import { UserService } from '../service/user/user.service';
import { UserDto } from '../dto/user.dto'; //src/user/dto/user.dto  path leri böyle vermemeliyiz. unit testlerimizgibi  fail alabiliriz.
import { FilterUserDto } from '../dto/filter-user.dto';


@Controller('users')
export class UserController {
    constructor(private usersService: UserService){}

    @Post()
    async create(@Res() res, @Body() user: UserDto): Promise<UserDto>{
        let userCount = await this.usersService.getByTcNo(user.tcno);
        if(userCount > 0)
            throw new ConflictException({
                status: HttpStatus.CONFLICT,
                message: "Tc no kayıtlı."
            });

        userCount = await this.usersService.getByEmail(user.email);
        if(userCount > 0)
            throw new ConflictException({
                status: HttpStatus.CONFLICT,
                message: "Email kayıtlı."
            });

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
