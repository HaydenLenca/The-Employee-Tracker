INSERT INTO department (department_name)
VALUES ('Sales', NULL, NULL ,NULL),
       ('Warehouse', NULL, NULL ,NULL),
       ('HR', NULL, NULL ,NULL);
    --    deparment_id is same as the department id. read carfully

INSERT INTO compony_role (title, salary, department_id)
VALUES ('Making sales with the customer', 35,000.00, 1, NULL),
       ('Working orders to be delivered to the customer', 20,000.00, 2, NULL),
       ('Deals with any isues in sales or warhouse', 45,000.00, 3, NULL);

-- manager id should be the id of employees
-- also role_id is same as compony_role id 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL),
       ('Don', 'Sheperd', 2, NULL),
       ('Sara', 'Johnson', 3, NULL);