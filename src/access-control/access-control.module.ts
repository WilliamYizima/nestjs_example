import { Module } from '@nestjs/common';
import { AccessControlController } from './access-control.controller';
import { AccessControl } from 'src/@core/AccessControl';
import { AcessControlInsideOutsideUseCase } from 'src/@core/AcessControl.UseCase';

@Module({
  controllers: [AccessControlController]
})
export class AccessControlModule {}
