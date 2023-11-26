const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            lastName: "",
            // fullName: ""
        };
    },
    watch: {
        counter(value) {
            if(value > 50) {
                this.counter = 0;
            }
        },
        // name(value) {
        //     if(value === "") {
        //         this.fullName = "";
        //     } else {
        //         this.fullName = value + " " + this.lastName;
        //     }
        // },
        // lastName(value) {
        //     if(value === "") {
        //         this.fullName = "";
        //     } else {
        //         this.fullName = this.name + " " + value;
        //     }
        // }
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
            console.log("running again!");
            if(this.name === "") {
                return "";
            }
            return this.name + " " + "Oh";
        }
    },
    computed: {
        fullName() {
            console.log("running again!");
            if(this.name === "" || this.lastName === "") {
                return "";
            }
            return this.name + " " + this.lastName;
        }
    }
});

app.mount('#events');