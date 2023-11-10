let numberOfQuestion = 9; 

rightans=[7,6,4,1,5,2,3]

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
    for (let elem of document.querySelectorAll(".assignnum_select")) 
    {   
        elem.setAttribute('disabled','true')
        if(elem.selectedIndex == rightans[counter]-1)
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
            nxt.setAttribute('onclick',`location.href='../javascript_result_page/index.html'`)
        }
        counter++
    }
    if (rightcheck){
        localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: true}));
        let nxt = document.getElementById('nextbutton')
        nxt.removeAttribute('disabled')
        nxt.classList.remove('blocked')
        nxt.setAttribute('onclick',`location.href='../javascript_result_page/index.html'`)
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

