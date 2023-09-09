import { Controller, Get } from '@nestjs/common';
import { AccessControl } from 'src/@core/AccessControl';
import { AcessControlInsideOutsideUseCase } from 'src/@core/AcessControl.UseCase';

@Controller('access-control')
export class AccessControlController {
    public listUsers = []

  @Get('')
  async userFindAll() {
    console.log('bateu no findAll')
    const user1 = {
        id: 'meuID',
        name: 'user test',
        company: 'ntt'
    }
    const user2 = {
        id: 'meuID2',
        name: 'user test',
        company: 'ntt'
    }
    const actionUser1 = AccessControl.create(user1)
    const actionUser2 = AccessControl.create(user2)
    actionUser1.controlInOut()
    actionUser2.controlInOut()

    this.listUsers.push(actionUser1)
    this.listUsers.push(actionUser2)

    const useCaseToControlAccess = new AcessControlInsideOutsideUseCase(this.listUsers)
    const response = await useCaseToControlAccess.execute()
    return await response.data;
  }
}
