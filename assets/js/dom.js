const opsions = ['Tas', 'Kagit', 'Makas'];


tas.addEventListener('click', function(){

    sonuc.innerText = 'Sonuc: ' + getResult('Tas');
})

kagit.addEventListener('click', function(){

    sonuc.innerText = 'Sonuc: ' + getResult('Kagit');
})

makas.addEventListener('click', function(){

    sonuc.innerText = 'Sonuc: ' + getResult('Makas');
})


function getResult(metin) {
    const computerOption = getRandomOption();


if(metin == computerOption) {
    return 'Berabere';
} else if(metin === 'Tas' && computerOption === 'Kagit') {
    return 'Kaybettiniz';
} else if(metin === 'Tas' && computerOption === 'Makas') {
    return 'Kazandiniz';
} else if(metin === 'Kagit' && computerOption === 'Tas') {
    return 'Kazandiniz';
}else if(metin === 'Kagit' && computerOption === 'Makas') {
    return 'Kaybettiniz';
}

function getRandomOption() {
    const computerChoice = opsions[Math.floor(Math.random() * 3)];
    bilgisayar.innerText = computerChoice;

    return computerChoice
}
}