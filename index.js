// Write your solution in this file!

const employee ={
    name :`Alex`,
    addrees :`20109-Nakuru`,
}

const updateEmployeeWithKeyAndValue =(employee,key,value)=>{

const newEmployee ={...employee};

newEmployee[key]=value;

return newEmployee;

}

const destructivelyDeleteFromEmployeeByKey =(employee,key)=>{

delete employee[key];

return employee;
}

//updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee:
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value)=>{

employee[key]=value;

return employee;

}

//deletes `key` from a clone of employee and returns the new employee (it is non-destructive):
const deleteFromEmployeeByKey = (employee, key)=>{

const newEmployee={...employee};

delete newEmployee[key];

return newEmployee;

}



console.log(updateEmployeeWithKeyAndValue(employee,`language`,`JavaScript`));
