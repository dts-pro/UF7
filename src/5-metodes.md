# 5. Mètodes

Es diu mètode a una funció d'una classe. La seua sintaxi general és la següent:

```java
tipus nom_del_mètode(llista de paràmetres) {
    // cos del mètode
}
```

On:

- el **tipus** especifica el tipus de dades que retorna el mètode. Pot tractar-se de qualsevol tipus vàlid, incloent els tipus de classes que crea el programador. Si el mètode no retorna un valor, el tipus retornat serà void.
- el **nom** del mètode l'especifica nom_de el_mètode, que pot ser qualsevol identificador vàlid diferent a aquells ja usats per altres elements del programa. 
- la llista **de paràmetres** és una seqüència de parells de tipus i identificador separats per comes. Els paràmetres són variables que reben el valor dels arguments que es passa al mètode quan es diu. Si el mètode no té paràmetres, la llista de paràmetres estarà buida.

Com en qualsevol altra funció, els mètodes retornen un valor amb la sentència return llevat que el tipus retornat es definisca com void:

```java
return valor;
```

Encara que seria perfectament vàlid crear una classe que únicament continga dades, això rarament ocorre. La majoria de les vegades és convenient crear mètodes per a accedir als atributs de la classe.

A més de definir mètodes que proporcionen accés a les dades (s'oculta o abstrau l'estructura interna de les dades) poden definir-se mètodes per a ser utilitzats internament per la classe.
