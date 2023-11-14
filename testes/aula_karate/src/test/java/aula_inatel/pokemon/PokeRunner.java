package aula_inatel.pokemon;

import com.intuit.karate.junit5.Karate;

class UsersRunner {
    
    @Karate.Test
    Karate testePokemon() {
        return Karate.run("pokemon").relativeTo(getClass());
    }    

}
