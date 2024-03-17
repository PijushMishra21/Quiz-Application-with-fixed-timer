let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');
let div3 = document.querySelector('#div3');
let Start_btn = document.querySelector('#button1');
let Continue_btn = document.querySelector('#button3');
let Quit_btn = document.querySelector('#button2');
let Next_btn = document.querySelector('#Next_btn');
let timeline = document.querySelector('.Time-count');
let div6 = document.querySelector('#result_page');
let back_btn = document.querySelector('#back_btn');
let continu_btn = document.querySelector('#continu_btn');

// document.addEventListener("DOMContentLoaded", function() {
//  let startButton = document.querySelector('#button1');
// //  startButton.addEventListener('click', function() {
//      let div2 = document.querySelector('#div2');
//      let div1 = document.querySelector('#div1');
//      div1.style.display = 'none';
//      div2.style.display = 'block';
//  });
// });//another way to add eventlisterner

Start_btn.onclick =()=>{
 let div2 = document.querySelector('#div2');
     let div1 = document.querySelector('#div1');
     div1.style.display = 'none';
     div2.style.display = 'block';
     
};

Quit_btn.onclick =()=>{
 let div2 = document.querySelector('#div2');
     let div1 = document.querySelector('#div1');
     div1.style.display = 'block';
     div2.style.display = 'none';
     
};

Continue_btn.onclick =()=>{
 let div2 = document.querySelector('#div2');
 let div3 = document.querySelector('#div3');
     div3.style.display = 'block';
     div2.style.display = 'none';
     showQuestion(0);
     timeOfs(15);
     timeLiner(320);
     console.log('continued')
};

let timecounting ;
let question_count = 0;
let widthvalue= 0;

// Next_btn.onclick =()=>{
//  console.log('its nextbtn')
//  // let question_count = 0;
//      if(question_count<questions.length -1 ){
//       question_count++;
//          showQuestion(question_count);
//          clearInterval(timecounting)
//          timeOfs(15);
//          clearInterval(counterLine)
//          timeLiner(widthvalue);
//      }
//      else{
//       console.log('its finished')
//      }
// };
Next_btn.onclick = () => {
    console.log('its nextbtn');
    if (question_count < questions.length - 1) {
        question_count++;
        showQuestion(question_count);
        clearInterval(timecounting);
        timeOfs(15);
        clearInterval(timelineIntervalId);
        timeLiner(15 * 20); // Adjust the time value as needed
        displayNextQuestion();
      Next_btn.style.display = 'none';
    } else {
        console.log('its finished');
        showResult();
    }
};
attachOptionListeners();

back_btn.onclick = () => {
    // div6.style.display = 'none';
    // div1.style.display = 'block';
    window.location.reload();
    console.log('baked to home page')
};
continu_btn.onclick = () => {
    question_count = 0;
    userScore = 0;
    div6.style.display = 'none';
    div2.style.display = 'block';
    console.log('baked to start  page')
};
    


     function showQuestion(index){
        const question_text = document.querySelector('.question');
        question_text.innerHTML = questions[index].number + '.'+ questions[index].question;
        /*const option_list1 = document.querySelector('#option1'); //another way to add questions & options :-
        const option_list2 = document.querySelector('#option2');
        const option_list3 = document.querySelector('#option3');
        const option_list4 = document.querySelector('#option4');
         option_list1.innerHTML = questions[index].option[0];
         option_list2.innerHTML = questions[index].option[1];
         option_list3.innerHTML = questions[index].option[2];
         option_list4.innerHTML = questions[index].option[3];*/ 

     const optionsList = document.querySelectorAll('.option');
     optionsList.forEach((option, i) => {
        option.style.color = '';
        option.style.backgroundColor = '';
         option.innerHTML = questions[index].option[i];
     });
          const para = document.querySelector('.para');
          para.innerHTML =  `${questions[index].number} of 6Q`
        };


        function attachOptionListeners() {
            const options = document.querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', () => {
                    if (!option.classList.contains('disabled')) {
                        console.log('Option clicked:', option.textContent);
                        selectOption(option); // Pass the clicked option as an argument
                        console.log(`Clicked option ${option.id}`);
                    }
                });
            });
        }

        // displaying next question & option  after color is selecting:-
        function displayNextQuestion() {
           const option =  document.querySelectorAll('.option')
            // Reset background color and selection for all options
            options.forEach(option => {
                option.classList.remove('selected', 'disabled');
                option.style.backgroundColor = ''; // Reseting background color
                option.innerHTML = option.textContent.trim();// Reset option text
                timeLine.classList.remove('blink');

            });
            attachOptionListeners();
        };
        
      
    //  the icons :
 let tickIcon = `<i class="fa-solid fa-check icon"></i>`
 let crosIcon = `<i class="fa-solid fa-xmark icon"></i>`
        
