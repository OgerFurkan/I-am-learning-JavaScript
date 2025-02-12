//! ES6 - ECMAScript 6

//! Arrow Function
// const name = () => { // Arrow Function. Bu şekilde fonksiyon tanımlanabilir.
//     console.log('Furkan Öger');
// }

// name(); // Fonksiyonu çağırdık.

// let isim = "Furkan";
// const fullName = (name) => { // Arrow Function. Bu şekilde parametre alabilir.
//     console.log(name + ' Öger');
// }

// fullName(isim); // Fonksiyonu çağırdık. 

//! Desturcturing
// let names = ["Furkan", "Sila", "Hulusi", "Mehmet", "Ayşe", "Fatma"];

// let [name1, name2, name3, name4, name5, name6] = names; 
// // Destructuring. Bu şekilde array içindeki elemanları değişkenlere atayabiliriz.
// console.log(name1, name2, name3, name4, name5, name6);
// // name1 = Furkan, name2 = Sila, name3 = Hulusi, name4 = Mehmet, name5 = Ayşe, name6 = Fatma


// const person = {
//     name: "Furkan",
//     surname: "Öger",
//     age: 24
// }

// let {name, surname, age} = person;  // Eğer ki destructuring yaparken isimler aynı olursa, obje içindeki isimleri kullanabiliriz.
// console.log(name, surname, age);

// let {name: isim, surname: soyisim, age: yas} = person;  // Eğer ki farklı bir isimde değişken tanımlamak istersek, bu şekilde yapabiliriz.
// console.log(isim, soyisim, yas);

//! Spread Operator

// let numbers = [1, 2, 3];
// let numbers2 = [...numbers]; // Spread Operator. Bu şekilde array içindeki elemanları başka bir array içine kopyalayabiliriz.

// const sum= (a, b, c) => {
//     console.log(a + b + c);
// }

// sum(...numbers); // Spread Operator. Bu şekilde fonksiyona parametre olarak array gönderebiliriz. 

// const names = ["Furkan", "Sila", "Hulusi"];
// const names2 = ["Mehmet", "Ayşe", "Fatma", ...names]; // Spread Operator. Bu şekilde array içine array ekleyebiliriz.

// console.log(names2); // Çıktı : ["Mehmet", "Ayşe", "Fatma", "Furkan", "Sila", "Hulusi"] Şeklinde olacaktır.

// const numbers3 = [1, 2, 3, 4, 5, 6, 7];
// let[x,y, ...z] = numbers3; // x ve y değişkenlerine ilk iki elemanı atadık, z arrayine ise geri kalan elemanları atadık.

// //! Rest Operator
// const sum2 = (...args) => { // Rest Operator. Bu şekilde fonksiyona istediğimiz kadar parametre gönderebiliriz.
//     console.log(args);
// }

//! For in - For of
// const isimler = ["Furkan", "Sila", "Hulusi", "Mehmet", "Ayşe", "Fatma"];

// //? For in: Array içindeki indexleri döndürür.

// for (let index in isimler) {
//     console.log(index); // Çıktı: 0, 1, 2, 3, 4, 5
// }
// for (let index in isimler) {
//     console.log(isimler[index]); // Çıktı: Furkan, Sila, Hulusi, Mehmet, Ayşe, Fatma
// }

// //? For of: Array içindeki elemanları döndürür.

// for (let isim of isimler) {
//     console.log(isim); // Çıktı: Furkan, Sila, Hulusi, Mehmet, Ayşe, Fatma
// }
// for (let isim of isimler) {
//     console.log(isimler.indexOf(isim)); // Çıktı: 0, 1, 2, 3, 4, 5
// }

//! Map - İç içe Array

const map1 = new Map(); // Map oluşturduk.

//? Set ile eleman eklemek.

map1.set(1, "Furkan"); // Map içine eleman ekledik.
map1.set(2, "Sila");
map1.set(3, "Hulusi");
map1.set(4, "Mehmet");
map1.set(5, "Ayşe");
map1.set(6, "Fatma");

//* Eğer ki aynı key ile eleman eklersek, son eklenen elemanı alırız.
//* Eğer ki key kısmına referans tipleri eklersek, referans tipleri aynı olmalıdır. Yani [1, 2, 3] yerine adını yazmalıyız.

//? Get ile eleman çağırmak. (Bir deger döndürür.)

