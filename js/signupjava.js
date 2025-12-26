const form = document.getElementById('my-form')
const firstname_input = document.getElementById('first-name')
const lastname_input = document.getElementById('last-name')
const username_input = document.getElementById('username')
const phonenumber_input = document.getElementById('phone-number')
const email_input = document.getElementById('email')
const password_input = document.getElementById('password')
const confirm_password_input = document.getElementById('confirm-password')
const error_message = document.getElementById('errormessages')
const error_box = document.querySelector('.error-box')

form.addEventListener('submit' , (e) =>{
    e.preventDefault()
    let errors = []
        errors = getSignupErrors(firstname_input.value,lastname_input.value,username_input.value,phonenumber_input.value,email_input.value,password_input.value,confirm_password_input.value)

    if(errors.length > 0){
        error_message.innerText = errors.join("\n")
        error_box.style.display = 'block'

    }
    else{
        error_box.style.display = 'none'
        error_message.innerText = ''
    }

})
function getSignupErrors(firstname_input,lastname_input,username_input,phonenumber_input,email_input,password_input,confirm_password_input){
    let errors = []
    if(firstname_input === ''){
        errors.push('الرجاء ادخال الاسم الاول')
    }
    
    if(lastname_input === ''){
        errors.push('الرجاء ادخال الاسم الاخير')
    }

    if (username_input === ''){
        errors.push('الرجاء ادخال اسم المستخدم')
    }
    if(phonenumber_input === ''){
        errors.push('الرجاء ادخال رقم الهاتف')
    }

    if(email_input === ''){
        errors.push('الرجاء ادخال البريد الإلكتروني')
    }

    else if(!email_input.includes('@') || !email_input.includes('.')){
        errors.push('دخل بريد الكتروني صحيح !!')
    }

    if(password_input === ''){
        errors.push('الرجاء ادخال كلمة السر')
    }
    if(confirm_password_input === ''){
        errors.push('الرجاء ادخال تاكيد كلمة السر')
    }
    if(password_input !== confirm_password_input){
        errors.push('كلمتا المرور غير متطابقتين')
    }

    return errors;
}


const all_inputs = [firstname_input,lastname_input,username_input,phonenumber_input,email_input,password_input,confirm_password_input] 

all_inputs.forEach(input =>{    
    input.addEventListener('input',() => {
            if( error_message && error_box){
                error_box.style.display = 'none'
                error_message.innerText = ''
            }
    })
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = getSignupErrors(
        firstname_input.value,
        lastname_input.value,
        username_input.value,
        phonenumber_input.value,
        email_input.value,
        password_input.value,
        confirm_password_input.value
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