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

obserever.observe(target);
obserever.observe(target1);
obserever.observe(target2);


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



const calendar = document.querySelector('.calendar');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const year = document.querySelector('.year');
const day = document.querySelector('.currentDay');
const month = document.querySelector('.month');
const td = document.querySelectorAll('td');
const table = document.querySelector('table');

const days = [
        'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thurstday',
    'Friday',
    'Saturday',
]

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const date = new Date();
const currentYear = date.getFullYear();
const currentDay = date.getDay();
console.log(currentDay)
const currentMonth = date.getMonth();

year.textContent = currentYear;
month.textContent = months[currentMonth];

let curMonth = currentMonth;
console.log(curMonth)
let curYear = currentYear;

console.log(curMonth)

table.addEventListener('click', onTableDataClick);
prevBtn.addEventListener('click', onPrevBtnClick);
nextBtn.addEventListener('click', onNextBtnClick);

const state = {};


function onTableDataClick(evt) {

    if (evt.target.tagName === "TD") {
   td.forEach(item => {
            if (item.id === state.prev) {
                console.log(item)
                item.classList.remove('active')
                state.prev = evt.target.id
            }
        console.log("td");
        evt.target.classList.add('active');
        console.log('add active')
        console.log(evt.target)
        console.log(state.prev)
     
    
   })
    }
}

function onPrevBtnClick() {
    td.forEach(item => item.textContent = "");
        if ( month.textContent === 'January') {
        curMonth = 12  
            console.log(curMonth)
                 curYear -= 1;
            year.textContent = curYear
    }

    curMonth = curMonth !==0 ? curMonth : 12
    curMonth -= 1;
    // console.log(curMonth)
    month.textContent = months[curMonth];
        console.log(curMonth);
          year.textContent = curYear

    renderDays(curYear, curMonth + 1)
    td.forEach(item => {

         if (item.id === state.prev) {
            item.classList.remove('active')
         }
                
    })
    td.forEach(item => {
        if (item.textContent === '1' && !item.classList.contains('disabled')) {
            item.classList.add('active');
            state.prev = item.id
        
            if (item.id === '7') {
                        // day.textContent = days[0] 
            } else {
                    // day.textContent = days[item.id]
            }
        }
    })
}

function onNextBtnClick() {
    td.forEach(item => {
        item.textContent = "";
    
    });
        if (month.textContent === 'December') {
            curMonth = -1;  
            curYear += 1;
            year.textContent = curYear
    } 
   curMonth = curMonth !==11  ?  curMonth += 1 : 0;
    month.textContent = months[curMonth];
 
    console.log(curMonth);
         year.textContent = curYear
    renderDays(curYear, curMonth + 1);
    td.forEach(item => {

         if (item.id === state.prev) {
            item.classList.remove('active')
         }
                
    })
    td.forEach(item => {
        if (item.textContent === '1' && !item.classList.contains('disabled')) {
            item.classList.add('active');
            state.prev = item.id
        
            if (item.id === '7') {
                        // day.textContent = days[0] 
            } else {
                    // day.textContent = days[item.id]
            }
        }
    })
}

var days_in_april = 32 - new Date(2013, 3, 32).getDate();
console.log(days_in_april)

