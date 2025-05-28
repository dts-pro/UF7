# 6. Constructors

Pot resultar una tasca bastant pesada inicialitzar totes les variables d'una classe cada vegada que es crea una instància. Fins i tot quan s'afigen funcions adequades, és més senzill i requerisc realitzar totes les inicialitzacions quan l'objecte es crea per primera vegada. Com el procés d'inicialització és tan comú, Java permet que els objectes s’inicialitzen quan es creen. Aquesta inicialització automàtica es duu a terme mitjançant un constructor.

>[!IMPORTANT] <strong>IMPORTANT!</strong>
>
>Un **constructor** és un mètode especial que **no retorna mai un valor, sempre retorna una referència** a una instància de la classe i és anomenat automàticament en crear un objecte d'una classe, és a dir en usar la instrucció `new`.

Un constructor no és més que un mètode que té el **mateix nom que la classe**. En general, quan es crea una instància d'una classe, no sempre es desitja passar els paràmetres d'inicialització en construir-la, per això existeix un tipus especial de constructors, que són els anomenats constructors per defecte.

Aquests constructors no porten paràmetres associats, i inicialitzen les dades assignant-los valors per defecte.

Quan no es diu a un constructor de forma explícita, Java crea un constructor per defecte i el crida quan es crea un objecte. Aquest constructor per defecte assigna a les variables d'instància un valor inicial igual a zero a les variables numèriques i null a totes les referències a objectes.

Una vegada es definisca un constructor per a la classe es deixa d'utilitzar el constructor per defecte.

>[!WARNING] <strong>ATENCIÓ</strong>
>
>Existeix la referència `this`, que apunta a la instància que anomena al mètode, i sempre està accessible, és utilitzat per les funcions membre per a accedir a les dades de l'objecte.
