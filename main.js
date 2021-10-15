let number=0
const value=document.getElementById("value")
const btns=document.querySelectorAll(".btn")
btns.forEach(function(btn){
    btn.addEventListener('click',(e)=>{
        const styles=e.currentTarget.classList
        if (styles.contains('increase')) {
            number++
        }
        else if (styles.contains('reset')) {
            number=0 
        }
        if (styles.contains('decrease')) {
            number--
        }
        if (number>0) {
            value.style.color='green'  
        }
        if (number===0) {
            value.style.color='black'  
        }
        if (number<0) {
            value.style.color='red'  
        }
        value.textContent=number
    })
})