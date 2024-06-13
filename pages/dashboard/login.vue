<template>
    <div>
        <h1>Cotizaciones</h1>
        <form>
            <label for="client">Cliente
                <input type="text" id="client" v-model="name">
            </label>
            <label for="rfc">

            </label>
        </form>

        <div class="document-container">
            <div class="container">
                
            </div>
        </div>

        <h3>Datos de cliente:</h3>
        <p>{{name}}</p>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
    data(){
        return {
            name: "",
        }
    }
})
</script>
