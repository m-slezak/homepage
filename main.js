console.log('Siema');



const greeting = (name, age) => {
    console.log(`Witaj Drogi Odwiedzający mam ${age} lata i nazywam się ${name}`);
}

greeting ('Michał', 36);


console.log(typeof 2);
console.log(typeof '2');
if (2 === '2') {
    console.log ('Tak to prawda');
}


const hamburger = document.querySelector(".hamburger--js")

hamburger.addEventListener('click', () =>{
 const nav = document.querySelector('.navigation--js');
 nav.classList.toggle('navigation--open');

})






