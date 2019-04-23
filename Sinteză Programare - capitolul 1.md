## Capitolul 1: Building Abstractions with Functions

#### **Statements & Expressions.**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; În general, programele de calculator constau în instrucțiuni și anume:
* calculează o anumită valoare;
* realizează o acțiune.
**Statements** - descriu acțiuni;
**Expressions** - descriu calcule;
#### Functions.
Funcțiile descriu regulile de manipulare a datelor, încapsulează logica care manipulează datele.
#### Objects (Obiecte)
Un obiect strânge împreună datele și logica de manipulare a datelor într-un mod care gestionează complexitatea celor două.
#### Interprets
Sunt programele care evaluează expresiile, codul și îl interpretează.

### 1.2 ELEMENTS OF PROGRAMING
Fiecare limbaj are trei mecanisme:
1.  **Primitive expresion and statements** *(Expresiii și declarații primitive)*  - cele mai simple linii pe care limbajul le oferă;   
2.  **Means of combination** *(Mijloace de combinare)* - prin care elementele simple sunt combinate;
3.  **Means of abstractions** *(mijloace de abstractizare)* - prin care elementele componente pot fi numite și manipulate ca unități;

Avem de-a face cu două tipuri de elemente:
1.  **Funcții** - reguli de manipulare  
2.  **Date** - lucruri de manipulat
    

Datele sunt lucrurile pe care dorim sa le manipulam într-un anume fel, iar funcțiile sunt regulile pentru aceste manipulări ale datelor.

1.2.1 Expressions

Expresiile primitive: un fel de expresii primitive sunt numerele (Ex: 42)

Expresiile reprezentate prin numere pot fi combinate cu operatori matematici, rezultând expresii compuse, pe care le va interpreta interpretorul.

O expresie descrie un calcul și evaluează o valoare.

  

Call Expresion - cel mai important tip de expresie compusă (compound expresson) este call expression (expresia de apel, expresia care cheamă) care aplică o functie pe niste argumente (variabile).

Anatomia unei call expresion:

### 1.2.1 Expressions

**Expresiile primitive**: un fel de expresii primitive sunt numerele (Ex: 42)

Expresiile reprezentate prin numere pot fi combinate cu operatori matematici, rezultând expresii compuse, pe care le va interpreta interpretorul.

O expresie descrie un calcul și evaluează o valoare.

**Call Expresion** - cel mai important tip de expresie compusă (compound expresson) este **call expression** (expresia de apel, expresia care cheamă) care aplică o functie pe niste argumente (variabile).

Anatomia unei **call expresion:**

![](https://lh6.googleusercontent.com/VIjdU8MEw1rxtS-K_j6AjSem79y0u5qvqPxSrwGiqY2CMpiueHfw2tCND1RHfkERxZNcXqqc3C51LiAtKimYDFPEwFItCdFpVl2TL_TQZT1LTfYupVjeCLiBDRNE1Ajla0VpZA4E)

Atunci când această expresie este evaluată, spunem că funcția *max* este apelată cu argumentele 7.5 și 9.5 și returnează o valoare de 9.5 (valoarea maximă).

**Operator** - ne specifică funcția (e numele funcției pe care o apelăm);

**Operand** - sunt valorile cu care se operează funcția (`argumente`);

**Operator + operand** = expresie;

### 1.2.3 Importing Library Functions

În limbajul de programare Python avem predefinite multe funcții pentru numere. Dar ele nu sunt inserate `by default`, ci trebuie `importate` ca în exemplele de mai jos:

```
>>> from math import sqrt ←--------  exemplu import 
>>> sqrt(256)  
16.0  
>>> from operator import add, sub, mul ←------- exemplu import  
>>> add(14, 28)  
42  
>>> sub(100, mul(7, add(8, 4)))  
16 
```

Some Markdown text with <span style="color:blue">some *blue* text</span>


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE5OTExODY1NSwxNTI1OTY4NDYzLC0yMD
g4NzQ2NjEyXX0=
-->