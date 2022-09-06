const find = require("./comando/find");

const action = process.argv[2];

if(!action) {
    console.log("Accion invalida");
    return;
}


switch(action) {
    case "find": {
        const title =process.argv[3];

        if(!title){
            console.log("olvidaste introducir el tituto");
            break;
        }

        const exists = find(title);

        console.log("Titulo: ", title);
        console.log("Existe: ", exists); 

        break;

    }


    default: {
        console.log("Accion no definida");
    }
}