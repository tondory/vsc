<template>
      <section class="hero is-light is-fullheight">
        <div class="hero-body ">
            <div class="container ">
                <div class="columns">
                    <div class="column ">
                        <h1 class="title" id="demo" style="padding-bottom: 3rem;">
                            Calculator
                        </h1>
                    </div>
                </div>

                <div class="columns ">
                    <div class="column">
                        <div class="field">
                            <label class="label has-text-dark">Value 1</label>
                            <div class="control">
                              <input class="input" id="1" type="number" placeholder="Text input" onchange='calc()'>
                            </div>
                            <p class="help">Choose a number</p>
                          </div>

                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label has-text-dark">Value 2</label>
                            <div class="control">
                              <input class="input" id="2" type="number" placeholder="Text input" onchange='calc()'>
                            </div>
                            <p class="help">Choose a number</p>
                          </div>
                    </div>

                    <div class="column">
                        <div class="field">
                            <label class="label has-text-dark">Result</label>
                            <div class="control">
                                
                                <textarea class="input is-info" id="3" placeholder="Focused textarea"></textarea>
                               
                            </div>
                            <p class="help">Did it work?</p>
                          </div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column is-12">
                        <a class="button" @click="calc()">add values</a>
                        {{counter}}
                        {{bool}}
                    </div>
                </div>
            </div>
            </div>
    </section>
  <!-- https://www.youtube.com/watch?v=wM4L_yDGqpo&list=PLB4AdipoHpxaHDLIaMdtro1eXnQtl_UvE -->
</template>

<script>
// original jsfunction (don't use methods outside of scope)
// function calc1() {
//     var Number1 = document.getElementById('1').value
//     var Number2 = document.getElementById('2').value
//     var result = Number(Number1) + Number(Number2)
//     document.getElementById('3').innerHTML = result
// }

export default {
    data ()
    {
        return {
            counter: 0,
            bool: true 
        }
    },
    methods: {
        calc: function () {
            var Number1 = document.getElementById('1').value
            var Number2 = document.getElementById('2').value
            var result = Number(Number1) + Number(Number2)
            document.getElementById('3').innerHTML = result

            if (bool==true)
            {
            counter++
            }
            else
            {
                counter--
            }
        }
    }
}

</script>

<style scoped>

</style>


