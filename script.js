const image = document.querySelector('#image');
const content = document.querySelector('#content');
const createButton = document.querySelector('#createButton');

createButton.onclick = () => { 
    if(content.value === '') return; 

    const linkQR = 'https://api.qrserver.com/v1/create-qr-code/';
    image.src = linkQR + '?size=500x500&data=' + encodeURIComponent(content.value); 
};
