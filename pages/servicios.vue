<template>
  <div>
    <section>
      <div class="container py-5">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <div class="text-center">
              <h1>Servicios</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container px-4 py-5" id="icon-grid">
        <div class="row">
          <div class="col-md-3">
            <div class="card" style="width: 18rem">
              <img src="../customer-service.gif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h3 class="card-title fw-bold mb-0 fs-4 text-body-emphasis">
                  Atención a Clientes
                </h3>
                <p class="card-text">
                  Tomamos el control de la atencion de tus clientes y los tratamos
                  como si fueran nuestros, brindamos la informacion necesaria.
                </p>
                <a href="#" class="btn btn-primary">Más Información</a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card" style="width: 18rem">
              <img src="../marketing.gif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title fw-bold mb-0 fs-4 text-body-emphasis">Marketing Digital</h5>
                <p class="card-text">
                  Creamos campañas digitales, donde creamos la interaccion que tu
                  negocio necesita, generamos mensajes y los transformamos en
                  clientes.
                </p>
                <a href="#" class="btn btn-primary">Más Información</a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card" style="width: 18rem">
              <img src="../crm.gif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title fw-bold mb-0 fs-4 text-body-emphasis">Kommo CRM</h5>
                <p class="card-text">
                  Ofrecemos la plataforma donde puedes gestionar tus clientes
                  potenciales, asi como atender a los clientes de manera facil y
                  rapida.
                </p>
                <a href="#" class="btn btn-primary">Más Información</a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card" style="width: 18rem">
              <img src="../designer.gif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title fw-bold mb-0 fs-4 text-body-emphasis">Diseño Gráfico</h5>
                <p class="card-text">
                  Potencializamos tu marca con nuestro equipo de diseño con el
                  cual podemos aumentar el impacto de tus anuncios en linea.
                </p>
                <a href="#" class="btn btn-primary">Más Información</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
definePageMeta({
  layout: "application",
});
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  data() {
    return {
      name: "",
    };
  },
});
</script>
