const themeToggle = document.getElementById('theme-toggle');
const bodyClass = document.body.classList;
const messageSuccess = document.getElementById('message-success');
const messageError = document.getElementById('message-error');

let val;

themeToggle.addEventListener('click', () => {
    if (val) {
        bodyClass.remove('theme-light');
        bodyClass.add('theme-dark');
        val = 0;
    } else {
        bodyClass.add('theme-light');
        bodyClass.remove('theme-dark');
        val = 1;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const meuFormulario = document.getElementById('form-example');

    meuFormulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const notify = document.getElementById('notify').checked;
        const notifyTimer = 2500;

        const data = {
            name: name,
            email: email,
            notify: notify,
        };

        const customAxios = axios.create({
            baseURL: 'http://localhost:3035',
        });

        customAxios
            .post('/save-data', data)
            .then((response) => {
                console.log(response.data);

                messageSuccess.classList.remove('hidden');

                setTimeout(() => {
                    messageSuccess.classList.add('hidden');
                }, notifyTimer);
            })
            .catch((error) => {
                messageError.classList.remove('hidden');

                setTimeout(() => {
                    messageError.classList.add('hidden');
                }, notifyTimer);
                throw new Error('Erro ao salvar os dados', error);
            });
    });
});
