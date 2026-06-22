CREATE TABLE USERS( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'estudiante') NOT NULL,
    estado ENUM('activo', 'inactivo') DEFAULT 'activo'
);


CREATE TABLE ELEMENTS(
    id INT AUTO_INCREMENT PRIMARY KEY,
    simbolo VARCHAR(10) NOT NULL,
nombre VARCHAR(100) NOT NULL,
masa_atomica DECIMAL(10, 4) UNIQUE NOT NULL,
numero_atomico INT UNIQUE NOT NULL,
grupo INT NOT NULL,
periodo INT NOT NULL,
categoria ENUM('metal', 'no metal', 'metaloide', 'gases nobles') NOT NULL
);
UPDATE USERS SET VERIFICADO = 1 WHERE EMAIL = 'ma.utriera@gmail.com';