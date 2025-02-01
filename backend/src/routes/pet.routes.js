import Router from "express";
import {
  registerPet,
  removePet,
  getAllPets,
} from "../controllers/pet.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const petRouter = Router();

// ✅ Add a GET route to fetch all pets
petRouter.get("/", getAllPets);

petRouter.route("/addPet").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  registerPet
);

petRouter.route("/removePet/:id").delete(removePet);

export { petRouter };
