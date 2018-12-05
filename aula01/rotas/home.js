function getHome (app) {
    app.get('/', (request, response) => {
        // response.send(`Home !!!`);
        response.render("home");
    });
}

module.exports = getHome;