const moment = require('moment');
import { AccessControl } from "./AccessControl";


export type DTOUseCase = {
    sucess: boolean;
    data?: any;
    error?: Error;
};

export class AcessControlInsideOutsideUseCase {

    constructor(private users: AccessControl[]) { }

    async execute(): Promise<DTOUseCase> {
        try {
            //validar quem saiu da empresa após ás 18
            const usersOutSideCompanyAfter18: AccessControl[] = []
            this.users.map((user: AccessControl) => {
                if (user.outCompanyDate) {
                    const hourUserOutside = moment(user.outCompanyDate)
                    const hourLimit = moment('01:00:00', 'HH:mm:ss')
                    console.log(hourUserOutside)
                    console.log(user.outCompanyDate)
                    if (hourUserOutside.isAfter(hourLimit)) {
                        usersOutSideCompanyAfter18.push(user)
                    }
                }
            })

            return {
                sucess: true,
                data: usersOutSideCompanyAfter18
            }

        } catch (err) {
            return {
                sucess: false,
                error: err.message,
            };
        }
    }
}
