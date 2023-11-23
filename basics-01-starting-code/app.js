const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",

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
        resetInput() {
            this.name = "";
        },
        outputFullName() {
            if(this.name === "") {
                return "";
            }
            return this.name + " " + "Oh";
        }
    }
});

app.mount('#events');