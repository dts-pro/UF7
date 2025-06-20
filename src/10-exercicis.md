# Exercicis

## Exercicis - Nivell bàsic

### Exercici 1

Estàs creant una aplicació que permetrà generar figures geomètriques en dos dimensions a partir de punts. Per a aconseguir-ho, primer que res caldrà crear una classe Punt que ens permeta emmagatzemar les coordenades X i Y.

**a)** Crea la classe Punt amb els atributs necessaris. De moment, seran públics.  
**b)** Instància tres objectes de tipus Punt a la classe principal, y assigna els valors (5,0), (10,10) i (-3,7). Mostra per pantalla les seues coordenades.  

Ara volem crear figures geomètriques senzilles a partir de la classe Punt ja creada. Per exemple, rectangles, els quals es creen a partir de dos punts (en tenen quatre, però només dos són independents).

**c)** Crea una classe Rectangle amb dos atributs Punt públics.  
**d)** Instància un objecte de tipus Rectangle en la classe principal. Pots usar els punts creats en apartats anteriors.  

Fins ara, als atributs els estem assignant valors de la mateixa manera que ho fem amb qualsevol variable. Però es poden inicialitzar al mateix moment d'instanciar un objecte mitjançant el constructor.

**e)** Fes el constructor de les classes Punt i Rectangle, i modifica el programa principal per a usar-los.  
**f)** En la classe principal, mostra per pantalla els seus quatre punts (els dos que té d'atributs i els dos que depenen d'aquests).  
**g)** Mostra per pantalla el perímetre (suma de costats) i l'àrea (ample per alt) de l'objecte de tipus Rectangle creat. Tingues en compte que els costats sempre han de tindre valor positiu.  

L'encapsulament és molt important per evitar accessos indesitjats a la informació de les classes. Per tant, en general, tots els atributs seran privats. I juntament amb l'encapsulament ve la implementació dels *getters* i *setters*.

**h)** Modifica les classes Punt i Rectangle de forma que tots els atributs passen a ser privats, i afig els *getters* i *setters* corresponents. Modifica també la classe principal de forma que use estos mètodes (ja no tindrà accés directe ls seus valors).  

Una classe ben dissenyada deuria incloure mètodes que realitzen operacions amb la informació dels objectes. D'aquesta manera la classe disposarà de funcionalitats útils tant per a nosaltres com per a altres programadors.

**i)** Implementa en la classe Punt les funcionalitats següents:  

- Imprimir per pantalla les coordenades.
- Modificar els valors d'ambdues coordenades al mateix temps.
- Desplaçar el punt la quantitat *d* indicada, és a dir, les noves coordenades del punt serien (d*X, d*Y).
- Retornar la distància entre el propi objecte i un altre objecte que es passa com a paràmetre.

**j)** Implementa en la classe Rectangle les funcionalitats següents:  

- Imprimir la informació del rectangle per pantalla (els quatre punts).
- Retornar el perímetre.
- Retornar l'àrea.

**k)** Prova a usar tots aquests mètodes des del programa principal.  

Els modificadors d'estàtic i de constant són opcionals, poden utilitzar-se tant en atributs com en mètodes i poden combinar-se.

**l)** Declara dos atributs constants de classe que van a servir per a límit de les coordenades. És a dir, els valors de X i Y de qualsevol punt no estarà fora dels valors -100 i 100.  
**m)** Implementa una funcionalitat de classe que permeta generar punts de forma aleatòria (dins dels límits establits).  

Ampliació:

**n)** Crea la classe Triangle, amb els atributs necessaris i alguns mètodes (els equivalents a la classe Rectangle, per exemple). Instància algun objecte de tipus Triangle i prova els seus mètodes des de la classe principal.  

### Exercici 2

Estàs desenvolupant un sistema per gestionar les reserves dels ordinadors d'un laboratori d'informàtica. El laboratori està compost per diversos ordinadors, i cadascun pot ser reservat per un alumne durant una hora concreta. Per això, caldrà definir una sèrie de classes per representar els elements implicats.

**a)** Crea una classe Ordinador amb els atributs següents (de moment, públics): id (un enter que identifica l'ordinador), model (una cadena), ram (quantitat entera en GB).  
**b)** En la classe principal, crea tres ordinadors diferents, amb dades fictícies, i mostra les seues dades per pantalla.  