let  userScore = 0;//score variable:

    function selectOption(Answer) {
        console.log('Selecting option...');
        Next_btn.style.display = 'block';
        clearInterval(timelineIntervalId);
        clearInterval(timecounting);
        let userAns = Answer.textContent.trim();
        let correctAns = questions[question_count].Answer.trim();
    
        // Deselecting all options:
        let options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.classList.remove('selected');
            option.classList.add('disabled');
        });
    
        // Selecting the clicked option:
        Answer.classList.add('selected');
    
        if (userAns === correctAns) {
            userScore += 1;
            console.log(userScore);
            Answer.style.backgroundColor = 'green';
            Answer.insertAdjacentHTML('beforeend', tickIcon);
            console.log('Answer is correct');
        } else {
            Answer.style.backgroundColor = 'red';
            Answer.insertAdjacentHTML('beforeend', crosIcon);
            options.forEach(option => {
                if (option.textContent.trim() === correctAns) {
                    option.style.backgroundColor = 'green';
                    option.insertAdjacentHTML('beforeend', tickIcon);
                }
            });
            console.log('Answer is wrong');
        }
    }
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', () => {
            if (!option.classList.contains('disabled')) {
                console.log('Option clicked:', option.textContent);
                selectOption(option); // Pass the clicked option as an argument
                console.log(`Clicked option ${option.id}`);
            }
        });
    });
    
    

    // time counter function :-
      function timeOfs(time,seconds='sc'){
          timecounting = setInterval(timer,1000);
         function timer(){
          timeline.textContent=time;
          time--;
          if(time<9){
               let addZero = timeline.textContent;
               timeline.textContent = 0 + addZero; // adding zero after 10 scconds, like this-"09" :
          }
          if(time <0){
           clearInterval(timecounting)
           timeline.textContent=0;
           Next_btn.style.display = 'block';
           timeLine.classList.add('timeline');
           timeLine.classList.add('blink');
          }
         }
      };


      let  timelineIntervalId; 
      let timeLine;
    //   timeline function :-
      function timeLiner(time) {
         timeLine = document.querySelector('.timeline');
        let q_heading = document.querySelector('#div5');

        // Checking if the timeline element exists, create it if not
        if (!timeLine) {
            timeLine = document.createElement('div');
            timeLine.className = 'timeline';
            document.body.appendChild(timeLine); 
            }
            else{
                timeLine.style.width = '0px';

            }
            let width = 0;
          timelineIntervalId  = setInterval(() => {
            width += 1;
            timeLine.style.width = width + 'px';
            if (width >= time) {
                clearInterval( timelineIntervalId );
            }
     }, 50); // Adjust the interval as needed
   };
    
// result funtion :
function showResult(){
    div3.style.display = 'none';
    div6.style.display = 'block';
    const points = document.querySelector('.points');
    if (userScore > 3){
       let score = `<span>Congratulations😀👌 You got <p class="points">${userScore}</p> Out of <p>${questions.length}</p></span>`;
       points.innerHTML = score;
    }else if(userScore > 1){
        let score = `<span>Carry on 😐👍 You got <p class="points">${userScore} points</p> Out of <p>${questions.length}</p></span>`;
       points.innerHTML = score;
    }else{
        let score = `<span>Opp's You Lost the Quiz😐👍 You got <p class="points">${userScore}</p> Out of <p>${questions.length}</p></span>`;
       points.innerHTML = score;
    }
    Next_btn.style.display = 'none';
    
};








