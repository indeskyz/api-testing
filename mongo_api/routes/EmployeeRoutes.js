const express = require("express");
const app = express();
const Employees = require("../model/employees");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//GET all employees
app.get("/employees", async (req, res) => {
  const employees = await Employees.find({});

  try {
    res.send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

//POST employee
app.post("/employees", async (req, res) => {
  const employee = new Employees(req.body);

  try {
    await employee.save();
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});

//GET employee by id
app.get("/employees/:id", async (req, res) => {
  const employees = await Employees.findById(req.params.id);

  try {
    res.send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

//PUT employee
app.patch("/employees/:id", async (req, res) => {
  const employee = await Employees.findByIdAndUpdate(req.params.id, req.body);
  try {
    await employee.save();
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE id
app.delete("/employees/:id", async (req, res) => {
  try {
    const employee = await Employees.findByIdAndDelete(req.params.id);

    if (!employee) res.status(404).send("No item found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
