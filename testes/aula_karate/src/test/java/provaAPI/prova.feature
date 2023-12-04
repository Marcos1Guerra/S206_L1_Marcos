Feature: Testando API Pokemon

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno do pokemon capivara
        Given url url 'https://pokeapi.co/api/v2/capivara'
        When method get
        Then status 404

Scenario: Testando retorno do pokemon squirtle
        Given url url 'https://pokeapi.co/api/v2/pokemon/squirtle'
        When method get
        Then status 200

Scenario: Testando retorno squirtle e verificando
        Given url url_base
        And path 'pokemon/squirtle'
        When method get
        Then status 200
        And match response.name == 'squirtle'
        And match response.id == 7
        And match response.height == 5

Scenario: Pegando elementos do array e testando seu tipo 
        Given url url_base
        And path 'berry'
        When method get
        Then status 200
        And match $ == '#[]'
        And match  == '#[20]'
        And match each $ contains {name: '#string', url: '#string'}

Scenario Outline: Criando um novo elemento usando o método POST
        Given url_base
        And path 'item'
        When method posts
        Then status 201
        And match $.id == 21
        And match $.name == '#string'
        And match $.url == '#string'

