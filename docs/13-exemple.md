# 3. Exemple

A continuació es mostra un exemple que aplica tan el tipus **enum** com una versió sobreescrita del mètode **toString**.

1. **Tamany.java**

```java
public enum Tamany {
    MITJANA, FAMILIAR
}
```

2. **Tipus.java**

```java
public enum Tipus {
    MARGARIDA, NAPOLITANA, MARINARA, CALZONE
}
```

3. **Estat.java**

```java
public enum Estat {
    ENCOMANADA, SERVIDA
}
```

4. **Pizza.java**

```java
public class Pizza {
    private Tipus tipus;
    private Tamany tamany;
    private Estat estat;

    // Constructor per inicialitzar una pizza
    public Pizza(Tipus tipus, Tamany tamany) {
        this.tipus = tipus;
        this.tamany = tamany;
        this.estat = Estat.ENCOMANADA; // Estat per defecte
    }

    // Sobreescriptura del mètode toString
    @Override
    public String toString() {
        return "Encomanda de pizza del tipus " + this.tipus + 
               ", de tamany " + this.tamany + ", i està " + this.estat + ".";
    }
}
```

5. **Main.java**

```java
public class Main {
    public static void main(String[] args) {
        // Ens fan una primera encomanda
        Pizza pizza1 = new Pizza(Tipus.MARGARIDA, Tamany.MITJANA);

        // Mostrem la informació de la pizza encomanada
        System.out.println(pizza1);
    }
}
```
