import { Router } from 'express'

const controller = (req, res) => {
  res.send({ message: 'You can create your own happy' })
}
const router = Router()

router
  // /api/...
  .route('/')
  .get(controller)
  .post(controller)

router
  // /api/:id...
  .route('/:id')
  .put(controller)
  .delete(controller)
  .get(controller)

export default router
