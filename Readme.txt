Hello

Welcome to the live coding test.

Please do the tasks below before starting coding

1. Checkout a new branch with your name and surname
2. Do a npm install
3. Install required packages

Objectives

1. Create a PUT endpoint to consume below schema and do validation checking for each field
Schema
{
"firstName":Alpha String
"lastName":Alpha String
"email":email
"password":Minimum 8 maximum 16 chars. Must include 1 number and 1 special character from this list [@#.,-_]
"mobileNumber":International format
"pinCode":6 digits
}

2. Use an ORM (Knex,Sequelize or any other) to store this information to a database table. Write down to SQL script to create the database and the tables

3. Create a GET endpoint to query the database with email & phoneNumber parameter. Parameter selection must be sensed automatically

4. Create a UPDATE endpoint to do a record update. Query parameter should be sensed automatically.

5. Create a DELETE endpoint to delete a record from the table. Query parameter should be sensed automatically.

Coding Principles

1. All inputs must be sanitized against XSS and SQL injection
2. Endpoints must return 500 Error with a proper error text on error cases {"response":"error","reason":errorReason}. Success cases must return {"response":"success","data":returnObject}
3. Using Async/Await is must.
4. Don't forget to catch the execution errors.
5. Database credentials must be passed to logic via shell variables.
6. Use camelCase on variables.

When you finish

1. Check your code well.
2. Commit and push your branch