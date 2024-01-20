let valueRaw = document.querySelector('.bold-text');

const decrement = () => {
    let value = parseInt(valueRaw.innerText);   
    value = value - 1;
    valueRaw.innerText =value;  
};

const increment = () => {
    let value = parseInt(valueRaw.innerText);
    value = value + 1;
    valueRaw.innerText =value;  
};