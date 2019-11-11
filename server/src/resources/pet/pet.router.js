import { Router } from 'express'
import { Pet } from './pet.model'
import { User } from '../user/user.model'

const router = Router()

const addPet = async (req, res) => {
  // To do: set up conditional for when the user is not found, to be updated when authentication is implemented
  
  // eg: let email = 'nic@nic.com'
  // let user = query db for this email, get their _id
  const newPet = await Pet.create({
    // To do: dynamic _id of user - Authenication needed for owner property
    owner: '5dbf1ce370ed9f5abafff4eb',
    petName: req.body.petName,
    imgURL: req.body.imgURL,
    breed: req.body.breed,
    age: req.body.age,
    weight: req.body.weight,
    vaccinated: req.body.vaccinated,
    fixed: req.body.fixed,
    energyLevel: req.body.energyLevel,
    heatSensitivity: req.body.heatSensitivity,
    waterCompatibility: req.body.waterCompatibility
  })
  return res.send(newPet)
}

const getPets = async (req, res) => {
  let allPets = await Pet.find({}).exec()
  return allPets.length ? res.send(allPets) : res.send('You have no pets.')
}

router 
  .route('/pet')
  .post(addPet)
  .get(getPets)

export default router
