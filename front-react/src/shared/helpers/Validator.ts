


export class Validator{
    
    private value: string  = '';
    private messages: string = ''

    public setValue(value: string){
        this.value = value
        return this
    }

    public isPhone(){
        if(!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(this.value)){
            this.messages = 'Неправильный формат номера'
        }
        return this
    }

    public isEmail(){
        if(!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(this.value)){
            this.messages = 'Неправильный формат почты'
        }
        return this
    }

    public isRequered(){
        if(this.value.length < 2){
            this.messages = 'Обязательное поле'
        }
        return this
    }

    public getmessage(){
        let message = this.messages

        this.value = ''
        this.messages = ''

        return message
    }    
}