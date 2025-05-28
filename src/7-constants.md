# 7. Constants de classe i objecte

Els membres constants es defineixen a Java a través de la paraula reservada final, mentre que els membres de classe es defineixen mitjançant la paraula reservada static. D'aquesta manera, si considerem que els membres són atributs, tenim quatre possibles combinacions a Java per a indicar si un atribut és constant:

- Atributs `static`: prenen valors comuns a tots els objectes existents i potencialment variables. Poden utilitzar-se encara que no existisca cap objecte instanciat.
- Atributs `final`: són valors constants, però potencialment diferents en cadascuna de les instàncies. El seu valor s'inicialitza en la fase de construcció de l'objecte i no poden ser modificats durant el temps de vida d'aquest.
- Atributs `static final`: combinen les característiques de static i final.
- Resta d'atributs (sense static ni final): atributs variables i diferents per a cada object.

>[!WARNING] <strong>ATENCIÓ</strong>
>
>Els **atributs static** de la classe han de ser limitats, ja que poden donar lloc a errors de molt difícil depuració, a més d'anar contra el concepte de la programació orientada a objectes.

Les constants d'objecte es defineixen mitjançant la paraula reservada final. Es tracta d'atributs que prenen el valor en el constructor de l'objecte, un valor que no pot ser modificat en la resta del programa. D'aquesta manera, a cada objecte correspon un atribut d'aqueix tipus, però invariable per a ell. Aquest tipus d'atributs serveix per a identificar cada objecte de manera única (veure exemple 5).
