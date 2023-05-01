-- basic list info
INSERT INTO department (name)
VALUES ('Sales'),
       ('Warehouse'),
       ('HR');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 35000, 1),
       ('Loader Operator', 20000, 2),
       ('HR Manager', 45000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 2),
       ('Don', 'Sheperd', 2, NULL),
       ('Sara', 'Johnson', 3, NULL),
       ('Joe', 'Dean', 4, 3);