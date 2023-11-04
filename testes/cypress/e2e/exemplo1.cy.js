/// <reference types="cypress"/>

describe('Criando cenário de teste para o site globalsqa',()=> {

  it('Caso de teste: Registrando um usuario no site com sucesso',()=>{

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get(".btn-link").click()
    cy.get("#firstName").type("Teste")
    cy.get('#Text1').type('Teste')
    cy.get('#username').type('Teste')
    cy.get('#password').type('Teste')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })

  it('Caso de teste: Registrando um usuario com falha (faltando senha)',()=>{

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get("#firstName").type("Teste")
    cy.get('#Text1').type('Teste')
    cy.get('#username').type('Teste')
    cy.get('#password').type('Teste')
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text', 'Password is required')
    cy.get('.btn-primary').should('be.disabled')
  })

  it('Caso de teste: Logando com sucesso',()=>{

    let info = criarUsuario()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info[0])
  })

  it('Caso de teste: Deletando usuario',()=>{

    let info = criarUsuario()
    cy.login(info[0],info[1])
    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()
    cy.login(info[0],info[1])
    cy.get('.ng-binding').should('have.text', 'Username or password is incorrect')

  })
})

function criarUsuario(){
  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let user = horas + minutos + segundos + 'Id'
  let senha = horas + minutos + segundos + 'Senha'
  let userInfo = [user, senha]

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get(".btn-link").click()
    cy.get("#firstName").type(user)
    cy.get('#Text1').type(user)
    cy.get('#username').type(user)
    cy.get('#password').type(senha)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')

    return userInfo
}