Ara volem representar una reserva. Cada reserva l'associarem a un alumne, una hora i un ordinador concret.

**c)** Crea una classe Reserva amb tres atributs públics: el nom de l'alumne, la franja horària (una cadena com "10:00-11:00") i l'ordinador que reserva (de tipus Ordinador).  
**d)** Instancia un objecte de tipus Reserva en la classe principal, fent servir un dels ordinadors creats abans. Mostra la informació per pantalla.  

Ara definirem constructors per facilitar la creació d'objectes.

**e)** Implementa constructors per a les classes Ordinador i Reserva. Modifica el programa principal per a utilitzar-los.  
**f)** Afig un mètode a Reserva que mostre tota la informació d'una reserva per pantalla. Usa'l en el programa principal.  

Ara encapsularem les dades.

**g)** Fes privats tots els atributs de Ordinador i Reserva, i crea els getters i setters corresponents. Modifica el programa principal per accedir a les dades mitjançant aquests mètodes.  

Volem gestionar múltiples ordinadors i múltiples reserves. Utilitzarem estructures més complexes.

**h)** Afig a la classe principal un llistat d'ordinadors disponibles i un mapa de reserves, on la clau serà una cadena amb la franja horària i el valor serà una llista de reserves fetes per a eixa hora.  
**i)** Implementa una funcionalitat que permeta reservar un ordinador per a una hora concreta:

- L'usuari introdueix el seu nom, l'id de l'ordinador i l'hora inicial (per exemple, 10. Després hauràs de crear la cadena "10:00-11:00").
  - Si ja està reservat a eixa hora, es mostra un missatge d'error.
  - Si l'ordinador no existeix (no troba el id) mostra un missatge d'error.
  - Si està lliure, es crea la reserva i s'afegeix al mapa.

**j)** Afig un mètode a la classe principal per a mostrar totes les reserves realitzades en una franja horària concreta.  
**k)** Afig una funcionalitat per a buscar totes les hores reservades per un determinat alumne. Retorna la quantitat.  
**l)** Declara una constant de classe per indicar el nombre màxim de reserves per hora (per exemple, 5). Si ja hi ha aquest nombre de reserves per a una franja concreta, no s'hi poden afegir més.  
**m)** Declara una constant de classe per indicar el nombre màxim de reserves fetes per un mateix alumne (per exemple, 3). Si ja hi ha aquest nombre de reserves per a un mateix alumne, no s'hi poden afegir més.  

En el programa principal prova tots els mètodes.

## Exercicis - Nivell mitjà

### Exercici 3

Estàs desenvolupant una aplicació per a emmagatzemar informació de cançons i àlbums d'una manera pràctica i organitzada. 

**Una cançó contindrà** la informació bàsica d'una peça musical: **un títol, un/a artista i una duració (en segons)**. Com és habitual, hi ha certs límits a l'hora de considerar si una peça musical és vàlida: no es permetran cançons massa curtes ni excessivament llargues. Per tant, **la duració** de cada pista **haurà d'estar entre els 10 i els 600 segons**. Si en algun moment es pretén introduir una duració fora d'aquest marge, l'aplicació haurà d'indicar-ho clarament i tornar a demanar el valor fins que aquest siga adequat. Tampoc es permeten **títols** massa llargs, **amb un màxim de 50 caràcters**.

A més de gestionar cançons individuals, l'aplicació ha de permetre agrupar-les en àlbums. Un àlbum tindrà un nom que el definisca, però al principi es trobarà buit de cançons. L'usuari haurà de poder afegir tantes cançons com desitge, una a una, mitjançant el teclat. No hi haurà cap limitació pel que fa al nombre de cançons per àlbum.

Per tal que la interacció amb l'usuari siga el més útil i informativa possible, caldrà oferir diversos recursos per a consultar dades. L'usuari haurà de poder **visualitzar fàcilment la informació completa d'una cançó** concreta **o d'un àlbum** sencer, amb tots els detalls ben presentats. A més, serà convenient disposar d'un sistema que permeta **localitzar totes les cançons d'un àlbum que tinguen una duració superior a cinc minuts** (és a dir, més de 300 segons), ja que sovint s'utilitzen per a crear recopilatoris especials o seleccions per a oients exigents.

