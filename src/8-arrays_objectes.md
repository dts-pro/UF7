# 8. Array d’objectes

A Java hi ha dues sintaxis possibles per a definir un array d'objectes:

```java
NomDeLaClasse[] objectes;
NomDeLaClasse objectes[];
```

D'aquesta manera es crea la referència l’array d'objectes.

Per a crear l’instància de l'objecte array, hem d'especificar la grandària desitjada amb la sintaxi:

```java
objectes = new NomDeLaClasse[n]; // n és el número de referències a objectes
```

Podem resumir aquestes dues sentències en una sola:

```java
NomDeLaClasse[] objectes = new NomDeLaClasse[n];
NomDeLaClasse objectes[] = new NomDeLaClasse[n];
```

Cal tindre en compte que, quan es crea l’array, el compilador genera una referència per a cadascun dels elements que l'integren, encara que no existisquen encara les instàncies de cap d'ells.

>[!WARNING] <strong>ATENCIÓ</strong>
>Per a crear els objectes cal **cridar** explícitamente al **constructor per cada element creat**:
>
>```java
>objecte[i] = new NomDeLaClasse()
>```

Veure exemple 6.
