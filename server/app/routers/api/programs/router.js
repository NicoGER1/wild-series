const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import program-related actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/programsActions");

const validatePrograms = require("../../../services/validatePrograms");
// Route to get a list of programs
router.get("/", browse);

// Route to get a specific program by ID
router.get("/:id", read);

// Route to edit an existing program
router.put("/:id", validatePrograms, edit);

// Route to add a new program
router.post("/", validatePrograms, add);

// Route to edit an existing program
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
