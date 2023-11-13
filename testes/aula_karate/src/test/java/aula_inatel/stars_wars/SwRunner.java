package aula_inatel.stars_wars;

import com.intuit.karate.junit5.Karate;

class UsersRunner {
    
    @Karate.Test
    Karate testeSW() {
        return Karate.run("stars_wars").relativeTo(getClass());
    }    

}
