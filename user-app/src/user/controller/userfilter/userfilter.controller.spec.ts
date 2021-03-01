import { Test, TestingModule } from '@nestjs/testing';
import { UserfilterController } from './userfilter.controller';

describe('UserfilterController', () => {
  let controller: UserfilterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserfilterController],
    }).compile();

    controller = module.get<UserfilterController>(UserfilterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
