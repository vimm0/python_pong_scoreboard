var myModel = {
    total: 0,
    countone: 0,
    counttwo: 0,
    serviceOne: true,
    serviceTwo: false,
    agree: false,
    a: 0,
    b: 0,
    // wins:false,
    // yo:true
}
var playerone = Vue.component('player-one', {
    template: '<p id="show-left" class="show-score" v-on:click="incrementa" >{{ myModel.countone }}</p>',
    data: function() {
        return {
            myModel
        }
    },
    methods: {
        incrementa: function() {
            if (this.myModel.countone <= 10) {
                // console.log('woww')
                this.myModel.countone += 1
                this.$emit('incrementa')
            }
            if (this.countone == 'Deuce' && this.counttwo == 'Deuce' || this.countone == 'Advantage' && this.counttwo == 'Deuce' || this.countone == 'Deuce' && this.counttwo == 'Advantage') {
                // console.log('woww')
                this.myModel.a += 1
                this.$emit('incrementa')
            }
        },
        check: function() {
            // this.$on('buttonOne')
            this.myModel.countone = "wins"
        },
        
    },
});
var playertwo = Vue.component('player-two', {
    template: '<p id="show-right" class="show-score" v-on:click="incrementb" >{{ myModel.counttwo }}</p>',
    data: function() {
        return {
            myModel
        }
    },
    methods: {
        incrementb: function() {
            if (this.myModel.counttwo <= 10) {
                this.myModel.counttwo += 1
                this.$emit('incrementb')
            }
             if (this.countone == 'Deuce' && this.counttwo == 'Deuce' || this.countone == 'Advantage' && this.counttwo == 'Deuce' || this.countone == 'Deuce' && this.counttwo == 'Advantage') {
                // console.log('woww')
                this.myModel.b += 1
                this.$emit('incrementb')
            }
        },
        
         check: function() {
            // this.$on('buttonTwo')
            this.myModel.counttwo = "wins"
        },
    },

})
var bus = new Vue()
new Vue({
    el: '#row',
    data: myModel,
    methods: {
        incrementTotal: function() {
            this.total += 1
            if (this.total % 2 == 0) {
                this.service()
            }
            if (this.total == 20) {
                this.countone = 'Deuce'
                this.counttwo = 'Deuce'
            }
            if (this.countone == 11 && this.total <= 20 || this.total >= 20 && this.countone == 12) {
                this.playerOneWins()
            }
            if (this.total <= 20 && this.counttwo == 11 || this.total >= 20 && this.counttwo == 12) {
                this.playerTwoWins()
            }
            if (this.countone == 'Deuce' || this.counttwo == 'Deuce') {
                if(event.target.id == 'show-left'){
                    // this.$on('incrementa')
                    this.a +=1
                    // this.$on('incrementb')
                    this.countone = "Adv"
                    // this.$emit('incrementa')
                    if(event.target.id== 'show-left' && this.a == 2){
                        // this.a +=1
                        this.countone = 'wins'
                    }
                }
                if(event.target.id == 'show-right'){
                    // this.$on('incrementa')
                    this.b +=1
                    this.$on('incrementb')
                    this.counttwo = "Adv"
                }
            //     this.$on('incrementa')
                // this.a += 1
                // this.$on('incrementb')
                // this.b += 1
                // this.advantageOne()

                // if (this.a == this.b + 2) {
                //     this.countone = 'Wins'
                // }
                // if (this.a + 2 == this.b) {
                //     this.counttwo = 'Wins'
                // }
                // if (this.count) {}
                // console.log('hello im here')
                // this.playerOneWins()
                    // this.a += 1
                    // this.$on('increment')
                    // this.myModel.countone = 'Wins'
            }
            if (this.countone == 'wins') {
                this.counttwo = 'Lose'
            }
        },
        service: function() {
            if (this.serviceOne == true && this.serviceTwo == false) {
                this.serviceTwo = !this.serviceTwo
                this.serviceOne = !this.serviceOne
            } else {
                this.serviceTwo = !this.serviceTwo
                this.serviceOne = !this.serviceOne

            }
        },
        playerOneWins: function() {
            this.countone = "wins"
        },
        playerTwoWins: function() {
            this.counttwo = "wins"
        },
        advantageOne: function() {
            this.myModel.countone = 'Advantage'
            this.myModel.countone = 'Deuce'
        },
        advantageTwo: function() {
            this.myModel.counttwo = 'Advantage'
            this.myModel.countone = 'Deuce'
                // this.$on('buttonTwo')
                // this.myModel
        },
    },
})
    // //Deuce checking
    // function Deuce() {
    //     btn1.onclick = function() {
    //         // buttonOneVisible();
    //         playerOneShowAdvantage();
    //         advantageOne();
    //         btn1.onclick = function() {
    //             playerOneWins();
    //             gameOver();
    //         }
    //     }
    //     btn2.onclick = function() {
    //         buttonTwoVisible();
    //         playerTwoShowAdvantage();
    //         advantageTwo();
    //         btn2.onclick = function() {
    //             playerTwoWins();
    //             gameOver();
    //         }
    //     }
    // }
    // // Advantage checking
    // function advantageOne() {
    //     btn2.onclick = function() {
    //         buttonTwoVisible();
    //         advantageTwo();
    //         showDeuceBoth();
    //     }
    //     btn1.onclick = function() {
    //         playerOneShowAdvantage();
    //         btn1.onclick = function() {
    //             playerOneWins();
    //             gameOver();
    //         }
    //     }
    // }
    // function advantageTwo() {
    //     btn1.onclick = function() {
    //         buttonOneVisible();
    //         advantageOne();
    //         showDeuceBoth();
    //     }
    //     btn2.onclick = function() {
    //         playerTwoShowAdvantage();
    //         btn2.onclick = function() {
    //             playerTwoWins();
    //             gameOver();
    //         }
    //     }
    // }