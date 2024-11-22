<template>
  <div>
    <!-- Header-->
    <header id="hero-header" class="bg-timbal mt-5 py-5">
      <div class="container px-5">
        <div class="row h-100 gx-5 align-items-center justify-content-center">
          <div class="col-lg-6">
            <div class="my-5 text-center text-xl-start">
              <h1 class="display-5 fw-bolder text-white mb-2">
                Resuelve, Conecta, y Fideliza: Tu atención al cliente sin pausas
                ni excusas.
              </h1>
              <p class="lead fw-normal text-white-50 mb-4">
                Somos la extensión de tu equipo. Brindamos atención
                personalizada las 24 horas del día para que tus clientes siempre
                se sientan escuchados.
              </p>
              <div
                class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start"
              >
                <a class="btn btn-timbal btn-lg px-4 me-sm-3" href="#"
                  >Contactanos</a
                >
                <a
                  class="btn btn-outline-light btn-lg px-4"
                  href="https://calendly.com/timbalcomunicaciones/30min"
                  >Solicita una demo</a
                >
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-none d-xl-block text-center"></div>
        </div>
      </div>
    </header>

    <!-- Servicios -->
    <section class="py-5" id="features">
      <div class="container px-5 my-2">
        <div class="row gx-5 py-5">
          <div class="col-lg-6 mx-auto">
            <h2 class="h1 fw-bolder text-center">Lo que hacemos por ti</h2>
          </div>
        </div>
        <div class="row gx-5">
          <div class="col-lg-12">
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
        </div>
      </div>
    </section>

    <!-- CTA to contact -->
    <section class="bg-timbal2">
      <div class="container m-auto p-5 text-white">
        <div class="row gx-2 align-items-center justify-content-center">
          <div class="col-md-6">
            <div class="text-center">
              <img
                src="../assets/img/leadership.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-6 text-left">
            <h1>¿Por Qué Elegirnos?</h1>
            <p>Mientras tú creces, nosotros cuidamos de tus clientes.</p>
            <ul>
              <li>
                <strong>99.9% de Tiempo de Actividad:</strong> Nunca dejamos a
                tus clientes esperando.
              </li>
              <li>
                <strong>Reducción de Quejas en un 40%:</strong>Atención rápida =
                Clientes felices.
              </li>
              <li>
                <strong>Informes Detallados Mensuales:</strong>Descubre cómo
                evolucionan las interacciones.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="success-cases">
      <div class="container py-5">
        <div class="row py-5">
          <div class="col-md-12">
            <div class="text-center">
              <h2>Casos de Éxito</h2>
              <p class="text-muted">
                Empresas que confían en nosotros ya están un paso adelante.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 text-dark">
            <b-carousel
              id="text-carousel"
              controls
              indicators
              interval="3000"
              background="#000"
              fade
            >
              <b-carousel-slide>
                <div class="text-center">
                  <h3>Slide 1</h3>
                  <p>
                    This is the content for the first slide. It's just text.
                  </p>
                </div>
              </b-carousel-slide>

              <b-carousel-slide>
                <div class="text-center">
                  <h3>Slide 2</h3>
                  <p>
                    Welcome to the second slide of this text-based carousel.
                  </p>
                </div>
              </b-carousel-slide>

              <b-carousel-slide>
                <div class="text-center">
                  <h3>Slide 3</h3>
                  <p>
                    This is the third and final slide with only text content.
                  </p>
                </div>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing">
      <div class="container my-4">
        <div class="row my-5">
          <div class="col-md-12">
            <div class="text-center">
              <h2>Planes y Precios: Diseñados para Crecer Contigo</h2>
              <p class="text-muted">
                Escoge el plan que más se adapta a tu negocio, y si no lo
                encuentras, lo creamos para ti.
              </p>
            </div>
          </div>
        </div>

        <div class="row text-center">
          <!-- Plan Básico -->
          <div class="col-md-4">
            <div class="card shadow-sm py-5 h-100">
              <div class="card-body">
                <h5 class="card-title">Plan Básico</h5>
                <p class="card-text">Ideal para negocios emergentes.</p>
                <h3 class="h1 my-4">
                  <strong>$99</strong><span class="fs-6">/mes</span>
                </h3>
                <ul class="list-unstyled mb-4">
                  <li>✔ Atención WhatsApp + chat web</li>
                  <li>✔ 12 horas/día</li>
                </ul>
                <a href="#" class="btn btn-timbal">Solicitar una Cotización</a>
              </div>
            </div>
          </div>

          <!-- Plan Profesional -->
          <div class="col-md-4">
            <div class="card shadow-sm py-5 h-100">
              <div class="card-body">
                <h5 class="card-title pt-2">Plan Profesional</h5>
                <p class="card-text">Para empresas en expansión.</p>
                <h3 class="h1 my-4">
                  <strong>$299</strong><span class="fs-6">/mes</span>
                </h3>
                <ul class="list-unstyled mb-4">
                  <li>✔ Soporte multicanal</li>
                  <li>✔ Reporte mensual</li>
                </ul>
                <a href="#" class="btn btn-timbal">Solicita una cotización</a>
              </div>
            </div>
          </div>

          <!-- Plan Premium -->
          <div class="col-md-4">
            <div class="card shadow-sm py-5 h-100">
              <div class="card-body">
                <h5 class="card-title">Plan Premium</h5>
                <p class="card-text">Máxima cobertura y personalización.</p>
                <h3 class="h1 my-4">
                  <strong>$599</strong><span class="fs-6">/mes</span>
                </h3>
                <ul class="list-unstyled mb-4">
                  <li>✔ Atención 24/7</li>
                  <li>✔ Agentes dedicados</li>
                </ul>
                <a href="#" class="btn btn-timbal">Agenda una reunión hoy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact-form" class="bg-timbal py-5">
      <div class="container my-5">
        <div class="row align-items-center justify-content-middle text-white">
          <div class="col-md-6">
            <div>
              <h2 class="mb-4">
                Déjanos tus datos, te respondemos en minutos.
              </h2>
              <h5>T. 33 1115 3802</h5>
              <h5>hello@timbal.com.mx</h5>
              <p>
                Av. Miguel Hidalgo y costilla #1995, Col. Ladrón de Guevara,
                C.P. 44600, Guadalajara, Jalisco. <br />
                <a
                  href="https://maps.app.goo.gl/9XvJNjRVEd8LexgJ7"
                  class="btn btn-outline-light"
                  >Visitanos</a
                >
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <form id="contactForm" class="rounded bg-light px-5 py-5">
              <!-- Name Field -->
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <!-- Email Field -->
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <!-- Phone Field -->
              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <!-- Message Field -->
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              <!-- Submit Button -->
              <div class="text-center">
                <button type="submit" class="btn btn-timbal w-100">
                  Submit
                </button>
              </div>
            </form>
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
    data() {
      return {
        name: "",
        email: "",
        phone: "",
        message: "",
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
    methods: {
      async submitForm() {
        // Kommo CRM API endpoint and API token
        const kommoAPIUrl = "https://yourcompany.kommo.com/api/v4/leads"; // Replace 'yourcompany' with your actual subdomain
        const token = "your_kommo_api_token"; // Replace with your actual API token

        const leadData = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          notes: this.message,
          custom_fields: [
            { id: "custom_field_id_for_phone", value: this.phone }, // Replace with actual field ID
            { id: "custom_field_id_for_message", value: this.message }, // Replace with actual field ID
          ],
        };

        // Send the form data to Kommo CRM
        try {
          const response = await fetch(kommoAPIUrl, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(leadData),
          });

          if (response.ok) {
            alert("Thank you! Your message has been sent.");
            // Reset form fields
            this.name = "";
            this.email = "";
            this.phone = "";
            this.message = "";
          } else {
            alert("There was an issue submitting your form. Please try again.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Error sending data to Kommo.");
        }
      },
    },
  };
</script>
