<template>
  <div>
    <header id="contacto" class="mt-1">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-md-offset-6">
            <div class="text-white">
              <h1>¿Tienes alguna pregunta, idea o proyecto en mente?</h1>
              <p>
                En Timbal, estamos aquí para escucharte y ayudarte. Ya sea que
                necesites información sobre nuestros servicios, quieras una
                cotización o simplemente desees conocernos mejor, no dudes en
                ponerte en contacto con nosotros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section id="map">
      <div class="container-fluid p-0">
        <div class="row py-5">
          <div class="col-8 mx-auto">
            <div class="text-center">
              <h2>Nuestras Oficinas</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4427.879624672275!2d-103.38364222475305!3d20.67634138088628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae12cf6ae803%3A0x828e6a9ff07afff1!2sMutuo%20Hidalgo!5e1!3m2!1ses-419!2smx!4v1732572025099!5m2!1ses-419!2smx"
              width="100%"
              height="600"
              style="border: 0"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe
            >-fluid
          </div>
        </div>
      </div>
    </section>

    <section class="bg-timbal2">
      <div class="container py-5">
        <div class="row align-items-center justify-items-center">
          <div class="col-md-6">
            <div class="text-center">
              <img
                src="../assets/img/contacto.svg"
                alt="Contacto PAge"
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mt-5">
              <form
                id="contact-form"
                class="bg-light p-5 shadow border border-secondary-subtle rounded"
              >
                <h2 class="mb-4">¡Cuentanos tu idea!</h2>
                <p>
                  Completa el formulario a continuación, llámanos o envíanos un
                  correo electrónico. Te responderemos lo más pronto posible.
                </p>
                <div class="form-group">
                  <label for="name">Nombre Completo</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="ej: Jose Doe"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="email">Correo Electrónico</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="ej: j.doe@timbal.com"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="phone">Número de Teléfono</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="phone"
                    placeholder="ej: 33 4567 8910"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="company">Empresa</label>
                  <input
                    type="text"
                    class="form-control"
                    id="company"
                    placeholder="Ingresa el nombre de tu empresa"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="message">Mensaje Adicional</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="4"
                    placeholder="¡Cuentanos Más!"
                  ></textarea>
                </div>
                <br />
                <div class="d-grid">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block py-2"
                  >
                    Enviar
                  </button>
                </div>
              </form>
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
</script>
