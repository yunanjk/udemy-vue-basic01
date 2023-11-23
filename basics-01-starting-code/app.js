const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ""
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
        }
        // setName(event, lastname) {
        //     this.name = event.target.value + " " + lastname;
        // }
    }
});

app.mount('#events');