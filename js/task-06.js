
  const inputRef =  document.querySelector('#validation-input');
  

  inputRef.addEventListener('blur', onInputBlur);


  function onInputBlur() {
    console.dir("Lost focus");
if(inputRef.value.trim().length !== Number(inputRef.dataset.length)){
    inputRef.classList.add("invalid"); 

    console.log(inputRef.dataset.length);

    }else {
        inputRef.classList.remove("invalid");
        inputRef.classList.add("valid"); 
    }

  }
