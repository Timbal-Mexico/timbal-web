<template>
  <div>
    <header id="nosotros" class="mt-1">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-offset-6">
            <div class="text-white">
              <h1>Creamos conexiones con los clientes de nuestros clientes.</h1>
              <p>
                Ayudamos a nuestros clientes a atender mejor a sus propios
                clientes y generamos un sentido pertenencia.
              </p>
              <a href="#" class="btn btn-timbal-primary btn-lg px-5 me-3"
                >Ver Video</a
              >
              <a href="#" class="btn btn-outline-light btn-lg ms-3 px-5"
                >Servicios</a
              >
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="">
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

    <section id="vision">
      <div class="container-fluid bg-timbal">
        <div class="row gx-0 align-items-center justify-content-center">
          <div class="col-md-6 p-5 h-100">
            <div class="text-center text-white">
              <h1>Nuestra Vision</h1>
              <p class="fs-5">
                Nuestra misión es potenciar el crecimiento de las empresas a
                través de la generación efectiva de leads, proporcionando un
                servicio de atención al cliente excepcional. Nos enfocamos en
                entender y responder a las necesidades de los clientes de
                nuestros clientes, mejorando su experiencia y aumentando las
                oportunidades de venta.
              </p>
            </div>
          </div>

          <div class="col-md-6">
            <img src="../assets/img/vision.jpg" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section id="mision">
      <div class="container-fluid bg-timbal2">
        <div class="row gx-0 align-items-center justify-content-center">
          <div class="col-md-6">
            <img src="../assets/img/mision.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-md-6 p-5 h-100">
            <div class="text-center text-white">
              <h1>Nuestra Mision</h1>
              <p class="fs-5">
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

    <section id="principios" class="py-5">
      <div class="container py-5">
        <div class="row gx-0 align-items-center justify-content-center">
          <div class="col-md-6 p-5 h-100">
            <h2>Nuestros principios</h2>
            <p class="fs-5">
              Reflejan nuestros valores y definen cómo diseñamos soluciones que
              conectan negocios y clientes.
            </p>

            <BAccordion>
              <BAccordionItem title="Innovación Centrada en el Usuario" visible>
                Diseñamos nuestras herramientas pensando siempre en las
                personas, facilitando procesos y mejorando experiencias.
              </BAccordionItem>
              <BAccordionItem title="Conexión Significativa">
                Promovemos relaciones sólidas entre negocios y clientes mediante
                tecnología que simplifica y potencia la comunicación.
              </BAccordionItem>
              <BAccordionItem title="Simplicidad y Eficiencia">
                Creamos soluciones intuitivas que eliminan la complejidad,
                permitiendo a los usuarios ahorrar tiempo y enfocarse en lo que
                realmente importa.
              </BAccordionItem>
              <BAccordionItem title="Adaptabilidad Constante">
                Evolucionamos continuamente para ofrecer herramientas que se
                ajusten a las necesidades cambiantes del mercado.
              </BAccordionItem>
              <BAccordionItem title="Transparencia y Confianza">
                Fomentamos relaciones basadas en la honestidad, tanto con
                nuestros usuarios como con nuestros partners.
              </BAccordionItem>
            </BAccordion>
          </div>
          <div class="col-md-6">
            <img
              src="../assets/img/coffeeshop.jpg"
              class="img-fluid"
              alt="Principles"
            />
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
