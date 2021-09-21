//declaring variables for elements
const question = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
let current;


//function which chckes for all blocks and makes sure that only one block is active
function checkActiveBlocks(answers){
  for(let i=0;i<answers.length;i++){
    //if the current block is not the same as the active one , then remove the ckass from the one whih was previosuly active
    if(answers[i].classList.contains("display-block") && current !== answers[i]){
      answers[i].classList.remove("display-block");
      const p = question[i].children[0];
      const btn = question[i].children[1];
      p.classList.remove("highlight");
      btn.classList.remove("flip");
    }
  }
}

//adding event listeners to each button which on click will display the block
for(let i=0;i<question.length;i++){
  question[i].addEventListener("click",()=>{
    const answer = question[i].nextElementSibling;
    const p = question[i].children[0];
    const btn = question[i].children[1];
    current = answer;
    checkActiveBlocks(answers,current);
    answer.classList.toggle("display-block");
    p.classList.toggle("highlight");
    btn.classList.toggle("flip");
  });
}