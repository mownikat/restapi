var appRouter = function(app) {
    app.get("/", function(req, res) {
        var helloworld= {
            msg:"hii",
            username:"mowni"
        }
        res.send(helloworld);
    });
}

module.exports = appRouter;