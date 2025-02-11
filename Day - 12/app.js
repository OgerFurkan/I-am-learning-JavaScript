//! AJAX NEDİR?

/*
AJAX (Asynchronous JavaScript and XML) web sayfalarının arka planda sunucu ile
haberleşmesini sağlayan bir tekniktir.
Bu teknik sayesinde sayfa yenilenmeden sunucu ile veri alışverişi yapılabilir.
Bu sayede sayfa daha hızlı ve daha dinamik hale gelir.

Ancak AJAX artik kullanilmamaktadir. Bunun yerine fetch API kullanilmaktadir.

REST API NEDİR?

REST (Representational State Transfer) API, web servislerinin kullanımını kolaylaştıran bir yapıdır.
Bu yapı, web servislerine HTTP protokolü üzerinden erişim sağlar.
REST API, sunucudan veri almak ve sunucuya veri göndermek için kullanılır.
REST API, JSON ve XML formatlarını destekler.
REST API, CRUD (Create, Read, Update, Delete) işlemlerini destekler.
REST API, HTTP metotlarını kullanarak çalışır.
GET: Veri almak için kullanılır. (Read)
POST: Veri göndermek için kullanılır. (Create)
PUT: Var olan veriyi güncellemek için kullanılır. (Update)
DELETE: Var olan veriyi silmek için kullanılır. (Delete)
*/

//? AJAX İLE VERİ ÇEKME

//? XMLHttpRequest Objesi

// AJAX ile veri çekmek için XMLHttpRequest objesini kullanabiliriz.
// Bu obje sayesinde sunucu ile veri alışverişi yapabiliriz.
// XMLHttpRequest objesini kullanarak veri çekme işlemini senkron veya asenkron olarak yapabiliriz.
// Ancak genellikle asenkron olarak kullanılır.

//? XMLHttpRequest Objesi Metodları

// 1. new XMLHttpRequest() : XMLHttpRequest objesi oluşturur.
// 2. open(method, url, async) : Sunucuya bağlantı açar.
// 3. send() : Sunucuya istek gönderir.
// 4. onreadystatechange : İstek durumunu takip eder.
// 5. responseText : Sunucudan gelen veriyi tutar.

//? Örnek

function getData(url) {
    const xhr = new XMLHttpRequest(); // Bunu fonksiyonun dışına yazarsak, her istekte ayni data gelir.
    xhr.addEventListener("readystatechange", () => { // 3- İstek durumunu takip eder.
        if(xhr.readyState === 4 && xhr.status === 200) { // 4- İstek tamamlandığında ve durum kodu 200 olduğunda
            console.log(JSON.parse(xhr.responseText)); // 5- Sunucudan gelen veriyi konsola yazdırır.
            console.log("İşlem tamamlandı.");
        }
    });

    xhr.open("GET", url, true); // 1- Sunucuya bağlantı açar.
    xhr.send(); //2- Sunucuya istek gönderir.
}

getData("https://jsonplaceholder.typicode.com/comments?postId=1");
// Bu örnekte, JSONPlaceholder sitesinden postId'si 1 olan yorumları çektik.

getData("https://jsonplaceholder.typicode.com/posts");
// Bu örnekte, JSONPlaceholder sitesinden tüm postları çektik.

//! Promise Giriş

// Promise, JavaScript'te asenkron işlemleri daha iyi yönetebilmek için kullanılan bir yapıdır.
// Promise, bir işlemin başarılı olup olmadığını belirten bir yapıdır.
// Promise, 3 durumda (state) olabilir: pending, fulfilled, rejected.
//* Pending: İşlem henüz tamamlanmamıştır.
//* Fulfilled (Resolved): İşlem başarılı bir şekilde tamamlanmıştır.
//* Rejected: İşlem başarısız bir şekilde tamamlanmıştır.

//? Promise Oluşturma

// Promise, new Promise() yapısı ile oluşturulur.
// Promise yapısının içinde resolve ve reject parametreleri bulunur.
//* resolve, işlem başarılı olduğunda çalışan fonksiyondur.
//* reject, işlem başarısız olduğunda çalışan fonksiyondur.

//? Örnek

const promise = new Promise((resolve, reject) => {
    const isSuccessful = true;

    if(isSuccessful) {
        resolve("Promise - İşlem başarılı.");
    } else {
        reject("Promise - İşlem başarısız.");
    }
});

//? Promise Kullanma
// Promise yapısı asenkron işlemleri daha iyi yönetebilmek için kullanılır.
// Promise yapısını kullanmak için then(), catch() ve finally() metodları kullanılır.
//* then(), işlem başarılı olduğunda çalışır.
//* catch(), işlem başarısız olduğunda çalışır.
//* finally(), işlem başarılı veya başarısız olsa da çalışır.

promise
    .then((response)=> {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    }) 
    .finally(()=>{ 
        console.log("Promise - Her ihtimale karşı çalıştı.");
    });

// Bu örnekte, promise değişkeni oluşturuldu ve içinde bir işlem yapıldı.

//! Promise ve xmlhttprequest
//? Örnek

function getData(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); 
        xhr.addEventListener("readystatechange", () => {
            if(xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText)); 
            } else if(xhr.readyState === 4) {
                reject("Veri alınamadı.");
            }
        });

        xhr.open("GET", url, true);
        xhr.send();
    });
}

getData("https://jsonplaceholder.typicode.com/users/3")  // Bu örnekte, JSONPlaceholder sitesinden userId'si 3 olan kullanıcıyı çektik.
    .then((response) => {
        getData(`https://jsonplaceholder.typicode.com/posts?userId=${response.id}`) // Bu örnekte, JSONPlaceholder sitesinden userId'si 3 olan kullanıcının postlarını çektik.
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    })
    .catch((error) => {
        console.error(error); // Veri alınamadığında çalışır.
    }); 
// Bu örnekte, getData fonksiyonu oluşturuldu ve içinde bir işlem yapıldı.

//? Promise.all() Metodu

// Promise.all() metodu, birden fazla promise yapılarının state'lerini kontrol etmek için kullanılır.
// Tüm promise yapıları başarılı olduğunda çalışır. resolve() fonksiyonu çalışır.
// En az bir promise yapısı başarısız olduğunda çalışmaz. reject() fonksiyonu çalışır.

//? Örnek

const promise1 = new Promise((resolve, reject) => {
    resolve("Promise 1 - İşlem başarılı.");
});

const promise2 = new Promise((resolve, reject) => {
    resolve("Promise 2 - İşlem başarılı.");
});

const promise3 = new Promise((resolve, reject) => {
    resolve("Promise 3 - İşlem başarılı.");
});

Promise.all([promise1, promise2, promise3])
    .then((response) => {  // Tüm promise'ler başarılı olduğunda çalışır ve response bütün promise'leri içeren bir dizi olur.
        console.log(response);  // Çıktı: ["Promise 1 - İşlem başarılı.", "Promise 2 - İşlem başarılı.", "Promise 3 - İşlem başarılı."]
    })
    .catch((error) => { // En az bir promise başarısız olduğunda çalışır.
        console.error(error); 
    });








