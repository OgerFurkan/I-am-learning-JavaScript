//! Önemli Artitmetik Operatorler

//?  ==, === Operatörü

 /*
    === Operatörü : Hem değer hem de veri tipi kontrolü yapar.
    == Operatörü : Sadece değer kontrolü yapar.
 */

//? **= Operatörü

// let a = 10;
// a **= 2; // a = a ** 2; işlemi ile aynıdır.
// console.log(a); // '100' kuvvet alma işlemi yapar.

//! Mantıksal Operatorler

//?    &&, ||, !

//-  && : Ve operatörü
//-  || : Veya operatörü
//-  ! : Değil operatörü

//! Karşılaştırma Operatörleri

//?    <, >, <=, >=, ==, ===, !=, !==

//-     < : Küçüktür
//-     > : Büyüktür
//-     <= : Küçük veya eşittir
//-     >= : Büyük veya eşittir
//-     == : Eşittir
//-     === : Hem değer hem de veri tipi kontrolü yapar.
//-     != : Eşit değil
//-     !== : Hem değer hem de veri tipi kontrolü yapar. || ile kontrol sağlanır.

//! Dialog Boxlar

//?    alert(), confirm(), prompt()

//-     alert() : Uyarı mesajı verir.
//-     confirm() : Kullanıcıya onaylatma işlemi yapar.
//-     prompt() : Kullanıcıdan veri alır.

// alert("Merhaba Dünya"); // Uyarı mesajı verir.
// let result = confirm("Emin misiniz?"); // Onaylama işlemi yapar, kullanıcıya onaylatır ve sonucu result değişkenine atar. Boolean değer döner.
// let name = prompt("Adınızı giriniz"); // Kullanıcıdan veri alır, bu veriyi name değişkenine atar ve daima string olarak alır.


//! Tür Dönüşümleri

//?    Number(), String(), Boolean()

//-     Number() : Veriyi sayıya çevirir.
//-     String() : Veriyi stringe çevirir.
//-     Boolean() : Veriyi booleana çevirir.

//! Örnek Uygulama

//? Benzin İstasyonu

let diesel = 47.31;
let petrol = 46.72;
let lpg = 26.42;
let balance = 1000;

let choose = prompt("Hangi yakıtı almak istersiniz? Bakiyeniz: " + balance + " TL\n1. Dizel\n2. Benzin\n3. LPG");

if (choose == "1") {
    let litre = prompt("Kaç litre dizel almak istersiniz?");
    let total = litre * diesel;
    if (total > balance) {
        alert(`İşlem Başarısız...\nBakiyeniz yetersizdir. Eksik miktar ${total - balance} TL'dir.`);
    } else {
        balance -= total;
        alert(`İşleminiz Başarılı...\nToplam Tutar: ${total.toFixed(2)} TL \nKalan Bakiye: ${balance.toFixed(2)} TL`); //! ${} işareti ile değişkenlerin değerlerini yazdırabiliriz. ` ` arasına yazılır.
        // toFixed(2) : Ondalık kısmı 2 hane olacak şekilde yuvarlarız.
    }
}
else if (choose == "2") {
    let litre = prompt("Kaç litre benzin almak istersiniz?");
    let total = litre * petrol;
    if (total > balance) {
        alert("Bakiyeniz yetersizdir. Eksik miktar:"+(total-=balance)+"TL'dir.");//! Eksik miktarı yazdırma işlemini bu şekilde de yapabiliriz. "+" işareti ile birleştirme yaparız.
    } else {
        balance -= total;
        alert(`İşleminiz Başarılı...\nToplam Tutar: ${total.toFixed(2)} TL\nKalan Bakiye: ${balance.toFixed(2)}TL`);
    }
}
else if(choose="3"){
    let litre = prompt("Kaç litre LPG almak istersiniz?");
    let total= litre * lpg;
    if(total > balance){
        alert(`İşlem Başarısız...\nBakiyeniz yetersizdir. Eksik miktar ${total - balance} TL'dir.`);
    }
    else{
        balance -= total;
        alert(`İşleminiz Başarılı...\nToplam Tutar: ${total.toFixed(2)} TL \nKalan Bakiye: ${balance.toFixed(2)} TL`);
    }
}
else{
    alert("Geçersiz işlem");
}
