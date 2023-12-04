package provaAPI;

import com.intuit.karate.junit5.Karate;

class ProvaRunner {
    
    @Karate.Test
    Karate testeJsonPleaceholder() {
        return Karate.run("prova").relativeTo(getClass());
    }    
}
