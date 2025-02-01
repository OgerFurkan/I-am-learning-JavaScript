//! String Methodları
let name = "Furkan Öger - Intern Frontend Developer";

//? CharAt
console.log(name.charAt(0)); // F -> İndex numarasını alır ve o indexteki karakteri döndürür.
 
//? CharCodeAt
console.log(name.charCodeAt(0)); // 70 -> İndex numarasını alır ve o indexteki karakterin Unicode değerini döndürür.

//? Concat
console.log(name.concat(" ", "- Sivas")); // Furkan Öger - Intern Frontend Developer - Sivas -> İki stringi birleştirir.

//? EndsWith 
console.log(name.endsWith("r")); // true -> Stringin sonunda belirtilen karakter veya karakterler var mı yok mu kontrol eder.

//? StartsWith
console.log(name.startsWith("F")); // true -> Stringin başında belirtilen karakter veya karakterler var mı yok mu kontrol eder.

//? Includes
console.log(name.includes("Öger")); // true -> Stringin içinde belirtilen karakter var mı yok mu kontrol eder.

//? IndexOf
console.log(name.indexOf("Öger")); // 7 -> Stringin içinde belirtilen karakterin ilk index numarasını döndürür.

//? LastIndexOf
console.log(name.lastIndexOf("e")); // 31 -> Stringin içinde belirtilen karakterin son yer aldığı index numarasını döndürür.

//? toLowerCase
console.log(name.toLowerCase()); // furkan öger - intern frontend developer -> Stringi küçük harfe çevirir.

//? toUpperCase
console.log(name.toUpperCase()); // FURKAN ÖGER - INTERN FRONTEND DEVELOPER -> Stringi büyük harfe çevirir.

//? Trim
console.log(name.trim()); // Furkan Öger - Intern Frontend Developer -> Stringin başındaki ve sonundaki boşlukları siler.

//? Slice
console.log(name.slice(0, 6)); // Furkan -> İlk parametre başlangıç indexi, ikinci parametre ise bitiş indexi (bitiş indexi dahil değil) alır ve o aralıktaki karakterleri döndürür.

//? Substring
console.log(name.substring(0, 6)); // Furkan -> İlk parametre başlangıç indexi, ikinci parametre ise bitiş indexi alır ve o aralıktaki karakterleri döndürür.

//? Replace
console.log(name.replace("Furkan", "Hulusi")); // Hulusi Öger - Intern Frontend Developer -> İlk parametre değiştirilecek karakteri, ikinci parametre ise yerine yazılacak karakteri alır ve stringi değiştirir.

//? Split
console.log(name.split(" ")); // ["Furkan", "Öger", "-", "Intern", "Frontend", "Developer"] -> Belirtilen karaktere göre stringi parçalar ve bir diziye atar.

//? ValueOf
console.log(name.valueOf()); // Furkan Öger - Intern Frontend Developer -> Stringin değerini döndürür.

//? Length
console.log(name.length); // 35 -> Stringin karakter sayısını döndürür.



//! Math Methodları
//? Math.PI
console.log(Math.PI); // 3.141592653589793 -> Pi sayısını döndürür.

//? Math.abs
console.log(Math.abs(-10)); // 10 -> Sayının mutlak değerini döndürür.

//? Math.ceil
console.log(Math.ceil(5.2)); // 6 -> Sayıyı yukarı yuvarlar.

//? Math.floor
console.log(Math.floor(5.9)); // 5 -> Sayıyı aşağı yuvarlar.

//? Math.round
console.log(Math.round(5.5)); // 6 -> Sayıyı en yakın tam sayıya yuvarlar.

//? Math.max
console.log(Math.max(5, 10, 15, 20)); // 20 -> Verilen sayıların en büyüğünü döndürür.

//? Math.min
console.log(Math.min(5, 10, 15, 20)); // 5 -> Verilen sayıların en küçüğünü döndürür.

