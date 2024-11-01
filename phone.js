let button = document.getElementById('button');
let phone = document.getElementById('phone');
let mtnAir = document.getElementById('mtnAir');
let menu = document.getElementById('menu');





let lockScreen = [
    {
        mtnAirtel: 'MTN NG - AIRTEL NG',
        icons: '<span class="material-symbols-outlined" id="white">signal_cellular_alt</span>',
        battery: `<span class="material-symbols-outlined" id="white">battery_horiz_075</span>`,
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        
    }
]

let con = JSON.parse(localStorage.getItem('saveContacts')) || [];
let pictures = JSON.parse(localStorage.getItem('savePictures')) || [];

let tracks = [
    {
        song : "WhatsApp Audio 2024-09-09 at 14.55.55_1908dd92.dat.unknown",
        name : "Heroblack"
    },
    {
        song: "Balling.unknown",
        name : "Heroblack"
    },
    {
        song: "everybody nigga.unknown",
        name : "Heroblack"
    },
    {
        song: "garments.unknown",
        name : "Heroblack"
    },
    {
        song: "lagbaja.mp3",
        name : "lagbaja"
    },
    {
        song: "speechless.mp3",
        name : "Micheal Jackson"
    },
    {
        song: "theweeknd.mp3",
        name : "theweeknd"
    },
    {
        song: "Umbrella.mp3",
        name : "Nasboi"
    }
   

]

let num=0;


// off and lock screen
// off and lock screen
// off and lock screen
// off and lock screen

button.addEventListener('click', ()=> {
    num++
    if (num === 2){
        num = 0
    }
    if(num === 0){
        phone.innerHTML = ''
       phone.style.backgroundImage = 'url("black.png")'
        
    }else{
        hero()
        phone.style.backgroundImage = 'url("vooo.png")'
        phone.innerHTML = `<P id="round"></p><section id="dis">
        <div id="top"><p id="mtnAir">${lockScreen[0].mtnAirtel}</p><p id="icons">${lockScreen[0].icons} ${lockScreen[0].icons} ${lockScreen[0].battery}</p></div>
        <div id="divv">
        <section><span id="clock"></span></section>
        <span id="da"></span>
        </div>
        <button id="menu" onclick="men()"></button>
        </section>`
    } 
   
});



let hero = function(){
    setInterval(() =>{
        let myDate = new Date
        const time = myDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

        let clock = document.getElementById('clock');
        let da = document.getElementById('da');
        let month = myDate.getMonth().toLocaleString();
        let dayInMonth = myDate.getDate().toLocaleString();
        let day = myDate.getDay().toLocaleString();
        
        if(da){
            da.textContent = `${lockScreen[0].days[day]}, ${lockScreen[0].months[month]} ${dayInMonth}`
        }
      
        if(clock){
        clock.innerText = `${time}`
        }else{
            clearInterval(hero)
        }
        
        
    }, 300)
}

// passwordscreen
// passwordscreen
// passwordscreen
// passwordscreen

function men (){
    phone.innerHTML = ''
    phone.innerHTML = `<div><P id="round"></p></div><div id="boo">
    <p id="pass">Enter your password</p>
    <input type="password" id='inp'>
    <section id="numSec">
    <div class="num"><button class="dan" onclick="one()">1</button><button class="dan" onclick="two()">2</button><button class="dan" onclick="three()">3</button></div>
    <div class="num"><button class="dan" onclick="four()">4</button><button class="dan" onclick="five()">5</button><button class="dan" onclick="six()">6</button></div>
    <div class="num"><button class="dan" onclick="seven()">7</button><button class="dan" onclick="eight()">8</button><button class="dan" onclick="nine()">9</button></div>
    <div class="num"><button class="dan" onclick="delet()"><span class="material-symbols-outlined">backspace</span></button><button class="dan" onclick="zero()">0</button><button class="dan" onclick="passwordCheck()"><span class="material-symbols-outlined">check</span></button></div>
    <div class="num"><button class="dann" onclick="back()">Back</button></div>
    </section>
    </div>`
}

function one () {
    let inp = document.getElementById('inp');
    inp.innerText = inp.value += "1"
}
function two () {
    let inp = document.getElementById('inp');
    inp.innerText = inp.value += "2"
}
function three () {
    let inp = document.getElementById('inp');
    inp.innerText = inp.value += "3"
}
function four () {
    let inp = document.getElementById('inp');
    inp.innerText = inp.value += "4"
}
function five () {
    let inp = document.getElementById('inp');
    inp.innerText = inp.value += "5"
}
function six () {
    let inp = document.getElementById('inp');
    inp.innerText = inp.value += "6"
}
function seven () {
    let inp = document.getElementById('inp');
    inp.innerText = inp.value += "7"
}
function eight () {
    let inp = document.getElementById('inp');
    inp.innerText = inp.value += "8"
}
function nine () {
    let inp = document.getElementById('inp');
    inp.innerText = inp.value += "9"
}
function zero () {
    let inp = document.getElementById('inp');
    inp.innerText = inp.value += "0"
}
function delet() {
    let inp = document.getElementById('inp');
    let deleted = inp.value.toString().slice(0, -1)
    inp.value = deleted 
}