L'usuari també tindrà la possibilitat de **comparar la duració de dues cançons** qualsevol per tal de saber quina d'elles és més llarga, una tasca habitual a l'hora d'ordenar pistes dins d'un àlbum. Altres funcionalitats interessants seran la de **conèixer la durada total de totes les cançons d'un àlbum** determinat, així com quina d'elles és **la més curta i quina és la més extensa**. Per fer l'experiència un poc més dinàmica, el sistema oferirà també la possibilitat de s**eleccionar aleatòriament una de les cançons d'un àlbum i mostrar-ne la informació**, com si es tractara d'una recomanació sorpresa per a escoltar en el moment.

Una vegada desenvolupada l'aplicació, hauràs de crear un escenari de proves on es puguen verificar totes aquestes funcionalitats, assegurant-te que tot el sistema respon correctament i compleix amb els objectius plantejats.

## Exercicis - Nivell avançat

### Exercici 4

Estàs treballant en el departament de nutrició d'un servei de càtering i necessites un sistema per organitzar tots els ingredients i elaborar un receptari de plats. Cada ingredient disposa d'un nom, un valor energètic en calories per unitat i un preu per unitat (amb valors raonables, per exemple entre 1 kcal i 1000 kcal, i entre 0,01€ i 100€; si es prova a introduir un valor fora d'aquest marge, s'haurà de corregir fins a tenir-ne un de vàlid).

A partir d'aquests ingredients, l'equip de cuina vol crear receptes, cadascuna amb un nom identificatiu i una relació d'ingredients amb les quantitats necessàries de cada un (per exemple, 200 grams de quinoa, 50 grams de tomaca). Al principi el receptari estarà buit, però el programa ha de permetre afegir tantes receptes com es vulguen, sempre associant-les a ingredients ja existents.

Per fer que el servei sigui àgil i eficient, el sistema ha de proporcionar diverses eines de consulta i càlcul:

- Mostrar la informació completa d'un ingredient a partir del seu nom.
- Mostrar la llista de totes les receptes disponibles, ordenades alfabèticament pel seu nom.
- Per a una recepta determinada, calcular el total de calories i el cost total.
- Localitzar totes les receptes que tinguen un cost inferior a 3€, per preparar menús econòmics.
- Calcular la mitjana de calories i la mitjana de cost de totes les receptes creades.
- Identificar la recepta més lleugera (menys calories) i la més barata del conjunt.
- Oferir una recomanació aleatòria: triar a l'atzar una recepta i mostrar-ne tots els detalls com a suggeriment de menú.

Per garantir la coherència, caldrà provar totes les funcionalitats del programa. Així asseguraràs que, d'una banda, els nutricionistes tenen tota la informació sempre a mà, i de l'altra, que el servei de càtering pot planificar menús saludables i adaptats a diferents pressupostos de manera ràpida i fiable.

### Exercici 5

Estàs col·laborant en la digitalització d'un petit magatzem logístic d'un centre de distribució. Fins ara, la gestió es feia amb paper, però ara es vol implementar un sistema que permeta emmagatzemar informació sobre els productes, controlar existències i facilitar certes operacions habituals del dia a dia.

Cada producte es identifica per un codi alfanumèric únic (com per exemple "A105" o "X003") que està composat per una lletra i tres números, i es generarà automàticament de forma aleatòria en introduir un nou producte al sistema. Els productes tenen associats, a més, altres tres valors: un nom comercial, una quantitat actual en estoc i el pes per unitat (en grams). Per tal d'evitar errors, s'ha acordat que només s'admetran pesos entre 10 i 10.000 grams. Si l'usuari intenta introduir un valor fora d'aquest rang, el sistema haurà de mostrar un missatge d'error i tornar a demanar-lo.

Els productes es distribueixen per zones del magatzem, i cada zona està identificada amb un nom (com "Zona A", "Zona B", etc.). Cada zona manté un registre dels productes que conté, així com les unitats concretes que hi ha de cada un. Serà com una llista de registres, on cada entrada conté el codi del producte i les unitats emmagatzemades.

