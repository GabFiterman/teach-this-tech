const themeToggle = document.getElementById('theme-toggle');
const bodyClass = document.body.classList;
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

        const data = {
            name: name,
            email: email,
            notify: notify,
        };

        const customAxios = axios.create({
            baseURL: 'http://localhost:3035'
        });
        
        customAxios
            .post('/save-data', data)
            .then((response) => {
                console.log(response.data);
                alert('Dados enviados com sucesso!');
            })
            .catch((error) => {
                alert('Erro ao salvar os dados!');
                throw new Error('Erro ao salvar os dados', error);
            });
    });
});
