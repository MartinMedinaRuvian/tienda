const app = require('./server');

function main () {
    app.set('port', process.env.PORT || 5000);
    const puerto = app.get('port');

    app.listen(puerto, ()=>{
        console.log('Servidor corriendo en el puerto', puerto);
    })
}

main();