Les zones del magatzem pertanyen a un magatzem, amb nom, localització geogràfica i llistat de zones, que s'haurà de generar en el programa només una vegada, a l'inici de tot. Per tant, el magatzem contindrà un llistat de zones, i cada zona contindrà diversos productes. Com el magatzem té un espai limitat, no podrà contindre més d'un cert valor de pes, establit en la legislació en 10.000 kilograms (10.000.000 grams). En cas d'intentar introduir un producte, si es sobrepassa este límit, no s'afegirà i s'indicarà per pantalla.

El sistema haurà de permetre:

- Registrar nous productes amb validació de dades.
- Afegir unitats d'un producte a una zona concreta, indicant codi, zona i nombre d'unitats.
- Traure productes d'una zona.
- Moure productes d'una zona a una altra.
- Mostrar tota la informació d'un producte a partir del seu codi.
- Consultar tot el que hi ha en una zona, amb el total d'unitats per codi i el pes total que ocupen.
- Localitzar totes les unitats de productes pesats que cal transportar amb maquinària (superen els 5 kg per unitat).
- Comparar dos productes diferents per saber quin pesa més per unitat.
- Calcular el pes total en grams que representa tot el contingut d'una zona.
- Calcular el pes total en grams que representa tot el contingut del magatzem sencer.
- Determinar quin és el producte més pesat i el més lleuger entre els que hi ha en una zona.
- Seleccionar aleatòriament un producte d'una zona per a fer un control d'estoc sorpresa.
- Afegir noves zones al magatzem.
- Eliminar una zona, sempre que no tinga ningun producte.

Una vegada implementat el sistema, s'haurà de provar creant un magatzem diversos productes, distribuint-los per zones diferents i comprovant que totes les funcionalitats responen de manera correcta.

<!--

## Apartat A – Classes simples amb atributs

Aquests exercicis estan pensats per a començar creant **classes molt senzilles** (apartat A) **que després aniràs millorant i ampliant** (apartats B, C…) de manera que practiques i aprengues a poc a poc els aspectes fonamentals de la programació orientada a objectes. **El més important és que entengues què està passant**. Si no ho tens clar, "juga" amb el codi, fes proves ("a vore què succeeix si..."), revisa la teoria, etc. Si encara així no ho entens, pregunta en el fòrum (còpia-pega el codi si pertoca).

