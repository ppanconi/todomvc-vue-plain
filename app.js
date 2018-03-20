
var app = new Vue({

	el: '#app',

	data: {
		newTodo: '',
		visibility: 'all',
		todos: [],
		allDone: false
	},

	methods: {
		addTodo() {
			this.todos.push({
				title: this.newTodo,
				completed: false
			});
		},
		removeTodo(todo) {

		},
		removeCompleted(todo) {

		},
	},

	computed: {
		remaining() {
			this.todos.filter(function(obj){return ! obj.completed}).length	;
		},
		filteredTodos() {
			if (this.visibility == 'all') 
				return this.todos;
			else if (this.visibility == 'completed') 
				return this.todos.filter(function(obj){return obj.completed});
			else 
				this.todos.filter(function(obj){return ! obj.completed});
		}
	}

})