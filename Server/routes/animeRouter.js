import { Router } from "express";
import Anime from "../models/animeModel.js";

const animeRouter = Router();

animeRouter.get("/animes", async (req, res) => {
  const animes = await Anime.find();
  res.json(animes);
});

animeRouter.get("/animes/name/:animeName", async (req, res) => {
  const { animeName } = req.params;
  const animeByName = await Anime.findOne({ title: animeName });
  return res.json(animeByName);
});

animeRouter.post("/animes", async (req, res) => {
  const newAnime = await Anime.create(req.body);
  res.json(newAnime);
});

animeRouter.put("/animes/:animeID", async (req, res) => {
  const { animeID } = req.params;
  const updatedAnime = await Anime.findByIdAndUpdate(animeID, req.body);
  const newAnime = await Anime.findById(animeID);
  return res.json(newAnime);
});

animeRouter.delete("/animes/deleteanime/:animeID", async (req, res) => {
  const { animeID } = req.params;
  try {
    const deletedAnime = await Anime.deleteOne({ _id: animeID });

    return res.json("Anime deleted");
  } catch (err) {
    res.json(err);
  }
});

export default animeRouter;
