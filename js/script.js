const buttonEnter = document.querySelector('.button-enter');
const buttonExit = document.querySelector('.button-exit');
const registrationForm = document.querySelector('.registration-form');
const userName = document.getElementById('user-name');
const inputName = document.getElementById('input-name');
const inputPassword = document.getElementById('input-password');
const loginForm = document.getElementById('login-form');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');




console.log(userName);
console.log(inputName)


const login = (user) => {
/*    if(user.login === '' && user.password === '') {
        alert("Введите логин и пароль");
    } else if (user.login === ''){
        alert("Введите логин");
    } else if (user.password === ''){
        alert("Введите пароль");
    } else {*/
        buttonEnter.style.display = 'none';
        buttonExit.style.display = 'block';
        userName.style.display = 'block';
        userName.textContent += user.login;
        registrationForm.style.display = 'none';
        overlay.style.display = 'none';
    }

    const logout = () => {
        buttonEnter.style.display = 'block';
        buttonExit.style.display = 'none';
        userName.style.display = 'none';
        userName.textContent = 'Здравствуйте, ';
        localStorage.removeItem("user");
    }


    buttonEnter.addEventListener('click', () => {
            registrationForm.style.display = 'flex';
            overlay.style.display = 'block';

            })
    buttonExit.addEventListener('click', () => {
            registrationForm.style.display = 'none';
            })

closeBtn.addEventListener('click', () => {
    registrationForm.style.display = 'none';
    overlay.style.display = 'none';
})



loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = {
        login: inputName.value,
        password: inputPassword.value
    }
    localStorage.setItem('user', JSON.stringify(user));
    login(user);
})

buttonExit.addEventListener("click", () => {
    logout();
})

if (localStorage.getItem("user")) {
    login(JSON.parse(localStorage.getItem('user')));
}