// app screen
// app screen
// app screen
// app screen
function passwordCheck(){
    let inp = document.getElementById('inp');
    let pass = document.getElementById('pass');
    
    if (inp.value === '1122'){
        phone.innerHTML= ''
        phone.innerHTML = `<P id="round"></p>
        <section id="dis">
        <div class="topp"><p><span id="ass"></span></p><p id="icons">${lockScreen[0].icons} ${lockScreen[0].icons} ${lockScreen[0].battery}</p></div>
        </section>
        <section id="menuPage">
        
        <div class="line">
        <button id="call" onclick="phoneCall()"></button>
        <button id="contacts" onclick="contact()"></button>
        <button id="calculator" onclick="calc()"></button>
        <button id="music" onclick="playList()"></button>
        </div>
        <div class="linee">
        <button id="alarm" onclick="setAlarm()"></button>
        <button id="camera" onclick="cameras()"></button>
        <button id="files" onclick="fileList()"></button>
        </div>

         <section class="buttt">
        <button id="backgroundless"><span class="material-symbols-outlined">density_medium</span></button>
       <button  id="backgroundless" onclick="backToAppScreen()"><span class="material-symbols-outlined">radio_button_unchecked</span></button> 
       <button onclick="backk()"  id="backgroundless"><span class="material-symbols-outlined">arrow_back_2</span></button>
       </section>
        </section>
        
        `

        
            setInterval(()=>{
                let myDate = new Date
                const time = myDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
            let ass = document.getElementById('ass');
    
            if(ass){
                ass.innerText = `${time}`
            }
    
    
           
        })
    
    }else{
        pass.innerText= `Incorrect password. Try again`
        inp.value = ''

    }
}


   
// back to lockscreen
// back to lockscreen
// back to lockscreen
// back to lockscreen
// back to lockscreen
function back() {
    hero()
        phone.style.backgroundImage = 'url("vooo.png")'
        phone.innerHTML = `<P id="round"></p><section id="dis">
        <div id="top"><p id="mtnAir">${lockScreen[0].mtnAirtel}</p><p id="icons">${lockScreen[0].icons} ${lockScreen[0].icons} ${lockScreen[0].battery}</p></div>
        <div id="divv">
        <section><span id="clock"></span></section>
        <span id="da"></span>
        </div>
        <button id="menu" onclick="men()"></button>
       
        </section>`
}


// Contact screen
// Contact screen
// Contact screen
// Contact screen

function contact() {
   displayContacts()  
    
}

function displayContacts(){
    phone.innerHTML= ''
    phone.style.backgroundImage = 'url("white.png")'
    phone.innerHTML= `<P id="round"></p>
        <section id="dis">
        <div class="topp"><p><span id="asss"></span></p><p id="icons"><span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">battery_horiz_075</span></p></div>
        </section>
        <div class="topp">
        <p id="cont">Contacts</p>
        <span class="material-symbols-outlined">settings</span>
        </div>
        <input type="text" id="search">
        <div id="coin">
        
        </div>

        <section class="butt">
        <button id="backgroundless"><span class="material-symbols-outlined">density_medium</span></button>
       <button  id="backgroundless" onclick="backToAppScreen()"><span class="material-symbols-outlined">radio_button_unchecked</span></button> 
       <button onclick="backk()"  id="backgroundless"><span class="material-symbols-outlined">arrow_back_2</span></button>
       </section>
        `
        

    setInterval(()=>{
        let myDate = new Date
        const time = myDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        let asss = document.getElementById('asss');
       
        if(asss){
            asss.innerText = `${time}`
        }

       
    })
    let coin = document.getElementById('coin');
    
    for (let i=0; i<con.length; i++){
        coin.innerHTML += `<div class="lizz"><button class="liz" onclick="callAContact(${i})"><span class="random">${con[i].name[0]}</span><span class="vee" id=${i}>${con[i].name}</span></button> <button class="liz" onclick="deleteCon(${i})"><span class="material-symbols-outlined">delete</span></button></div>`
        
    
    }    
}
// delete contact
// delete contact
// delete contact
// delete contact
function deleteCon(id){
    let deleted = con.splice(id, 1)
    console.log(deleted);
    console.log(con);
    localStorage.removeItem('saveContacts');
    localStorage.setItem('saveContacts', JSON.stringify(con));
    displayContacts();
}


