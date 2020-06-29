
let myFirstObj = {}; //Boş yeni bir object ** Yaygın kullanım
let mySecObj = new Object(); // Boş yeni bir object ** yaygın olmayan bir kullanım

let myEmail = 'bulentkyc@gmail.com';

//let client = {name: 'Bulent', email: myEmail, pass: '123'};

let client = {
    name: 'Bulent',
    email: myEmail,
    pass: '123'
};

let email = {
    to: 'abc@def.com',
    cc: null,
    bcc: null,
    subject: 'Test e-mail',
    message: 'Test'
}

console.log(email.subject);
console.log(email['to']);

let param = 'message';

console.log(email[param]);

let userPref = window.prompt(`please enter which property you want from email object : `);
alert(email[userPref]);

client.isActive = true;

let userPropKey = prompt('Please type your key');
let userPropVal = prompt('Please type your value');


client.userPropKey = userPropVal;
client[userPropKey] = userPropVal;

if (Boolean(client.userPropKey) == true){
    console.log('client.userPropKey is true');
} else {
    console.log('client.userPropKey is not true');
}

if (client.isActive == true){
    console.log('client.isActive is true');
} else {
    console.log('client.isActive is not true');
}

console.log(client);

client.userPropKey = '';

delete client.userPropKey;

client['userInput-'+userPropKey] = userPropVal;

let mail = prompt('please type your email address');

client.mail = mail;
client[mail] = mail;

let user = {
    mail
}

console.log(user);

//------------------------------------02/01/2020-----------------------
console.log({
    to: 'abc@def.com',
    cc: null,
    bcc: null,
    subject: 'Test e-mail',
    message: 'Test'
});

localStorage.setItem('userEmail',client.mail);
//localStorage.setItem('email', email);

// object olarak görünen email json ile string e çevrilir

localStorage.setItem('email', JSON.stringify(email));

//let res = localStorage.getItem('email');
//console.log(res.to);

let res = JSON.parse( localStorage.getItem('email')) ;
console.log(res.to);


// // aşamalı anlatımı kullanımı doğru olmayan şekildedir.
//-------------------------------------------------------
// localStorage.setItem('userEmail',client.mail);
// let strgEmail= JSON.stringify(email);
// localStorage.setItem('email',strgEmail);
// let res = localStorage.getItem('email');
// console.log(res);
// let objEmail=JSON.parse(res);
// console.log(objEmail);



sessionStorage.setItem('time',Date.now());