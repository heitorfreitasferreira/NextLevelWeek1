import express from 'express'
import path from 'path'
import routes from './routes'
import cors from 'cors'
const port = 3333

const app = express()

app.use(cors(/* url que pode acessar a minha api */))
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))//imagens 

app.listen(port, () => {
  console.log("Server up and running on port " + port);
})