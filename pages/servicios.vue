<template>
  <div>
    <header id="servicios" class="mt-1">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center text-white">
              <h1>Servicios</h1>
              <p>Que es lo que hacemos</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section>
      <div class="container px-4 py-5" id="icon-grid">
        <div class="row">
          <div class="col-md-3">
            <div class="card" style="width: 18rem">
              <img
                src="../assets/img/customer-service.gif"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h3 class="card-title fw-bold mb-0 fs-4 text-body-emphasis">
                  Atención a Clientes
                </h3>
                <p class="card-text">
                  Tomamos el control de la atencion de tus clientes y los
                  tratamos como si fueran nuestros, brindamos la informacion
                  necesaria.
                </p>
              </div>
              <div class="card-footer">
                <div class="text-center">
                  <a href="#" class="btn btn-primary">Más Información</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img
                src="../assets/img/marketing.gif"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title fw-bold mb-0 fs-4 text-body-emphasis">
                  Marketing Digital
                </h5>
                <p class="card-text">
                  Creamos campañas digitales, donde creamos la interaccion que
                  tu negocio necesita, generamos mensajes y los transformamos en
                  clientes.
                </p>
                <a href="#" class="btn btn-primary">Más Información</a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img src="../assets/img/crm.gif" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title fw-bold mb-0 fs-4 text-body-emphasis">
                  Kommo CRM
                </h5>
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
            <div class="card">
              <img
                src="../assets/img/designer.gif"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title fw-bold mb-0 fs-4 text-body-emphasis">
                  Diseño Gráfico
                </h5>
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
        services: [
          {
            icon: "01",
            title: "Soporte Multicanal 24/7",
            text: "Estamos donde tus clientes estén: WhatsApp, Messenger, SMS, chat en vivo, ¡y más!",
          },
          {
            icon: "02",
            title: "Automatización Inteligente + Agentes Reales",
            text: "El equilibrio perfecto entre bots rápidos y agentes humanos empáticos.",
          },
          {
            icon: "03",
            title: "Gestión Integral de Casos",
            text: "Cada interacción importa. Documentamos cada mensaje para que nada se pierda.",
          },
          {
            icon: "04",
            title: "Monitoreo y Respuesta Proactiva",
            text: "Detectamos y resolvemos problemas antes de que afecten a tus clientes.",
          },
        ],
      };
    },
  });
</script>
