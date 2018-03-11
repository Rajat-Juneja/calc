window.addEventListener("load",bindEvents);


var operation;
var buttons; 
var textbar;
var value;
var value2;
var operationOn = false;
var clickCount=0;
var gotAnswer=false;
var clear = false;
var valuesStored = [];


function bindEvents(){
buttons = document.querySelectorAll("button");
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',performFunc);
}
textbar = document.querySelector("input");
}


function performFunc(){

    
    if(operationOn){
        value2 = textbar.value;
        
    }
    else{
        value = textbar.value;
    }

    if(this.classList.contains("square")){
        textbar.value = value*value;
    }
    else if(this.classList.contains("inverse")){
        textbar.value=1/value;
    }
    else if(this.classList.contains("root")){
        textbar.value = Math.sqrt(value);
    }
    else if(this.classList.contains("operation")){
        operation = this.innerText;
        clear=true;
        clickCount++;
        if(clickCount==1){
        operationOn=true;
    clickCount=0;}
    }
    else if(this.classList.contains("cl")){
        value=0;
        value2=0;
        textbar.value=0;
    }
    else if(this.classList.contains("clentry")){
        if(operationOn){
            value2=0;
        }
        else
        value=0;
        textbar.value=0;
    }
    else if(this.classList.contains("negate")){
        textbar.value=-textbar.value;
    }
    else if(this.classList.contains("removelast")){
            var lengthoftextbar = textbar.value.length;
            textbar.value = textbar.value.substring(0,lengthoftextbar-1);
    }
    else if(this.innerText=="="){
        if(operationOn){
            textbar.value = eval(value+operation+value2);
            operationOn = false;
            operationOn="";
            value=0;
            value2=0;   
            gotAnswer=true;
        }
    }
    else if(this.classList.contains("storeload")){
        var sum=0;
        if(this.innerText.includes("+")){
            valuesStored.push(textbar.value);
            gotAnswer=true;
        }
        else if(this.innerText.includes("-")){
            valuesStored.pop();
            gotAnswer=true;
        }
        else if(this.innerText.includes("C")){
            valuesStored=[];
        }
        else{
            
            textbar.value=0;
            for(let i=0;i<valuesStored.length;i++){
                sum=sum+parseInt(valuesStored[i]);
            }
            textbar.value=sum;
        }
    }
    

    if((this.innerText)%1==0 || this.classList.contains("decimal")){
     
    if(operationOn){
        
        if(clear){
            textbar.value="";
            clear=false;
        }
    if(value2 == 0){
        clear=true;
        textbar.value = (this.innerText);}
else{
            textbar.value = textbar.value.concat(this.innerText); 
        }
    }

    else{
        if(gotAnswer){
            textbar.value="";
            gotAnswer=false;
        }
        if(value == 0){
    textbar.value = (this.innerText);}
    else{
        textbar.value = textbar.value.concat(this.innerText); 
    }
}

}

}