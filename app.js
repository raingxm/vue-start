new Vue({
    el: "#tasks",

    data: {
        tasks: [],

        newTask: ''
    },

    filters: {
        inProcess: function(tasks) {
            return tasks.filter(function(task) {
                return !task.complete;
            });
        }
    },

    computed: {
        completions: function() {
            return this.tasks.filter(function(task) {
                return task.complete;
            });
        },

        remaining: function() {
            return this.tasks.filter(function(task) {
                return !task.complete;
            });
        }
    },

    methods: {
        addTask: function(e) {
            e.preventDefault();

            if(!this.newTask) return ;

            this.tasks.push({
                    body: this.newTask,
                    complete: false
                });

            this.newTask = '';
        },

        removeTask: function(task) {
            this.tasks.$remove(task);
        },

        completeTask: function(task) {
            task.complete = true;
        },

        editTask: function(task) {
            this.removeTask(task);

            this.newTask = task.body;

            this.$$.newTask.focus();
        },

        toggleCompletion: function(task) {
            task.complete = ! task.complete;
        },

        completeAllTasks: function() {
            this.tasks.forEach(function(task) {
                task.complete = true;
            });
        }
    }
});