let sayi1;
let sayi2;
let sayi3;
let sayi4;
let sayi5;
let sayi6;
let buton=document.getElementById("btnButton");

buton.addEventListener("click", ()=>{
    sayi1=Math.floor(Math.random()*100);
    console.log(sayi1);
    document.getElementById("sayi1").innerHTML=sayi1;

    sayi2=Math.floor(Math.random()*100);
    console.log(sayi2);
    document.getElementById("sayi2").innerHTML=sayi2;

    sayi3=Math.floor(Math.random()*100);
    console.log(sayi3);
    document.getElementById("sayi3").innerHTML=sayi3;

    sayi4=Math.floor(Math.random()*100);
    console.log(sayi4);
    document.getElementById("sayi4").innerHTML=sayi4;

    sayi5=Math.floor(Math.random()*100);
    console.log(sayi5);
    document.getElementById("sayi5").innerHTML=sayi5;

    sayi6=Math.floor(Math.random()*100);
    console.log(sayi6);
    document.getElementById("sayi6").innerHTML=sayi6;

    buton.innerHTML="Tekrar Oyna";
})