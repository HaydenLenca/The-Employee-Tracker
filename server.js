const inquirer = require('inquirer');
// const mysql = require('mysql');
const db = require('./db/index');
// require('console.table');

function init() {
    firstOptions();
}

const firstOptions = () => {
    inquirer.prompt({
        type: 'list',
        name: 'firstOptions',
        message: 'Where would you like to navigate to?',
        choices: [
            'view all departments',
            'view all roles', 
            'view all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role',
            'quit'
        ],
    }).then(function (userInput) {
        switch (userInput.firstOptions) {
            case 'view all departments':
                viewDeparment();
                break;

            case 'view all roles':
                viewRole();
                break;
                
            case 'view all employees':
                viewEmployee();
                break;

            case 'add a department':
                addDepartment();
                break;

            case 'add a role':
                addRole();
                break;

            case 'add an employee':
                addEmployee();
                break;
            
            case 'update an employee role':
                apdateEmployee();
                break;
         
            case 'quit':
                quit();
        }
    });
};

function quit() {
    console.log('Bye and have a nice day');
    process.exit();
}

function viewDeparment() {
    db.veiwDepartment()
      .then(([rows]) => {
        let departments = rows;
          console.table(departments);
            })
              .then(() => firstOptions());
}

function viewRole() {
    db.viewRole()
      .then(([rows]) => {
        let role = rows;
          console.table(role);
            })
              .then(() => firstOptions());
}

function viewEmployee() {
    db.viewEmployee()
      .then(([rows]) => {
        let employee = rows;
          console.table(employee);
            })
              .then(() => firstOptions());
}

function addDepartment() {
    inquirer.prompt([
        {
            name: 'name',
            message: 'What is the name of the new department?',
        }, 
    ]).then((department) => {
        db.addDepartment(department)
          .then(() => console.log(`Added ${department.name} to the departments.`))
          .then(() => firstOptions());
    });
}

function addRole() {
    db.veiwDepartment().then(([rows]) => {
        let departments = rows;
        const departmentChoices = departments.map(({ id, Departments }) => ({
            name: Departments,
            value: id,
        }));
        inquirer.prompt([
            {
                name: 'title',
                message: 'What is the name for the role?'
            },
            {
                name: 'salary',
                message: 'What is the salary for this role?'
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'What department is the role part of?',
                choices: departmentChoices,
            }
        ]).then((role) => {
            db.addRole(role)
                .then(() => console.log(`Added ${role.name} to the database.`))
                .then(() => firstOptions());
        });
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            name: 'first_name',
            message: 'What is the first name of the employee?'
        },
        {
            name: 'last_name',
            message: 'What is the last name of the employee?'
        },
    ]).then((res) => {
        let firstName = res.first_name;
        let lastName = res.last_name;

        db.viewRole().then(([rows]) => {
            let roles = rows;
            const roleChoices = roles.map(({ id, role_id }) => ({
                name: role_id,
                value: id,
            }));

            inquirer.prompt({
                type: 'list',
                name: 'role_id',
                message: 'what is the employees job title',
                choices: roleChoices,
            }).then((res) => {
                let role_id = res.role_id;


                // working to add employee
                // working to add employee
// working to add employee
// working to add employee
// error when entering role_id



                
                db.viewEmployee().then(([rows]) => {
                    let manager = rows;
                    const managerChoices = manager.map(({ id, first_name, last_name }) => ({
                        name: first_name + '' + last_name,
                        value: id,
                    }));

                    inquirer.prompt({
                        type: 'list', 
                        name: 'manager_id',
                        message: 'Who is the employee manager?',
                        choices: 'managerChoices',
                    }).then((res) => {
                        let employee = {
                            manager_id: res.manager_id,
                            role_id: roleId,
                            first_name: firstName, 
                            last_name: lastName,
                        };

                        db.addEmployee(employee)
                          .then(() =>
                          console.log(`added ${employee.first_name + '' + employee.last_name} to database.`))
                          .then(() => firstOptions());
                    });
                });
            });
        });
    });
};


init();