// step 1 of Part 3 
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

// Getting started
// step 1 declare variable via queryselector
let mainEl = document.querySelector('main');
// step 2
mainEl.style.backgroundColor = 'var(--main-bg)'
// step 3
let h1 = document.createElement('h1')
mainEl.appendChild(h1)
h1.textContent = 'DOM Manipulation'
// step 4
mainEl.classList.add('flex-ctr')
//  Part 2
let topMenuEl = document.getElementById('top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')
//  step 1 cont. Part 3
menuLinks.forEach((link)=>{
    // step 2
    let a = document.createElement('a')
    // step 3
    a.href = link.href
    // step 4
    a.textContent = link.text
    // step 5 
    topMenuEl.appendChild(a)
}
)




















console.log("Hello, world!");