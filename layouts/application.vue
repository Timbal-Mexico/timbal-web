<template>
<div>
   <!-- Navigation-->
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container px-5">
        <a class="navbar-brand" href="/"><img src="../timbal_logo.svg" width="128"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link" href="/">Inicio</a></li>
                <li class="nav-item"><a class="nav-link" href="/nosotros">Nosotros</a></li>
                <li class="nav-item"><a class="nav-link" href="/servicios">Servicios</a></li>
                <li class="nav-item"><a class="nav-link" href="/kommo">Kommo</a></li>
                <li class="nav-item"><a class="nav-link" href="/contacto">Contacto</a></li>
                <li class="nav-item"><a class="btn btn-outline-white" href="/dashboard/login">Login</a></li>
            </ul>
        </div>
    </div>
</nav>
<!-- Pages -->
      <slot />
      
  <!-- Footer-->
  <footer class="bg-dark py-4 mt-auto">
    <div class="container px-5">
        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
            <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Comunicaciones Digitales Timbal 2024</div></div>
            <div class="col-auto">
                <a class="link-light small" href="#!">Privacy</a>
                <span class="text-white mx-1">&middot;</span>
                <a class="link-light small" href="#!">Terms</a>
                <span class="text-white mx-1">&middot;</span>
                <a class="link-light small" href="#!">Contact</a>
            </div>
        </div>
    </div>
</footer>
</div>
</template>