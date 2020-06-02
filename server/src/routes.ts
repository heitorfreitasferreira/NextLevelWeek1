import express from 'express'

const routes = express.Router()//desacoplar as rotas para um arquivo separado
routes.route('/')
  .get((req, res) => {
    res.json({ message: 'Hello World!' })
  })

export default routes