// callacontact
// callacontact
// callacontact
// callacontact

function callAContact(id){
    

    
    phone.style.backgroundImage = 'url("vooo.png")'
        phone.innerHTML = `<P id="round"></p>
        <section id="dis">
        <div class="topp"><p><span id="ass"></span></p><p id="icons">${lockScreen[0].icons} ${lockScreen[0].icons} ${lockScreen[0].battery}</p></div>
        </section>

        <section class="cen">
        <p id="name"></p>
        <p id="sha"></p>
        <p class="sha">calling...</p>
        </section>


        <main class="minora">
        <div id="minor">
         <section class="butte">
        <span class="material-symbols-outlined" id="sssh">graphic_eq</span>
       <span class="material-symbols-outlined" id="sssh">mic_off</span>
       <span class="material-symbols-outlined" id="sss">add</span>
       </section>

       <section class="butte">
       <span class="material-symbols-outlined" id="sss">videocam</span>
       <span class="material-symbols-outlined" id="sss">pause</span>
       <span class="material-symbols-outlined" id="sss">person</span>
       </section>
       </div>

       <section class="buttee">
       <span class="material-symbols-outlined" id="sss">videocam</span>
        <button id="endcall" onclick="endPhoneCall()"></button>
       <span class="material-symbols-outlined" id="sssh">apps</span>
       </section>
       </main>
        `
       
       
       let name = document.getElementById('name')
       let number = document.getElementById('sha')
        name.textContent = `${con[id].name}`
        number.textContent = `${con[id].number}`

        inter()  

        setTimeout(() =>{
            phoneCallScreen();
        }, 4000)
}

// back to app screen
// back to app screen
// back to app screen
// back to app screen ma

function backk() {
    
    
        // phone.innerHTML= ''
        phone.style.backgroundImage = 'url("vooo.png")'
        phone.innerHTML = `<P id="round"></p>
        <section id="dis">
        <div class="topp"><p><span id="ass"></span></p><p id="icons">${lockScreen[0].icons} ${lockScreen[0].icons} ${lockScreen[0].battery}</p></div>
        </section>
        <section id="menuPagesss">
        
        <div class="line">
        <button id="call" onclick="phoneCall()"></button>
        <button id="contacts" onclick="contact()"></button>
        <button id="calculator" onclick="calc()"></button>
        <button id="music" onclick="playList()"></button>
        </div>

        <div class="linee">
        <button id="alarm" onclick="setAlarm()""></button>
        <button id="camera" onclick="cameras()"></button>
        <button id="files" onclick="fileList()"></button>
        </div>

          <section class="buttt">
        <button id="backgroundless"><span class="material-symbols-outlined">density_medium</span></button>
       <button  id="backgroundless" onclick="backToAppScreen()"><span class="material-symbols-outlined">radio_button_unchecked</span></button> 
       <button onclick="backk()"  id="backgroundless"><span class="material-symbols-outlined">arrow_back_2</span></button>
       </section>
        </section>`

 inter()
        
    
}

let inter = function(){
    setInterval(()=>{let myDate = new Date
        const time = myDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        let ass = document.getElementById('ass');
         
    
        if(ass){
            ass.innerText = `${time}`
        }
    
       
    })
} 
// phone screen
// phone screen
// phone screen
// phone screen
let numerall;
function phoneCall() {
   phoneCallScreen() 
}

