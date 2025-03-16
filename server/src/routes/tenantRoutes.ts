import express from 'express';
import { getTenant, createTenant, updateTenant, getCurrentResidences, addFavoriteProperty, removeFavoriteProperty } from "../controllers/tenantControllers";

const router = express.Router();

router.get("/:cognitoId", getTenant);
router.get("/:cognitoId/current-residences", getCurrentResidences);
router.post("/", createTenant);
router.post("/:cognitoId/favorites/:propertyId", addFavoriteProperty);
router.put("/:cognitoId", updateTenant);
router.delete("/:cognitoId/favorites/:propertyId", removeFavoriteProperty);

export default router;