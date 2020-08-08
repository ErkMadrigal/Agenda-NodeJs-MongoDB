const express = require("express");
const router = express.Router();

const DataBase = require("../models/database");

router.get("/", async (req, res) => {
  const data = await DataBase.find();
  res.render("index", {
    titlePag: "registry",
    subtitle: "Registra a un amigo, familiar o conocido ",
    data,
  });
});

router.post("/add", async (req, res) => {
  const data = new DataBase(req.body);
  await data.save();
  res.redirect("/");
});

router.get("/favorites/:id", async (req, res) => {
  const { id } = req.params;
  const data = await DataBase.findById(id);
  data.status = !data.status;
  await data.save();
  res.redirect("/");
});

router.get("/update/:id", async (req, res) => {
  const { id } = req.params;
  const data = await DataBase.findById(id);
  res.render("update", {
    titlePag: "upDate",
    subtitle: "Modifica tu Contacto",
    data,
  });
});

router.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    await DataBase.update({_id: id}, req.body);
    res.redirect('/');
})

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await DataBase.remove({_id: id});
    res.redirect('/');
});

module.exports = router;