let phoneCallScreen = function () {
    phone.innerHTML= ''
    phone.style.backgroundImage = 'url("white.png")'
    phone.innerHTML= `<P id="round"></p>
    <section id="dis">
    <div class="topp"><p><span id="asss"></span></p><p id="icons"><span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">battery_horiz_075</span></p></div>
    </section>

    <div id="numbers">
    <p id="bold">Recents</p>

    <div id="ikon">
    <span class="material-symbols-outlined">search</span>
    <span class="material-symbols-outlined">settings</span>
    </div>
    </div>
<div id="hide"><button id="po" onclick="addNew()"><span class="material-symbols-outlined">add</span> Add contact</button></div>

      <section id="numSecc">
      <div>
      <input type="text" id='inpp'>
      <button class="danj" onclick="tdeletee()"><span class="material-symbols-outlined">backspace</span></button>
      </div>
    <div class="num"><button class="danj" onclick="tonee()">1</button><button class="danj" onclick="ttwoo()">2</button><button class="danj" onclick="tthreee()">3</button></div>
    <div class="num"><button class="danj" onclick="tfourr()">4</button><button class="danj" onclick="tfivee()">5</button><button class="danj" onclick="tsixx()">6</button></div>
    <div class="num"><button class="danj" onclick="tsevenn()">7</button><button class="danj" onclick="teightt()">8</button><button class="danj" onclick="tninee()">9</button></div>
    <div class="num"><button class="danj" onclick="tasterik()"><span class="material-symbols-outlined">emergency</span></button><button class="danj" onclick="tzeroo()">0</button><button class="danj" onclick="thash()"><span class="material-symbols-outlined">tag</span></button></div>
    <div class="numa"><button class="dannn" onclick="calll()"></button></div>
    </section>
    
    <section class="butt">
        <button id="backgroundless"><span class="material-symbols-outlined">density_medium</span></button>
       <button  id="backgroundless" onclick="backToAppScreen()"><span class="material-symbols-outlined">radio_button_unchecked</span></button> 
       <button onclick="backk()"  id="backgroundless"><span class="material-symbols-outlined">arrow_back_2</span></button>
       </section>

     
    `
let inpp = document.getElementById('inpp');
numerall = inpp;
    setInterval(()=>{
        let myDate = new Date
        const time = myDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        let asss = document.getElementById('asss');
        
        if(asss){
            asss.innerText = `${time}`
        }
       
    })
    
}

function tonee () {
    let inpp = document.getElementById('inpp');
    inpp.innerText = inpp.value += "1"
    let hide = document.getElementById('hide');
    hide.style.display = 'block'
    
}
function ttwoo () {
    let inpp = document.getElementById('inpp');
    inpp.innerText = inpp.value += "2"
    let hide = document.getElementById('hide');
    hide.style.display = 'block'
}
function tthreee () {
    let inpp = document.getElementById('inpp');
    inpp.innerText = inpp.value += "3"
    let hide = document.getElementById('hide');
    hide.style.display = 'block'
}
function tfourr () {
    let inpp = document.getElementById('inpp');
    inpp.innerText = inpp.value += "4"
    let hide = document.getElementById('hide');
    hide.style.display = 'block'
}
function tfivee () {
    let inpp = document.getElementById('inpp');
    inpp.innerText = inpp.value += "5"
    let hide = document.getElementById('hide');
    hide.style.display = 'block'
}
function tsixx () {
    let inpp = document.getElementById('inpp');
    inpp.innerText = inpp.value += "6"
    let hide = document.getElementById('hide');
    hide.style.display = 'block'
}
function tsevenn () {
    let inpp = document.getElementById('inpp');
    inpp.innerText = inpp.value += "7"
    let hide = document.getElementById('hide');
    hide.style.display = 'block'
}
function teightt () {
    let inpp = document.getElementById('inpp');
    inpp.innerText = inpp.value += "8"
    let hide = document.getElementById('hide');
    hide.style.display = 'block'
}
function tninee () {
    let inpp = document.getElementById('inpp');
    inpp.innerText = inpp.value += "9"
    let hide = document.getElementById('hide');
    hide.style.display = 'block'
}
function tzeroo () {
    let inpp = document.getElementById('inpp');
    inpp.innerText = inpp.value += "0"
    let hide = document.getElementById('hide');
    hide.style.display = 'block'
}
function tasterik() {
    let inpp = document.getElementById('inpp');
    inpp.value = inpp.value += '*' 
    let hide = document.getElementById('hide');
    hide.style.display = 'block'
}
function tdeletee() {
    let inpp  = document.getElementById('inpp');
    let deleted = inpp.value.toString().slice(0, -1)
    inpp.value = deleted 
    let hide = document.getElementById('hide');
    hide.style.display = 'none'
}
function thash() {
    let inpp = document.getElementById('inpp');
    inpp.value = inpp.value += '#' 
    let hide = document.getElementById('hide');
    hide.style.display = 'block'
}

// dial a number
// dial a number
// dial a number
// dial a number


function calll() {
    if(numerall.value === ''){
        phoneCallScreen();
    }else{
        phone.style.backgroundImage = 'url("vooo.png")'
        phone.innerHTML = `<P id="round"></p>
        <section id="dis">
        <div class="topp"><p><span id="ass"></span></p><p id="icons">${lockScreen[0].icons} ${lockScreen[0].icons} ${lockScreen[0].battery}</p></div>
        </section>

        <section class="cen">
        <p id="name"></p>
        <p class="sha">${numerall.value}</p>
        <p class="sha">calling...</p>
        </section>


        <main class="minora">
        <div id="minor">
         <section class="butte">
        <span class="material-symbols-outlined" id="sssh">graphic_eq</span>
       <span class="material-symbols-outlined" id="sssh">mic_off</span>
       <span class="material-symbols-outlined" id="sss">add</span>
       </section>

       <section class="butte">
       <span class="material-symbols-outlined" id="sss">videocam</span>
       <span class="material-symbols-outlined" id="sss">pause</span>
       <span class="material-symbols-outlined" id="sss">person</span>
       </section>
       </div>

       <section class="buttee">
       <span class="material-symbols-outlined" id="sss">videocam</span>
        <button id="endcall" onclick="endPhoneCall()"></button>
       <span class="material-symbols-outlined" id="sssh">apps</span>
       </section>
       </main>
        `
        inter()  

        setTimeout(() =>{
            phoneCallScreen();
        }, 4000)
    }
     

        
}



