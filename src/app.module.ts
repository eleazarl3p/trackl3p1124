import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobModule } from './job/job.module';
import { PaqueteModule } from './paquete/paquete.module';
import { MaterialModule } from './material/material.module';
import { MemberModule } from './member/member.module';
import { ContactModule } from './contact/contact.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { LevelModule } from './level/level.module';
import { AreaModule } from './area/area.module';
import { TicketModule } from './ticket/ticket.module';
import { MachineModule } from './machine/machine.module';
import { ShapeModule } from './shape/shape.module';
import { TeamModule } from './team/team.module';
import { TaskModule } from './task/task.module';
import { TruckModule } from './truck/truck.module';
import { QcModule } from './qc/qc.module';
import { SpecialuserModule } from './specialuser/specialuser.module';
import { GldriveModule } from './gldrive/gldrive.module';

import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
      timezone: 'Z',
    }),
    JobModule,
    PaqueteModule,
    MaterialModule,
    MemberModule,
    ContactModule,
    AuthModule,
    UserModule,
    LevelModule,
    AreaModule,
    TicketModule,
    MachineModule,
    ShapeModule,
    TeamModule,
    TaskModule,
    TruckModule,
    QcModule,
    SpecialuserModule,
    GldriveModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// type: 'mysql',
// host: process.env.DB_HOST,
// port: parseInt(process.env.DB_PORT, 10),
// username: process.env.DB_USERNAME,
// password: process.env.DB_PASSWORD,
// database: process.env.DB_NAME,