console.log(map1.get(1)); // Çıktı: Furkan
console.log(map1.get(2)); // Çıktı: Sila
console.log(map1.get(3)); // Çıktı: Hulusi

//? Size ile eleman sayısını öğrenmek.

console.log(map1.size); // Çıktı: 6

//? Delete ile eleman silmek. (True veya false döndürür.)

console.log(map1.delete(1)); // Çıktı: true
console.log(map1.delete(2)); // Çıktı: true

//? Clear ile map içindeki tüm elemanları silmek.

// map1.clear();

//? Has ile elemanın olup olmadığını kontrol etmek. (True veya false döndürür.)

console.log(map1.has(1)); // Çıktı: false
console.log(map1.has(2)); // Çıktı: false
console.log(map1.has(3)); // Çıktı: true

//? For Each ile map içindeki elemanları döndürmek.
 
map1.forEach((value, key) => {  // forEach ile map içindeki elemanları döndürdük.
    console.log(key, value);
});

//? For Of ile map içindeki elemanları döndürmek.

for (let [key, value] of map1) { // for of ile map içindeki elemanları döndürdük. Destructuring yaptık.
    console.log(key, value);
}

//? Map içindeki elemanları döndürmek.

//* Keys

for (let key of map1.keys()) { // Map içindeki keyleri döndürdük.
    console.log(key);
}

for (let key of map1) { // Map içindeki keyleri döndürdük.
    console.log(map1.get(key));  // Bu şekilde keyden value'yi döndürebiliriz.
}

//* Values 

for (let value of map1.values()) { // Map içindeki valueleri döndürdük.
    console.log(value);
}

//? Map içindeki elemanları döndürmek.

for (let [key, value] of map1.entries()) { // Map içindeki elemanları döndürdük.
    console.log(key, value);
}

//? Map'ten array'e çevirmek.

const array = Array.from(map1); // Map'ten array'e çevirdik.

array.forEach((value)=>{ 
    console.log(value[0]); // Çıktı: 1, 2, 3, 4, 5, 6
    console.log(value[1]); // Çıktı: Furkan, Sila, Hulusi, Mehmet, Ayşe, Fatma
});

//? Array'den map'e çevirmek.

const map2 = new Map(array); // Array'den map'e çevirdik.

//! Set - (Tekrar eden elemanları almaz.)

const set1 = new Set(); // Set oluşturduk.

//? Add ile eleman eklemek.

set1.add(1); // Set içine eleman ekledik.
set1.add(true);
set1.add("Furkan");
set1.add({name: "Furkan", surname: "Öger"});
set1.add([1, 2, 3]);

//? Size ile eleman sayısını öğrenmek.

console.log(set1.size); // Çıktı: 5
//* Tekrar eden eleman eklense bile size artmaz.

//? Delete ile eleman silmek. (True veya false döndürür.)

console.log(set1.delete(1)); // Çıktı: true
console.log(set1.delete(2)); // Çıktı: false
console.log(set1.delete([1, 2, 3])); // Çıktı: false (Referans tipleri aynı olmalıdır.)

//? Clear ile set içindeki tüm elemanları silmek.

// set1.clear();

//? Has ile elemanın olup olmadığını kontrol etmek. (True veya false döndürür.)

console.log(set1.has(1)); // Çıktı: false
console.log(set1.has(true)); // Çıktı: true
console.log(set1.has({name: "Furkan", surname: "Öger"})); // Çıktı: false (Referans tipleri aynı olmalıdır.)

//? For Each ile set içindeki elemanları döndürmek.

set1.forEach((value) => {  // forEach ile set içindeki elemanları döndürdük.
    console.log(value);
});

//? For Of ile set içindeki elemanları döndürmek.

for (let value of set1) { // for of ile set içindeki elemanları döndürdük.
    console.log(value);
}

//? Set'ten array'e çevirmek.

const array2 = Array.from(set1); // Set'ten array'e çevirdik.

//? Array'den set'e çevirmek.

const set2 = new Set(array2); // Array'den set'e çevirdik.

//! Template Literals

const name = "Furkan";
const surname = "Öger";
const age = 24;

console.log(`Benim adım ${name} soyadım ${surname} yaşım ${age}`); 
// Template Literals. Bu şekilde string içinde değişken kullanabiliriz.








