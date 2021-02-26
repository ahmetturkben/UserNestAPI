import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../service/user/user.service';
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { UserEntity } from './../entity/user.entity';
import { UserDto } from './../dto/user.dto'

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers:[
        UserService,
        {provide: getRepositoryToken(UserEntity),
          useClass: Repository}
      ]
    }).compile();

    // userService = await module.resolve(UserService);
    userService = module.get<UserService>(UserService);
    controller = module.get<UserController>(UserController);
  });


  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(userService).toBeDefined();

    const result:UserDto[] = [{ surname: "Türkbenn", name: "Ahmet", isDeleted: false, email: "ahmetturkbenn@gmail.com", id: 1, tcno: "11111111111"}];
    jest.spyOn(userService, 'getAll').mockResolvedValue(result);

    expect(controller.findAll()).resolves.toEqual(result)

    expect(controller.findAll()).toBeDefined();
  });
});
