# 3. Objectes

## 3.1. Instanciació d'un objecte (l'operador new)

Quan creem una classe definim un nou tipus de dades que pot utilitzar-se per a instanciar (crear) objectes d'eixa classe. La instanciació es fa de la següent manera:

- En primer lloc, cal declarar una variable de la mena de la classe.
- En segon lloc, es necessitarà una còpia física de l'objecte i assignar-la a aqueixa variable. Això es fa utilitzant l'operador `new` que assigna dinàmicament (és a dir, durant temps d'execució) memòria a un objecte i retorna una referència. Aquesta referència s'emmagatzema en una variable.

Per exemple, suposant que ja hem creat la classe Poal:

::: tabs
== Java

```java
Poal p1; // Crea una variable referència anomenada p1 de tipus Poal 
p1 = new Poal(); // Crea un objecte Poal i l'assigna a p1
```

:::

També pot fer-se tot en una sola línia de codi:

::: tabs
== Java

```java
Poal p1 = new Poal();
```

:::

## 3.2. Assignació de variables de referència a objectes

Les variables de referència a objectes permeten accedir a l'objecte (són una referència a l'objecte, no l'objecte). Per això, actuen de manera diferent al que caldria esperar quan té lloc una assignació. Per exemple, què fa el següent fragment de codi?

::: tabs
== Java

```java
Poal p1 = new Poal(); 
Poal p2 = p1;
```

:::

Podríem pensar que a p2 se li assigna una còpia de l'objecte p1, però no és així. El que succeeix és que la referència p1 es copia en p2, per la qual cosa p2 permetrà accedir al mateix objecte referenciat per p1. Per tant qualsevol canvi que es faça a l'objecte referenciat a través de p2 afectarà l'objecte al qual referencia p1.

## 3.3. Recolꞏlector de fem

A Java hi ha un recol·lector de fem (garbage collector) que s'encarrega de gestionar els objectes que es deixen d'usar i d'eliminar-los de memòria. Aquest procés és automàtic i impredictible i treballa en un fil (thread) de baixa prioritat. En general aqueix procés de recol·lecció de fem, treballa quan detecta que un objecte fa massa temps que no s'utilitza en un programa. Aquesta eliminació depén de la màquina virtual de Java, en quasi totes la recol·lecció es realitza periòdicament en un determinat lapse de temps.