// endcall
// endcall
// endcall
// endcall
function endPhoneCall (){
    phoneCallScreen()
    
}

// addnew contact
// addnew contact
// addnew contact
// addnew contact
function addNew(){
    console.log('added')
    phone.innerHTML= ''
    phone.style.backgroundImage = 'url("white.png")'
    phone.innerHTML= `<P id="round"></p>
    <section id="dis">
    <div class="topp"><p><span id="asss"></span></p><p id="icons"><span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">battery_horiz_075</span></p></div>
    </section>
    <div id="nohide"><button id="opo" onclick="backToCallScreen()"><span class="material-symbols-outlined">arrow_back</span> Create New Contact</button> <button onclick="saveContact()" id="jup"><span class="material-symbols-outlined">contact_page</span></button></div>
    <div id="ran"><span class="material-symbols-outlined" id="siz">photo_camera</span></div>

    <div class="var">
    <label for="inputt" class="imp">Name</label>
    <input id="inputt" type="text">
    </div>

    <div class="var">
    <label for="inputte" class="imp">Number</label>
    <input id="inputte" type="text">
    </div>

     <p id="passe"></p>
    `
    
}

// addcontact
// addcontact
// addcontact
// addcontact
function saveContact(){
    let namer = document.getElementById('inputt');
    let passe = document.getElementById('passe');
    let numer = document.getElementById('inputte');
    if(namer.value ==='' && numer.value ===''){
       passe.textContent = 'fill in all inputs'
    }else {
        let contacter = {
            name: namer.value,
            number: numer.value
        }
        con.push(contacter);
    localStorage.setItem('saveContacts', JSON.stringify(con));
    phoneCallScreen()
    }

    
}


// backtocallscreen
// backtocallscreen
// backtocallscreen
function backToCallScreen(){
    phoneCallScreen()
}

// appscreenbutton
// appscreenbutton
// appscreenbutton
// appscreenbutton
function backToAppScreen(){
     // phone.innerHTML= ''
     phone.style.backgroundImage = 'url("vooo.png")'
     phone.innerHTML = `<P id="round"></p>
     <section id="dis">
     <div class="topp"><p><span id="ass"></span></p><p id="icons">${lockScreen[0].icons} ${lockScreen[0].icons} ${lockScreen[0].battery}</p></div>
     </section>
     <section id="menuPagesss">
     
     <div class="line">
     <button id="call" onclick="phoneCall()"></button>
     <button id="contacts" onclick="contact()"></button>
     <button id="calculator" onclick="calc()"></button>
     <button id="music" onclick="playList()"></button>
     </div>

     <div class="linee">
        <button id="alarm" onclick="setAlarm()"></button>
        <button id="camera" onclick="cameras()"></button>
        <button id="files" onclick="fileList()"></button>
        </div>

       <section class="buttt">
     <button id="backgroundless"><span class="material-symbols-outlined">density_medium</span></button>
    <button  id="backgroundless" onclick="backToAppScreen()"><span class="material-symbols-outlined">radio_button_unchecked</span></button> 
    <button onclick="backk()"  id="backgroundless"><span class="material-symbols-outlined">arrow_back_2</span></button>
    </section>
     </section>`

inter()
     

}
function calc(){
    phone.innerHTML= ''
    phone.style.backgroundImage = 'url("white.png")'
    phone.innerHTML= `<P id="round"></p>
    <section id="dis">
    <div class="topp"><p><span id="asss"></span></p><p id="icons"><span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">battery_horiz_075</span></p></div>
    </section>

     
        <section id="section">
            <input type="text" id="input" value="">
            <div>
                <button class="butter" onclick="clearScreen()">AC</button>
                <button class="butter" onclick="delettt()">DE</button>
                <button class="butter" onclick="dot()">.</button>
                <button class="butter" onclick="dividd()">/</button>
            </div>
            <div>
                <button class="butter" onclick="oneee()">1</button>
                <button class="butter" onclick="twoo()">2</button>
                <button class="butter" onclick="threee()">3</button>
                <button class="butter" onclick="multip()">*</button>
            </div>
            <div>
                <button class="butter" onclick="fourr()">4</button>
                <button class="butter" onclick="fivee()">5</button>
                <button class="butter" onclick="sixx()">6</button>
                <button class="butter" onclick="minus()">-</button>
            </div>
            <div>
                <button class="butter" onclick="sevenn()">7</button>
                <button class="butter" onclick="eightt()">8</button>
                <button class="butter" onclick="ninee()">9</button>
                <button class="butter" onclick="plus()">+</button>
            </div>
            <div>
                <button class="buttse" onclick="coolll()">HERO.B</button>
                <button class="butter" onclick="zerr()">0</button>
                <button class="butter" onclick="eqss()">=</button>
            </div>
        </section>
        
    
    <section class="butt">
        <button id="backgroundless"><span class="material-symbols-outlined">density_medium</span></button>
       <button  id="backgroundless" onclick="backToAppScreen()"><span class="material-symbols-outlined">radio_button_unchecked</span></button> 
       <button onclick="backk()"  id="backgroundless"><span class="material-symbols-outlined">arrow_back_2</span></button>
       </section>

     
    `
let inpp = document.getElementById('inpp');
numerall = inpp;
    setInterval(()=>{
        let myDate = new Date
        const time = myDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        let asss = document.getElementById('asss');
        

        if(asss){
            asss.innerText = `${time}`
        }

       
    })
    
}
function oneee () {   
    let input = document.getElementById('input');
    input.value = input.value + '1';
}

