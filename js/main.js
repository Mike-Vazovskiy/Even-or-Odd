window.onload = function() {
    let btn = document.querySelectorAll('button')
    let value = document.getElementsByTagName('input')
    let answer = document.getElementsByClassName('answer')
    
    value[0].addEventListener('oninput', changeHandler = e => {
        const value = e.value
        e.value = value.replace(/\D/g, '')
    })
    
    btn.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            if (value[0].value == ''){
                answer[0].textContent = 'Please, enter your number first'
            } else if (value[0].value % 2 == 0)  {
                document.body.style.background = "#69f0ae"
                document.body.style.transition = ".5s ease-in-out"
                answer[0].textContent = "Your number is even!"
                value[0].value = ''
            } else {
                document.body.style.background = "#ff8a80"
                document.body.style.transition = ".5s ease-in-out"
                answer[0].textContent = "Your number is odd!"
                value[0].value = ''
            }
        })
    });
}    