//! Fetch API
/*
    - Fetch API bir web API'sidir ve HTTP requestleri yapmamıza olanak sağlar.
    - Fetch API, XMLHttpRequest'in yerine kullanılan modern bir API'dir.
    - Fetch API, Promise tabanlıdır.
    - Fetch API, daha güçlü ve esnek bir API'dir.
*/

//! Fetch API Kullanımı

fetch("https://jsonplaceholder.typicode.com/comments?postId=1") // Promise döner
// Burada da Fetch promise döndürdüğü için then ile yakalayabiliriz.
.then((result) => { // Response tipinde promise döner.
    return result.json(); // Burada result.json() da bir promise döner.
})
// Aynı şekilde burada da json promise döndüğü için then ile yakalayabiliriz.
.then((data) => { // Ancak burada artık data döner.
    console.log(data); // Datayı yazdırıyoruz.
})
.catch((err) => { 
    console.error(err); 
});

//* Daha Uygun Kullanım

function getData(url) {
    fetch(url) // Promise döner
    .then((result) => result.json()) // Response tipinde promise döner.
    .then((data) => console.log(data)) // Data döner.
    .catch((err) => console.error(err));
}

getData("https://jsonplaceholder.typicode.com/comments?postId=1"); // PostId'si 1 olan yorumları getirir.

//* POST Request
//? POST Request ile veri gönderme işlemi yapılır.

const post = {
    postId: 1,
    name: "Ahmet",
}

fetch("https://jsonplaceholder.typicode.com/comments", { // Burda ikinci parametre olarak bir obje alır. Bu obje request ayarlarını belirler.
    method: "POST", // Method belirtilir.
    body: JSON.stringify(post), // Gönderilecek veri belirtilir.
    headers: { // Header: Gönderilecek verinin tipi belirtilir. Bu da bir objedir.
        "Content-type": "application/json; charset=UTF-8" 
    }
})
.then((result) => result.json()) // Burda da POST request'in başarılı olup olmadığını öğrenmeye çalışırız.
.then((data) => console.log(data)) // Burda da başarılı olursa dönen datayı yazdırırız.
.catch((err) => console.error(err)); // Burda da hata olursa hatayı yazdırırız.

//! Async Await ile Fetch API Kullanımı
// Then zincirini kullanmak yerine async await kullanarak daha okunabilir bir kod yazabiliriz.


//? Bu fonksiyon fetch ile veri çekme işlemi yapar.
function getData1() {
   fetch("https://jsonplaceholder.typicode.com/users/1") 
    .then((result) => result.json())
    .then((data) =>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`) 
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
            console.log("Veriler getiriliyor...")
        })
    })
}
getData1();

//? Bu fonksiyon async await ile veri çekme işlemi yapar.
async function getData2() {
    const id = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();
    const data = await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)).json();
    console.log(data);
}
// Görüldüğü gibi async await ile daha okunabilir bir kod yazmış olduk.

//? POST Request
// Post request işlemi yapar.
async function postData(url, data) {  // Url ve gönderilecek veriyi alır.
    const response = await fetch(url, { // Url ve request ayarlarını belirler.
        method: "POST", // Method belirtilir.
        body: JSON.stringify(data), // Gönderilecek veri belirtilir.
        headers: { // Header: Gönderilecek verinin tipi belirtilir. Bu da bir objedir.
            "Content-type": "application/json; charset=UTF-8" 
        }
    });
    return await response.json(); // Response promise döner. Bu promise döndüğü için await ile yakalarız.
}
postData("https://jsonplaceholder.typicode.com/posts", {title: "foo", body: "bar", userId: 1})
.then((data) => console.log(data)) // Dönen datayı yazdırır.
.catch((err) => console.error(err));

