https://hackernoon.com/creating-stunning-charts-with-vue-js-and-chart-js-28af584adc0a
https://vue-chartjs.org/guide/#example
https://www.youtube.com/watch?v=sE08f4iuOhA
<template>
  <div id="app">
    <div>
      <div>
          <div class="columns">
            <div class="column ">
              <input type="text" v-model="categoryOne" placeholder="Category One" class="categories">
              {{totalPriceOne}}
            </div>
            <div class="column">
              <button @click="addNewExpenseOne" class="buttonAdd">Add Expense</button>
            </div>
          </div>
            <div v-for="(debt, index) in debtNameOne" :key="index" class="columns is-centered" style="text-align:center;">
                <div class="column is-four-fifths">
                    <input type="text" placeholder="Name" v-model="debtNameOne[index]" class="roundedborder inputName">
                    <input type="number" placeholder="Amount" v-model="debtAmountOne[index]" class="roundedborder">
                    <button @click="deleteExpenseOne(index)" class="buttonDelete">
                        -
                    </button>
                </div>
            </div>
        </div>
        
      <div>
        <div class="columns is-centered">
          <div class="column is-one-quarter alignright">
            <input type="text" v-model="categoryTwo" placeholder="Category Two" class="categories">
          </div>
          <div class="column is-one-quarter">
            <button @click="addNewExpenseTwo" class="buttonAdd">Add Expense</button>
          </div>
          
        </div>
            <div v-for="(debt, index) in debtNameTwo" :key="index">
                <div>
                    <input type="text" placeholder="Name" v-model="debtNameTwo[index]" class="roundedborder inputName">
                    <input type="number" placeholder="Amount" v-model="debtAmountTwo[index]" class="roundedborder">
                    <button @click="deleteExpenseTwo(index)" class="buttonDelete">
                        -
                    </button>

                </div>
            </div>
        </div>
        {{ totalPriceTwo }}
     <div>
       <div class="columns is-centered">
         <div class="column is-one-quarter alignright">
           <input type="text" v-model="categoryThree" placeholder="Category Three" class="categories">
         </div>
         <div class="column is-one-quarter">
           <button @click="addNewExpenseThree" class="buttonAdd">Add Expense</button>
         </div>
       </div>
            <div v-for="(debt, index) in debtNameThree" :key="index">
                <div>
                    <input type="text" placeholder="Name" v-model="debtNameThree[index]" class="roundedborder inputName">
                    <input type="number" placeholder="Amount" v-model="debtAmountThree[index]" class="roundedborder">
                    <button @click="deleteExpenseThree(index)" class="buttonDelete">
                        -
                    </button>

                </div>
            </div>
        </div>
        {{ totalPriceThree }}        
      <div class="small">
        <pie-chart :data="chartData" :options="options"></pie-chart>
      </div>
    </div>
    
  </div>
</template>

<script>
  // import LineChart from './LineChart.js'
  import PieChart from './PieChart.js'
  // https://vue-chartjs.org/guide/#chart-with-api-data

  export default {
    components: {
      // LineChart,
      PieChart
    },
    data () {
      return {
          debtNameOne: ['electricity/gas', 'Water', 'Internet', 'Fuel', ''],
          debtAmountOne: ['', '', ''],
          categoryOne: 'Monthly Expenses',

          debtNameTwo: ['Car', 'Vacation', 'Gifts'],
          debtAmountTwo: [''],
          categoryTwo: 'Regular expenses',

          debtNameThree: [''],
          debtAmountThree: [''],
          categoryThree: '',
          // datacollection: null,
          chartData:
          {
            labels: ["Green", "Red", "Blue"],
            datasets:
              [
                {
                  label: "One",
                  backgroundColor: ["#41B883", "#E46651", "#00D8FF"], 
                  data: [1, 10, 5]
                },
                {
                  label: "Two",
                  backgroundColor: ["#41B883", "#E46651", "#00D8FF"], 
                  data: [3, 4, 9]
                }
              ]
           }
        }
    },
    computed: {
      totalPriceOne() {
        return this.debtAmountOne.reduce((total, debt) => {
          return total + Number(debt);
        }, 0 )
      },
      totalPriceTwo() {
        return this.debtAmountTwo.reduce((total, debt) => {
          return total + Number(debt);
        }, 0 )
      },
      totalPriceThree() {
        return this.debtAmountThree.reduce((total, debt) => {
          return total + Number(debt);
        }, 0 )
      }
    },
    methods: {
      // fillData () {
      //   this.datacollection = {
      //     labels: [5],
      //     datasets: [
      //       {
      //         label: 'Data One',
      //         backgroundColor: '#f87979',
      //         data: [3, 6]
      //       }
      //     ]
      //   }
      // },
      addNewExpenseOne() {
          this.debtNameOne.push('');
          this.debtAmountOne.push('');
      },
      deleteExpenseOne(index) {
          this.debtNameOne.splice(index, 1)
          this.debtAmountOne.splice(index, 1)
      },
      addNewExpenseTwo() {
          this.debtNameTwo.push('');
          this.debtAmountTwo.push('');
      },
      deleteExpenseTwo(index) {
          this.debtNameTwo.splice(index, 1)
          this.debtAmountTwo.splice(index, 1)
      },
      addNewExpenseThree() {
          this.debtNameThree.push('');
          this.debtAmounthree.push('');
      },
      deleteExpenseThree(index) {
          this.debtNameThree.splice(index, 1)
          this.debtAmountThree.splice(index, 1)
      }        
    }
  }
</script>

<style scoped>
.categories {
  text-align: right;
  border: none;
  background: transparent;
  width: 100%
}
.buttonDelete {
  border: none;
  text-align: center; 
  background: none;
  color: black;
}
.buttonAdd {
  border: none;
  text-align: center; 
  background: none;
  color: black;
}
.roundedborder {
   border: 1px;
   border-radius: 10px;
}
.inputName {
  width: 30%;
  text-align: left;
  border: none;
}
  .small {
    max-width: 600px;
    margin-bottom: 0;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 100px;
      }
      
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: auto;
}
</style>