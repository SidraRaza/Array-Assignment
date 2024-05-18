// question#1
const products = [
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
function changeColor(product, newColor) {
    if (newColor === 'red') {
        product.price *= 1.1; // increase by 10%
    }
    else if (newColor === 'blue') {
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
const students = [
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
];
function calculateTheAverageGrade(grades) {
    return grades.reduce((accumulator, current) => accumulator + current, 0) / grades.length;
}
students.forEach(students => {
    let averageGrade = calculateTheAverageGrade(students.grades);
    console.log(`Name: ${students.name}`);
    console.log(`Average Grades: ${averageGrade.toFixed(2)}`);
});
const employees = [
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
function calculateSalary(employee) {
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
export {};
