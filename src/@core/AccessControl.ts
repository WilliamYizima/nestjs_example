const moment = require('moment-timezone');

export type AccessControlProps = {
    id: string
    name: string
    company: string
    inCompany?: boolean
}

export class AccessControl {
    public props: AccessControlProps
    public inCompanyDate: Date
    public outCompanyDate: Date

    constructor(props: AccessControlProps) {
        moment.tz.setDefault('America/Sao_Paulo');
        this.inCompanyDate = moment().format()
        this.props = {
            ...props,
        };
        this.props.inCompany = true
    }

    static create(props) {
        return new AccessControl(props)
    }

    controlInOut() {
        if (this.props.inCompany) {
            this.props.inCompany = false
            this.outCompanyDate = moment().format()
        } else {
            this.props.inCompany = true
            this.outCompanyDate = moment().format()
        }

        return
    }
}
