// testar um usuário entrando no prédio

import { AccessControl } from "./AccessControl"
import { AcessControlInsideOutsideUseCase } from "./AcessControl.UseCase"


// testar de um usuário saindo no prédio

// gwt
// given
// when
// then

test('meu teste inicial', async function () {
    const a = 1
    const b = 1

    const validate = a == b

    expect(validate).toEqual(true)
    expect(validate).toBe(true)
})

test('testar entrada de um usuário', async function () {
    // criar um user com  -> id - nome - empresa
    const user = {
        id: 'meuID',
        name: 'user test',
        company: 'ntt'
    }
    const insideUser = AccessControl.create(user)

    // espero que 'inCompany' = true
    expect(insideUser.props.inCompany).toBe(true)
})

test('testar saida de um usuário', async function () {
    // criar um user com  -> id - nome - empresa
    const user = {
        id: 'meuID',
        name: 'user test',
        company: 'ntt'
    }
    const insideUser = AccessControl.create(user)
    insideUser.controlInOut()
    // espero que 'inCompany' = true
    expect(insideUser.props.inCompany).toBe(false)
})

test('testar saida e reentrada de um usuário', async function () {
    // criar um user com  -> id - nome - empresa
    const user = {
        id: 'meuID',
        name: 'user test',
        company: 'ntt'
    }
    const insideUser = AccessControl.create(user)
    insideUser.controlInOut()
    insideUser.controlInOut()
    // espero que 'inCompany' = true
    expect(insideUser.props.inCompany).toBe(true)
})


test('testar entrada de um usuário e logo após a saída', async function () {
    // criar um user com  -> id - nome - empresa
    const user = {
        id: 'meuID',
        name: 'user test',
        company: 'ntt'
    }
    const actionUser = AccessControl.create(user)
    //logo após a entrada, ele vai embora
    actionUser.controlInOut()

    // espero que 'inCompany' = false
    expect(actionUser.props.inCompany).toBe(false)
})

test('testar quem saiu após ás 18', async function () {
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
    const listUsers = [actionUser1, actionUser2]

    const useCaseToControlAccess = new AcessControlInsideOutsideUseCase(listUsers)
    const response = await useCaseToControlAccess.execute()

    expect(response.data[0].props.id).toBe('meuID')
    expect(response.data.length).toBe(1)
})

