//! Events (Olaylar)
function changeFirstTitle(){
    document.querySelectorAll('.card-title')[0].textContent='Başklık - 1'
    console.log("Başlık - 1 değiştirildi...")
}

//! addEventListener() metodu ile bir elemente bir olay ekleyebiliriz.

addEventListener("DOMContentLoaded",function(){ // sayfa yüklendiğinde çalışacak fonksiyon
    console.log("Sayfa Yüklendi...") 
})
window.addEventListener("load",function(){ // sayfa yüklendiğinde çalışacak fonksiyon
    console.log("Tüm kaynaklar yüklendi...")
})

function changeToDoContent(){ 
    document.querySelectorAll('.card-body')[1].children[2].children[0].textContent='Todo - 1 değiştirildi...'
    console.log("Todo - 1 değiştirildi...")
}

const button1 = document.querySelector('#todoButton1');
button1.addEventListener('click',changeToDoContent); // click olayı ile birlikte changeToDoContent fonksiyonu çalıştırılacak.
                                                     // Eğer ki changeToDoContent() şeklinde yazsaydık sayfa yüklendiği anda çalıştırılacaktı.

const button = document.querySelector('#todoButton2');
button.addEventListener("click", getDetails);

function getDetails(e){
    console.log("object:"+e); // objenin içeriğini gösterir.
    console.log("objenin tipi:"+e.type); // objenin tipini gösterir.
    console.log("objenin içeriği:"+e.target); // objenin içeriğini gösterir.
    console.log("objenin id'si:"+e.target.id); // objenin id'sini gösterir.
    console.log("objenin class'ı:"+e.target.className); // objenin class'ını gösterir.
    console.log("objenin textContent'i:"+e.target.textContent); // objenin textContent'ini gösterir.
} 

//! Mouse Events (Olayları)

// click: tıklama
// dblclick: çift tıklama

// mouseup: tıklamayı bırakma
// mousedown: tıklamaya başlama

// mouseover: üstüne gelme ancak içindeki elemanlara da uygulanır!
// mouseout: üstünden çıkma ancak içindeki elemanlara da uygulanır!

// mouseenter: içine girme ama içindeki elemanlara uygulanmaz!
// mouseleave: içinden çıkma ama içindeki elemanlara uygulanmaz!

// mousemove: mouse hareket ettirme

document.addEventListener("mouseup",function(){ // mouse bırakıldığında çalışacak fonksiyon
    console.log("Mouse bırakıldı...")
})
document.addEventListener("mousedown",function(){ // mouse tıklandığında çalışacak fonksiyon
    console.log("Mouse tıklandı...")
})

//! Keyboard Events (Olayları)

// keydown: tuşa basma
// keyup: tuşu bırakma
// keypress: tuşa basılı tutma

document.addEventListener("keydown",function(e){ // klavyeden bir tuşa basıldığında çalışacak fonksiyon
    console.log("Tuşa basıldı:"+e.key) // basılan tuşun değerini gösterir.
    console.log("Tuşa basıldı ASCII:"+e.keyCode) // basılan tuşun kodunu gösterir.
})
document.addEventListener("keyup",function(e){ // klavyeden bir tuşa basıldığında çalışacak fonksiyon
    console.log("Tuş bırakıldı:"+e.key) // basılan tuşun değerini gösterir.
    console.log("Tuş bırakıldı ASCII:"+e.keyCode) // basılan tuşun kodunu gösterir.
})


// Burda input alanına girilen değeri card-title alanına yazdırıyoruz.
const cardTitle = document.querySelectorAll('.card-title')[0];
const input = document.querySelector('#todoName');

input.addEventListener("keyup",getValue);

function getValue(e){
    cardTitle.textContent = e.target.value;
    console.log("Değer:"+e.target.value);
}

//! Input Events (Olayları)

// input: input alanına herhangi bir değer girildiğinde çalışır.
// change: input alanından çıkıldığında çalışır.

document.querySelector('#input').addEventListener('input',function(e){ // input alanına herhangi bir değer girildiğinde çalışacak fonksiyon
    console.log("Input Alanı Değişti:"+e.target.value)
})
document.querySelector('#input').addEventListener('change',function(e){ // input alanından çıkıldığında çalışacak fonksiyon
    console.log("Input Son deger:"+e.target.value)
})

//! Focus Events Olayları

// focus: input alanına tıklandığında çalışır.
// blur: input alanından çıkıldığında çalışır.

// copy: input alanındaki değeri kopyaladığımızda çalışır.
// paste: input alanına yapıştırdığımızda çalışır.
// cut: input alanındaki değeri kestiğimizde çalışır.
// select: input alanındaki değeri seçtiğimizde çalışır.

document.querySelector('#input').addEventListener('focus',function(e){ // input alanına tıklandığında çalışacak fonksiyon
    console.log("Input Alanına Tıklandı...")
})
document.querySelector('#input').addEventListener('blur',function(e){ // input alanından çıkıldığında çalışacak fonksiyon
    console.log("Input Alanından Çıkıldı...")
})


















