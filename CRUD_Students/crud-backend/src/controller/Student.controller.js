const express = require("express");
const Student = require("../model/Student.model");
const router = express.Router();

router.post("/", async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json({ student });
});

router.get("/sortHL", async (req, res) => {
  const limit = +req.query.limit || 10;
  const page = +req.query.page || 1;
  const skip = (page - 1) * limit;
  console.log(req.query, "Here");
  const s = await Student.find({ ...req.query });

  const pages = Math.ceil(s.length / limit);
  const student = await Student.find({ ...req.query })
    .skip(skip)
    .limit(limit)
    .sort({ age: 1 })
    .lean()
    .exec();
  res.status(201).json({
    totalDocuments: s.length,
    totalPages: pages,
    currentPage: page,
    student,
  });
});

router.get("/sortLH", async (req, res) => {
  const limit = +req.query.limit || 10;
  const page = +req.query.page || 1;
  const skip = (page - 1) * limit;
  console.log(req.query, "Here");
  const s = await Student.find({ ...req.query });

  const pages = Math.ceil(s.length / limit);
  const student = await Student.find({ ...req.query })
    .skip(skip)
    .limit(limit)
    .sort({ age: -1 })
    .lean()
    .exec();
  res.status(201).json({
    totalDocuments: s.length,
    totalPages: pages,
    currentPage: page,
    student,
  });
});

router.get("/", async (req, res) => {
  const limit = +req.query.limit || 10;
  const page = +req.query.page || 1;
  const skip = (page - 1) * limit;
  console.log(req.query, "Here");
  const s = await Student.find({ ...req.query });

  const pages = Math.ceil(s.length / limit);
  const student = await Student.find({ ...req.query })
    .skip(skip)
    .limit(limit)
    .lean()
    .exec();
  console.log(req.query, "Again");
  res.status(201).json({
    totalDocuments: s.length,
    totalPages: pages,
    currentPage: page,
    student,
  });
});

router.delete("/:id", async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  res.status(201).json({ status: "Deleted", student });
});

router.patch("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    returnOriginal: false,
  })
    .lean()
    .exec();
  res.status(201).json({ status: "Updated", student });
});
module.exports = router;
