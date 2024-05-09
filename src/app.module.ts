import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ViajeModule } from './viaje/viaje.module';
import { LugarModule } from './lugar/lugar.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario/usuario.entity/usuario.entity';
import { ViajeEntity } from './viaje/viaje.entity/viaje.entity';
import { LugarEntity } from './lugar/lugar.entity/lugar.entity';

@Module({
  imports: [UsuarioModule, ViajeModule, LugarModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'museum',
      entities: [UsuarioEntity, ViajeEntity, LugarEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }