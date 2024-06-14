const Employee = require('../models/employeeModel');

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.addEmployee = async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const employee = await Employee.create({ name, email, role });
    res.json({ status: 'success', employeeId: employee.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, email, role } = req.body;
  try {
    const employee = await Employee.findByPk(id);
    if (!employee) return res.status(404).json({ msg: 'Employee not found' });

    employee.name = name;
    employee.email = email;
    employee.role = role;
    await employee.save();

    res.json({ status: 'success' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findByPk(id);
    if (!employee) return res.status(404).json({ msg: 'Employee not found' });

    await employee.destroy();
    res.json({ status: 'success' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
