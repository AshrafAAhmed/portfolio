// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// HAMBURGER MENU START//

const navLinks = document.querySelector('.nav-links')
        function onToggleMenu(e){
            e.name = e.name === 'menu' ? 'close' : 'menu'
            navLinks.classList.toggle('top-[9%]')
        }

// HAMBURGER MENU END//


// subcribe btn start//
document.getElementById('subscribeButton').addEventListener('click', function() {
    document.getElementById('formContainer').classList.remove('hidden');
});

document.addEventListener('click', function(event) {
    const formContainer = document.getElementById('formContainer');
    const subscribeButton = document.getElementById('subscribeButton');
    
    // Check if the click is outside the form container and the button
    if (!formContainer.contains(event.target) && event.target !== subscribeButton) {
        formContainer.classList.add('hidden');
    }
});
// subcribe btn end//






const scriptURL = 'https://script.google.com/macros/s/AKfycbxhH9q8_eXtvfFSaUHb6UIAWMo2imcoB6Fzv7GV6nTXfbr97ZILcm6CjrUiIYJQldFk/exec'
const forms = document.querySelectorAll('form[name="submit-to-google-sheet"], form[name="submit-to-google-sheet2"], form[name="submit-to-google-sheet1"], form[name="submit-to-google-sheet4"]')
const msg = document.getElementById("msg")

forms.forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Thank You For Subscribing!"
                setTimeout(function() {
                    msg.innerHTML = ""
                }, 5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
    })
})


