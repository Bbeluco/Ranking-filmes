import moviesRouter from "./moviesRoute.js";
import usersRoute from "./usersRoute.js";

const routers = (app) => {
    app.route('/', (req, res) => {
        res.status(200).send('Aplicativo funcionando')
    })

    app.use('/movies', moviesRouter);
    app.use('/users', usersRoute);
}

export default routers;