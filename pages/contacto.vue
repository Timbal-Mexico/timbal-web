<template>
    <div>
       <section>
        <div class="container py-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="text-center">
                        <h1>Contacto</h1>
                    </div>
                </div>
            </div>
        </div>
       </section>

       <section>
        <div class="container py-5">
            <div class="row">
                <div class="col-md-6">
                    <img src="../forming-leaders.gif" alt="">
                </div>
                <div class="col-md-6">
                    <div class="container mt-5">
                        <h2 class="mb-4 text-center">¡Cuentanos tu idea!</h2>
                        <form>
                            <div class="form-group">
                                <label for="name">Nombre Completo</label>
                                <input type="text" class="form-control" id="name" placeholder="ej: Jose Doe" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Correo Electrónico</label>
                                <input type="email" class="form-control" id="email" placeholder="ej: j.doe@timbal.com" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Número de Teléfono</label>
                                <input type="tel" class="form-control" id="phone" placeholder="ej: 33 4567 8910" required>
                            </div>
                            <div class="form-group">
                                <label for="company">Empresa</label>
                                <input type="text" class="form-control" id="company" placeholder="Ingresa el nombre de tu empresa" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Mensaje Adicional</label>
                                <textarea class="form-control" id="message" rows="4" placeholder="¡Cuentanos Más!"></textarea>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-primary btn-block">Enviar</button>
                        </form>
                    </div>
                
                </div>
            </div>
        </div>
       </section>
    </div>
</template>
<script>
definePageMeta({
  layout: 'application'
})
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
