const usernameInput = document.getElementById('username');
const userPhone = document.getElementById('user-phone');
const userEmail = document.getElementById('user-email')

const patterns = {
    phone: /^\+380\d{2}\s\d{3}\s\d{2}\s\d{2}$/,
    errorPhone: /^([A-Z]|[А-Я]|[a-z]|[а-я]|@|\.|[0-9])/,
    name: /^([A-Z]|[А-Я])/,
    number: /^@|[0-9]|\./,
    email: /^(?=.*[a-z]|[A-Z]).{1,}@[a-z]{1,}\.(com|ua|dp|uk)$/
}

usernameInput.addEventListener('input', checkName);
userPhone.addEventListener('input', checkPhone);
userEmail.addEventListener('input', checkUserEmail);
usernameInput.addEventListener('blur', onBlurName);
usernameInput.addEventListener('focus', onFocusName);
userPhone.addEventListener('blur', onBlurPhone);
userPhone.addEventListener('focus', onFocusPhone);
userEmail.addEventListener('blur', onBlurUserEmail);
userEmail.addEventListener('focus', onFocusUserEmail);

function onBlurName(evt) {
    if (evt.currentTarget.value.length === 0 || !patterns.name.test(evt.currentTarget.value) || evt.currentTarget.value.length < 2) {
           evt.currentTarget.style.border = "1px solid red"  
    }
}

function onFocusName(evt) {
    if (evt.currentTarget.value.length === 0 || !patterns.name.test(evt.currentTarget.value) || evt.currentTarget.value.length < 2) {
           evt.currentTarget.style.border = "1px solid white"  
    }
}

function onBlurPhone(evt) {
      if (evt.currentTarget.value.length === 0 || !patterns.phone.test(evt.currentTarget.value)) {
           evt.currentTarget.style.border = "1px solid red"  
    } 
}

function onFocusPhone(evt) {
       if (evt.currentTarget.value.length === 0 || !patterns.phone.test(evt.currentTarget.value)) {
           evt.currentTarget.style.border = "1px solid white"  
    } 
}

function onBlurUserEmail (evt) {
          if (evt.currentTarget.value.length === 0 || !patterns.email.test(evt.currentTarget.value)) {
           evt.currentTarget.style.border = "1px solid red"  
    } 
}

function onFocusUserEmail (evt) {
          if (evt.currentTarget.value.length === 0 || !patterns.email.test(evt.currentTarget.value)) {
           evt.currentTarget.style.border = "1px solid white"  
    }  
}

function checkPhone(evt) {
      if (patterns.phone.test(evt.currentTarget.value)) {
        evt.currentTarget.parentNode.classList.add('check')
          evt.currentTarget.style.border = "1px solid green"
    }
    if (!patterns.phone.test(evt.currentTarget.value)) {
            if(evt.currentTarget.parentNode.classList.contains('check'))
                evt.currentTarget.parentNode.classList.remove('check')
        evt.currentTarget.style.border = "1px solid white";
    }
    if (patterns.errorPhone.test(evt.currentTarget.value)) {
           evt.currentTarget.parentNode.classList.add('unvalid')
        evt.currentTarget.style.border = "1px solid red"  
    }
    if (!patterns.errorPhone.test(evt.currentTarget.value)) {
         if(evt.currentTarget.parentNode.classList.contains('unvalid') )
             evt.currentTarget.parentNode.classList.remove('unvalid')
        if(!evt.currentTarget.parentNode.classList.contains('check'))
        evt.currentTarget.style.border = "1px solid white"; 
   } 
}

function checkName(evt) {
    if (patterns.name.test(evt.currentTarget.value) && evt.currentTarget.value.length >= 2) {
        evt.currentTarget.parentElement.classList.add('check')
        evt.currentTarget.style.border = "1px solid green"
    }
    if (!patterns.name.test(evt.currentTarget.value) || evt.currentTarget.value.length < 2) {
            if(evt.currentTarget.parentElement.classList.contains('check'))
                evt.currentTarget.parentElement.classList.remove('check')
        evt.currentTarget.style.border = "1px solid white";
    }
    if (patterns.number.test(evt.currentTarget.value)) {
           evt.currentTarget.parentElement.classList.add('unvalid')
        evt.currentTarget.style.border = "1px solid red"  
    }
    if (!patterns.number.test(evt.currentTarget.value)) {
         if(evt.currentTarget.parentElement.classList.contains('unvalid') )
             evt.currentTarget.parentElement.classList.remove('unvalid')
        if (!evt.currentTarget.parentElement.classList.contains('check')) {
                    evt.currentTarget.style.border = "1px solid white"; 
        }
   }
}

function checkUserEmail(evt) {
    if (patterns.email.test(evt.currentTarget.value)) {
        evt.currentTarget.parentElement.classList.add('check')
        evt.currentTarget.style.border = "1px solid green"
    }
    if (!patterns.email.test(evt.currentTarget.value)) {
            if(evt.currentTarget.parentElement.classList.contains('check'))
                evt.currentTarget.parentElement.classList.remove('check')
        evt.currentTarget.style.border = "1px solid white";
    }

    if (!patterns.email.test(evt.currentTarget.value)) {
         if(evt.currentTarget.parentElement.classList.contains('unvalid') )
             evt.currentTarget.parentElement.classList.remove('unvalid')
        if (!evt.currentTarget.parentElement.classList.contains('check')) {
                    evt.currentTarget.style.border = "1px solid white"; 
        }
   }
}









