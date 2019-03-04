const model = new TodoModel([ { description: 'learn MVC pattern', isDone: false }]);
const view = new TodoView();
const controller = new TodoController(model, view);
controller.init();

// TODO refactor: make some methods private
// TODO: create pubsub to handle events?