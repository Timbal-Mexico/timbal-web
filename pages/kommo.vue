<template>
  <div>
    <header id="kommo" class="mt-1">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center text-white">
              <h1>Kommo</h1>
              <p>Que es lo que hacemos</p>
            </div>
          </div>
        </div>
      </div>
    </header>
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