function twoo () {   
    let input = document.getElementById('input');
    input.value = input.value + '2';
}
function threee () {   
    let input = document.getElementById('input');
    input.value = input.value + '3';
}
function fourr () {   
    let input = document.getElementById('input');
    input.value = input.value + '4';
}
function fivee () {   
    let input = document.getElementById('input');
    input.value = input.value + '5';
}
function sixx () {   
    let input = document.getElementById('input');
    input.value = input.value + '6';
}
function sevenn () {   
    let input = document.getElementById('input');
    input.value = input.value + '7';
}
function eightt () {   
    let input = document.getElementById('input');
    input.value = input.value + '8';
}
function ninee () {   
    let input = document.getElementById('input');
    input.value = input.value + '9';
}
function zerr () {   
    let input = document.getElementById('input');
    input.value = input.value + '0';
}
function coolll () {   
    let input = document.getElementById('input');
    input.value = 'One cool motherfucker';
}
function clearScreen () {   
    let input = document.getElementById('input');
    input.value = '';
}
function dividd () {   
    let input = document.getElementById('input');
    input.value += '/';
}
function eqss () {   
    let input = document.getElementById('input');
    input.value = eval(input.value);
}
function dot () {   
    let input = document.getElementById('input');
    input.value += '.';
}
function multip () {   
    let input = document.getElementById('input');
    input.value += '*';
}
function minus () {   
    let input = document.getElementById('input');
    input.value += '-';
}
function plus () {   
    let input = document.getElementById('input');
    input.value += '+';
}
function delettt () {   
    let input = document.getElementById('input');
    input.value = input.value.toString().slice(0, -1)
}

// playList
// playList
// playList
// playList
function playList(){
  displayPlayList()
   
}

function displayPlayList (){
    phone.innerHTML= ''
    phone.style.backgroundImage = 'url("white.png")'
    phone.innerHTML= `<P id="round"></p>
    <section id="dis">
    <div class="topp"><p><span id="asss"></span></p><p id="icons"><span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">battery_horiz_075</span></p></div>
    </section>

    <div id="numbers">
    <p id="bold">Recents</p>

    <div id="ikon">
    <span class="material-symbols-outlined">search</span>
    <span class="material-symbols-outlined">settings</span>
    
    </div>
</div>


    <section id="list"><section>


    <section class="buttte">
        <button id="backgroundless"><span class="material-symbols-outlined">density_medium</span></button>
       <button  id="backgroundless" onclick="backToAppScreen()"><span class="material-symbols-outlined">radio_button_unchecked</span></button> 
       <button onclick="backk()"  id="backgroundless"><span class="material-symbols-outlined">arrow_back_2</span></button>
       </section>

     
    `
let inpp = document.getElementById('inpp');
numerall = inpp;
    setInterval(()=>{
        let myDate = new Date
        const time = myDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        let asss = document.getElementById('asss');
        

        if(asss){
            asss.innerText = `${time}`
        }

       
    })
for(let i=0; i<tracks.length; i++){
    let list = document.getElementById('list');
    list.innerHTML +=`<button class="myList" onclick="playit(${i})">
    <div class="icon"></div>
    <div class="twoSp">
    <span class="elip">${tracks[i].name}</span>
    <span class="elip">${tracks[i].song}</span>
    </div>
    </button>`
}
}


