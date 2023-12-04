/// <reference types="cypress"/>

describe('Criando cenário de teste para o site globalsqa',()=> {

    it('Caso de teste: Buscando um computador que nao existe',()=>{
      let test1 = logando()
      let test01 = busca()
    })

    it('Caso de teste: Adicionando indtroduced e Disconiued',()=>{
        let test1 = logando()
        cy.get('#searchbox').type('ARRA')
        cy.get('#searchsubmit').click()
        cy.get('tbody > tr > :nth-child(1) > a').click()
        cy.get('#introduced').type('2020-02-01')
        cy.get('#discontinued').type('2023-12-04')
        cy.get('#company').select('Sony')
        cy.get('.primary').click()
    })

      it('Caso de teste: Criando um Computador e verificando se foi criado',()=>{
        let test1 = logando()
        cy.get('#add').click()
        cy.get('#name').type('Teste03')
        cy.get('#introduced').type('2000-01-31')
        cy.get('#discontinued').type('2023-12-04')
        cy.get('#company').select('Canon')
        cy.get('.primary').click()
    })

      it('Caso de teste: Criando um computador com data iguais em Introduced e discontinued',()=>{
        let test1 = logando()
        let teste01 = cirando_data_iguais()
        cy.get('.error > .input > .help-inline').should('have.text', 'Discontinued date is before introduction date')
    })
  })
  
  //logando
  function logando(){
    cy.visit('https://computer-database.gatling.io/computers')

    return logando
  }

  function busca(){
    cy.get('#searchbox').type('Teste')
    cy.get('#searchsubmit').click()
    cy.get('em').should('have.text', 'Nothing to display')

    return busca
  }

  function cirando_data_iguais(){
    cy.get('#add').click()
    cy.get('#name').type('Teste04')
    cy.get('#introduced').type('2000-01-31')
    cy.get('#discontinued').type('2000-01-31')
    cy.get('#company').select('Canon')
    cy.get('.primary').click()

    return cirando_data_iguais
  }