//? Math.pow
console.log(Math.pow(2, 3)); // 8 -> İlk parametre taban, ikinci parametre üs olmak üzere üssünü hesaplar.

//? Math.sqrt
console.log(Math.sqrt(16)); // 4 -> Karekökünü alır.

//? Math.random
console.log(Math.random()); // 0.123456789 -> 0 ile 1 arasında rastgele bir sayı döndürür.
console.log(Math.floor(Math.random() * 10)); // 0-10 arasında rastgele bir sayı döndürür.
console.log(Math.floor(Math.random() * 10) + 1); // 1-10 arasında rastgele bir sayı döndürür.


//! Date Methodları
let date = new Date(); // Şu anki tarihi alır. 01.02.2025
let date2 = new Date(2025, 1, 1, 14, 30, 45, 123); // Yıl, Ay, Gün, Saat, Dakika, Saniye, Milisaniye cinsinden tarih oluşturur. 01.02.2025 14:30:45:123
let date3 = new Date("2025-02-01"); // String cinsinden tarihi alır. 01.02.2025


//? getFullYear
console.log(date.getFullYear()); // Tarinin yılını döndürür. 2025

//? getMonth
console.log(date.getMonth()); // Tarinin ayını döndürür. 0 (Ocak) - 11 (Aralık) 

//? getDate
console.log(date.getDate()); // Tarinin gününü döndürür. 1

//? getDay
console.log(date.getDay()); // Tarinin gününü döndürür. Pazar: 0, Pazartesi: 1, Salı: 2, Çarşamba: 3, Perşembe: 4, Cuma: 5, 'Cumartesi: 6'

//? getHours
console.log(date.getHours()); // Tarinin saatini döndürür. 14

//? getMinutes
console.log(date.getMinutes()); // Tarinin dakikasını döndürür. 29

//? getSeconds
console.log(date.getSeconds()); // Tarinin saniyesini döndürür. 59

//? getMilliseconds
console.log(date.getMilliseconds()); // Tarinin milisaniyesini döndürür. 123

//? getTime
console.log(date.getTime()); // Tarinin milisaniye cinsinden zamanını döndürür. 1643701799123

//? setDate
date.setDate(15); // Tarinin gününü değiştirir. 15

//? setMonth
date.setMonth(5); // Tarinin ayını değiştirir. 5

//? setFullYear
date.setFullYear(2023); // Tarinin yılını değiştirir. 2023

//? setHours
date.setHours(15); // Tarinin saatini değiştirir. 15

//? setMinutes
date.setMinutes(45); // Tarinin dakikasını değiştirir. 45

//? setSeconds
date.setSeconds(30); // Tarinin saniyesini değiştirir. 30

//? setMilliseconds
date.setMilliseconds(500); // Tarinin milisaniyesini değiştirir. 500

//? toLocaleDateString
console.log(date.toLocaleDateString()); // 15.06.2023 -> Tarini yerel tarih formatına çevirir.

//? toLocaleTimeString
console.log(date.toLocaleTimeString()); // 15:45:30 -> Tarini yerel saat formatına çevirir.

//? toLocaleString
console.log(date.toLocaleString()); // 15.06.2023 15:45:30 -> Tarini yerel tarih ve saat formatına çevirir.


//! Değer ve Referans Tipleri
let a = 10;
let b = a; 
a = 20;
console.log(a); // 20
console.log(b); // 10 çünkü bir referans değil sadece değer ataması yapıldı. a'nın değeri değiştiği zaman b'nin değeri değişmez.

let dizi = [1, 2, 3, 4, 5];
let dizi2 = dizi;
dizi.push(6);
console.log(dizi); // [1, 2, 3, 4, 5, 6]
console.log(dizi2); // [1, 2, 3, 4, 5, 6] çünkü referans ataması yapıldı. dizi'nin değeri değiştiği zaman dizi2'nin değeri değişir.



















