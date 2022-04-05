Vue.createApp({
    data() {
        return {
            counter: '0',
            color: "grey",
        }
    },
    methods: {
        CountDown() {
            this.counter--;
            console.log("funciono")
            this.ChangeColor();
        },
        CountPlus() {
            this.counter++;
            this.ChangeColor();

        },
        ChangeColor() {
            if (this.counter > 0) {
                this.color = "green";
            }
            else if (this.counter < 0) {
                this.color = "red";
            }
            else if (this.counter == 0) {
                this.color = "grey"
            }

        }
    }
}).mount('#app')
