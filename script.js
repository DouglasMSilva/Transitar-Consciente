document.addEventListener("DOMContentLoaded", function(){
    //Cores das luzes dos sinais
    const green = document.querySelector(".greenLight");
    const yellow = document.querySelector(".yellowLight");
    const red = document.querySelector(".redLight"); 

    //Ícones das cores dos sinais
    const go = document.getElementById('go');
    const wait = document.getElementById('wait');
    const stopp = document.getElementById('stopp');

    //Modais de Pedestres
    const peds = document.getElementById('peds');
    const pedOp = document.getElementById('ped_opening');
    const pedAt = document.getElementById('ped_attention');
    const pedCl = document.getElementById('ped_closing');

    //Modais de Veículos
    const cars = document.getElementById('cars');
    const carOp = document.querySelector("#car_opening");
    const carAt = document.querySelector("#car_attention");
    const carCl = document.querySelector("#car_closing");




    function greenSign() {
        campo.classList.remove('hidden');

        green.style.background = "lightgreen";
        yellow.style.background = "yellow";
        red.style.background = "red";
            
        go.style.display = "block";
        wait.style.display = "none";
        stopp.style.display = "none";
    }


    function yellowSign() {
        campo.classList.remove('hidden');

        green.style.background = "green";
        yellow.style.background = "lightyellow";
        red.style.background = "red";

        go.style.display = "none";
        wait.style.display = "block";
        stopp.style.display = "none";
    }


    function redSign() {
        campo.classList.remove('hidden');

        green.style.background = "green";
        yellow.style.background = "yellow";
        red.style.background = "pink";

        go.style.display = "none";
        wait.style.display = "none";
        stopp.style.display = "block";
    }

    function esconderElemento(elemento) {
        elemento.style.display = "none";
    }

    function mostrarElemento(elemento) {
        elemento.style.display = "flex";
    }


    function atualiza() {
        //Variável para selecionar perfil
        const selectProfile = document.querySelector('input[name="sign"]:checked').value;
    
        //Variável para selecionar cor do sinal
        const selectLight = document.querySelector('input[name="option"]:checked').value;

        if(selectProfile === "pedestrian") {
                if(selectLight === "verde") {
                    greenSign();
                    cars.classList.add('hidden');
                    peds.classList.remove('hidden');
                    esconderElemento(pedOp);
                    esconderElemento(pedAt);
                    mostrarElemento(pedCl);   
                }
                else if(selectLight === "amarelo") {
                    yellowSign();
                    cars.classList.add('hidden');
                    peds.classList.remove('hidden');
                    esconderElemento(pedCl);
                    mostrarElemento(pedAt);
                    esconderElemento(pedOp);
                }
                else if(selectLight === "vermelho") {
                    redSign();
                    cars.classList.add('hidden');
                    peds.classList.remove('hidden');
                    esconderElemento(pedCl);
                    esconderElemento(pedAt);
                    mostrarElemento(pedOp);
                }
            
        } else if(selectProfile === "car") {
                if(selectLight === "verde") {
                    greenSign();
                    peds.classList.add('hidden');
                    cars.classList.remove('hidden');
                    esconderElemento(carCl);
                    esconderElemento(carAt);
                    mostrarElemento(carOp);
                }
                else if(selectLight === "amarelo"){
                    yellowSign();
                    peds.classList.add('hidden');
                    cars.classList.remove('hidden');
                    esconderElemento(carOp);
                    mostrarElemento(carAt);
                    esconderElemento(carCl);
                }
                else if(selectLight === "vermelho"){
                    redSign();
                    peds.classList.add('hidden');
                    cars.classList.remove('hidden');
                    mostrarElemento(carCl);
                    esconderElemento(carAt);
                    esconderElemento(carOp);   
                }
  
        }

    }


    document.getElementById('pedProf').addEventListener('change', atualiza);
    document.getElementById('carProf').addEventListener('change', atualiza);

    document.querySelectorAll('.light').forEach(function(radio){
        radio.addEventListener('change', atualiza);
    });

   

});