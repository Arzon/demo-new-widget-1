<template>
  <div class="md-layout thankyou">
    <div class="md-layout-item">
      <!-- <signup-card> -->
      <div class="md-layout-item md-size-100 md-small-size-100 logo">
        <img class="img logo" :src="logo" />
      </div>

      <div class="md-layout-item md-size-100 md-small-size-100 content">
        <h2>{{ this.field_name.title }}</h2>
        <p>{{ this.field_name.heading }}</p>
        <img class="img evLogo" :src="banner" />
      </div>
      <!-- </signup-card> -->
    </div>
  </div>
</template>
<script>
import { SignupCard } from "@/components";
import lang from "@/assets/lang/de.json";
export default {
  components: {
    // SignupCard
  },
  props: {
    banner: {
      type: String,
      default: require("@/assets/img/banner.png")
    },
    logo: {
      type: String,
      default: require("@/assets/img/innogy.svg")
    }
  },
  data() {
    return {
      field_name: {
        heading: lang.de.fifth_step.heading,
        title: lang.de.fifth_step.title
      }
    };
  }
};
</script>
<style></style>
