// PAGE SYSTEM

function nextPage(id){

document.querySelectorAll('.page').forEach(p=>{
p.classList.remove('active');
});

document.getElementById(id).classList.add('active');

document.getElementById("bgm").play();

}


// TEDDY

function hugTeddy(){

const msgs=[
"I love you 💖",
"You are my sunshine ☀️",
"My heart is yours ❤️",
"Always with you 🤍",
"My forever 🫶"
];

let msg=msgs[Math.floor(Math.random()*msgs.length)];

document.getElementById("teddyText").innerText=msg;

}


// QUIZ

const quiz=[
{
q:"Who is the cutest person? 😍",
a:["Saara","Me","Both","Cat"],
c:0
},
{
q:"What is my favorite thing?",
a:["You ❤️","Food","Sleep","Phone"],
c:0
},
{
q:"Who owns my heart?",
a:["Saara 💖","Nobody","World","Friends"],
c:0
}
];

let qi=0;
let score=0;

loadQ();

function loadQ(){

if(qi>=quiz.length){
document.getElementById("question").innerText=
"Score: "+score+"/"+quiz.length+" 💕";
document.getElementById("options").innerHTML="";
return;
}

let q=quiz[qi];

document.getElementById("question").innerText=q.q;

let opt="";

q.a.forEach((o,i)=>{

opt+=`<button onclick="answer(${i})">${o}</button>`;

});

document.getElementById("options").innerHTML=opt;

}

function answer(i){

if(i===quiz[qi].c) score++;

qi++;

loadQ();

}


// END

function end(){
alert("I hope you loved it ❤️");
}