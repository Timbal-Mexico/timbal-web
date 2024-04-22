<template>
    <div>
      <div class="container">
        <div class="row">
            <div class="col-dm-12">
                <div class="text-center">
                    <h2>Sistema de Cotizaciones</h2>
                    <p><i>Sitema de Generacion de cotizaciones automatico</i></p>
                </div>
            </div>
        </div>
        <div class="row">
            <form action="">
                <input type="text" name="Nombre" class="form-control" v-model="clientName">
            </form>
        </div>
      </div>

      <!-- Docuemnt Area -->
     <div class="container">
        <div class="row">
            <div>{{clientName}}</div>
          </div>
     </div>
    </div>
</template>
<script setup>
definePageMeta({
  layout: 'application'
})


</script>
<script>
export default {
    data() {
    return {
        clientName: "",
    }
}
}
</script>