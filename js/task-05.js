
const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),

}

refs.inputName.addEventListener('input', onInputChange);


function onInputChange(event) {
    console.log(event.currentTarget.value);
    if(event.currentTarget.value.trim() !== ""){
        refs.outputName.textContent = event.currentTarget.value;
    } else {
        refs.outputName.textContent = "Anonimus";

    }

}