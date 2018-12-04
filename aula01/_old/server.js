var http = require('http');

var routes = [ ];
routes['/'] = 'Home!!';
routes['/produtos'] = 'Produtos!!';

var app = http.createServer((request, response) => {
    console.log(`Temos um request`);

    if(routes[request.url]) {
        response.end(`${routes[request.url]}`); 
    } else {
        response.statusCode = 404;
        response.end(`Page Not Found`);
    }

    /*
    switch(request.url) {
        case '/' :
            response.end(`Home!`);
            break;
        case '/produtos':
            response.end(`Produtos!`);
            break;
        default :
            response.statusCode = 404;
            response.end(`Page Not Found`);
            break;
    }
    */
})

var port = 3000;

app.listen(port, () => {
    console.log(this)
    console.log(`
        Servidor subiu com sucesso!!
        Acesse pormeio de http://localhost:${port}
        `);
});
