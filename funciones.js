let input= document.getElementById('input');
let last = document.getElementById('last');
let result =document.getElementById('result');
let operator =document.getElementById('operator')

function sum(){
    getValues()
    operator.value="+" 
}

function subtraction(){
    getValues()
    operator.value="-";
};
function multiplication(){
    getValues()
    operator.value="x";
};
function division(){
    getValues()
    operator.value="/";
};
function square(){
    if(result.value){
        input.value=result.value;
        result.value="";
    };
    let inputN=Number(input.value);
    if(inputN<0){
        result.value='Número no valido';
    }else{
        last.value=Math.sqrt(inputN);
        last.style.color="transparent";
        input.value=last.value;       
    }
    operator.value="";
};
function potency(){
    getValues()
    operator.value="^";
};
function remainder(){
    getValues()
    operator.value="//";
};

function ac(){
    input.value="0";
    last.value=" ";
    operator.value=" ";
    result.value=" ";
};
function erase(){
    input.value="0";
}

function equalsTo(){
    
    if(!last.value){
        result.value= `=${input.value}`;
    }else{
        operations();
        result.value= `=${last.value}`;
    
    }
    last.value="";
};

function getValues(){
    if(result.value){
        last.value=result.value;
    };
    last.style.color="";
    let lastN=Number(last.value);
    let inputN=Number(input.value);
    if(lastN){
        operations();        
    }else{
        last.value=inputN;
    }
    input.value="0";
}

function operations(){
    let lastN=Number(last.value);
    let inputN=Number(input.value);
    switch (operator.value){
        case "+":
            last.value=lastN+inputN;
            input.value="0";
            break;
        case "-":
            last.value=lastN - inputN;
            input.value="0";
            break;
        case "x":
            last.value=lastN * inputN;
            input.value="0";
            break;
        case "/":
            if(!input.value){
                last.value=lastN / 1;
            }else{
                last.value=lastN / inputN;
            }
            input.value="0";
            break;
        case "^":
            last.value = Math.pow(lastN,inputN);
            input.value="0";
            break;
        case "//":
            if(!input.value){
                last.value=last.value;
            }else if(input.value==0){
                last.value=last.value;
                result.value='Número no valido';
            }else{
                last.value=lastN % inputN;
            }
            input.value="0";
            break;
    }
    operator.value=""; 
}

function numbers(index){
    let current =document.querySelector(`#${index}`)
    console.log(current.innerHTML)
    if(input.value==='0'){
        input.value=`${current.innerHTML}`;
    }else{
        input.value+=`${current.innerHTML}`;
    }
    input.type='number';
    
}

function cero(){
    if(input.value==='0'){
    }else{
        input.value+="0";
    }
}
function dot(){
    input.type='text';
    if(!input.value.includes(".")){
        if(input.value==0){
            input.value=".";
        }else{
            input.value+=".";
        }
    }
}
input.addEventListener('keypress',e=>{
    var name= e.key;
    switch(name){
        case '+':
            e.preventDefault();
            sum();
            break;
        case '-':
            e.preventDefault();
            subtraction();
            break;
        case '*':
            e.preventDefault();
            multiplication();
            break;
        case '/':
            e.preventDefault();
            division();
            break;
        case 'Enter':
            e.preventDefault();
            equalsTo();
            break;
    }
})