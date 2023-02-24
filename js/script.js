/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o
la stringa corretta da mostrare.
BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/


let listContainerElement = document.getElementById("list");

for (let i = 1; i <= 100; i++) {
  
  // creo un elemento di tag <div>
  let newElement = document.createElement('div');
  
  // attribuisco listContainerElement come GENITORE di newElement
  listContainerElement.append(newElement);

  // cambio il valore interno dentro l'elemento
  newElement.innerHTML = i;

    
  if (i % 3 == 0 && i % 5 == 0) {

    newElement.innerHTML = "FizzBuzz";
    newElement.classList.add("bold");
    newElement.style.backgroundColor = "#f0466f";
    
  } else if (i % 3 == 0) {
      
    newElement.innerHTML = "Fizz";
    newElement.classList.add("bold");
    newElement.style.backgroundColor = "#0cd6a1";

  } else if (i % 5 == 0) {

    newElement.innerHTML = "Buzz";
    newElement.classList.add("bold");
    newElement.style.backgroundColor = "#ffd166";

  } else {

    newElement.style.backgroundColor = "#1389b2";

  }
}
