# nestjs_example

1 - create project nestjs:

```
npm i -g @nestjs/cli
nest new test-example
nest g module access-control
nest g controller access-control
mkdir src/@core
touch src/@core/AccessControl.ts
touch src/@core/accessControl.spec.ts
```

2 - Contexto:

- temos um software de portaria que recebe quem entra e quem sai do prédio

3 - Features:

- É necessário controlar um user que entra e sai (identificando-o)
- É necessário saber quem foi embora após ás 18:00
- Um usuário que entra tem ID - Nome - Empresa
