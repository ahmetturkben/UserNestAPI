import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../service/user/user.service';
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { UserEntity } from './../entity/user.entity';

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
    // const result = ['test'];
    // jest.spyOn(userService, 'findAll').mockImplementation(() => result);
    // expect(await controller.findAll()).toBe(result);

    expect(controller).toBeDefined();
    expect(userService).toBeDefined();
  });
});
