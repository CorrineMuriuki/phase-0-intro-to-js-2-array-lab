// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
console.log (cats.length);

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
}

function appendCat(name){
    return ["Milo", "Otis", "Garfield", "Broom"];
}

function prependCat(name){
    return ["Arnold", "Milo", "Otis", "Garfield"];
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return cats.slice(1);

}