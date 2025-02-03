//! DOM(Document Object Model) Manüpülasyonu

//? DOM(Document Object Model) bir HTML sayfasını programlama dili ile temsil etmeye yarayan bir standarttır.
//? DOM, bir nesne ağacı olarak temsil eder. Anne ve çocuk ilişkisine benzer bir yapıya sahiptir. Veri yapılarındaki ağaç yapısına benzer.
//? DOM, nesnelere, elementlere erişmek ve onları güncellemek için bir arayüz sağlar.
/*
console.log(document); // Burda bize dökümanı verir. Döküman dediğimiz şey sayfanın kendisidir.
console.log(document.contentType); // Burda bize content type'ı verir. text/html; charset=UTF-8 gibi bir çıktı verir.
console.log(document.location.hostname); // Burda b ze host adını verir.
console.log(document.location.port); // Burda bize port numarasını verir.
console.log(document.URL); // Burda bize URL'yi verir.

console.log(document.title); // Burda bize title'yi verir.
console.log(document.links); // Burda bize linkleri verir. a etiketlerini verir.  HTMLCollection(5) [a, a, a, a, a] gibi bir çıktı verir.
console.log(document.links[0]); // Burda bize 0. indexdeki linki verir.
console.log(document.links.item(0)); // Veya bu şekilde de yazılabilir. Burda bize 0. indexdeki linki verir.
console.log(document.links[0].getAttribute("class")); // Burda bize 0. indexdeki linkin class'ını verir. class yerine href, id, title gibi şeyler de yazılabilir.
console.log(document.links[0].id); // Burda bize 0. indexdeki linkin id'sini verir.
console.log(document.links[0].classList[0]); // Burda bize 0. indexdeki linkin class'ının 0. indexini verir.

console.log(document.forms); // Burda bize form etiketlerini verir. HTMLCollection(1) [form] gibi bir çıktı verir.
console.log(document.forms[0]); // Burda bize 0. indexdeki formu verir.
console.log(document.forms.item(0)); // Veya bu şekilde de yazılabilir. Burda bize 0. indexdeki formu verir.
console.log(document.forms[0].id); // Burda bize 0. indexdeki formun id'sini verir.
console.log(document.forms[0].method); // Burda bize 0. indexdeki formun method'unu verir.
console.log(document.forms[0].children); // Burda bize 0. indexdeki formun çocuklarını verir. HTMLCollection(3) [input, input, button] gibi bir çıktı verir.
*/

//! DOM Seçiciler "Selectors"

//? Class, id, tag ve attribute seçicileri ile DOM üzerindeki elementlere erişebiliriz.

//? ID Seçici (getElementById)
/*
const paragraf = document.getElementById("paragraf"); // getElementById() metodu ile içine yazdığımız değerdeki ID'ye sahip olan elemente erişebiliriz.
console.log(paragraf); // Burda bize paragraf elementini verir.
console.log(paragraf.textContent); // Burda bize paragraf elementinin içeriğini verir.
console.log(paragraf.innerHTML); // Burda bize paragraf elementinin içeriğini verir. Farkı HTML taglarını da işler.
console.log(paragraf.className); // Burda bize paragraf elementinin class'ını verir.
paragraf.classList.forEach((clss) => { // Burda bize paragraf elementinin class'larını verir.
    console.log(clss);
});
const classListesi = paragraf.classList; // Burda bize paragraf elementinin class'larını verir.
console.log(classListesi[2]); // Burda bize paragraf elementinin class'larından 2. indexdeki class'ı verir.
classListesi[0] = "yeniClass"; // Burda bize paragraf elementinin class'larını değiştirir.
*/

