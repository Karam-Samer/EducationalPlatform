const form = document.getElementById('my-form')
const username_input = document.getElementById('username')
const password_input = document.getElementById('password')
const error_box = document.querySelector('.error-box')
const error_message = document.getElementById('errormessages')

// Verify required DOM elements exist
if (!form || !username_input || !password_input || !error_box || !error_message) {
    console.error('Required DOM elements not found');
    throw new Error('Required DOM elements not found');
}

function getLoginErrors(username_input,password_input){
    let errors = []
    if(username_input === ''){
        errors.push('الرجاء ادخال اسم المستخدم')
    }

    if(password_input === ''){
        errors.push('الرجاء ادخال كلمة السر')
    }
    return errors;
}

const all_inputs = [username_input,password_input] 

all_inputs.forEach(input =>{    
    input.addEventListener('input',() => {
        error_box.style.display = 'none'
        error_message.innerText = ''
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = getLoginErrors(
        username_input.value,
        password_input.value,
    );

    if (errors.length > 0) {
        error_message.innerText = errors.join("\n");
        error_box.style.display = 'block';
    } else {
        error_box.style.display = 'none';
        error_message.innerText = '';
        window.location.href = 'index.html';
    }
});