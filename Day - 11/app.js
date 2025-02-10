//! Asenkron Programlama
// Asenkron programlama, programın bir işlemi gerçekleştirirken diğer işlemleri bloklamamasıdır.
// JavaScript, asenkron programlama yapısına sahip bir dildir.
// Timing, Event ve HTTP Request işlemleri asenkron programlama yapısına örnektir.

//? Timing

// setTimeout() fonksiyonu, belirli bir süre sonra bir işlemi gerçekleştirmek için kullanılır.

console.log("1. işlem");
setTimeout(() => {
    console.log("2. işlem");
}, 2000);
console.log("3. işlem");

// Çıktı: 1. işlem, 3. işlem, 2. işlem şeklinde olacaktır. Çünkü setTimeout() fonksiyonu 2 saniye sonra çalışacaktır.


//! Callback Fonksiyonlar
// Callback fonksiyonlar, bir fonksiyonun parametre olarak başka bir fonksiyon almasıdır.
// Bu şekilde asenkron işlemleri senkron hale getirebiliriz. Ancak zamandan ve bellekten tasarruf sağlamaz.
// Callback fonksiyonlar, eski bir yöntem olup, modern JavaScript'te yerini Promise ve Async/Await yapısına bırakmıştır.

//? Callback Fonksiyonlar ile Asenkron Programlama (Callback Hell)

function getName(callback) {
    setTimeout(() => {
        console.log("İsim alınıyor...");
        let name = "Furkan";
        callback(name); // Adi furkan olani getirdi.
    }, 1000);
}

function getSurname(name, callback) {
    setTimeout(() => {
        console.log("Soyisim alınıyor...");
        let surname = "Öger";
        callback(surname); // Adi furkan olanin soyadi oger olanini getirdi.
    }, 600);
}

function getAge(name, surname, callback) {
    setTimeout(() => {
        console.log("Yaş alınıyor...");
        let age = 24; // Adi furkan olanin soyadi oger olanin yasi 24 olanini getirdi.
        callback(age);
    }, 400);
}

getName((name) => { // getName fonksiyonu çalıştıktan sonra çalışacak olan fonksiyon
    getSurname(name, (surname) => { // getSurname fonksiyonu çalıştıktan sonra çalışacak olan fonksiyon
        getAge(name, surname, (age) => { // getAge fonksiyonu çalıştıktan sonra çalışacak olan fonksiyon
            console.log(`Ad: ${name}, Soyad: ${surname}, Yaş: ${age}`);
        });
    });
});

//* Çıktı: İsim alınıyor..., Soyisim alınıyor..., Yaş alınıyor..., Ad: Furkan, Soyad: Öger, Yaş: 24 şeklinde olacaktır.
// Bu şekilde callback fonksiyonlar ile asenkron işlemleri senkron hale getirebiliriz.
// Aksi takdirde, asenkron işlemler sırasız bir şekilde çalışacaktır ve gerekli olan veriler olmadan işlem yapamayacağız.


//! Örnek
const users = [
    {
        id: 1,
        name: "Furkan",
        post: "1. post"
    },
    {
        id: 1,
        name: "Furkan",
        post: "2. post"
    },
    {
        id: 1,
        name: "Furkan",
        post: "3. post"
    },
    {
        id: 2,
        name: "Sila",
        post: "1. post"
    },
    {
        id: 2,
        name: "Sila",
        post: "2. post"
    },
];

/*
function getUserID(){
    setTimeout(() => {
        console.log("Kullanıcı ID alınıyor...");
        let userID = 1;
        console.log(`Kullanıcı ID: ${userID}`);
    }, 1000);
}

function getPostByUserID(userID){
    setTimeout(() => {
        console.log("Postlar alınıyor...");
        users.forEach(user => {
            if(user.id == userID){
                console.log(user.post);
            }
        });
    }, 500);
}

let userID = getUserID();
getPostByUserID(userID);

Burada hata alırız çünkü getUserID fonksiyonu asenkron bir yapıya sahip ve userID değeri undefined olacaktır.

*/

//! Çözüm
function getUserID(callback) {
    setTimeout(() => {
        console.log("Kullanıcı ID alınıyor...");
        let userID = 1;
        console.log(`Kullanıcı ID: ${userID}`);
        callback(userID);
    }, 1000);
}

function getPostByUserID(userID) {
    setTimeout(() => {
        console.log("Postlar alınıyor...");
        users.forEach(user => {
            if (user.id == userID) {
                console.log(user.post);
            }
        });
    }, 500);
}

getUserID(getPostByUserID); // getUserID içindeki callback fonksiyonuna getPostByUserID fonksiyonunu gönderdik.





