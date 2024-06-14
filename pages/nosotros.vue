<template>
  <div>
    <section>
      <div class="container py-5">
        <div class="row">
          <div class="col-8 mx-auto">
            <div class="text-center">
              <img src="../assets/img/at-the-office.gif" width="512" />
              <h1>¿Quienes Somos?</h1>
              <p>
                Somos una agencia especializada en la generación de leads,
                comprometida con mejorar la experiencia de los clientes de
                nuestros clientes. Nos dedicamos a responder de manera eficiente
                y profesional a los mensajes recibidos, lo que nos permite
                ofrecer un servicio personalizado y de alta calidad. Nuestro
                objetivo es aumentar la posibilidad de ventas mediante una
                atención oportuna y efectiva, asegurando que cada interacción
                con los clientes contribuya a mejorar su percepción del servicio
                o producto ofrecido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container-fluid py-5 bg-secondary">
        <div class="row">
          <div class="col-md-4">
            <div class="text-center text-white">
              <h1>Vision</h1>
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

          <div class="col-md-4">
            <div class="text-center text-white">
              <h1>Mision</h1>
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

          <div class="col-md-4">
            <div class="text-center text-white">
              <h1>Valores</h1>

              <ol style="list-style-type: none">
                <li>Compromiso</li>
                <li>Prefesionalismo</li>
                <li>Innovación</li>
                <li>Calidad</li>
                <li>Colaboración</li>
                <li>Orientación al Cliente</li>
              </ol>
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
