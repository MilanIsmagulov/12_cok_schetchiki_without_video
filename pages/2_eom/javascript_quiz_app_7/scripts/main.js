let numberOfQuestion = 7; 

rightans=[2,4,1,3]

divBtn=document.querySelector('.main_buttons')

let nextBtn1 = document.createElement('button')
nextBtn1.innerText = 'Назад'
nextBtn1.setAttribute('onclick', `location.href='../javascript_quiz_app_${numberOfQuestion-1}/index.html'`)
divBtn.appendChild(nextBtn1)

nextbtn=document.createElement('button')
nextbtn.classList.add('blocked')
nextbtn.setAttribute('disabled','true')
nextbtn.id="nextbutton"
nextbtn.innerHTML="Далее"

ansbutton=document.createElement('button')
ansbutton.id='checkAns'

ansbutton.addEventListener('click',function(event)
{
    let rightcheck = true

    let counter=0 // Для получения порядкового номера
    for (let elem of document.querySelectorAll(".assignnum ")) 
    {   
        elem.setAttribute('disabled','true')
        if(parseInt(elem.value) == rightans[counter])
        {
            elem.classList.add('correct')

        }
        else{  
            elem.classList.add('incorrect')
            rightcheck=false
            event.target.innerHTML="Повторить"
            event.target.setAttribute('onclick', "window.location.reload();")
            let nxt = document.getElementById('nextbutton')
            nxt.removeAttribute('disabled')
            nxt.classList.remove('blocked')
            nxt.setAttribute('onclick',`location.href='../javascript_quiz_app_${numberOfQuestion+1}/index.html'`)
        }
        counter++
    }
    if (rightcheck){
        localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: true}));
        let nxt = document.getElementById('nextbutton')
        nxt.removeAttribute('disabled')
        nxt.classList.remove('blocked')
        nxt.setAttribute('onclick',`location.href='../javascript_quiz_app_${numberOfQuestion+1}/index.html'`)
        event.target.setAttribute('disabled',true)
        event.target.classList.add('blocked')
    }
    else{
        localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: false}));
    }
})
ansbutton.innerHTML="Ответить";
divBtn.appendChild(ansbutton);
divBtn.appendChild(nextbtn);

