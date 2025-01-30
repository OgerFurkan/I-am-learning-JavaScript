//! Diziler object
//const numbers = [10, 20, 30, 40]; // 4 elemanlı bir dizi
// const numbers2 = new Array(10, 20, 30, 40); // 4 elemanlı bir dizi

//? numbers[0] = 100; // 0. elemanı 100 yapar
//? numbers.push(50); // dizinin sonuna 50 ekler ve dizinin eleman sayisini dönderir.
//? numbers.unshift(5); // dizinin başına 5 ekler ve dizinin eleman sayisini dönderir.
//? numbers.pop(); // dizinin son elemanını siler ve silinen elemanı dönderir.
//? numbers.shift(); // dizinin ilk elemanını siler ve silinen elemanı dönderir.
//? numbers.toString(); // diziyi stringe çevirir ve dönderir.
//? numbers.join(" - "); // diziyi stringe çevirir ve aralarına - koyar ve dönderir.
//? numbers.splice(0, 2, 30); // 1. parametre silinecek elemanın indexi, 2. parametre kaç eleman silineceği, 3. parametre eklenecek eleman
//? numbers.concat(numbers2); // iki diziyi birleştirir ve dönderir.
//? numbers.slice(0, 2); // 1. parametre başlangıç indexi, 2. parametre bitiş indexi (bitiş indexi dahil değil)
//? numbers.indexOf(30); // elemanın indexini dönderir. eğer eleman yoksa -1 dönderir.
//? numbers.includes(30); // elemanın dizide olup olmadığını dönderir. true veya false
//? numbers.split(","); // stringi diziye çevirir ve dönderir ,'e göre ayırır.
//? numbers.reverse(); // diziyi ters çevirir ve dönderir.
//? numbers.sort(); // diziyi sıralar (küçükten büyüğe )

// console.log(numbers); // [100, 20, 30, 40, 50]

//! Dizi İterasyonları
// const numbers = [10, 20, 30, 40];

// numbers.forEach(function (number) { // forEach metodu ile dizinin elemanlarını tek tek döner.
//  console.log(number);
// });

//! Urun Arama Uygulamasi

let product1 = {
    name : "Monster Abra A7 v11.4.1",
    price : 22000,
    brand : "Monster",
}
let product2 = {
    name : "Monster Tulpar T7 v20.1.1",
    price : 25000,
    brand : "Monster",
}
let product3 = {
    name : "Asus Tuf Gaming F15 v10.1.1",
    price : 18000,
    brand : "Asus",
}
let product4 = {
    name : "Lenovo Legion 7 v16.1.1",
    price : 20000,
    brand : "Lenovo",
}
let product5 = {
    name : "HP Victus 16 v13",
    price : 21000,
    brand : "HP",
}
const products = [product1, product2, product3, product4, product5];
let search = prompt("Aramak istediğiniz ürünü giriniz: ");
searchProducts(products, search);

function searchProducts(products, search) {
    products.forEach(function(product){
        if(product.name.toLowerCase().includes(search.toLowerCase())) {
            console.log("--------------------")
            console.log("Urun Adi: ", product.name, "\n Fiyati: ", product.price, "TL\n Markas':", product.brand);
            console.log("--------------------")
        }
    });
}






