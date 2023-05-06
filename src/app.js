import express from 'express';
import routers from './routes/index.js';


const app = express();

app.use(express.json());

routers(app);

app.use((req, res, next) => {
    res.status(404).send({ mensagem: 'Página não encontrada' })
})

export default app;