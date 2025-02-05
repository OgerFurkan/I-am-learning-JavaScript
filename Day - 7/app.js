//! Style Özellikleri

//? 1. Renk

// const paragraf = document.querySelector("#paragraf"); // Burda bize paragraf id'sine sahip elementini seçer.
// paragraf.style.color = "red"; // Burda bize paragraf elementinin rengini kırmızı yapar.
// paragraf.style.backgroundColor = "black"; // Burda bize paragraf elementinin arka plan rengini siyah yapar.

//? 2. Font

// paragraf.style.fontSize = "24px"; // Burda bize paragraf elementinin font büyüklüğünü 24px yapar.
// paragraf.style.fontWeight = "bold"; // Burda bize paragraf elementinin fontunu kalın yapar.
// paragraf.style.fontFamily = "Arial"; // Burda bize paragraf elementinin yazı tipini Arial yapar.

//? 3. Yazı Ortalama

// paragraf.style.textAlign = "center"; // Burda bize paragraf elementinin yazısını ortalar.

//? 4. Padding ve Margin

// paragraf.style.padding = "10px"; // Burda bize paragraf elementinin içerisindeki boşluğu 10px yapar.
// paragraf.style.margin = "10px"; // Burda bize paragraf elementinin dışındaki boşluğu 10px yapar.
// para.style.marginTop = "10px"; // Burda bize paragraf elementinin üstündeki boşluğu 10px yapar.

//? 5. Display

// paragraf.style.display = "none"; // Burda bize paragraf elementini gizler.
// paragraf.style.display = "block"; // Burda bize paragraf elementini gösterir.

//? 6. Z-index

// paragraf.style.zIndex = "1"; // Burda bize paragraf elementinin z-index'ini 1 yapar.

//? 7. Height ve Width

// paragraf.style.width = "100px"; // Burda bize paragraf elementinin genişliğini 100px yapar.
// paragraf.style.height = "100px"; // Burda bize paragraf elementinin yüksekliğini 100px yapar.

//? 8. Border

// paragraf.style.borderRadius = "10px"; // Burda bize paragraf elementinin kenar yarıçapını 10px yapar.
// paragraf.style.border = "1px solid black"; // Burda bize paragraf elementinin kenar kalınlığını 1px yapar ve rengini siyah yapar.

//......... Gibi özelliklerle elementlerin stil özelliklerini değiştirebiliriz.
 
//! HTML Elementleri Üzerinde Gezinme

//? Parent'tan Child'a

// const list = document.querySelector("#list"); // Burda bize id'si list olan elementi seçer.
// const ul = Array.from(list.children); // Burda bize list elementinin çocuklarını bir diziye çevirir.
// ul.forEach((li) => { // Burda bize list elementinin çocuklarını döngü ile gezer.
//     console.log(li.textContent);
// });

// const child0 = list.firstElementChild; // Burda bize list elementinin ilk çocuğunu verir.
// const child1 = list.lastElementChild; // Burda bize list elementinin son çocuğunu verir.
// const child2 = list.children[2]; // Burda bize list elementinin 2. çocuğunu verir.

//? Child'tan Parent'a

// const child = document.querySelector(".child"); // Burda bize class'ı child olan elementi seçer.
// const parent = child.parentElement; // Burda bize child elementinin parent elementini verir.
// const grandParent= child.parentElement.parentElement; // Burda bize child elementinin parent elementinin parent elementini verir.

//? Kardeşler Arasında Gezinme

// const child = document.querySelector(".child"); // Burda bize class'ı child olan elementi seçer.
// const nextSibling = child.nextElementSibling; // Burda bize child elementinin bir sonraki kardeşini verir.
// const previousSibling = child.previousElementSibling; // Burda bize child elementinin bir önceki kardeşini verir.
// const childThirdSibling = child.nextElementSibling.nextElementSibling; // Burda bize child elementinin 3. kardeşini verir.
// Eger kardeş yoksa null döner.

//? Element Oluşturma

// const div = document.createElement("div"); // Burda bize div elementi oluşturur.
// div.textContent = "Merhaba"; // Burda bize div elementinin içeriğini belirler.
// div.style.color = "red"; // Burda bize div elementinin rengini kırmızı yapar.
// document.body.appendChild(div); // Burda bize div elementini body elementine ekler.

//? Örnek

                    /*
<li class="list-group-item d-flex justify-content-between">İçerik
<a href="#" class="delete-item">
    <i class="fa fa-remove"></i>
</a>
</li>
                    */

//* const li = document.createElement("li"); // Burda bize li elementi oluşturur.
//* li.className = "list-group-item d-flex justify-content-between"; // Burda bize li elementinin class'larını belirler.
//* li.textContent = "İçerik"; // Burda bize li elementinin içeriğini belirler.

//* const a = document.createElement("a"); // Burda bize a elementi oluşturur.
//* a.href = "#"; // Burda bize a elementinin href'ini belirler.
//* a.className = "delete-item"; // Burda bize a elementinin class'larını belirler.

//* const i = document.createElement("i"); // Burda bize i elementi oluşturur.
//* i.className = "fa fa-remove"; // Burda bize i elementinin class'larını belirler.

//* a.appendChild(i); // Burda bize a elementinin içine i elementini ekler.
//* li.appendChild(a); // Burda bize li elementinin içine a elementini ekler.

//* document.querySelector("#list").appendChild(li); // Burda bize list elementinin içine li elementini ekler.

//! Element Silme

// const list = document.querySelector("#list"); // Burda bize id'si list olan elementi seçer.
// const li = document.querySelector("li"); // Burda bize li elementini seçer.
// li.remove(); // Burda bize li elementini siler.
// list.removeChild(li); // Burda bize list elementinin içindeki li elementini siler.
// list.removeChild(list.childNodes[0]); // Burda bize list elementinin içindeki 0. indexdeki child elementini siler. Parantez içine Node yerine index numarası da yazılabilir.
// list.removeChild(list.children[0]); // Burda bize list elementinin içindeki 0. indexdeki li elementini siler.
// list.removeChild(list.firstElementChild); // Burda bize list elementinin içindeki ilk li elementini siler.

//! Element Değiştirme

// const h1 = document.querySelector("h1"); // Burda bize h1 elementini seçer.

// const h2 = document.createElement("h2"); // Burda bize h2 elementi oluşturur.
// h2.id = "title"; // Burda bize h2 elementinin id'sini belirler.
// h2.textContent = "Furkan Öger"; // Burda bize h2 elementinin içeriğini belirler.
// h2.className = "title"; // Burda bize h2 elementinin class'larını belirler.
// h1.replaceWith(h2); // Burda bize h1 elementini h2 elementi ile değiştirir.


// const parent = document.querySelector("#main"); // Burda bize id'si main olan elementi seçer.

// parent.replaceChild(h2, parent.childNodes[0]); // Burda bize parent elementinin 0. indexdeki child elementini h2 elementi ile değiştirir.
// parent.replaceChild(h2, parent.firstElementChild); // Burda bize parent elementinin ilk child elementini h2 elementi ile değiştirir.
// parent.replaceChild(h2, parent.children[0]); // Burda bize parent elementinin 0. indexdeki child elementini h2 elementi ile değiştirir.
// parent.replaceChild(h2, parent.querySelector("h1")); // Burda bize parent elementinin h1 elementini h2 elementi ile değiştirir.








 











