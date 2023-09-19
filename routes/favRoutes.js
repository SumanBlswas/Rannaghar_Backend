import express from "express";
import { favModel } from "../model/favModel.js";

const favRouter = express.Router();

favRouter.get("/", async (req, res) => {
  const { userID } = req.body;
  try {
    let favRecipe = await favModel.find({ userID });
    res.status(200).send(favRecipe);
  } catch (error) {
    console.log(error);
    res.status(404).send({ msg: error.message });
  }
});

favRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const favRecipe = await favModel.findById(id);
    res.status(200).send({ msg: favRecipe });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

favRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await favModel.deleteOne({ id });
    res.status(200).send({ msg: "deleted" });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

favRouter.post("/", async (req, res) => {
  try {
    const favRecipe = new favModel(req.body);
    await favRecipe.save();
    res.status(200).send({ msg: favRecipe });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

export { favRouter };
