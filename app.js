new Vue({
    el: "#tasks",

    data: {
        tasks: [
            {  body: "go to home", complete: false}
        ],
        newTask: ''
    },

    filters: {
        inProcess: function(tasks) {
            return tasks.filter(function(task) {
                return !task.complete;
            });
        }
    },

    methods: {
        addTask: function(e) {
            e.preventDefault();

            if(this.newTask != "") {
                this.tasks.push({
                    body: this.newTask,
                    complete: false
                });
            }

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
        }
    }
});