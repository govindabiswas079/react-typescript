// Define a namespace called 'MyNamespace'
export namespace MyNamespace {
    // Define variables, functions, classes within the namespace
    export const myVariable: number = 10;

    export function myFunction(name: string) {
        return `Hello from ${name}!`
    }
    export const myFunction2 = (name: string) => {
        console.log(`Hello from ${name}!`)
    }


    export class MyClass {
        private _name: string;

        constructor(name: string) {
            this._name = name;
        }

        private getName(): string {
            return this._name;
        }

        public getPublicName(): string {
            return this.getName()
        }
    }
}


export namespace OuterNamespace {
    export namespace InnerNamespace {
        export class InnerClass {
            
        }

        export function innerFunction(): void {
            console.log("first")
        }
    }
}

