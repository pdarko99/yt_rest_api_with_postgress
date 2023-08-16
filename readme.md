install the dependencies(express)

add type = module to the dependencies

create a server.js file


//installing other dependencies
npm install pg

//working with database

CREATE DATABASE 
>>>CREATE DATABASE blog;

CONNECT TO DATABASE blog
>>>\c blog

CREATE A TABLE IF blog_table under blog databse
>>> CREATE TABLE IF NOT EXISTS blog_table (
    id UUID PRIMARY KEY NOT NULL,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(400) NOT NULL
);

//i'll use this 
>>> CREATE TABLE IF NOT EXISTS blog_table (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    descripion TEXT
    
);
