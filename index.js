const employee = {employees: [
    {name: 'John', streetAddress: '2984 slim st'},
    {name: 'Allen', streetAddress: '1995 apple st'},
    {name: 'Jules', streetAddress: '28824 johnson st'}]}

const updateEmployeeWithKeyAndValue = (employees, key, value) => {
    return Object.assign({}, employees, {[key]: value});
}
    
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
    const newObj = Object.assign({}, employee);
    delete newObj[key];
    return newObj;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    Object.assign({}, employee);
    delete employee[key];
    return employee;
}

    //Write your solution in this file!
