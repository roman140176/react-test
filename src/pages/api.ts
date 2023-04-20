export type Params = {
    name: string;
    email: string;
    password: string;
}

 
export const register = (params: Params) => new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(JSON.stringify({
        status: 'error',
        errors: [
            { field: 'name', message: 'Неправильно указано имя' },
            { field: 'email', message: 'Такой email уже зарегистрирован' },
            { field: 'password', message: 'Пароль слишком короткий' },
            { field: 'password', message: 'Пароль должен содержать цифры' },
        ],
    }))), 3000)
})