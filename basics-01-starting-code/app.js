const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            confirmedName: ""
        };
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        setName(event) {
            // console.log(event.target.value);
            this.name = event.target.value;
        },
        submitForm(event) {
            // event.preventDefault();
            alert("Submitted!");
        },
        confirmName() {
            this.confirmedName = this.name;
        }
    }
});

app.mount('#events');