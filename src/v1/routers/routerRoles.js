const { Router } = require("express");
const {
  createRoles,
  getRoles,
  deleteRoles,
  updateRoles,
  getRole,
} = require("../controllers/controllerRoles");
const { authorization } = require("../../authorization/auth");

const router = Router();

router.post("/roles", authorization, createRoles);
router.get("/roles", authorization, getRoles);
router.get("/roles/:id", authorization, getRole);
router.delete("/roles/:id", authorization, deleteRoles);
router.put("/roles/:id", authorization, updateRoles);

module.exports = router;