function renderDays(year, month) {
    const days = daysInMonth(year, month);
    let prevMonthDays = daysInMonth(year, month - 1);
    let nextMonthDays = daysInMonth(year, month+1);
    console.log(prevMonthDays)
        console.log(nextMonthDays)
    switch (new Date(year, month - 1, 1).getDay()) {
        case 0:
            for (let i = 0; i <= 41; i += 1){
                if (td[i].classList.contains('disabled')) {
                    td[i].classList.remove('disabled')
                }
      
          
            }
                     for (let x = 1; x <= 7; x += 1){
                         td[x].classList.remove('disabled');
            //                for (let w = 29; w <= 42; w += 1){
            //           td[w].classList.remove('disabled'); 
            // }
                }
            let i;
      
            for (i = 1; i <= days; i += 1) {
            
                    td[i + 5].textContent = i
            }
            let y;
                for ( y = 5; y >= 0; y -= 1){
                    td[y].textContent = prevMonthDays
                    td[y].classList.add('disabled')
                    prevMonthDays -= 1;
                }
            let count = 1;
   console.log(0)
            for (let z = days + 6; z <= 42; z += 1){
                if (!td[z].textContent) {
                       break
                   }
                    td[z].textContent = count
                    td[z].classList.add('disabled')
                   count += 1;
                   if (count === 7) {
                       break
                   }
               }
            for (let n = 0; n <= 41; n += 1){
                if (n >= 35) {
                    if (!td[n].classList.contains('disabled')) {
                        for (let c = 35; c <= 41; c += 1){
                            td[c].textContent = "";
                        }
                    }
                }}
            break;
        case 1:
                     for (let i = 0; i <= 41; i += 1){
                if (td[i].classList.contains('disabled')) {
                    td[i].classList.remove('disabled')
                }
             
            }
               for (let x = 0; x <= 7; x += 1){
                    td[x].classList.remove('disabled');
               }
            // for (let w = 29; w <= 42; w += 1){
            //     if (td[w].classList.contains('disabled')) {
            //                td[w].classList.remove('disabled');
            //     }
            // }
            console.log(td[29].classList.contains('disabled'))
            for (let i = 1; i <= days; i += 1) {
                td[i - 1].textContent = i; 
            }
             
                let count8 = 1;
   
               for (let z = days; z <= 42; z += 1){
                    td[z].textContent = count8
                    td[z].classList.add('disabled')
                   count8 += 1;
                   if (count8 === 7) {
                       break
                   }
                    }
     
                for (let n = 0; n <= 41; n += 1){
                if (n >= 35) {
                    if (!td[n].classList.contains('disabled')) {
                        for (let c = 35; c <= 41; c += 1){
                            td[c].textContent = "";
                        }
                    }
                }}
            break;
        case 2:
                     for (let i = 0; i <= 41; i += 1){
                if (td[i].classList.contains('disabled')) {
                    td[i].classList.remove('disabled')
                }
         
            }
                    for (let x = 1; x <= 7; x += 1){
                    td[x].classList.remove('disabled');
                    }
            //   for (let w = 29; w <= 42; w += 1){
            //           td[w].classList.remove('disabled'); 
            // }
            for (let i = 1; i <= days; i += 1) {
                td[i].textContent = i;
                
            }
        
                    for (let y = 0; y >= 0; y -= 1){
                    td[y].textContent = prevMonthDays
               td[y].classList.add('disabled')
                    prevMonthDays -= 1;
                    }
                    let count1 = 1;
   
               for (let z = days+1; z <= 42; z += 1){
                    td[z].textContent = count1
                    td[z].classList.add('disabled')
                   count1 += 1;
                   if (count1 === 7) {
                       break
                   }
                    }
                for (let n = 0; n <= 41; n += 1){
                if (n >= 35) {
                    if (!td[n].classList.contains('disabled')) {
                        for (let c = 35; c <= 41; c += 1){
                            td[c].textContent = "";
                        }
                    }
                }}
            break;
        case 3:
                     for (let i = 0; i <= 41; i += 1){
                if (td[i].classList.contains('disabled')) {
                    td[i].classList.remove('disabled')
                }
        
            }
                     for (let x = 1; x <= 7; x += 1){
                    td[x].classList.remove('disabled');
                     }
            //   for (let w = 29; w <= 42; w += 1){
            //           td[w].classList.remove('disabled'); 
            // }
            for (let i = 1; i <= days; i += 1) {
                td[i + 1].textContent = i;
            }
                    for (let y = 1; y >= 0; y -= 1){
                    td[y].textContent = prevMonthDays
                     td[y].classList.add('disabled')
          
                    prevMonthDays -= 1;
                    }
                    let count2 = 1;
   
               for (let z = days+2; z <= 42; z += 1){
                    td[z].textContent = count2
                    td[z].classList.add('disabled')
                   count2 += 1;
                   if (count2 === 7) {
                       break
                   }
               }
                for (let n = 0; n <= 41; n += 1){
                if (n >= 35) {
                    if (!td[n].classList.contains('disabled')) {
                        for (let c = 35; c <= 41; c += 1){
                            td[c].textContent = "";
                        }
                    }
                }}
            break;
        case 4:
                     for (let i = 0; i <= 41; i += 1){
                if (td[i].classList.contains('disabled')) {
                    td[i].classList.remove('disabled')
                }
          
            }
                     for (let x = 1; x <= 7; x += 1){
                    td[x].classList.remove('disabled');
                     }
        //  for (let w = 29; w <= 42; w += 1){
        //               td[w].classList.remove('disabled'); 
        //     }
            for (let i = 1; i <= days; i += 1) {
                td[i + 2].textContent = i;
            }
                    for (let y = 2; y >= 0; y -= 1){
                    td[y].textContent = prevMonthDays
                  td[y].classList.add('disabled')
            
                    prevMonthDays -= 1;
                    }
                    let count3 = 1;

               for (let z = days+3; z <= 42; z += 1){
                    td[z].textContent = count3
                    td[z].classList.add('disabled')
                   count3 += 1;
                   if (count3 === 7) {
                       break
                   }
               }
                for (let n = 0; n <= 41; n += 1){
                if (n >= 35) {
                    if (!td[n].classList.contains('disabled')) {
                        for (let c = 35; c <= 41; c += 1){
                            td[c].textContent = "";
                        }
                    }
                }}
            break;
        case 5:
                     for (let i = 0; i <= 41; i += 1){
                if (td[i].classList.contains('disabled')) {
                    td[i].classList.remove('disabled')
                }
           
            }
                     for (let x = 1; x <= 7; x += 1){
                    td[x].classList.remove('disabled');
                     }
            //   for (let w = 29; w <= 42; w += 1){
            //           td[w].classList.remove('disabled'); 
            // }
            for (let i = 1; i <= days; i += 1) {
                td[i + 3].textContent = i;
            }
                    for (let y = 3; y >= 0; y -= 1){
                    td[y].textContent = prevMonthDays
          td[y].classList.add('disabled')
             
                    prevMonthDays -= 1;
                    }
                    let count4 = 1;
   
               for (let z = days+4; z <= 42; z += 1){
                    td[z].textContent = count4
                    td[z].classList.add('disabled')
                   count4 += 1;
                   if (count4 === 7) {
                       break
                   }
               }
                for (let n = 0; n <= 41; n += 1){
                if (n >= 35) {
                    if (!td[n].classList.contains('disabled')) {
                        for (let c = 35; c <= 41; c += 1){
                            td[c].textContent = "";
                        }
                    }
                }}
            break;
        case 6:
            console.log(td)
                     for (let i = 0; i <= 41; i += 1){
                if (td[i].classList.contains('disabled')) {
                    td[i].classList.remove('disabled')
                }
           
            }
                     for (let x = 1; x <= 7; x += 1){
                    td[x].classList.remove('disabled');
                     }
            //   for (let w = 29; w <= 42; w += 1){
            //           td[w].classList.remove('disabled'); 
            // }
            for (let i = 1; i <= days; i += 1) {
                td[i + 4].textContent = i;
            }
                    for (let y = 4; y >= 0; y -= 1){
                    td[y].textContent = prevMonthDays
             td[y].classList.add('disabled')
     
                    prevMonthDays -= 1;
                    }
                    let count5 = 1;
   
               for (let z = days+5; z <= 42; z += 1){
                    td[z].textContent = count5
                    td[z].classList.add('disabled')
                   count5 += 1;
                   if (count5 === 7) {
                       break
                   }
               }
                for (let n = 0; n <= 41; n += 1){
                if (n >= 35) {
                    if (!td[n].classList.contains('disabled')) {
                        for (let c = 35; c <= 41; c += 1){
                            td[c].textContent = "";
                        }
                    }
                }}
            break;
    }

}
document.addEventListener('DOMContentLoaded', () => {
    renderDays(currentYear, currentMonth + 1);
    td.forEach(item => {
          if (+item.textContent === date.getDate()) {
              item.classList.add('active')
              state.prev = item.id;
              console.log(state)
    }
    })
  
})

function daysInMonth(year,month) {
return 32 - new Date(year, month-1, 32).getDate();
};

const usernameInput = document.getElementById('username');
const userPhone = document.getElementById('user-phone');

const patterns = {
    phone: /^\+380\d{2}\s\d{3}\s\d{2}\s\d{2}$/,
    errorPhone: /^([A-Z]|[А-Я]|[a-z]|[а-я]|@|\.|[0-9])/,
    name: /^([A-Z]|[А-Я])/,
    number: /^@|[0-9]|\./,
    email: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}@[a-z]{2,}\.(com|ua|dp|uk)$/
}

console.log(patterns.errorPhone.test('6'))

usernameInput.addEventListener('input', checkName);
userPhone.addEventListener('input', checkPhone);

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









