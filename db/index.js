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
          
// working on adding addRole
    addRole(role) {
        return this.myConnection.promise().query('INSERT INTO role SET ?', role);
    }


    // addEmployee() {

    // }
     
     
    // apdateEmployee() {

    // }

}

module.exports = new dataBase(myConnection);

