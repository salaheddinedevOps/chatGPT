let themeChange = document.querySelector('#changeTh');
const backColor = ['#fff','black'];
const colors = ['white','#FF8BFF'];
let count = 0;
themeChange.addEventListener('click', ()=>{
    if(count === 0){
        document.body.style.backgroundColor = backColor[1];
        document.body.style.color = colors[0];
        document.body.style.transition = '2s';
        count++;
    }
    else{
        document.body.style.backgroundColor = backColor[0];
        document.body.style.color = colors[1];

        count--;
    }
})