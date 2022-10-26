CREATE DATABASE proyecto_node;

CREATE TABLE 'users' (
    'id' INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    'username' VARCHAR(20) NOT NULL,
    'email' VARCHAR(30) NOT NULL,
    'password' VARCHAR(250) NOT NULL
)