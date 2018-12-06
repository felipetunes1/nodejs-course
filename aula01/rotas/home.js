function getHome (app) {
    app.get('/', (request, response) => {
        
        console.log(`\n## home -> / in`);
        response.render("home");

    });
}

module.exports = getHome;