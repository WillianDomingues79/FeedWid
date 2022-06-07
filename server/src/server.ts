import express from 'express'
import { routes } from './routes';
const cors  =require('cors')

const app = express();



app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || 3001, () => {
  console.log("Servidor rodando ..")
})