// playasong
// playasong
// playasong
// playasong
function playit(song){
    
list.innerHTML = ""
list.style.overflow = 'auto'
list.innerHTML = `<section id="square">

<span class="elip">${tracks[song].name}</span>
    <span class="elip">${tracks[song].song}</span>
</section>
<audio controls id="melodies">
<source src="${tracks[song].song}" type="audio/mp3">
</audio>

<section class="butts">
<button id="backgroundless"><span class="material-symbols-outlined">density_medium</span></button>
<button  id="backgroundless" onclick="backToAppScreen()"><span class="material-symbols-outlined">radio_button_unchecked</span></button> 
<button onclick="backkToMusicList()"  id="backgroundless"><span class="material-symbols-outlined">arrow_back_2</span></button>
</section>`
}

function backkToMusicList(){
    displayPlayList()
}
// setalarm?
// setalarm?
// setalarm?
// setalarm?

function setAlarm(){
    phone.innerHTML= ''
    phone.style.backgroundImage = 'url("white.png")'
    phone.innerHTML= `<P id="round"></p>
    <section id="dis">
    <div class="topp"><p><span id="asss"></span></p><p id="icons"><span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">battery_horiz_075</span></p></div>
    </section>

    
<audio src="Umbrella.mp3" id="play"></audio>
<input type="time" id="timeStyle">
<button class="set" onclick="playAm()">Set Alarm</button>
<button class="set" onclick="stopAm()">Stop Alarm</button>
   


    <section class="buttter">
        <button id="backgroundless"><span class="material-symbols-outlined">density_medium</span></button>
       <button  id="backgroundless" onclick="backToAppScreen()"><span class="material-symbols-outlined">radio_button_unchecked</span></button> 
       <button onclick="backk()"  id="backgroundless"><span class="material-symbols-outlined">arrow_back_2</span></button>
       </section>

     
    `
let inpp = document.getElementById('inpp');
numerall = inpp;
    setInterval(()=>{
        let myDate = new Date
        const time = myDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        let asss = document.getElementById('asss');
        

        if(asss){
            asss.innerText = `${time}`
        }

       
    })

}

function playAm(){
    let playe = document.getElementById('play');

    let myDate = new Date
        const time = myDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    let timeStyle = document.getElementById('timeStyle');
    
    if(timeStyle.value === time.slice(0,5)){
        
        playe.play();
        console.log('alarmddddd')
        
    }
}


function stopAm(){
    let playe = document.getElementById('play');
    playe.pause();
}

// camera
// camera
// camera
// camera
function cameras(){
     
    cam();
        
}

async function cam(){
    phone.innerHTML= ''
    phone.style.backgroundImage = 'url("black.png")'
    phone.innerHTML= `<P id="round"></p>
    <section id="dis">
    <div class="topp"><p><span id="ass"></span></p><p id="icons">${lockScreen[0].icons} ${lockScreen[0].icons} ${lockScreen[0].battery}</p></div>
    </section>
    
    
    <video id="video"></video>

    <div id="very">
    <button id="snal" onclick="enla()"><img src="" id="cap"></button>
   <button onclick="snap()" id="sna"></button>
   <button id="files" onclick="fileList()"></button>
    </div>
   <canvas id="canvas"></canvas>
   


    <section class="buttterio">
        <button id="backgroundlessbl"><span class="material-symbols-outlined">density_medium</span></button>
       <button  id="backgroundlessbl" onclick="backToAppScreen()"><span class="material-symbols-outlined">radio_button_unchecked</span></button> 
       <button onclick="backk()"  id="backgroundlessbl"><span class="material-symbols-outlined">arrow_back_2</span></button>
       </section>

     
    `

    const canvas = document.getElementById('canvas');
    canvas.style.display = 'none'
    let inpp = document.getElementById('inpp');
    numerall = inpp;
        setInterval(()=>{
            let myDate = new Date
            const time = myDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
            let asss = document.getElementById('asss');
            
    
            if(asss){
                asss.innerText = `${time}`
            }
    
          
           
        })
        let video = document.getElementById('video');
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    await video.play();
}


// snapapic
// snapapic
// snapapic
// snapapic
function snap() {
   
    const video = document.getElementById('video');
    const cap = document.getElementById('cap');
    const canvas = document.getElementById('canvas');
 canvas.style.display = 'none'
    const context = canvas.getContext('2d')
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0)


    const imageDataURL = canvas.toDataURL('image/jpeg');
    console.log(imageDataURL);
    cap.src = imageDataURL

    let pict = {
        url: imageDataURL
    }
    pictures.push(pict);
