<template>
  <div>
    <header id="kommo" class="mt-1">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-md-offset-6">
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
      <div class="container py-5">
        <div class="row py-5 gx-5 align-items-center justify-content-center">
          <div class="col-md-4">
            <h2>Gestión del embudo de ventas sencilla y accesible</h2>
            <p>
              Kommo proporciona una perspectiva clara de todo el proceso de
              ventas. Puedes rastrear el avance de tus prospectos, verificar el
              estado de tus tareas y obtener un panorama general de cómo están
              funcionando tus esfuerzos de ventas. Esto ayuda a que tu equipo se
              mantenga organizado y enfocado en alcanzar sus metas sin perder de
              vista los objetivos.
            </p>
          </div>
          <div class="col-md-8">
            <img
              src="https://pcfcdn.kommo.com/images/es/crm-pipeline/pipeline-ui-kommo.png"
              alt="CRM Pipeline"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container py-5">
        <div class="row py-5 gx-5 align-items-center justify-content-center">
          <div class="col-md-8">
            <img
              src="https://pcfcdn.kommo.com/images/es/main/kommo-bandeja-de-entrada-grande.png"
              alt="CRM Pipeline"
              class="img-fluid"
            />
          </div>
          <div class="col-md-4">
            <h2>
              Todas las herramientas de comunicación reunidas en un solo lugar
            </h2>
            <p>
              Con Kommo, puedes gestionar correos electrónicos, llamadas y chats
              desde una única plataforma. Esto te permite conectar con tus
              clientes en el canal que prefieran, mientras unifica todas las
              interacciones en un registro centralizado para que encuentres
              fácilmente cualquier información relevante.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container py-5">
        <div class="row py-5 gx-5 align-items-center justify-content-center">
          <div class="col-md-6">
            <h2>Perfiles de lead para cada lead</h2>
            <p>
              Olvídate del desorden de notas y papeles en tu escritorio. Kommo
              organiza toda la información de tus clientes potenciales,
              contactos y empresas en perfiles individuales. Esto facilita la
              consulta de datos clave cuando los necesites.
            </p>
          </div>
          <div class="col-md-6">
            <img
              src="https://pcfcdn.kommo.com/images/es/crm-pipeline/kommo-pipeline-views.png"
              alt="CRM Pipeline"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container py-5">
        <div class="row py-5 gx-5 align-items-center justify-content-center">
          <div class="col-md-8">
            <img
              src="https://pcfcdn.kommo.com/images/es/product/pipeline-overview-kommo.png"
              alt="CRM Pipeline"
              class="img-fluid"
            />
          </div>
          <div class="col-md-4">
            <h2>Ventas conversacionales</h2>
            <p>
              Kommo prioriza la comunicación a través de aplicaciones de
              mensajería como WhatsApp o Instagram. Este enfoque mejora la
              relación con los clientes al brindarles una experiencia
              personalizada y en tiempo real, adaptada a sus preferencias.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="text-center">
              <h2>
                Obten Kommo por un precio accesible, Invierte en tu negocio para
                ganar a futuro.
              </h2>
            </div>
          </div>
        </div>
        <div class="row gx align-items-center justify-content-center">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body py-5">
                <h5 class="card-title">Basico</h5>
                <p class="card-text">
                  Empieza a impulsar tus ventas con funciones de mensajería y
                  CRM
                </p>
                <h6 class="card-subtitle">
                  306 MXN <br /><small>por usuario/mes</small>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-4"></div>
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
