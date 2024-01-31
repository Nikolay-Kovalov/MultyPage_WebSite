const target = document.querySelector('.js-guard');
const target1 = document.querySelector('.js-guard-1');
const target2 = document.querySelector('.js-guard-2');



let options = {
    root: null,
    // rootMargin: "0px",
    treshold: [0.15, 0.85]
}

let obserever = new IntersectionObserver(callback, options)

function callback(entries,observer) {
    console.log(entries)
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target === target || entry.target === target1) {
                entry.target.classList.add('show-list')  
            }
            if (entry.target === target2) {
                              console.log(entry.target)
            entry.target.classList.add('show-work');  
            } 
            
    }
        else {
            if (entry.target === target || entry.target === target1) {
                            entry.target.classList.remove('show-list')  
            }
               if (entry.target === target2) {
                            entry.target.classList.remove('show-work')  
            }
    }
})
}

if (target && target1 && target2) {
   obserever.observe(target);
obserever.observe(target1);
obserever.observe(target2); 
}



let string;
const myRe = /\/\w{1,}.html/g;
console.log(myRe.exec(document.referrer))
if (myRe.exec(document.referrer)) {
   string = myRe.exec(document.referrer).join(''); 
} 

const pathName = document.referrer.replace(myRe, "");
console.log(pathName)

const orderForm = document.querySelector('.form');
console.log(orderForm)
const text = document.querySelector('.link-text');
const breadCrumbLink = document.querySelector('.bread-crumb-link');
if (breadCrumbLink) {
    breadCrumbLink.href = `.${string}`

switch ( breadCrumbLink.href) {
    case `${pathName}/garden.html`:
        text.innerText = 'Garden helper';
        break;
     case `${pathName}/eletctric.html`:
        text.innerText = 'Electrical installation and repair';
        break;
     case `${pathName}/cleaning.html`:
        text.innerText = 'Cleaning';
        break;
     case `${pathName}/help.html`:
        text.innerText = 'Help around the house';
        break;
     case `${pathName}/plumbing.html`:
        text.innerText = 'Plumbing repair and installation';
        break;
     case `${pathName}/repair.html`:
        text.innerText = 'Repair of household appliances';
        break;
     case `${pathName}/shopping.html`:
        text.innerText = 'Shopping';
        break;
     case `${pathName}/services.html`:
        text.innerText = 'Services of a loader for moving';
        break;
    default: breadCrumbLink.remove() 
}
}

if (orderForm) {
   orderForm.addEventListener('submit', onOrderFormSubmit); 
}

function onOrderFormSubmit(evt) {
    evt.preventDefault();
    location.href = './sent.html'
}

if (document.querySelector('.hours')) {
  const orderedHours = document.querySelector('.hours');
let prevOrderedHours = null;

orderedHours.addEventListener('click', (evt) => {

    if (evt.target.tagName === "SPAN" && !evt.target.classList.contains('active-hour')) {
        evt.target.classList.add('active-hour');
        if(prevOrderedHours){ prevOrderedHours.classList.remove('active-hour');}
       
        prevOrderedHours = evt.target;

    }
})  
}



