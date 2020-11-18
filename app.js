var buttons = document.querySelectorAll("button")    
var output = document.getElementById("output")        
        
buttons.forEach(function(button){
    button.addEventListener('click', calculate)
})

function calculate(event){
    var clicked_btn = event.target.value;    
    if (clicked_btn === '='){
        if(output.value !== ''){
            output.value = eval(output.value);
        }    
    }
    else if (clicked_btn === 'C'){
        output.value = "";
    }
    else{
        output.value += clicked_btn;
    }
}