const express = require('express');
const router = express.Router();

const DataBase = require('../models/database');

router.get('/', async (req, res) => {
  const data = await DataBase.find();
  res.render('index', {
    titlePag: 'registry',
    data
  });
});

router.post('/add', async (req, res) => {
    const data = new DataBase(req.body);
    await data.save();
    res.redirect('/');
});

// router.get('/turn/:id', async (req, res) => {
//     const { id } = req.params;
//     const task = await Task.findById(id);
//     task.status = !task.status;
//     await task.save();
//     res.redirect('/');
// });

// router.get('/edit/:id', async (req, res) => {
//     const { id } = req.params;
//     const task = await Task.findById(id);
//     res.render('edit', {task})
// });

// router.post('/edit/:id', async (req, res) => {
//     const { id } = req.params;
//     await Task.update({_id: id}, req.body);
//     res.redirect('/');
// })

// router.get('/delete/:id', async (req, res) => {
//     const { id } = req.params;
//     await Task.remove({_id: id});
//     res.redirect('/');
// });

module.exports = router;
