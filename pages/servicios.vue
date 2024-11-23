<template>
  <div>
    <header id="servicios" class="mt-1">
      <div class="container">
        <div class="row">
          <div class="col-6 col-offset-6">
            <div class="text-white">
              <h1>
                Impulsamos tu negocio y mejoramos la experiencia de tus
                clientes.
              </h1>
              <p>
                Diseñamos estrategias personalizadas para impulsar tu negocio,
                mejorar la atención al cliente y optimizar procesos con
                soluciones innovadoras.
              </p>
              <!-- Connect to Calendly -->
              <a href="#" class="btn btn-timbal-primary btn-lg px-5"
                >Solicitar una Llamada!</a
              >
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="intro-solutions">
      <div class="container my-5">
        <div class="row my-5">
          <div class="col-8 mx-auto">
            <div class="text-center">
              <h2>
                Brindamos soluciones para hacer crecer tu negocio y mejorar la
                atencion a cliente.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container px-4 py-5" id="icon-grid">
        <div
          class="row gx-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 text-center"
        >
          <div
            v-for="(service, index) in services"
            :key="index"
            class="col mb-5 h-100"
          >
            <div
              class="feature bg-timbal2 bg-gradient text-white rounded-3 mb-3 mx-auto"
            >
              <h2>{{ service.icon }}</h2>
            </div>
            <h2 class="h5">
              <strong>{{ service.title }}</strong>
            </h2>
            <p class="mb-0">{{ service.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
  useHead({
    title: "Inicio",
    meta: [
      { name: "description", content: "Timbal Agencia de Marketing Digital" },
      { name: "keywords", content: "Timbal, Mexico, Marketing, Digital" },
    ],
  });
  definePageMeta({
    layout: "application",
  });
</script>
<script>
  export default {
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
  };
</script>