**En cada exercici deus crear un programa amb dues classes: una classe principal** (pots anomenar-la, per exemple, UD7_ProgramaPunt, segons l'exercici) que només contindrà la funció principal del programa (main), a més d'una altra classe (amb els seus atributs i mètodes) que utilitzaràs des de la classe principal per a fer proves sobre el seu funcionament.

En aquest apartat les classes només contindran atributs (variables) i farem algunes proves senzilles amb elles per a entendre com s'instancien objectes i s'accedeix als seus atributs. Ara com ara, no utilitzes cap modificador d'accés ni cap paraula clau especial (com públic, privat, constant, estàtic...).

## Exercici A1 – Punt

Crea un programa amb una classe anomenada Punt que representarà un punt de dues dimensions en un pla. Sols contindrà dos atributs enters anomenats x i y (coordenades).

En la funció principal del programa, instància 3 objectes de tipus Punt amb les coordenades (5,0), (10,10) i (-3,7). Mostra per pantalla les seues coordenades (utilitza una línia per a cada punt). Modifica totes les coordenades (prova diferents operadors com `=`, `+`, `-`, `+=`, `*=`...) i torna a imprimir-les per pantalla.

## Exercici A2 – Persona

Crea un programa amb una classe anomenada Persona que representarà les dades principals d'una persona: **dni**, **nom**, **cognoms** i **edat**.

En la funció principal, instància dos objectes de la classe Persona. Després, demana per teclat les dades de totes dues persones (guarda-les en els objectes). Finalment, imprimeix dos missatges per pantalla (un per objecte) amb un text de l'estil "Ferrandis Luján Garcia amb DNI… és / no és major d'edat".

## Exercici A3 – Rectangle

Crea un programa amb una classe anomenada Rectangle que representarà un rectangle mitjançant dues coordenades (x1, y1) i (x2, y2) en un pla. Per tant, la classe haurà de tindre quatre atributs enters: **x1**, **y1**, **x2**, **y2**.

En la funció principal del programa, instància 2 objectes Rectangle en (0,0)(5,5) i (7,9)(2,3). Mostra per pantalla les seues coordenades, perímetres (suma de costats) i àrees (ample × alt). Modifica totes les coordenades com consideres i torna a imprimir coordenades, perímetres i àrees.

## Exercici A4 – Article

Crea un programa amb una classe anomenada Article amb els següents atributs: **nom**, **preu** (sense impostos), **IVA** (sempre serà 21) i **quantsQueden** (representa quants queden en el magatzem).

En la funció principal, instància un objecte de la classe Article. Assigna-li valors a tots els seus atributs (els que vulgues) i mostra per pantalla un missatge de l'estil: **"Pijama – Preu: 10 € – Impost: 21% – PVP: 12,1 €"**

(el PVP és el preu de venda al públic, és a dir, el preu amb impostos).

Després, canvia el preu i torna a imprimir el missatge.

## Apartat B – Constructors

**El constructor és el mètode que s'executa quan s'instància un objecte**. Si no està definit, s'executarà un constructor per defecte que crearà l'objecte i inicialitzarà totes les seues variables a zero, però esta no és una bona pràctica. <u>És millor definir nosaltres on constructor que controle què ha de succeir quan es cree l'objecte.</u>

**En aquest apartat tens que modificar els programes de l'apartat anterior** (o fes una còpia del projecte si el prefereixes) i fer els canvis indicats.

## Exercici B1 – Punt

Afig a la classe Punt un constructor amb paràmetres que copie les coordenades passades com a argument als atributs de l'objecte. Així:

::: tabs
== Java

```java
public Punt(int x, int y){
    this.x = x;
    this.y = y;
}
```

*Copiem els valors passats com a argument als atributs de l'objecte. Tingues en compte que <u>**int x** i **int y** són variables locals del mètode, NO són els atributs del objecte</u>. Per a fer referència als atributs de l'objecte cal utilitzar **this**.*

:::

*Fixa't que ja no serà possible usar el constructor per defecte. Ara serà obligatori usar el constructor creat, passant els dos arguments especificats (**x** i **y**). En l'apartat A havies de recordar-te d'assignar valors a **x** i **y** després de crear un punt, la qual cosa no és una bona idea en projectes grans amb centenars d'objectes (és molt fàcil equivocar-se). Ara és impossible equivocar-se perquè l'entorn de desenvolupament no et deixarà. Hem assegurat que tots els punts sempre tindran coordenades.*

Corregeix el mètode principal i utilitza el constructor amb paràmetres per a instanciar els objectes, passant-li com a argument els valors desitjats.

## Exercici B2 – Persona

Afig a Persona el constructor de baix i corregeix el mètode principal per a utilitzar-lo:

::: tabs
== Java

```java
public Persona(String dni, String nom, String cognoms, int edat) {
  this.dni = dni;
  this.nom = nom;
  this.cognoms = cognoms;
  this.edat = edat;
}
```

*Tingues en compte que no és obligatori que els paràmetres del constructor es criden igual que els atributs de l'objecte (en tal cas no seria necessari utilitzar **this**). Podríem fer-ho així:*

```java
public Persona(String id, String nom, String cog, int e) {
  dni = id;
  nom = nom;
  cognoms = cog;
  edat = e;
}
```

*Tampoc és obligatori passar al constructor tots els atributs de la classe. Podriem decidir per exemple que en el nostre programari totes les persones han de tindre nom, cognoms i edat, però no és obligatori el DNI (nounats i xiquets). Aquest constructor també seria vàlid:*

```java
public Persona(String nom, String cog, int e) {
  nom = nom;
  cognoms = cog;
  edat = e;
}
```

:::

**Una classe pot tindre tants constructors com vulgues sempre que tinguen diferent número i/o tipus de paràmetres (perquè no hi haja ambigüitat en com utilitzar).**

## Exercici B3 – Rectangle

En el nostre programari necessitem assegurar-nos que la coordenada (x1,y1) represente la cantonada inferior esquerra i la (x2,y2) la superior dreta del
rectangle, com en el dibuix.

Afig a Rectangle un constructor amb els 4 paràmetres. Inclou una comprovació dels valors. Si són vàlids, guardarà els paràmetres en l'objecte. Si no ho són, mostrarà un missatge de l'estil "ERROR al instanciar Rectangle...". No podrem evitar que s'instancie l'objecte però almenys avisarem per pantalla.

Corregeix el mètode principal per a utilitzar aquest constructor. Hauria de mostrar un missatge d'error.

## Exercici B4 – Article

Afig un constructor amb 4 paràmetres que assigne valors a nom, preu, iva i quantsQueden. Aquest constructor haurà de mostrar un missatge d'error si algun dels valors nom, preu, iva o quantsQueden no són vàlids. Quines condicions creus que podrien determinar si son vàlids o no? Raona-ho i implementa el codi.

Corregeix el mètode principal i prova de crear diversos articles. Introdueix alguns amb valors incorrectes per a comprovar si avisa de l'error.

## Apartat C – Getters i setters

***Un pilar fonamental de la programació orientada a objectes (POO) és l'encapsulament**:

*"Es denomina encapsulament a l'ocultació de l'estat, és a dir, de les dades membre d'un objecte, de manera que només es puga canviar mitjançant les operacions definides per a aqueix objecte.*

Cada objecte està aïllat de l'exterior. L'aïllament protegeix les dades associades a un objecte contra la seua modificació per qui no tinga dret a accedir a ells, eliminant efectes secundaris i interaccions. D'aquesta manera l'usuari de la classe pot obviar la implementació dels mètodes i propietats per a concentrar-se només en com usar-los.

D'altra banda s'evita que l'usuari puga canviar el seu estat de maneres imprevistes i incontrolades." <u>Font: **Wikipedia**</u>

Per això, una pràctica molt habitual en POO consisteix en ocultar tots els atributs (fer-los privats) perquè no es puguen modificar directament des de fora de la classe. En el seu lloc afegirem mètodes getters (get = agafar) i setters (set = fixar) visibles (públics) que permeten llegir i modificar aquests atributs des de fora de la classe. La clau està en el fet que en tractar-se de mètodes podrem incloure el codi necessari per a controlar l'accés als atributs i protegir-les d'usos incorrectes.

En aquest apartat has de modificar els programes de l'apartat anterior (o fes una còpia del projecte si el prefereixes) i fer els canvis indicats.

## Exercici C1 – Punt

<div style="display: flex;">

<div style="flex: 1; padding: 10px;">

Modifica els atributs de Punt perquè siguen privats. Fixa't que des del mètode principal ja no et deixarà utilitzar ni modificar els atributs **x** i **y** dels objectes.

Afegirem els getters per a x i per a y, que retornaran els seus valors. És una forma indirecta de llegir-los.

Afegirem també els setters per a x i per a y, que copiaran el valor passat com a paràmetre als atributs de la classe.

Tant getters com a setters han de ser públics.

Corregeix el mètode principal per a utilitzar els getters i setters. Prova a instanciar diversos objectes, mostrar els seus valors per pantalla, modificar-los, etc.

</div>

<div style="flex: 0.8; padding: 10px;">

::: tabs
== Java

```java
public class Punt {
    private int x;
    private int y;

    public Punt(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public void setX(int x) {
        this.x = x;
    }

    public void setY(int y) {
        this.y = y;
    }
}
```

:::

</div>
</div>

## Exercici C2 – Persona

Aplica l'encapsulament bàsic a la classe Persona: Declara tots els seus atributs com privats i crea tots els getters i setters necessaris (un get i un set per atribut).

Corregeix el mètode principal per a utilitzar els getters i setters. Prova a instanciar diversos objectes, mostrar els seus valors per pantalla, modificar-los, etc.

## Exercici C3 – Rectangle

<div style="display: flex;">

<div style="flex: 1; padding: 10px;">

Aplica l'encapsulament bàsic a la classe Rectangle: Declara tots els seus atributs com privats i crea tots els getters i setters necessaris (un get i un set per atribut).

Recordes la condició explicada en B3? Tindràs que programar els setters de manera que comproven el valor passat com a argument abans de guardar-lo en l'objecte. Si no fora correcte es mostrarà un missatge d'error (i NO es guardarà el valor).

Corregeix el mètode principal per a utilitzar els getters i setters. Prova a instanciar diversos objectes, mostrar els seus valors, modificar-los, etc. Prova diversos valors erronis per a comprovar si funciona.

</div>

<div style="flex: 0.3; padding: 10px;">

![Exercici C3](/uf7/ExerciciC3.jpg)

</div>
</div>

## Exercici C4 – Article

Aplica l'encapsulament bàsic a la classe Article: Declara tots els seus atributs com a privats i crea tots els getters i setters necessaris (un get i un set per atribut).

Programa els setters perquè comproven els valors i els guarden en l'objecte sol si són correctes. En cas contrari mostra un missatge d'error.

## Apartat D – Afegint mètodes útils

Una classe ben dissenyada deuria incloure mètodes que realitzen operacions amb la informació dels objectes. D'aquesta manera la classe disposarà de funcionalitats útils tant per a nosaltres com per a altres programadors. Això és una pràctica habitual i molt recomanable.

::: tabs
== Java
Per exemple, la classe Scanner té mètodes com getInt(), getDouble, getLine(), etc. que algú ha programat i podrem utilitzar quan els necessitem sense haver de programar-ho nosaltres ni preocupar-nos per com funcionen internament. El mateix succeeix amb la classe String (charAt, substring, toCharArray, etc.), la classe Math (random, min, max, abs, etc.), la classe Arrays, etc.

Totes estes són classes que Java incorpora per defecte (n'hi ha milers). Existeixen moltes altres que permeten fer tot tipus de coses com crear interfícies gràfiques amb botons, treballar amb imatges, llegir i escriure en arxius, reproduir música, enviar o rebre dades a través de la xarxa, etc.
:::

En aquesta unitat estem aprenent a dissenyar i programar les nostres pròpies classes, els fonaments de la Programació Orientada a Objectes, necessari en qualsevol projecte programari d'una certa envergadura.

Recorda que els mètodes poden ser privats (només poden utilitzar-se des de dins de la classe) o públics (poden utilitzar-se des de fora, formen part de l'interfície de la classe).

En aquest apartat has de modificar els programes de l'apartat anterior (o fes una còpia del projecte si ho prefereixes) i afegir els mètodes que s'indiquen.

## Exercici D1 – Punt

Afig a la classe Punt els següents mètodes públics:

- imprimeix() // Imprimeix per pantalla les coordenades. Exemple: "(7, -5)"
- setXY(int x, int y) // Modifica totes dues coordenades. És com un setter doble.
- desplaça(int dx, int dy) // Desplaça el punt la quantitat (dx,dy) indicada. Exemple: Si el punt (1,1) es desplaça (2,5) llavors estarà en (3,6).
- distancia(Punt p) // Calcula i retorna la distància entre el propi objecte i un altre objecte (Punt p) que es passa com a paràmetre: distància entre dues coordenades.

Prova d'utilitzar aquests mètodes des del mètode principal per a comprovar el seu funcionament.

## Exercici D2 – Persona

Afig a la classe Persona els següents mètodes públics:

- imprimeix() // Imprimeix la informació de l'objecte: "DNI:… Nom:… etc."
- esMajorEdat() // Retorna true si és major d'edat (false si no).
- esJubilat() // Retorna true si té 65 anys o més (false si no).
- diferenciaEdat(Persona p) // Retorna la diferència d'edat entre el propi objecte i p.

Prova d'utilitzar aquests mètodes des del mètode principal per a comprovar el seu funcionament.

## Exercici D3 – Rectangle

Afig a la classe Rectangle mètodes públics amb les següents funcionalitats:

- Mètode per a imprimir la informació del rectangle per pantalla.
- Mètodes setters dobles i quàdruples: setX1Y1, setX2Y2 i setAll.
- Mètodes getPerimetre i getArea que calculen i retornen el perímetre i àrea de l'objecte.

Prova d'utilitzar aquests mètodes des del mètode principal per a comprovar el seu funcionament.

## Exercici D4 – Article

Afig a la classe Article mètodes públics amb les següents funcionalitats:

- Mètode per a imprimir la informació de l'article per pantalla.
- Mètode getPVP que retorne el preu de venda al públic (PVP) amb iva inclòs.
- Mètode getPVPDescompte que retorne el PVP amb un descompte passat com a argument.
- Mètode vendre que actualitza els atributs de l'objecte després de vendre una quantitat 'x' (si és possible). Retornarà true si ha sigut possible (false en cas contrari).
- Mètode emmagatzema que actualitza els atributs de l'objecte després d'emmagatzemar una quantitat 'x' (si és possible). Retornarà true si ha sigut possible (false en cas contrari).

## Apartat E – Estàtic i constant

Els modificadors d'estàtic i de constant són opcionals, poden utilitzar-se tant en atributs com en mètodes i poden combinar-se tots dos:

- **Estàtic**: L'atribut o mètode pertany a la classe (no a l'objecte). Per això pot utilitzar-se sense instanciar cap objecte. Com el valor s'emmagatzema en la classe, NO pren valors diferents en cada objecte (com sí que succeeix amb els atributs 'normals' no estàtics).  
Per exemple:
  - L'atribut salariMinim d'Empleat (és comú per a tots, pot canviar).  
  És important saber que **des d'un mètode estàtic no es poden utilitzar atributs ni mètodes no estàtics**. Al contrari sí que és possible.
- **Constant**: Un atribut constant no es pot modificar. Pot tindre valors diferents en cada objecte, però ha de fixar-se el seu valor en el constructor.
Per exemple:
  - El DNI de la classe Persona. No pot canviar i cada objecte té el seu.
  - La combinació de estàtic i constant combina totes dues característiques.

## Exercici E1– Punt

Necessitem un mètode que ens permeta crear un objecte Punt amb coordenades aleatòries. Aquesta funcionalitat no depén de cap objecte concret per la qual cosa serà estàtica. Haurà de crear un nou Punt (utilitza el constructor) amb x i y entre -100 i 100, i després retornar-lo.

Prova'l en el mètode principal per a comprovar que funciona. Crea diversos punts aleatoris i imprimeix el seu valor per pantalla.

## Exercici E2 – Persona

El DNI d'una persona no pot variar. Aplica les modificacions necessàries i assegura't que es guarde el seu valor en el constructor. Lleva el mètode setDNI(…), perquè ja no és necessari.

La majoria d'edat als 18 anys és un valor comú a totes les persones i no pot variar. Crea un nou atribut anomenat majoriaEdad que siga estàtic i constant. Hauràs d'inicialitzar-lo a 18 en la declaració. Utilitza-ho en el mètode que comprova si una persona és major d'edat.

Crea un mètode estàtic validarDNI(String dni) que retorne true si dni és vàlid (té 8 números i una lletra). Si no, retornarà false. Utilitza'l en el constructor per a comprovar el dni (si no és vàlid, mostra un missatge d'error i no guarda els valors).

Realitza algunes proves en el mètode principal per a comprovar el funcionament dels canvis realitzats.

## Exercici E3 – Rectangle

Necessitem fer alguns canvis perquè totes les coordenades estiguen entre (0,0) i (100,100). Afig a la classe Rectangle dos atributs anomenats min i max. Aquests valors són comuns a tots els objectes i no poden variar.

Utilitza min i max en el constructor i en els setters per a comprovar els valors (com de costum, si no són correctes mostra un missatge d'error i aplicacions els canvis).

També necessitem un mètode no constructor per a crear rectangles aleatoris. Implementa-ho. Realitza proves en el mètode principal per a comprovar el seu funcionament.

## Exercici E4– Article

A Espanya existeixen tres tipus d'IVA segons la mena de producte:

- L'IVA general (21%): per a la majoria de productes a la venda.
- L'IVA reduït (10%): hostaleria, transport, habitatge, etc.
- L'IVA super reduït (4%): aliments bàsics, llibres, medicaments, etc.

Aquests tres tipus d'IVA no poden variar i a cada article se li aplicarà un dels tres.

Raona quins canvis seria necessari realitzar a la classe Article i implementa'ls.

-->