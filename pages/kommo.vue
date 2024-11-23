<template>
  <div>
    <header id="kommo" class="mt-1">
      <div class="container">
        <div class="row">
          <div class="col-6 col-offset-6">
            <div class="text-white">
              <h1>Gestiona, automatiza y cierra más ventas con Kommo CRM.</h1>
              <p>
                Te ayuda a organizar tus clientes, automatizar procesos y
                maximizar tus resultados de ventas en menos tiempo.
              </p>
              <a href="#" class="btn btn-timbal-primary btn-lg px-5"
                >¡Empieza hoy!</a
              >
            </div>
          </div>
        </div>
      </div>
    </header>

    <section>
      <div class="container py-4">
        <div class="row py-5">
          <div class="col-md-8 mx-auto">
            <div class="text-center">
              <h2>
                Una solución ideal para gestionar tus clientes y potenciar tus
                ventas.
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="text-center">
              <h4>Automatización Inteligente</h4>
              <p>
                Simplifica tareas repetitivas y gana tiempo para enfocarte en lo
                que importa.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="text-center">
              <h4>Gestión Centralizada</h4>
              <p>
                Accede a toda la información de tus clientes desde un solo
                lugar, en cualquier momento.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="text-center">
              <h4>Optimización de Ventas</h4>
              <p>
                Aumenta tu conversión con un pipeline claro y fácil de usar.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="text-center">
              <h4>Integraciones Potentes</h4>
              <p>
                Conecta tus aplicaciones favoritas para un flujo de trabajo sin
                interrupciones.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="text-center">
              <h4>Soporte Multicanal</h4>
              <p>
                Responde a tus clientes desde correo, redes sociales o WhatsApp,
                todo en una sola plataforma.
              </p>
            </div>
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
      };
    },
  };
</script>
