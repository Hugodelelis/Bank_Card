import { set } from "core-js/core/dict";

export default class Validation {
    constructor() {
        this.form = document.querySelector('#form');
        this.nameField = document.querySelector('#name');
        this.numberField = document.querySelector('#number')
        this.dateField = document.querySelector('#date')
        this.cvcField = document.querySelector('#cvc')
        this.events();
    }

    events() {
        // Adiciona evento de submit ao formulário
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });

        // Adiciona evento de input aos campos para validação em tempo real
        this.dateField.addEventListener('input', () => {
            this.isDateValid()
        })

        this.nameField.addEventListener('input', () => {
            this.isNameValid();
        });

        this.numberField.addEventListener('input', () => {
            this.isNumberValid()
        })

        this.cvcField.addEventListener('input', () => {
            this.isCvcValid()
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const isDateValid = this.isDateValid()
        const isNumberValid = this.isNumberValid()
        const isNameValid = this.isNameValid();
        const isCvcValid = this.isCvcValid()


        if (isNameValid && isNumberValid && isDateValid && isCvcValid) {
            this.form.submit();
            alert('Formulário enviado');
        }
    }

    isNameValid() {
        let valid = true;

        if (this.nameField.value.length <= 3) {
            this.setError(this.nameField, 'O nome deve conter no mínimo 4 caracteres.');
            valid = false;
        }

        if (!this.nameField.value) {
            this.setError(this.nameField, 'Preencha o campo.');
            valid = false;
        }

        if (valid) {
            const errorElement = this.nameField.nextElementSibling;
            if (errorElement && errorElement.classList.contains('error-text')) {
                errorElement.remove();
            }
        }

        return valid;
    }

    isNumberValid() {
        let valid = true

        if (this.numberField.value.length < 19) {
            this.setError(this.numberField, 'Adicione todos números do cartão')
            valid = false
        }

        if (!this.numberField.value) {
            this.setError(this.numberField, 'Preencha o campo.')
            valid = false
        }

        if (valid) {
            const errorElement = this.numberField.nextElementSibling;
            if (errorElement && errorElement.classList.contains('error-text')) {
                errorElement.remove();
            }
        }

        return valid
    }

    isDateValid() {
        let valid = true

        if(!this.dateField.value) {
            this.setError(this.dateField, 'Preencha o campo')
            valid = false
        }

        if (valid) {
            const errorElement = this.dateField.nextElementSibling;
            if (errorElement && errorElement.classList.contains('error-text')) {
                errorElement.remove();
            }
        }

        return valid
    }

    isCvcValid() {
        let valid = true

        if(!this.cvcField.value) {
            this.setError(this.cvcField, 'Preencha o campo')
            valid = false
        }
        
        if (valid) {
            const errorElement = this.cvcField.nextElementSibling;
            // checa se possui o elemento para não dar null
            if (errorElement && errorElement.classList.contains('error-text')) {
                errorElement.remove();
            }
        }
        
        return valid
    }

    setError(campo, msg) {
        // Remove mensagens de erro anteriores no campo específico
        const existingError = campo.nextElementSibling;
        if(existingError && existingError.classList.contains('error-text')) {
            existingError.remove();
        }

        // Cria e adiciona uma nova mensagem de erro
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

