import React, { Fragment, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NewPerson, Person } from './utils/Person';
import { MyNamespace, OuterNamespace } from './utils/Namespace';

// Declare a global class using declare keyword
declare class GlobalClass {
  constructor(name: string);
  sayHello(): void;
}

type MyObjectType = {
  name: string;
  email: string;
  phone?: number | string,
  dob?: string
};
function App() {
  const ref = useRef<any>()
  const [] = useState<string | number | MyObjectType[] | object>()
  const [] = useState<string>("")
  const [] = useState<null>(null)
  const [] = useState<undefined>(undefined)
  const [] = useState<number>(1234)
  const [] = useState<MyObjectType[]>([])
  const [] = useState<object>({})

  // const func = (data: Data) => {
  //   return data;
  // }
  // const data: Data = {
  //   name: "prem",
  //   email: "govindbiswas079@gmail.com",
  //   phone: 9511723507,
  // };
  // console.log(func(data))

  // class Cricle  {
  //   readonly radius: number
  //   constructor (radius: number) {
  //     this.radius =  radius
  //   }
  // }
  // const cricle = new Cricle(50)
  // console.log(cricle);

  // let preson: { readonly name: string,} = {
  //   name: "Prem",
  // }
  // console.log(preson)

  // let numArr: readonly number[] = [1, 2, 3, 4, 5]
  // // numArr = [7,4,5,6]
  // numArr[0] = 4
  // console.log(numArr)

  // let person: [string, number, string] = ["prem", 1234567809, 'govindbiswas079@gmail.com']
  // console.log(person)


  // function identity<T>(arg: T[], index1: number, index2: number) {
  //   const temp = arg[index1];
  //   arg[index1] = arg[index2]
  //   arg[index2] = temp
  //   return arg;
  // }
  // let result = identity([1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 8)
  // console.log(result)

  // interface Pair<T, U> {
  //   name: T;
  //   email: U;
  //   phone: number
  // }

  // const pair: Pair<string, string> = { name: "prem", email: "govindbiswas079@gmail.com", phone: 9087654321 };
  // console.log(pair);


  // class Animal {
  //   name: string;

  //   constructor(name: string) {
  //     this.name = name;
  //   }

  //   speak(): void {
  //     console.log(`${this.name} makes a noise.`);
  //   }
  // }

  // class Dog extends Animal {
  //   constructor(name: string) {
  //     super(name); // Call the constructor of the superclass
  //   }

  //   speak(): void {
  //     console.log(`${this.name} barks.`);
  //   }
  // }

  // const dog = new Dog('Rex');
  // dog.speak(); // Output: "Rex barks."


  // class Person {
  //   name: string;
  //   email: string;
  //   phone: number;

  //   constructor(name: string, email: string, phone: number) {
  //     this.name = name;
  //     this.email = email;
  //     this.phone = phone;
  //   }

  //   person() {
  //     return {
  //       name: this.name,
  //       email: this.email,
  //       phone: this.phone,
  //     }
  //   }
  // }
  // const person = new Person("Prem", "govindbiswas079@gmail.com", 123456780)
  // console.log(person.person())


  // class Person {
  //   name: string;
  //   email: string;
  //   phone: number;
  //   constructor(name: string, email: string, phone: number) {
  //     this.name = name;
  //     this.email = email;
  //     this.phone = phone;
  //   }
  //   preson_1() {
  //     return {
  //       name: this.name,
  //       email: this.email,
  //       phone: this.phone,
  //     }
  //   }
  //   preson_2() {
  //     return {
  //       email: this.email,
  //       name: this.name,
  //       phone: this.phone,
  //     }
  //   }
  // }
  // class NewPerson extends Person {
  //   constructor(name: string, email: string, phone: number) {
  //     super(name, email, phone)
  //   }
  //   newPersom() {
  //     return {
  //       name: this.name,
  //       email: this.email,
  //       phone: this.phone,
  //     }
  //   }
  // }
  // const person = new NewPerson("prem", "prem@gmail.com", 1234567890)
  // console.log(person.newPersom())

  // enum Direction {
  //   Up = 10,
  //   Down = 10,
  //   Left = 10,
  //   Right = 10,
  // }

  // let playerDirection: Direction = Direction.Up;
  // console.log(playerDirection); // Output: 0

  // playerDirection = Direction.Down;
  // console.log(playerDirection); // Output: 3

  // const person = new NewPerson("Govinda Biswas", "govindbiswas079@gmail.com", 1234567890)
  // console.log(person.person())

  // interface UserInfo {
  //   name: string,
  //   email: string,
  //   phone: number | string,
  //   readonly dob: string
  // }

  // const userinfo: UserInfo = {
  //   name: "Prem Biswas",
  //   email: "prem@gmail.com",
  //   phone: "1234567809",
  //   dob: "07/03/2001"
  // }
  // userinfo.phone = 9511723507;
  // console.log(userinfo)

  // console.log(MyNamespace.myVariable)
  // console.log(MyNamespace.myFunction("Prem Bisws"))
  // console.log(MyNamespace.myFunction2("Prem Bisws"))
  // const obj = new MyNamespace.MyClass("Prem Biswas")
  // console.log(obj.getPublicName());

  // const array: readonly number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  // console.log(OuterNamespace.InnerNamespace.innerFunction());

  // Define a type for the objects in the array
  // type MyObjectType = {
  //   name: string;
  //   email: string;
  //   phone?: number | string,
  //   dob?: string
  // };
  // // Declare and initialize an array of objects
  // const arrayOfObjects: MyObjectType[] = [
  //   { name: "Alice", email: "exaple@gmail.com" },
  //   { name: "Bob", email: "exaple@gmail.com" },
  //   { name: "Charlie", email: "exaple@gmail.com" }
  // ];
  // arrayOfObjects.map((value: MyObjectType) => { console.log(value) })

  // Array of numbers
  // let numbers: number[] = [1, 2, 3, 4, 5];
  // // Array of strings
  // let strings: string[] = ["apple", "banana", "orange"];
  // // tuppel Array of strings and number
  // let strings: [string, string, string?, number?,] = ["Prem", "prem@gmaail.com", "07/03/2001", 1234567890];
  // // Array of booleans
  // let booleans: boolean[] = [true, false, true, false];
  // // Array of mixed types
  // let mixed: (number | string | boolean | object)[] = [1, "two", true, 4, "five", false, { name: "prem" }];


  // Guard in typescript
  // function isString(value: any): value is string {
  //   return typeof value === "string";
  // }
  // let example: any = 12346;
  // if (isString(example)) {
  //   console.log(example.toUpperCase()); // No error, because TypeScript knows `example` is a string here
  // }




  // Interface defining the shape of a Point object
  // interface Point {
  //   x: number;
  //   y: number;
  // }
  // // Type alias defining a complex type for a Rectangle
  // type Rectangle = {
  //   topLeft: Point;
  //   bottomRight: Point;
  // }
  // // Function that calculates the area of a rectangle
  // function calculateArea(rectangle: Rectangle): number {
  //   const width = rectangle.bottomRight.x - rectangle.topLeft.x;
  //   const height = rectangle.bottomRight.y - rectangle.topLeft.y;
  //   return width * height;
  // }
  // // Creating a Point object
  // const point1: Point = { x: 0, y: 0 };
  // const point2: Point = { x: 5, y: 5 };
  // // Creating a Rectangle object
  // const rectangle: Rectangle = {
  //   topLeft: point1,
  //   bottomRight: point2
  // };
  // // Calculating and logging the area of the rectangle
  // console.log("Area of the rectangle:", calculateArea(rectangle));

  // console.log(window.globalFunction)

  // const instance = new GlobalClass("John");
  // Access and call methods on the instance
  // instance.sayHello();

  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => { console.log(event) }} />
    </Fragment>
  );
}

export default App;
