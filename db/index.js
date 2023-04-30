const myConnection = require('./myConnection');




class dataBase {
    constructor(myConnection) {
        this.myConnection = myConnection;
    }

    veiwDepartment() {
        return this.myConnection.promise().query('SELECT * FROM department;');
    }

    viewRole() {
        return this.myConnection.promise().query('SELECT * FROM role;')
    }
                          
            
    viewEmployee() {
        return this.myConnection.promise().query('SELECT * FROM employee;')
    }
               
           
    addDepartment(department) {
        return this.myConnection.promise().query('INSERT INTO department SET ?', department);
    }
          
    addRole(role) {
        return this.myConnection.promise().query('INSERT INTO role SET ?', role);
    }


    addEmployee(employee) {
        return this.myConnection.promise().query('INSERT INTO employee SET ?', employee);
    }
     
     
    updateEmployee(employee, roleId) {
        return this.myConnection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [
            roleId,
            employee
        ]);
    }

}

module.exports = new dataBase(myConnection);

