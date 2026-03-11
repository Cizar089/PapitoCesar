const questions = [
{
text:"LA CAPITAL DE BOLIVIA ES LA PAZ?",
answer:true
},
{
text:"RUSSIA ES EL PAIS MAS GRANDE DEL MUNDO?",
answer:true
}
]

let current = 0
let score = 0

function startGame(){

document.getElementById("inicio").classList.remove("active")
document.getElementById("pregunta").classList.add("active")

showQuestion()

}

function showQuestion(){

document.getElementById("question").innerText =
questions[current].text

}

function answer(user){

if(user === questions[current].answer){

score++
current++

if(current < questions.length){

showQuestion()

}else{

showResult()

}

}else{

alert("Respuesta incorrecta")
menu()

}

}

function showResult(){

document.getElementById("pregunta").classList.remove("active")
document.getElementById("resultado").classList.add("active")

document.getElementById("resultText").innerText =
"RESPUESTAS "+score+"/2  |  PUNTAJE: "+(score*50)

}

function menu(){

current = 0
score = 0

document.getElementById("resultado").classList.remove("active")
document.getElementById("pregunta").classList.remove("active")
document.getElementById("inicio").classList.add("active")

}