localStorage.setItem('savePictures', JSON.stringify(pictures));
 
}


// fileList
function fileList(){
    phone.innerHTML= ''
    phone.style.backgroundImage = 'url("white.png")'
    phone.innerHTML= `<P id="round"></p>
    <section id="dis">
    <div class="topp"><p><span id="asss"></span></p><p id="icons"><span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">battery_horiz_075</span></p></div>
    </section>

    
<section id="herob">
<button onclick="disPic()" class="whe">Pictures</button>
<button class="whe" onclick="playList()">Music</button>
</section>
   


    <section class="buttterion">
        <button id="backgroundless"><span class="material-symbols-outlined">density_medium</span></button>
       <button  id="backgroundless" onclick="backToAppScreen()"><span class="material-symbols-outlined">radio_button_unchecked</span></button> 
       <button onclick="backk()"  id="backgroundless"><span class="material-symbols-outlined">arrow_back_2</span></button>
       </section>

     
    `
}
// picturelist
// picturelist
// picturelist
// picturelist
function disPic(){
    phone.innerHTML= ''
    phone.style.backgroundImage = 'url("white.png")'
    phone.innerHTML= `<P id="round"></p>
    <section id="dis">
    <div class="topp"><p><span id="asss"></span></p><p id="icons"><span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">battery_horiz_075</span></p></div>
    </section>

    
 <section id="list"><section>


    <section class="buttten">
        <button id="backgroundless"><span class="material-symbols-outlined">density_medium</span></button>
       <button  id="backgroundless" onclick="backToAppScreen()"><span class="material-symbols-outlined">radio_button_unchecked</span></button> 
       <button onclick="backk()"  id="backgroundless"><span class="material-symbols-outlined">arrow_back_2</span></button>
       </section>

     
    `
    let list = document.getElementById('list')
    for(let i=0; i<pictures.length; i++){
        list.innerHTML += `<img src=${pictures[i].url} alt="" class="res"><button class="liz" onclick="deletePicture(${i})"><span class="material-symbols-outlined">delete</span></button></div>`
        console.log(pictures[i])
    }
}


// showimag
function enla(){
    phone.innerHTML= ''
    phone.style.backgroundImage = 'url("black.png")'
    phone.innerHTML= `<P id="round"></p>
    <section id="dis">
    <div class="topp"><p><span id="ass"></span></p><p id="icons">${lockScreen[0].icons} ${lockScreen[0].icons} ${lockScreen[0].battery}</p></div>
    </section>
    
    
    <img src="" id="capp">
   


    <section class="buttterio">
        <button id="backgroundlessbl"><span class="material-symbols-outlined">density_medium</span></button>
       <button  id="backgroundlessbl" onclick="backToAppScreen()"><span class="material-symbols-outlined">radio_button_unchecked</span></button> 
       <button onclick="backToCam()"  id="backgroundlessbl"><span class="material-symbols-outlined">arrow_back_2</span></button>
       </section>

     
    `

    let cap = document.getElementById('capp')
    cap.src = `${pictures[pictures.length-1].url}`
console.log(`${pictures[pictures.length-1].url}`);
    
}

// deletimage
// deletimage
// deletimage
function deletePicture(id){
    let deleted = pictures.splice(id, 1)
    
    localStorage.removeItem('savePictures');
    localStorage.setItem('savePictures', JSON.stringify(pictures));


    phone.innerHTML= ''
    phone.style.backgroundImage = 'url("white.png")'
    phone.innerHTML= `<P id="round"></p>
    <section id="dis">
    <div class="topp"><p><span id="asss"></span></p><p id="icons"><span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">signal_cellular_alt</span> <span class="material-symbols-outlined" id="black">battery_horiz_075</span></p></div>
    </section>

    
 <section id="list"><section>


    <section class="buttten">
        <button id="backgroundless"><span class="material-symbols-outlined">density_medium</span></button>
       <button  id="backgroundless" onclick="backToAppScreen()"><span class="material-symbols-outlined">radio_button_unchecked</span></button> 
       <button onclick="backk()"  id="backgroundless"><span class="material-symbols-outlined">arrow_back_2</span></button>
       </section>

     
    `
    let list = document.getElementById('list')
    for(let i=0; i<pictures.length; i++){
        list.innerHTML += `<img src=${pictures[i].url} alt="" class="res"><button class="liz" onclick="deletePicture(${i})"><span class="material-symbols-outlined">delete</span></button></div>`
        console.log(pictures[i])
    }
}

// backtocam
// backtocam
// backtocam
// backtocam
function backToCam(){
    cam();
}