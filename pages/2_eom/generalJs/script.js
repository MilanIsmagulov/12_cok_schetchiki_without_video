let plan=['Ознакомьтесь с правилами безопасной работы.','Ознакомьтесь со схемой включения однофазного счетчика.','Ознакомьтесь со схемой трансформаторного включения трехфазного счетчика (десятипроводная).','Ознакомьтесь со схемой трансформаторного включения трехфазного счетчика (семипроводная). ','Ознакомьтесь со схемой включения трехфазного счетчика через испытательную коробку.','Гальваническое совмещение цепей тока и напряжения посредством установки перемычек на счетчике и трансформаторе тока является особенностью:','Сопоставьте проводники с соответствующими номерами клемм на колодке счетчика.','Изучите структурную схему электронного счетчика электроэнергии.','Укажите названия основных функциональных блоков на структурной схеме электронного счетчика электрической энергии.' ]
let theme='Счетчики электрической энергии. Принципы работы, типы, классы точности'
let numberOfQuestionSum = 9;

document.querySelector('.black_header').firstElementChild.innerHTML=theme
document.querySelector('title').innerHTML=theme
//Добавление заголовка вопроса
let h=document.querySelector('.questions')

h.innerHTML="<div><p><span>"+ numberOfQuestion + ".</span> " + plan[numberOfQuestion-1] + "</p></div>"

// if (plan[index] == 6){

// } else {
//     const textOfQuestion = `Гальваническое совмещение цепей тока и напряжения посредством установки перемычек на счетчике и трансформаторе тока является особенностью:`
//     const qPlc = document.querySelector('#question_number_1')
//     qPlc.innerHTML = "<div><p>" + textOfQuestion + "</p></div>"
// }




let stepMarkerPlace = document.querySelector('.step_marker');
console.log("stepMarkerPlace")
for (let i = 0; i < numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button_blue.svg";
    stepMarkerPlace.appendChild(markers);
}

for (let i = 0; i < numberOfQuestionSum-numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button.svg";
    stepMarkerPlace.appendChild(markers);
}

let stepPlaceDescription = document.querySelector('.number_description');
stepPlaceDescription.innerHTML = numberOfQuestion + '/' + numberOfQuestionSum;


let img1 = document.createElement('img');
img1.src = './content/correct.svg'
let img2 = document.createElement('img');
img2.src = './content/incorrect.svg'




let openPopUpButton = document.querySelector('#open_popup_button')
let closePopUpButton = document.querySelector('#close_popup_button_1')
let popUpWindow = document.querySelector('#popup1')


openPopUpButton.addEventListener('click', function(){
    popUpWindow.classList.remove('close')
})

closePopUpButton.addEventListener('click', function(){
    popUpWindow.classList.add('close')
})

let openPopUpButton3 = document.querySelector('#open_popup_button_2')
if (openPopUpButton3 != null){
    openPopUpButton3.addEventListener('click', function(){
        popUpWindow3.classList.remove('close')
    })
}


//Добавление Описания в popUp
let planPopUp=document.querySelector('.popup_text')
i=1
for(let elem of plan){
   text=document.createElement('h3')
   text.innerHTML="<p><span>"+ i + ".</span> " + elem + "</p>"
   planPopUp.appendChild(text)
   i++
}


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;
  
    while (0 !== currentIndex) {
  

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


if(document.querySelector('.tosuffle') != null){
    let questions=[]
    
    for (elem of document.querySelectorAll('.tosuffle')){
        questions.push(elem)
    }
    var arr = [];
    for (var i = 0; i < questions.length; i++)
        arr.push(i);
    shuffle(arr);
    parent=document.querySelector('.suffle')
    parent.innerHTML=""
    for (elem of arr){
        parent.appendChild(questions[elem])
    }
    nra=[]
    for (elem of rightans){
        nra.push(arr.indexOf(elem))
    }
    rightans=nra
}



