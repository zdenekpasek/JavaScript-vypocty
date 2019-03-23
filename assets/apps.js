function spocti(){
    var n1 = parseInt(document.getElementById('num1').value);
    var n2 = parseInt(document.getElementById('num2').value);
    var op = document.getElementById('operatorsBin').value;
    var i, faktorial;
    faktorial = 1;

    if(op === '+'){
        document.getElementById('result').value = n1+n2;
    }
    if(op === '-'){
        document.getElementById('result').value = n1-n2;
    }
    if(op === '/'){
        document.getElementById('result').value = n1/n2;
    }
    
}
function spoctiUn(){
    var n1 = parseInt(document.getElementById('num1').value);
    var op = document.getElementById('operatorsUn').value;
    var i, faktorial;
    faktorial = 1;

    if(op === 'fact'){
        for(i=2;i<=n1;i++){
            faktorial = faktorial * i;
        }
        document.getElementById('result').value = faktorial; 
    }

    if(op === 'fibo'){
        const pole = [0, 1];

        for(let i=2;i<=n1;i++){
            let a = pole[i - 1];
            let b = pole[i - 2];
            pole.push(a + b);
        }

        document.getElementById('result').value = pole;
    } 
}

function spoctiTxt(){
    var txt = document.getElementById('txt').value;
    var op = document.getElementById('operatorsTxt').value;

    if(op === 'revers'){
        document.getElementById('result').value = txt.split("").reverse().join("");
        
    }
}

    function unarni(){
        
        document.getElementById('num2').style.display = "none";
        document.getElementById('lab2').style.display = "none";
        document.getElementById('lab1').style.display = "block";
        document.getElementById('select2').style.display = "block";
        document.getElementById('select1').style.display = "none";
        document.getElementById('buttonBin').style.display = "none";
        document.getElementById('buttonUn').style.display = "block";
        document.getElementById('result').value = '';
        document.getElementById('num1').style.display = "block";
        document.getElementById('num1').value = '0';
        document.getElementById('result').style.display = "block";
        document.getElementById('labRes').style.display = "block";
        document.getElementById('labTxt').style.display = "none";
        document.getElementById('txt').style.display = "none";
        document.getElementById('select3').style.display = "none";
        document.getElementById('buttonTxt').style.display = "none";
        
    }
    function binarni(){
        document.getElementById('num1').style.display = "block";
        document.getElementById('num2').style.display = "block";
        document.getElementById('lab1').style.display = "block";
        document.getElementById('lab2').style.display = "block";
        document.getElementById('select2').style.display = "none";
        document.getElementById('select1').style.display = "block";
        document.getElementById('buttonBin').style.display = "block";
        document.getElementById('buttonUn').style.display = "none";
        document.getElementById('result').style.display = "block";
        document.getElementById('result').value = '';
        document.getElementById('num1').value = '0';
        document.getElementById('num2').value = '0';
        document.getElementById('labRes').style.display = "block";
        document.getElementById('labTxt').style.display = "none";
        document.getElementById('txt').style.display = "none";
        document.getElementById('select3').style.display = "none";
        document.getElementById('buttonTxt').style.display = "none";
    }

    function textova(){
        document.getElementById('labTxt').style.display = "block";
        document.getElementById('txt').style.display = "block";
        document.getElementById('select3').style.display = "block";
        document.getElementById('select1').style.display = "none";
        document.getElementById('select2').style.display = "none";
        document.getElementById('labRes').style.display = "block";
        document.getElementById('result').style.display = "block";
        document.getElementById('buttonTxt').style.display = "block";
        document.getElementById('buttonUn').style.display = "none";
        document.getElementById('buttonBin').style.display = "none";
        document.getElementById('num1').style.display = "none";
        document.getElementById('num2').style.display = "none";
        document.getElementById('lab2').style.display = "none";
        document.getElementById('lab1').style.display = "none";
        document.getElementById('result').value = '';
   
    }

   