// // TODO: add commonly used crud actions
// export const getOne = model => async (req, res) => {
//   const id = req.params.id
//   const userId = req.user._id

//   const doc = await model.findOne({ _id: id, username: userId }).exec()

//   if (!doc) {
//     res.status(404).end()
//   }

//   res.status(200).json({ data: doc })
// }

// export const getMany = model => async (req, res) => {}

// export const createOne = model => async (req, res) => {
//   const doc = await model.create({...req.body, username: req.user._id })
//   res.status(200).json({ data: doc })
// }

// export const updateOne = model => async (req, res) => {}

// export const removeOne = model => async (req, res) => {}

// export const crudControllers = model => ({
//   removeOne: removeOne(model),
//   updateOne: updateOne(model),
//   getMany: getMany(model),
//   getOne: getOne(model),
//   createOne: createOne(model)
// })
