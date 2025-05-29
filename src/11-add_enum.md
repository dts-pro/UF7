# 1. Tipus enumerat

Un tipus enumerat (`enum`) és una característica de Java que permet definir un conjunt limitat de valors constants. S'utilitza per representar dades fixes que no canvien, com per exemple:

- els dies de la setmana
- els punts cardinals
- els estats d'un procés

Es considera un tipus especial de classe i ajuda a millorar la claredat i la seguretat del codi.

Exemple d'aplicació:

::: tabs
== Java

```java
public enum Dia {
    DILLUNS, DIMARTS, DIMECRES, DIJOUS, DIVENDRES, DISSABTE, DIUMENGE
}
```

:::

En aquest exemple, **Dia** és un tipus enumerat que conté set constants que representen els dies de la setmana.

Els tipus enumerats limiten els valors possibles, evitant errors com passar una cadena o un número invàlid en lloc d'un valor esperat.
