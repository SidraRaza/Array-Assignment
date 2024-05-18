// Array Assignment Part(1)

// question#1

type Product = {
  name: string;
  price: number;
  inventory: {
    stock: number;
    colorOptions: string[];
  };
};

const products: Product[] = [
  {
    name: 'Product 1',
    price: 100,
    inventory: {
      stock: 10,
      colorOptions: ['red', 'blue', 'green'],
    },
  },
  {
    name: 'Product 2',
    price: 200,
    inventory: {
      stock: 20,
      colorOptions: ['red', 'blue'],
    },
  },
  {
    name: 'Product 3',
    price: 300,
    inventory: {
      stock: 30,
      colorOptions: ['green', 'blue'],
    },
  },
];

function changeColor(product: Product, newColor: string): void {
  if (newColor === 'red') {
    product.price *= 1.1; // increase by 10%
  } else if (newColor === 'blue') {
    product.price *= 0.95; // decrease by 5%
  }
  product.inventory.colorOptions.push(newColor);
}

products.forEach((product) => {
  console.log(`Name: ${product.name}`);
  console.log(`Price: ${product.price}`);
  console.log(`Stock: ${product.inventory.stock}`);
  console.log(`Available Colors: ${product.inventory.colorOptions.join(', ')}`);
});

// question#2
type Student = {
  name: string,
  grades: number[],
}

const students: Student[] = [
  {
    name: "Sidra Raza",
    grades: [95, 85, 89]

  },
  {
    name: "Ahmed Raza",
    grades: [90, 89, 80]

  },
  {
    name: "Danish Raza",
    grades: [92, 85, 86]

  },

]
function calculateTheAverageGrade(grades: number[]): number {
  return grades.reduce((accumulator, current) => accumulator + current, 0) / grades.length
}

students.forEach(students => {
  let averageGrade = calculateTheAverageGrade(students.grades)
  console.log(`Name: ${students.name}`);
  console.log(`Average Grades: ${averageGrade.toFixed(2)}`);

})

// question#3
type Employee = {
  name: string;
  hoursWorked: number;
  hourlyRate: number;
  salary: number;
};

const employees: Employee[] = [
  {
    name: 'Ahmed Raza',
    hoursWorked: 20,
    hourlyRate: 25,
    salary: 5500,
  },
  {
    name: 'Jane Smith',
    hoursWorked: 30,
    hourlyRate: 30,
    salary: 6500,
  },
  {
    name: 'Bob Johnson',
    hoursWorked: 15,
    hourlyRate: 35,
    salary: 8000,
  },
];

function calculateSalary(employee: Employee): number {
  let totalSalary = employee.salary;
  const hoursBonus = employee.hoursWorked >= 20 ? 0.1 : 0;
  totalSalary += employee.hoursWorked * employee.hourlyRate * (1 + hoursBonus);
  return totalSalary;
}

employees.forEach((employee) => {
  const calculatedSalary = calculateSalary(employee);
  console.log(`Name: ${employee.name}`);
  console.log(`Calculated Salary: ${calculatedSalary.toFixed(2)}`);
});


// Array Assignment Part(2)
// question#1
let nameOfFruits=["apple","banana","mango","orange"];


// question#2
let arrayOfNumbers=[10,20,30,40];


// question#3
let thirdFurit=nameOfFruits[2];
console.log(thirdFurit);


// question#4
arrayOfNumbers[1]=25;
console.log(arrayOfNumbers);


// question#5
nameOfFruits.push("grape");


// question#6
let lastFruit=nameOfFruits.pop()


// question#7
let firstElement=nameOfFruits.shift();


// question#8
nameOfFruits.unshift("kiwi");


// question#9
nameOfFruits.splice(2,0)

// question#10
nameOfFruits.splice(2,0,"pineApple","pear")
console.log(nameOfFruits);

// question#11
let citrusFruits=nameOfFruits.slice(0,2)
console.log(citrusFruits);

// question#12
let lastTwoFurits=nameOfFruits.slice(2,4)
console.log(lastTwoFurits);