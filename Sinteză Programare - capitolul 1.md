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

```python
>>> from math import sqrt ←--------  exemplu import 
>>> sqrt(256)  
16.0  
>>> from operator import add, sub, mul ←------- exemplu import  
>>> add(14, 28)  
42  
>>> sub(100, mul(7, add(8, 4)))  
16 
```

### 1.2.4 Names and the Enviroment

Atunci când dăm un nume unei valori, spunem că am atașat (binds) valoarea de nume
```python
>>> radius = 10 ←------ Dăm numelui  radius  valoarea 10  
>>> radius  
10 ←------  radius  are valoarea 10  
>>> 2 * radius ←------ în calcule radius poate fi folosit în loc de  10  
20
```
**„=”** se numește *assignment* operator în Python (și în multe alte limbaje). *Asignment* este un mijloc simplu de *abstractizare*.

**`Environment`**  - este un fel de memorie în care `interpretorul` ține valorile cu numele lor. Numele pot fi atașate de funcții (adică de un set de instrucțiuni), însă numele funcțiilor poate fi schimbat în același mod în care atribuim valori:
```python
>>> max ←------ max este o funcție built-in  
<built-in function max>
>>> f = max ←------  Numim f funcția max

>>> f  
<built-in function max> ←------ Python recunoaște f ca funcție  
>>> f(2, 3, 4)  
4
```

După ce se asignează (atribuie) *max* la 5, numele *max* nu mai este atașat (bind) de o funcție, și încercarea de a apela *max* (2, 3, 4) va da eroare.
```python
>>> max = 5  
>>> max  
5
```
În cazul asignării multiple, toate expresiile din dreapta **„=”** sunt evaluate înainte ca orice nume din stânga să fie atașate (bind) de aceste valori. Ca rezultat al acestei reguli, schimbarea valorilor atașate (binding values) la două nume poate fi efectuată într-o singur statement.
```python
>>> x, y = 3, 4.5  
>>> x  
3  
>>> y  
4,5  
  
>>> y, x = x, y  
>>> x  
4.5  
>>> y  
3
```
### 1.2.5 Evaluating Nested Expresions

Expresiile nested sunt expresiile cuibărite în alte expresii.

Evaluarea procedurii pentru call expression:

1.  Evaluează operatorul și subexpression (sub-expresia) operandului
    
2.  Aplica funcția, care este valoarea subexpression operatorului, la `argumente`, care sunt valorile subexpresiilor operandului
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTU2ODgyODI5LDE1MjU5Njg0NjMsLTIwOD
g3NDY2MTJdfQ==
-->