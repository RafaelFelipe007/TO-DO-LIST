module.exports = (app) => {
  const tasksController = app.controllers.tasks;
  app.get("/tasks", tasksController.getALL);
  app.post("/tasks", tasksController.create);
  app.patch("/tasks/:id", tasksController.markAsDone);
};
