package Trabalho_API.trabalhoAPI;

import com.intuit.karate.junit5.Karate;

class TrabalhoRunner {
    
    @Karate.Test
    Karate testeTrabalhoAPiKarate() {
        return Karate.run("trabalho").relativeTo(getClass());
    }    
}
