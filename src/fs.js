import fs from 'fs';

const filename = 'example.txt';

// crear archivo
fs.writeFileSync(filename, 'Hello, world!');
console.log('Archivo creado');

// leer archivo
const content = fs.readFileSync(filename, 'utf-8');
console.log('Contenido del archivo:', content);

// actualizar archivo
fs.appendFileSync(filename, '\n¡Hola, Node.js!');
console.log('Archivo actualizado');

// leer archivo actualizado
const updatedContent = fs.readFileSync(filename, 'utf-8');
console.log('Contenido del archivo actualizado:', updatedContent);

// eliminar archivo
fs.unlinkSync(filename);
console.log('Archivo eliminado');