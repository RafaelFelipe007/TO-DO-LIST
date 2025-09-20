let tasks = [];

module.exports = {
  getALL: (req, res) => {
    res.json(tasks);
    console.log(req);
  },
  create: (req, res) => {
    const task = req.body;
    console.log(req.body);
    const newTask = { id: tasks.length + 1, ...task, done: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
  },
  markAsDone: (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    console.log(req.body);
    tasks = tasks.map((task) =>
      task.id == id ? { ...task, done: true } : task
    );
    res.sendStatus(204).end();
  },
};
