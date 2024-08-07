window.addEventListener("scroll", function(){
    let header = document.querySelector('#menu')
    header.classList.toggle('visivel', window.scrollY > 200)
})