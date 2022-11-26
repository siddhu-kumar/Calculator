// var take = document.getElementById('seven');
var display = document.getElementById('display');

"use strict";

var operand1 = "";
var operand2 = "";
var optr = "";
var temp = "";

function input(val) {
    if(val<=9 && val>=0) {
        temp+=val;
    }
    if(val=='=') {
        temp=calculate();
        display.innerText = operand1 + optr + operand2 + val + temp;
        operand1="";
        operand2="";
        optr="";
        return;
    }
    if(val=='+' || val=='-' || val=='*' || val=='/' || val=='%') {
        operand1=calculate();
        if(temp!="")
        operand1=temp;
        optr=val;
        temp="";
    }
    if(val=='C') {
        delete_char();
    }
    if(val=='AC') {
        all_clear();
    }
    if(val=='sign') {
        if(temp=="") {
            temp='-';
        return;
        }
        temp = "" + (-1*eval(temp));
    }
    display.innerText = operand1 + optr + temp;
}

function delete_char() {
    if(optr!="" && operand1!=null) {
    optr = "";
    }
    else {
        temp = temp.slice(0,-1);
        display.innerText = 'siddhu' + temp;
    }
}

function all_clear() {
    display.innerText = "";
    operand1="";
    temp="";
    optr="";
}

function calculate() {
    operand2=temp;
    if(optr=='%') {
        temp = "" + eval((operand1*temp)/100);
    }else
    temp = "" + eval(operand1+optr+temp);
    return temp;
}


/*
var operand1 = "";
var operand2 = "";
var optr = "";
var flag = true;
var result;

function input(val) {

    if((val>=0 && val<=9 )&& Boolean(flag)) {
        operand1 += val;
        document.getElementById('display').innerText = operand1;
    }
    else if((val>=0 && val<=9 )&& !Boolean(flag)) {
        operand2 += val;
        document.getElementById('display').innerText = operand2;
    }
    else if(val=='AC') {
        document.getElementById('display').innerText = "";
        flag = true;
        operand1="";
        operand2="";
        optr="";
        result=0;
    }
    else if(val == '=') {
        result = eval(operand1 +" "+ optr +" "+ operand2);
        document.getElementById('display').innerText = result;
        console.log(result);
        operand1 = result;
        operand2 = "";
    }
    else  {
        optr = val;
        document.getElementById('display').innerText = optr;
        flag = false;
    }
}


var str = "" ;
var count = 0;
var flag = true;
function input(val) {
    if(str[count-1]==val && !(val>=0 && val<=9)) return;

    if(val == '=') {
        var temp = str + '=';
        var temp = 0;
        var operand1 = "";
        var operand2 = "";
        var f=true;
        
        for(var i in str) {
            if(str[i] == '%') { f=false; continue; }
            else if(f) {temp++;operand1+=str[i];}
            else {operand2+=str[i];}
        }
        if(!f) {
            str += "=" + eval(operand1+'*'+operand2)/100;
            document.getElementById('display').innerText = str;
        return;
        }

        if(str[count-1]=='0' && str[count-2]=='/') {
            str="";
            document.getElementById('display').innerText = 'error';
        } else {
        document.getElementById('display').innerText = str + '=' + eval(str);
        flag=false;
        }
    }
    else if(val == 'AC') {
        str = "";
        document.getElementById('display').innerText = "";
        count=0;
    }
    else if(val == 'sign') {
        str = "" + (-1*eval(str));
        document.getElementById('display').innerText = str;
        count=1;
    } 
    else {
    if(!flag){
        str = "";
        flag=true;
        count=0;
    }
        str += val;
    document.getElementById('display').innerText = str;
    count++;
    }
}
*/