const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


console.log(argv, 'sin base');
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(mensaje => {
                console.log(mensaje);
            })
            .catch(err => console.log(err));
        break;
    default:
        console.log('El comando no es valido');
}



// let parametro = argv[2];
// let base = parametro.split('=')[1];