import { Router } from 'express'

const controller = (req, res) => {
  res.send({ message: 'The way that you habitually think determines the way that you habitually feel.' })
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
