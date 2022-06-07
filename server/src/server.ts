import express from 'express'
import { routes } from './routes';
const cors  =require('cors')

const app = express();

const port = 3001;

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || port, () => {
  console.log("Servidor rodando ..")
})