// let username = "Atiya";
// let age = 22;
// let isLoggedIn: boolean = true;

// function greetUser(username: string, title?: string): string {
//   return `Hello, ${username}`;
// }

// const message = greetUser("Ain");

// function createUser(name: string, age: number, isAdmin: boolean): string {
//   return `${name} is ${age} years old and is ${isAdmin} an admin`;
// }

// const user = createUser("Hassaan", 21, false);

//*************************************88 */
// const product = {
//   name: "Laptop",
//   price: 1500,
//   inStock: true,
// };

// function describeProduct(product: {
//   name: string;
//   price: number;
//   inStock: boolean;
// }) {
//   return `${product.name} costs ${product.price} and is ${product.inStock}`;
// }

// const productDetails = describeProduct(product);

//************************** */

/*
// TYPE Aliases
type Product = {
    name: string;
    price: number;
    inStock: boolean;
}

const product = {
  name: "Laptop",
  price: 1500,
  inStock: true,
};

function describeProduct(product: Product) {
 return `${product.name} costs ${product.price} and is ${product.inStock}`;

}

const productDetails = describeProduct(product);
*/

// ************************************

// type and interface aliases challenge

// type User = {
//   readonly id: string;
//   name: string;
//   email: string;
//   age: number;
//   bio?: string;
// };

// const user : User = {
//   id: "1",
//   name: "Atiya",
//   email: "atiya12@gmail.com",
//   age: 22,
// };

// function getUserSummary(user: User) : string {
//   return `${user.name} ${user.id} - ${user.email} age is ${user.age}`;
// }

// const userSummary = getUserSummary(user);

//***************************** */

/*
// Array and tuples
interface User {
    readonly id : string;
    name: string;
    age: number;
}

const arr : number[] = [1,2,3,4,5]

const users : User[] = [
    {
        id: '1',
        name: 'Atiya',
        age: 22,
    },
    {
        id: '2',
        name: 'Hassaan',
        age: 22,
    },
     {
        id: '3',
        name: 'Izhan',
        age: 21,
    }
]

function getUserNames(users: User[]) {
return users.map(user => user.name)
}

const userNames = getUserNames(users)
*/

// ***********************************************

// Unions and Lateral unions

type DiscountType = "student" | "premium" | "none";

function calculateDiscount(type: DiscountType) {
  if (type === "student") {
    return `Student discount`;
  } else if (type === "premium") {
    return `Premium discount`;
  } else if (type === "none") {
    return `No discount`;
  }
}

calculateDiscount("student");
calculateDiscount("premium");
calculateDiscount("none");
