# 2. Fonaments d'una classe

Una classe descriu un grup d'objectes que contenen una informació similar (atributs) i un comportament comú (mètodes).

Les definicions comuns (nom de la classe, els noms dels atributs, i els mètodes) s'emmagatzemen una única vegada en cada classe, independentment de quants objectes d'aqueixa classe siguen presents en el sistema.

**Una classe és com un motle**. A partir d'ella es poden crear objectes.

És a dir abans de poder utilitzar un objecte s'ha de definir la classe a la qual pertany, aqueixa definició inclou:

- **Atributs**. Les variables membre de la classe. Poden ser `public` (accessibles des d'una altra classe), `private` (només accessibles per codi de la seua pròpia classe) o `protected` (accessibles per les subclasses).
- **Mètodes**. Les funciones membre de la classe. Són les accions o operacions que pot realitzar la classe. Igual que els atributs poden ser public, private o protected.

La sintaxi d'una classe a Java és la següent:

::: tabs
== Java

```java
[accés] class nomDeClase {
    [accés] [static] tipus atribut1;
    [accés] [static] tipus atribut2;
    //…més atributs...

    [accés] [static] tipus métode1(llistaDeParàmetres) {
        //...codi del mètode...
    }
    [accés] [static] tipus mètode2(llistaDeParàmetres) {
        //...codi del mètode… 
    }
    //… més mètodes...
}
```

:::

Vegem un exemple:

La classe Persona conté dos atributs (variables) per a emmagatzemar dades sobre una persona (nom i edat) a més de diversos mètodes (funcions) que fan coses amb aquestes dades.

::: tabs
== Java

```java
public class Persona {
    String nom; int edat;

    // Estableix el nom de la persona
    void setNom(String n) {
        nom = n;
    }

    // Estableix l'edat de la persona 
    void setEdat(int e) {
        edat = e;
    }

    // Retorna el nom de la persona
    String getNom() {
        return nom;
    }

    // Retorna l'edat de la persona 
    int getEdat() {
        return edat;
    }

    // Mostra el seu nom per pantalla 
    void imprimeNom() {
        System.out.println(nom);
    }

    // Retorna true si és major d'edat, false en cas contrari boolean
    esMajorEdat() {
        return (edat >= 18)
    }
}
```

:::

Cal tindre en compte que **la classe Persona ens servirà per a crear tants objectes Persona com necessitem, cadascun amb el seu nom i edat**. Els mètodes ens permetran manipular les dades de cada objecte. Això s'explica en més detall en el següent apartat.

També és important entendre que cada classe es crea en un arxiu Java diferent (amb el mateix nom de la classe), i s'utilitzen fora de la classe.

Per exemple, podriem tindre un arxiu Persona.java (amb la classe Persona de l'exemple anterior) a més d'un arxiu Programa.java (que només tindrà la funció principal `public static void main` a la qual estem acostumats). **Des de la funció main del Programa podrem crear objectes de tipus Persona a més de qualsevol altre codi que necessitem**. Això es veurà en exemples posteriors.

Els atributs i mètodes d'una classe es diuen membres d'una classe.

Els atributs (variables) d'una classe es diuen variables d'instància perquè cada instància de la classe (és a dir, cada objecte de la classe), conté les seues propies variabes atribut. Per tant, les dades de cada objecte són individuals i independent dels altres objectes.

La paraula opcional `static` serveix per a fer que el mètode o l'atribut a la qual precedeix es puga utilitzar de manera genèrica (més endavant es parlarà de classes genèriques), **els atributs i mètodes així definits es diuen atributs de classe i mètodes de classe**, respectivament.
