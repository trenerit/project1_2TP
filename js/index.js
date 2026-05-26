'use strict';

// console.log('start');
// const
// let
// var

// for(let i = 1; i <= 10; i++) {
    //     console.log(i);
    // }
    
    // console.log('To jest poza pętlą',i);
    
    // const tab1 = [];
    
    // tab1.push(100);
    
    // console.log(tab1);
    
    // function kania() {
    //     console.log('jsdhfjhsgjsah');
    // }
    
    // const btn1 = document.getElementById('headerBtn');
    
    // console.log(btn1);
    
    // btn1.addEventListener('click', () => {
    //     console.log('jsdhfjhsgjsah');
    //     const h1 = document.querySelector('header h1');
    //     h1.innerText = 'lqksjhdkjsahdfkjsadhflkas ahjsdjkshdjkls';
    // })
    // console.log('end');

    // const hamburger = document.querySelector('.material-symbols-outlined');

    // hamburger.addEventListener('click', () => {
    //     alert('iudiosuoia');
    // });

    const iconsMenu = document.querySelectorAll('.menu span');
    
    const clickElem = (e) => {
        // console.log(e.target);
        
        const close = document.querySelectorAll('.menu span')[1];
        const menu = document.querySelectorAll('.menu span')[0];
        const menuHamburger = document.querySelector('.menu-hamburger');
        
        if(e.target.innerText == 'menu') {
            
            e.target.classList.add('class-none');
            // e.target.style.display = 'none';
            
            close.classList.remove('class-none');
            close.classList.add('class-block');
            // close.style.display = 'block';
            menuHamburger.classList.remove('class-none');
            menuHamburger.classList.add('class-flex');
            // menuHamburger.style.display = 'flex';
            menuHamburger.style.animationName = 'menuShow';
        }
        
        
        if(e.target.innerText == 'close') {
            
            // e.target.style.display = 'none';
            e.target.classList.remove('class-block');
            e.target.classList.add('class-none');
            // menu.style.display = 'block';
            menu.classList.remove('class-none');
            menu.classList.remove('class-block');
            // menuHamburger.style.display = 'none';
            
            menuHamburger.style.animationName = 'menuClose';
            // menuHamburger.classList.add('class-none');
            menuHamburger.classList.remove('class-flex');
        }
            
    }

    iconsMenu.forEach((elem, index) => {
        elem.addEventListener('click', clickElem);
    });