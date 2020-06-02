import express from 'express'
// import knex from './database/conection'

import PointsController from './controllers/pointsController'
import ItemsController from './controllers/itemsController'

const routes = express.Router()//desacoplar as rotas para um arquivo separado

const pointsController = new PointsController
const itemsController = new ItemsController
routes.get('/items', itemsController.index)
routes.get('/points/:id', itemsController.show)
routes.get('/points', pointsController.index)

routes.post('/points', pointsController.create)
export default routes