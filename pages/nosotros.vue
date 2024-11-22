<template>
  <div>
    <header id="nosotros" class="mt-1">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="text-white">
              <h1>Creamos conexiones con los clientes de nuestros clientes.</h1>
              <p>
                Ayudamos a nuestros clientes a atender mejor a sus propios
                clientes y generamos un sentido pertenencia.
              </p>
              <a href="#" class="btn btn-primary btn-lg px-5 me-3 rounded"
                >Ver Video</a
              >
              <a href="#" class="btn btn-outline-light btn-lg ms-3"
                >Servicios</a
              >
            </div>
          </div>
        </div>
      </div>
    </header>

    <section>
      <div class="container py-5">
        <div class="row gx-5 align-items-center justify-content-center">
          <div class="col-lg-6">
            <div class="text-center">
              <img src="../assets/img/at-the-office.gif" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-6">
            <h1>
              Combinamos tecnología con trato humano para transformar la
              atención al cliente.
            </h1>
            <p>
              En Timbal, gestionamos mensajes de manera eficiente y
              personalizada a través de plataformas digitales, ofreciendo un
              servicio profesional y empático que fortalece la conexión entre
              marcas y sus consumidores.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container-fluid">
        <div class="row gx-5 align-items-center justify-content-center">
          <div class="col-md-6 bg-timbal p-5">
            <div class="text-white">
              <h1>Nuestra Vision</h1>
              <p>
                Nuestra misión es potenciar el crecimiento de las empresas a
                través de la generación efectiva de leads, proporcionando un
                servicio de atención al cliente excepcional. Nos enfocamos en
                entender y responder a las necesidades de los clientes de
                nuestros clientes, mejorando su experiencia y aumentando las
                oportunidades de venta.
              </p>
            </div>
          </div>

          <div class="col-md-6"></div>
        </div>
        <div class="row gx-5 align-items-center justify-content-center">
          <div class="col-md-6"></div>
          <div class="col-md-6 bg-timbal2 p-5">
            <div class="text-center text-white">
              <h1>Nuestra Mision</h1>
              <p>
                Aspiramos a ser la agencia líder en generación de leads y
                atención al cliente, reconocida por nuestra eficiencia,
                profesionalismo y capacidad para impulsar el éxito de nuestros
                clientes. Buscamos establecer estándares de excelencia en el
                sector, innovando continuamente y adaptándonos a las demandas
                del mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2>Redescubre lo que la tecnologia y el trato humano</h2>
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
