export default class Masks {
    constructor() {
        this.numberField = document.querySelector('#number')
        this.numberField.addEventListener('input', this.applyMask.bind(this));

        this.dateField = document.querySelector('#date')
        this.dateField.addEventListener('input', this.applyMask.bind(this))

        this.cvcField = document.querySelector('#cvc')
        this.cvcField.addEventListener('input', this.applyMask.bind(this))

        this.nameField = document.querySelector('#name')
        this.nameField.addEventListener('input', this.applyMask.bind(this))
    }

    applyMask() {
        this.nameField.value = this.name(this.nameField.value)
        this.numberField.value = this.numberCard(this.numberField.value);
        this.dateField.value = this.dateNumber(this.dateField.value)
        this.cvcField.value = this.cvcNumber(this.cvcField.value)
    }

    name(value) {
        return value = value.replace(/[^a-zA-Z\s]/g, '')
    }

    numberCard(value) {
        value = value.replace(/\D/g, '');

        if (value.length > 12) {
            return value.replace(/(\d{4})(\d{4})(\d{4})(\d{1,4})/, '$1 $2 $3 $4');
        } else if (value.length > 8) {
            return value.replace(/(\d{4})(\d{4})(\d{1,4})/, '$1 $2 $3');
        } else if (value.length > 4) {
            return value.replace(/(\d{4})(\d{1,4})/, '$1 $2');
        }

        return value
    }

    dateNumber(value) {
        value = value.replace(/\D/g, '');

        if (value.length >= 3) {
            value = value.replace(/^(\d{2})(\d{1,2})/, '$1/$2');
        }

        return value
    }

    cvcNumber(value) {
        return value = value.replace(/\D/g, '')
    }
}
