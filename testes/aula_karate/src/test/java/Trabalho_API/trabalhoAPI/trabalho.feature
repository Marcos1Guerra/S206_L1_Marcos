Feature: Testando resources da API - trabalho API 

Background: Executa uma vez antes de cada teste
    * def url_base = 'https://jsonplaceholder.typicode.com'
    * def request_teste1 = read("json_teste1.json")
    * def request_teste2 = read("json_teste2.json")

Scenario: Pegando elementos do array e testando seu tipo 
    Given url url_base
    And path '/comments'
    When method get
    Then status 200
    And match $ == '#[]'
    And match  == '#[500]'
    And match each $ contains {name: '#string', email: '#string'}

Scenario: Pegando elementos do array e testando seu tipo2 
    Given url url_base
    And path '/users'
    When method get
    Then status 200
    And match $ == '#[]'
    And match  == '#[10]'
    And match each $ contains {website: '#string', username: '#string'}

Scenario: Testando retorno com informações invalidas
    Given url url_base
    And path '/keys'
    When method get
    Then status 404

Scenario: Testando retorno retorno
    Given url url_base
    And path '/photos'
    When method get
    Then status 200

Scenario: Tentativa de criar um post sem fornecer dados obrigatórios
    Given path '/posts'
    And request {}
    When method post
    Then status 400

Scenario Outline: Criando um novo elemento usando o método POST
    Given url_base
    And path '/posts'
    And request <request_testando>
    When method posts
    Then status 201
    And match $.id == 501
    And match $.name == '#string'
    And match $.body == '<msg>'
    And match $.postId == '#number'

    Examples:
    | request_testando | msg            |
    | request_teste1    | body de teste1 |
    | request_teste2    | body de teste2 |
