const Task = require('../models/Task');

exports.index = (req, res) => {
  let tasks = Task.all().then((tasks) => {
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      res.json(tasks);
    } else {
      res.send('homepage/index', {tasks: tasks});
    }
  });
}
