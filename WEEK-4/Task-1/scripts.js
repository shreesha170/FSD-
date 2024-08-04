const employees = [
    { name: 'Amar', age: 30, department: 'HR', salary: 50000 },
    { name: 'Vimal', age: 25, department: 'IT', salary: 60000 },
    { name: 'Jacquline', age: 35, department: 'Finance', salary: 70000 },
    { name: 'Pooja', age: 28, department: 'IT', salary: 55000 },
    { name: 'Sakar', age: 40, department: 'HR', salary: 65000 }
];

function displayEmployees(employeeList, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    const list = document.createElement('ul');
    employeeList.forEach(employee => {
        const item = document.createElement('li');
        item.textContent = `Name: ${employee.name}, Age: ${employee.age}, Department: ${employee.department}, Salary: ${employee.salary}`;
        list.appendChild(item);
    });
    container.appendChild(list);
}

function showAverageSalary() {
    const averageSalary = calculateAverageSalary(employees);
    document.getElementById('average-salary').textContent = `Average Salary: $${averageSalary.toFixed(2)}`;
}

function calculateAverageSalary(employees) {
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    return totalSalary / employees.length;
}

function showEmployeesInDepartment() {
    const departmentName = document.getElementById('department-name').value;
    const departmentEmployees = findEmployeesInDepartment(employees, departmentName);
    displayEmployees(departmentEmployees, 'department-employees');
}

function findEmployeesInDepartment(employees, department) {
    return employees.filter(employee => employee.department === department);
}

function increaseEmployeeSalaries() {
    const percentage = parseFloat(document.getElementById('increase-percentage').value);
    increaseSalary(employees, percentage);
    displayEmployees(employees, 'increased-salaries');
}

function increaseSalary(employees, percentage) {
    const factor = 1 + (percentage / 100);
    employees.forEach(employee => {
        employee.salary *= factor;
    });
}

function sortAndDisplayEmployeesByAge() {
    const sortedEmployees = sortEmployeesByAge(employees);
    displayEmployees(sortedEmployees, 'sorted-employees');
}

function sortEmployeesByAge(employees) {
    return employees.slice().sort((a, b) => a.age - b.age);
}

// Initial display of employees
displayEmployees(employees, 'employee-list');
