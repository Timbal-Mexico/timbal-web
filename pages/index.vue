<template>
    <div>
        <!-- Header-->
        <header class="bg-dark py-5">
          <div class="container-fluid px-5">
              <div class="row gx-5 align-items-center justify-content-center">
                  <div class="col-lg-6 col-xl-5 col-xxl-4">
                      <div class="my-5 text-center text-xl-start">
                          <h1 class="display-5 fw-bolder text-white mb-2">Ten el control de tus leads y aprovechalos al máximo</h1>
                          <p class="lead fw-normal text-white-50 mb-4">Tus camapañas generan clientes potenciales, aprovechalos al máximo y dales atención.</p>
                          <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                              <a class="btn btn-primary btn-lg px-4 me-sm-3" href="/princing">Cotizar</a>
                              <a class="btn btn-outline-light btn-lg px-4" href="/demo">Solicitar Demo</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src="../ecommerce.png" alt="Leads Ecommerce" width="512"/></div>
              </div>
          </div>
      </header>

       <!-- Features section-->
       <section class="py-5" id="features">
        <div class="container px-5 my-5">
            <div class="row gx-5 ">
                <div class="col-lg-4 my-auto"><h2 class="fw-bolder mb-0">Ofrecemos servicios de calidad.</h2></div>
                <div class="col-lg-8">
                    <div class="row gx-5 row-cols-1 row-cols-md-2">
                        <div class="col mb-5 h-100">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="fa-solid fa-comments"></i></div>
                            <h2 class="h5">Atención a Clientes</h2>
                            <p class="mb-0">Nuestro servicio destaca por la velocidad de respuesta que brindamos a los clientes.</p>
                        </div>
                        <div class="col mb-5 h-100">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                            <h2 class="h5">Campañas de Redes Sociales</h2>
                            <p class="mb-0">Nuestras campañas nos ayudan a generar los leads que necesitas para aumnetar tus ventas.</p>
                        </div>
                        <div class="col mb-5 mb-md-0 h-100">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                            <h2 class="h5">CRM Kommo</h2>
                            <p class="mb-0">La plataforma de CRM mas poderesa del mundo, nos brinda la capacidad de gestionar nuestros leads.</p>
                        </div>
                        <div class="col h-100">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                            <h2 class="h5">Diseño y Produccion Audiovisual</h2>
                            <p class="mb-0">Te brindamos la experiencia completa de promocionar tu negocio con visuales en video e imagen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-secondary">
        <div class="container m-auto p-5  text-white">
            <div class="row">
                <div class="col-md-6">
                   <div class="text-center">
                    <img src="../leadership.png" width="512" alt="Logo timbal">
                   </div>
                </div>
                <div class="col-md-6 my-auto text-left ">
                    <h1>¿No sabes a donde van tus leads?</h1>
                    <h3>nosotros te ayudamos a que no pierdas tus clientes potenciales, y crecemos tu negocio.</h3>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4"></div>
                <div class="col-md-4"></div>
            </div>
        </div>
    </section>
    </div>
</template>
<script setup>
definePageMeta({
  layout: 'application',
  meta: [
    {title: 'Timbal MX'}
  ],
})


</script>