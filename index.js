var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

// Add your functions and code here
var destructivelyAppendKitten = function( array, name){
  array.unshift(name);
  return array;
}
