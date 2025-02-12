// ! Document write ile yazdırma.
document.write("Hello World <br>");
document.writeln("Furkan Öger");
document.write(58 + "<br>");


// !  console.log ile yazdırma
console.log("OGRFurkan");
console.log(58);
console.error("Bu bir hatadır"); // hata mesajı verir.
console.warn("Bu bir uyarıdır"); // uyarı mesajı verir.
// console.clear(); // console ekranını temizler.


// !  alert ile uyarı verme
// alert("Dikkat"); // uyarı verir ve sayfayı dondurur.


// !  debugger kullanımı.
var aa = 10;
var bb = 20;
var cc = aa + bb;
// debugger; // burada durur ve debug ekranı açılır. Source kısmından değişkenlerin değerlerini görebiliriz.
console.log(cc);

// ! Scope Kavramı
// Global Scope
var name = "Furkan"; // Global Scope olduğu için her yerden erişilebilir.

// Function Scope
function a() {
    var surname = "Öger"; -/* 
    Function Scope olduğu için sadece fonksiyon içerisinden erişilebilir.
    var ile tanımlanan değişkenlerde sadece fonksiyon içerisinden erişilebilir.
    */
    console.log(surname); 
}
a();

// Block Scope
function b() {
    if (true) {
        let city = "İstanbul"; /*
        Block Scope olduğu için sadece blok içerisinden erişilebilir.
        let ve const ile tanımlanan değişkenlerde sadece blok içerisinden erişilebilir.
        */
        console.log(city);
    }
}
b();

// ! Var, Let ve Const
// Var : Global ve Function Scope
// Let ve Const : Block Scope

// Var
var x = 10;
console.log(x);
if (true) {
    var x = 20;
    console.log(x);
}
console.log(x);

// Let
let y = 10;
console.log(y);
if (true) {
    let y = 20;
    console.log(y);
}
console.log(y);

// Const
const z = 10;
console.log(z);
// z = 20; // Hata verir. Çünkü const değiştirilemez.

// Object veri tipidir.
const user = {
    isim: "Furkan",
    soyisim: "Öger"
}
user.isim = "OGRFurkan"; // Değişiklik yapılabilir
console.log(user);

// ! Primitive ve Reference Tip

// Primitive
let prim1 = 10;
let prim2 = prim1;
prim1 = 20;
console.log(prim1, prim2); // 20, 10

// Reference
const ref1 = [1, 2, 3];   // Referans tip olduğu için ref1 ve ref2 aynı adresi tutar.
const ref2 = ref1;       // Yani ref1 değişirse ref2 de değişir.
ref1.push(4); // ref1'e 4 elemanı ekledik.
console.log(ref1, ref2); // [1, 2, 3, 4], [1, 2, 3, 4] 

//function atama ve çalıştırma 
let func= function(){
    console.log("Function"); 
} 
func(); // Function



















