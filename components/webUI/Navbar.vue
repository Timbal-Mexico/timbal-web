<template>
  <BNavbar
    id="main-menu"
    v-b-color-mode="'dark'"
    toggleable="lg"
    variant="dark"
    fixed="top"
  >
    <BNavbarBrand href="#"
      ><img
        src="../../assets/img/timbal_logo.svg"
        fluid
        class="d-inline-block align-top"
        alt="Comunicaciones Digitales Timbal"
        with="128"
    /></BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="mx-auto mb-2 mb-lg-0">
        <BNavItem href="/">Home</BNavItem>
        <BNavItem href="/nosotros">Nosotros</BNavItem>
        <BNavItem href="/servicios">Soluciones</BNavItem>
        <BNavItem href="/kommo">Kommo CRM</BNavItem>
        <BNavItem href="/contacto">Contacto</BNavItem>
      </BNavbarNav>

      <BNavbarNav class="mb-2 mb-lg-0">
        <BButton href="/login" class="btn btn-light">Login</BButton>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>
