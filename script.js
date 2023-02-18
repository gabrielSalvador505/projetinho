//RESPOSTAS

const response = document.querySelector('#response');
var acertos = 0;

response.addEventListener('keyup', function(e) {

    response.classList.remove('animation');

    if (e.keyCode === 13){
        e.preventDefault();

        const value = response.value;
        response.value = '';

        const card1 = document.querySelector('#card1');
        const card2 = document.querySelector('#card2');
        const card3 = document.querySelector('#card3');

        switch (value.toLowerCase()) {
            case 'here, there and everywhere':
                card1.classList.add('activate');
                acertos = 1;
                break;

            case 'eu amo você':
                card2.classList.add('activate');
                acertos = 2;
                break;
            
            case 'não espero mais':
                card3.classList.add('activate');
                acertos = 3;
                break;

            default:
                response.classList.add('animation');
        }
    }
})


// DICAS

const callTips = document.querySelector('#modal-caller');
var i = 1;

callTips.addEventListener('click', function() {

    const tipOne1 = document.querySelector('#tipOne1');
    const tipOne2 = document.querySelector('#tipOne2');
    const tipOne3 = document.querySelector('#tipOne3');

    const tipTwo1 = document.querySelector('#tipTwo1');
    const tipTwo2 = document.querySelector('#tipTwo2');
    const tipTwo3 = document.querySelector('#tipTwo3');

    const tipThree1 = document.querySelector('#tipThree1');
    const tipThree2 = document.querySelector('#tipThree2');

    if (acertos == 0) {

        switch (i) {
            case 1:
                tipOne1.style.visibility = 'visible';
                tipOne2.style.visibility = 'hidden';
                tipOne3.style.visibility = 'hidden';
                break;
            case 2:
                tipOne1.style.visibility = 'hidden';
                tipOne2.style.visibility = 'visible';
                tipOne3.style.visibility = 'hidden';
                break;
            case 3:
                tipOne1.style.visibility = 'hidden';
                tipOne2.style.visibility = 'hidden';
                tipOne3.style.visibility = 'visible';
                i = 0;
                break;
        }

    } else if (acertos == 1) {

        tipOne1.style.visibility = 'hidden';
        tipOne2.style.visibility = 'hidden';
        tipOne3.style.visibility = 'hidden';

        switch (i) {
            case 1:
                tipTwo1.style.visibility = 'visible';
                tipTwo2.style.visibility = 'hidden';
                tipTwo3.style.visibility = 'hidden';
                break;
            case 2:
                tipTwo1.style.visibility = 'hidden';
                tipTwo2.style.visibility = 'visible';
                tipTwo3.style.visibility = 'hidden';
                break;
            case 3:
                tipTwo1.style.visibility = 'hidden';
                tipTwo2.style.visibility = 'hidden';
                tipTwo3.style.visibility = 'visible';
                i = 0;
                break;
        }
    } else if (acertos == 2) {
        tipTwo1.style.visibility = 'hidden';
        tipTwo2.style.visibility = 'hidden';
        tipTwo3.style.visibility = 'hidden';

        switch (i) {
            case 1:
                tipThree1.style.visibility = 'visible';
                tipThree2.style.visibility = 'hidden';
                break;
            case 2:
                tipThree1.style.visibility = 'hidden';
                tipThree2.style.visibility = 'visible';
                i = 0;
                break;
        }
    }

    i++;

});

//fim
const title = document.querySelector('#title')

if (acertos == 3) {
    title.innerHTML = "gab te amo"
}