import { Module } from '@nestjs/common';
import { LugarService } from './lugar.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LugarEntity } from './lugar.entity/lugar.entity';
import { LugarController } from './lugar.controller';

@Module({
  providers: [LugarService],
  imports: [TypeOrmModule.forFeature([LugarEntity])],
  controllers: [LugarController],
})
export class LugarModule { }
