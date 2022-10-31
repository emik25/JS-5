// 1 - Дан массив ['Яблоко', 'груша', 'апельсин'], надо добавить ему в конец ['Alex', 'John', 'Smith'] с помощью push

let myArray = ['Яблоко', 'груша', 'апельсин']

myArray.push('Alex', 'John', 'Smith')

console.log(myArray);

// 2 - Есть массив [1, 2, 3], надо удалить элемент в начале с помощью shift

let myArray2 = [1, 2, 3]

myArray2.shift()

console.log(myArray2);

// 3 - Есть два массива: ['a', 'b', 'c'] и [1, 2, 3], нужно объединить их с помощью concat

let a = ['a', 'b', 'c']

let b = [1, 2, 3]

let c = a.concat(b)
// let c = b.concat(a)

console.log(c);

// 4 - Удалить 'Smith' и вывести его 
let name = ['Alex', 'John', 'Smith'];

console.log( name.pop() ); 

console.log(name);