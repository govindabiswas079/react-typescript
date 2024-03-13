export class Person { // class
    name: string;
    email: string;
    phone: number;

    constructor(name: string, email: string, phone: number) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    person() {
        return {
            name: this.name,
            email: this.email,
            phone: this.phone,
        }
    }
}

export class NewPerson extends Person { // inheritance
    constructor(name: string, email: string, phone: number) {
        super(name, email, phone)
    }

    newPerson() {
        return {
            email: this.email,
            name: this.name,
            phone: this.phone,
        }
    }
}