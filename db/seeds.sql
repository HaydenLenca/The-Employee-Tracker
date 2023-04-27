INSERT INTO department (name)
VALUES ('Sales'),
       ('Warehouse'),
       ('HR');
    --    deparment_id is same as the department id. read carfully

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 35000, 1),
       ('Loader Operator', 20000, 2),
       ('HR Manager', 45000, 3);

-- manager id should be the id of employees
-- also role_id is same as compony_role id 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL),
       ('Don', 'Sheperd', 2, NULL),
       ('Sara', 'Johnson', 3, NULL);