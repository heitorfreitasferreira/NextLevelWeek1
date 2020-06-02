import { Request, Response } from 'express'
import knex from '../database/conection'


class ItemsController {
  async index(req: Request, res: Response) {
    const items = await knex('items').select('*')
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        name: item.title,
        image_url: 'http://localhost:3333/uploads/' + item.image
      }
    })
    return res.json(serializedItems)
  }
  async show(req: Request, res: Response) {
    const { id } = req.params
    const point = await knex('points').where('id', id).first()
    if (!point) {
      return res.status(400).json({ message: "Point not found" })
    }
    const items = await knex('items').join('point_items', 'items.id', '=', 'point_items.item_id').where('point_items.point_id', id)

    return res.json({ point, items })

  }
}
export default ItemsController