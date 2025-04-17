const args = process.argv.slice(2);

let min = 1;
let max = 100;

if(args.length >= 2) {
    const parsedMin = parseInt(args[0], 10);
    const parsedMax = parseInt(args[1], 10);
    
    if (!isNaN(parsedMin) && !isNaN(parsedMax) && parsedMin < parsedMax){
        min = parsedMin;
        max = parsedMax
    } else {
        console.log('❎ Los datos ingresados no son validos ❎')
    }
}

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`número aleatorio generado entre ${min} y ${max} es: ${randomNumber}`);