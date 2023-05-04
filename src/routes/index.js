import moviesRouter from "./moviesRoute.js";

const routers = (app) => {
    app.route('/', (req, res) => {
        res.status(200).send('Aplicativo funcionando')
    })

    app.use('/movies', moviesRouter);
}

export default routers;