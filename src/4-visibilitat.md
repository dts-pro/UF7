# 4. Tipus d'accés als membres d'una classe (Visibilitat)

Els membres d'una classe (atributs i mètodes, és a dir, les seues variables i funcions) poden definir-se com públics, privats o protegits. És important entendre la diferència:

- **public**: Es pot utilitzar des de qualsevol classe.
- **private**: Només pot utilitzar-ho la pròpia classe.
- **protected**: Pot utilitzar-ho la pròpia classe i també les subclasses heretades (ara com ara no l'utilitzarem, l'herència de classes es veurà en la següent unitat).

Se'n diu **interfície** als membres d'una classe (atributs i mètodes) que són public, perquè són els que permeten interactuar amb la classe des de fora d'ella.

Els principis de la programació orientada a objectes diu que per a mantindre l'encapsulació en els objectes hem d'aplicar l'especificador public a les funcions membre que formen la interfície pública i denegar l'accés a les dades membre usats per aqueixes funcions mitjançant els especificats private.

>[!WARNING] <strong>ATENCIÓ!:</strong>
>
>En un **paquet**, que és un agrupament lògic de classes en un mateix directori, els atributs i els mètodes d'aquestes classes són **públics** per defecte per a la resta de classes existents en el mateix paquet, i **privats** per a qualsevol classe que es trobe fora (llevat que s'especifique el contrari).

Quan un paquet no està definit, es diu que la classe pertany al paquet per defecte, per tant s'aplicarà el qualificador public a la resta de les classes els fitxers de les quals es troben en el mateix directori (veure exemple 3).
