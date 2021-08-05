const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

const p = document.getElementById("text");
const origin_word = p.innerHTML;
const origin_value = length.value;
const btn_reset = document.getElementById("reset");
const btn_search = document.getElementById("search");
let check = 0;

btn_toggle.onclick = () => {
  let id = 630610732 + parseInt(length.value);
  if(check === 0){
    author.innerHTML = "";
    calculation.innerHTML = ""+id+"";
    btn_toggle.innerText = "Show Author";
    check = 1;
  }
  else{
    calculation.innerHTML = "";
    author.innerHTML = "630610732 TANHATAI KLUNGMAJAREON";
    btn_toggle.innerText = "Show Calculation";
    check = 0;
  }
}

// more codes for Search and Reset buttons here
btn_reset.onclick = () => {
  p.innerHTML = origin_word;
  length.value = origin_value;
  calculation.innerHTML = "";
  author.innerHTML = "630610732 TANHATAI KLUNGMAJAREON";
  btn_toggle.innerText = "Show Calculation";
  
}

btn_search.onclick = () => {
  const text = p.innerText;
  const words = text.split(" ");
  p.innerHTML = "";
  words.forEach( (word) => {
    const span = document.createElement("span");
    span.innerText = word+" ";
    if(word.length >= length.value){
      span.style.color = color.value;
    }
    p.appendChild(span);
  })
}