import { Router } from 'express'

const router = Router()


let agents = {
  1: {
    id: '1',
    firstName: 'Joshua',
    lastName: 'Philips',
    phoneNumber: '6154380930',
    email: 'bendy@slendy.com'
  },
  2: {
    id: '2',
    firstName: 'Andrew',
    lastName: 'kang',
    phoneNumber: '61543333',
    email: 'lolol'
  }
}

router.get('/', (req, res) => {
  res.send(Object.values(agents))
})

router.get('/:id', (req, res) => {
  res.send(agents[req.params.id])
})

export default router;