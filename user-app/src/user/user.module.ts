import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user/user.service';
import { UserEntity } from './entity/user.entity';
import { UserfilterController } from './controller/userfilter/userfilter.controller';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController, UserfilterController],
  providers: [UserService]
})
export class UserModule {}
