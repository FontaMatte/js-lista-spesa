const items = [
    'latte',
    'pane',
    'uova',
    'frutta',
    'acqua',
    'carne',
]

const itemsList = document.querySelector('.items');

// Inizializzo il contatore
let j = 0;

while (j < items.length) {
    console.log('wHILE',j, items[j]);

    itemsList.innerHTML += `<li class="item">
                                ${items[j]}
                            </li>`;
    j++;                        

}

/*uso un ciclo for per inserire tutte le immagini in modo dinamico nell' HTML
for ( let i = 0 ; i < items.length ; i++) {
    console.log('FOR',i, items[i]);

itemsList.innerHTML += `<li class="item">
                                ${items[i]}
                            </li>`;

const newLi = document.createElement('li');
newLi.innerHTML += items[i];
itemsList.append(newLi);                            
}
*/
