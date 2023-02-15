const numberConteiner = document.querySelector('.content-scale');
const rateselection =document.querySelector('.rating');
const submitBtn = document.querySelector('.content-submit');
const containercard = document.querySelector('.container');
const containerafter = document.querySelector('.container-after');

numberConteiner.addEventListener('click', e =>{
    const numberselected = e.target.innerText;
    rateselection.innerText=numberselected;
    console.log(numberselected)
    submitBtn.addEventListener('click', e =>{
        containercard.style.display='none';
        containerafter.style.display='flex';
    })
})




