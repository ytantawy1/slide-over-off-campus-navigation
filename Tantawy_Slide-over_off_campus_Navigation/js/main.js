var btn =document.querySelector('.tog-btn');

btn.addEventListener('click', function(){
    document.querySelector('nav').classList.toggle('show-nav');
    let expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    let menu = this.nextElementSibling;
    menu.hidden = !menu.hidden;
});