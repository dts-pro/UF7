# 8. Vector d'objectes

Un **vector d'objectes** és una estructura que permet emmagatzemar múltiples referències a instàncies d'una mateixa classe, organitzades de forma seqüencial. Per a utilitzar un vector d'objectes, habitualment cal seguir dos passos:

- **Declarar la referència al vector**, especificant que contindrà elements d'una determinada classe.
- **Crear la instància del vector**, indicant la seua grandària, és a dir, el nombre d'elements (referències) que ha de poder contindre.

És habitual combinar aquests dos passos en una sola sentència per simplicitat i claredat.

:::: warning ATENCIÓ
Quan **es crea el vector, aquest només conté referències buides** (normalment inicialitzades amb un valor nul per defecte). Això vol dir que encara no existeix cap objecte en les posicions del vector.

Per a poder utilitzar els objectes dins de l'vector, **cal crear explícitament cada instància**. Això implica invocar el constructor de la classe per a cada posició de l'vector on es vulga tindre un objecte real.
::::

:::: tabs
== Java

A Java hi ha dues sintaxis possibles per a definir un vector d'objectes:

```java
NomDeLaClasse[] objectes; // Sintaxi 1
NomDeLaClasse objectes[]; // Sintaxi 2
```

D'aquesta manera es crea la referència al vector d'objectes.

Per a crear la instància de l'objecte vector, hem d'especificar la grandària desitjada amb la sintaxi:

```java
objectes = new NomDeLaClasse[n]; // n és el número de referències a objectes
```

Podem resumir aquestes dues sentències en una sola:

```java
// Les dues sintaxis són equivalents
NomDeLaClasse[] objectes = new NomDeLaClasse[n];
NomDeLaClasse objectes[] = new NomDeLaClasse[n];
```

Cal tindre en compte que, quan es crea el vector, el compilador genera una referència per a cadascun dels elements que l'integren, encara que no existisquen encara les instàncies de cap d'ells.

::::
