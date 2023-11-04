/// <reference types="cypress"/>

describe('Criando cenário de teste para o site globalsqa',()=> {

  it.skip('Caso de teste: Logando e depositando 1000',()=>{

    let test1 = logando()
    let test10 = sacar()
    cy.get('.error').should('have.text', 'Deposit Successful')
  })

  it.skip('Caso de teste: Logando e sacando 900',()=>{

    let test2 = logando()
    let test20 = depositar()
    cy.get('.error').should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.')
  })

  it.skip('Caso de teste: Logando, depositando 1000 e depois sacando 1000',()=>{

    let test3 = logando()
    let test3_1 = sacar()
    cy.get('.home').click()
    let test3_2 = iniciando()
    let test3_3 = depositar()
  })

  it.skip('Caso de teste: Checando o valores que foram feitos as ultimas transações',()=>{
    let test4 = logando()
    let test4_1 = sacar()
    cy.get('.home').click()
    let test4_2 = iniciando()
    let test4_3 = depositar()
    cy.get('[ng-class="btnClass1"]').click()
  })

  it.skip('Caso de teste: Criando um cliente',()=>{
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass1"]').click()
    cy.get(':nth-child(1) > .form-control').type('test')
    cy.get(':nth-child(2) > .form-control').type('test')
    cy.get(':nth-child(3) > .form-control').type('test')
    cy.get('form.ng-dirty > .btn').click()
  })

  it('Caso de teste: verificando se cliente existe',()=>{
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.form-control').type('Harry')
  })
})

//logando com o Ron
function logando(){
  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  cy.get('.borderM > :nth-child(1) > .btn').click()
  cy.get('#userSelect').select('Ron Weasly')
  cy.get('form.ng-valid > .btn').click()
  
  return logando
}

//Iniciando sem ter que acessar o site 
function iniciando(){
  cy.get('.borderM > :nth-child(1) > .btn').click()
  cy.get('#userSelect').select('Ron Weasly')
  cy.get('form.ng-valid > .btn').click()
  
  return iniciando
}

//sacando 1000 dolares
function sacar(){
  cy.get('[ng-class="btnClass2"]').click()
  cy.get('.form-control').type('1000')
  cy.get('form.ng-dirty > .btn').click()
  
  return sacar
}

//depositando 900 dolares
function depositar(){
  cy.get('[ng-class="btnClass3"]').click()
  cy.get('.form-control').type('900')
  cy.get('form.ng-dirty > .btn').click()

  return depositar
}