//? Class Seçici (getElementsByClassName)
/*
const element = document.getElementsByClassName("nameOfClass"); // getElementsByClassName() metodu ile içine yazdığımız değerdeki class'a sahip olan elementlere erişebiliriz.
console.log(element); // Burda bize class'ı nameOfClass olan elementleri verir.
console.log(element[0]); // Burda bize class'ı nameOfClass olan elementlerin 0. indexdeki elementini verir.
console.log(element[0].textContent); // Burda bize class'ı nameOfClass olan elementlerin 0. indexdeki elementin içeriğini verir.
console.log(element[0].innerHTML); // Burda bize class'ı nameOfClass olan elementlerin 0. indexdeki elementin içeriğini verir.
console.log(element[0].className); // Burda bize class'ı nameOfClass olan elementlerin 0. indexdeki elementin class'ını verir.
element.forEach((el) => { // Burda bize class'ı nameOfClass olan elementlerin içeriğini verir.
    console.log(el.textContent);
}
*/

//? Tag Seçici (getElementsByTagName)
/*
const forms = document.getElementsByTagName("form"); // getElementsByTagName() metodu ile içine yazdığımız değerdeki tag'a sahip olan elementlere erişebiliriz.
console.log(forms); // Burda bize form etiketlerini verir.
console.log(forms[0]); // Burda bize form etiketlerinin 0. indexdeki elementini verir.
console.log(forms[0].textContent); // Burda bize form etiketlerinin 0. indexdeki elementin içeriğini verir.
console.log(forms[0].innerHTML); // Burda bize form etiketlerinin 0. indexdeki elementin içeriğini verir.
console.log(forms[0].className); // Burda bize form etiketlerinin 0. indexdeki elementin class'ını verir.
forms.forEach((form) => { // Burda bize form etiketlerinin içeriğini verir.
    console.log(form.textContent);
});
*/

//? Query Selector (querySelector) ve Query Selector All (querySelectorAll)
/*

//* ID Seçici
const ids = document.querySelector("#idName"); // querySelector() metodu ile içine yazdığımız değerdeki ID'ye sahip olan elemente erişebiliriz.

//* Class Seçici
const cls = document.querySelector(".className"); // querySelector() metodu ile class'ı className olan elemente erişebiliriz. Ancak bu metot sadece ilk bulduğu elementi seçer.
const classes = document.querySelectorAll(".className"); // querySelectorAll() metodu ile class'ı className olan tüm elementlere erişebiliriz.
const element1 = document.querySelectorAll(".className")[2]; // querySelectorAll() metodu ile class'ı className olan tüm elementlerin 2. indexdeki elementine erişebiliriz.
const element2 = document.querySelectorAll(".className")[document.querySelectorAll(".className").length - 1]; // querySelectorAll() metodu ile class'ı className olan tüm elementlerin sonuncu elementine erişebiliriz.
const element3 = documnent.querySelectorAll("li: last-child"); // querySelectorAll() metodu ile son çocuk olan li elementine erişebiliriz.
const element4 = document.querySelectorAll("li: nth-child(2)"); // querySelectorAll() metodu ile 2. çocuk olan li elementine erişebiliriz.
const element5 = document.querySelectorAll("li: nth-child(odd)"); // querySelectorAll() metodu ile tek sıradaki li elementine erişebiliriz.
const element6 = document.querySelectorAll("li: nth-child(even)"); // querySelectorAll() metodu ile çift sıradaki li elementine erişebiliriz.
document.querySelectorAll("li: nth-child(even)".forEach(function (element) {
    element.style.background = "lightgray"; // Burda bize çift sıradaki li elementlerinin arka plan rengini değiştirir.
});

//* Tag Seçici
const paragraphs = document.querySelectorAll("p"); // querySelectorAll() metodu ile tüm p etiketlerine erişebiliriz.
paragraphs.forEach((paragraph) => {
    console.log(paragraph.textContent); // Burda bize p etiketlerinin içeriğini verir.
});
const divs = document.querySelectorAll("div"); // querySelectorAll() metodu ile tüm div etiketlerine erişebiliriz.
divs.forEach((div) => {
    console.log(div.textContent); // Burda bize div etiketlerinin içeriğini verir.
});
*/












