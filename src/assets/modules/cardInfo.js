export default class Infos {
    constructor() {
        this.nameField = document.querySelector('#name')
        this.nameInfo = document.querySelector('#nameInfo')

        this.numberField = document.querySelector('#number')
        this.numberInfo = document.querySelector('#numberInfo')

        this.dateField = document.querySelector('#date')
        this.dateInfo = document.querySelector('#dateInfo')

        this.cvcField = document.querySelector('#cvc')
        this.cvcInfo = document.querySelector('#cvcInfo')

        this.applyCard()
    }

    applyCard() {
        this.nameField.addEventListener('input', () => {
            if(this.nameField.value == '') {
                this.nameInfo.innerHTML = 'JANE APPLESEED'
            } else {
                this.nameInfo.innerHTML = this.nameField.value
            }
        })

        this.numberField.addEventListener('input', () => {
            if(this.numberField.value == '') {
                this.numberInfo.innerHTML = '0000 0000 0000 0000'
            } else {
                this.numberInfo.innerHTML = this.numberField.value
            }
        })

        this.dateField.addEventListener('input', () => {
            if(this.dateField.value == '') {
                this.dateInfo.innerHTML = '00/00'
            } else {
                this.dateInfo.innerHTML = this.dateField.value
            }
        })

        this.cvcField.addEventListener('input', () => {
            if(this.cvcField.value == '') {
                this.cvcInfo.innerHTML = '000'
            } else {
                this.cvcInfo.innerHTML = this.cvcField.value
            }
        })
    }
    
}