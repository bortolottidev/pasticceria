import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DolciModule } from './dolci/dolci.module';

@Module({
  imports: [
    // TODO Secrets should be moved to.. secrets!
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'interadmin',
      password: 'interpassword',
      database: 'interdb',
      schema: 'pasticceria',
      entities: [],
      autoLoadEntities: true,
    }),
    DolciModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
