import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.stage.env'],
    }),
    TypeOrmModule.forRoot(),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
