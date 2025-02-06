//! Session Storage
// Session storage: Bu depolama alanı, tarayıcı sekmesi açık olduğu sürece verileri saklar. Tarayıcı sekmesi kapatıldığında veriler silinir.

//? Değer Ekleme
sessionStorage.setItem("1", "Furkan"); // Key ve Value değerleri alır. İkisi de int girilse bile string olarak alır.
sessionStorage.setItem("2", "Sıla"); 
sessionStorage.setItem("3", "Hulusi");
let names = ["Furkan", "Sıla", "Hulusi"];
sessionStorage.setItem("names", JSON.stringify(names)); // Array olarak ekleme yapmak için JSON.stringify() kullanılır. Aksi halde string olarak ekler.
console.log(JSON.parse(sessionStorage.getItem("names"))); // Array olarak almak için JSON.parse() kullanılır.

//? Değer Silme
sessionStorage.removeItem("3"); // Key değeri alır.
//*sessionStorage.clear(); // Tüm verileri siler.

//? Değer Alma
const value = sessionStorage.getItem("1"); // Key değeri alır.
console.log(value); // Furkan yazdırır. Dönen değer string olarak döner. Eğer key değeri yoksa null döner.

//? Tüm Değerleri Alma
for (let i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.getItem(sessionStorage.key(i)));
}

//! Local Storage
// Local storage: Bu depolama alanı, verileri tarayıcı kapatılsa bile saklar. Veriler elle silinmediği sürece silinmez.

//? Değer Ekleme
localStorage.setItem("1", "Furkan"); // Key ve Value değerleri alır. İkisi de int girilse bile string olarak alır.
localStorage.setItem("2", "Sıla");
localStorage.setItem("3", "Hulusi");
// Yukaridaki names
localStorage.setItem("names", JSON.stringify(names)); // Array olarak ekleme yapmak için JSON.stringify() kullanılır. Aksi halde string olarak ekler.
console.log(JSON.parse(localStorage.getItem("names"))); // Array olarak almak için JSON.parse() kullanılır.

//? Değer Silme
localStorage.removeItem("3"); // Key değeri alır.

//? Değer Alma
const value2 = localStorage.getItem("1"); // Key değeri alır.
console.log(value2); // Furkan yazdırır. Dönen değer string olarak döner. Eğer key değeri yoksa null döner.

//? Tüm Değerleri Alma
for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(localStorage.key(i)));
}

//? Tüm Değerleri Silme
//*localStorage.clear(); // Tüm verileri siler.

//? Local Storage ve Session Storage Arasındaki Farklar
// 1. Local storage: Tarayıcı kapatılsa bile verileri saklar. Session storage: Tarayıcı kapatıldığında veriler silinir.
// 2. Local storage: 5 MB'a kadar veri saklayabilir. Session storage: 5 MB'a kadar veri saklayabilir.
// 3. Local storage: Tüm sekmelerde aynı verilere erişilebilir. Session storage: Sadece açık olan sekmede erişilebilir.










