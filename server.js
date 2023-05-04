import dotenv from 'dotenv';
dotenv.config();
import app from './src/app.js'

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor operante na porta: ${port}`);
})