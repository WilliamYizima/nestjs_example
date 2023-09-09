import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccessControlModule } from './access-control/access-control.module';

@Module({
  imports: [AccessControlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
