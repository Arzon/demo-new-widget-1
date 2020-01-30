<template>
  <ValidationObserver ref="form">
    <form @submit.prevent="validate">
      <div>
        <img class="img evLogo" :src="banner" />
        <div class="md-layout-item md-size-100 md-small-size-100">
          <p>{{ this.field_name.heading }}</p>
          <h4>{{ this.field_name.title }}</h4>
          <div class="firstStep-checkbox">
            <md-checkbox v-model="first_step.confirm_ownership">{{
              this.field_name.confirm_ownership
            }}</md-checkbox>
            <md-checkbox v-model="first_step.confirm_energy_contract">
              {{ this.field_name.confirm_energy_contract }}
            </md-checkbox>
          </div>
          <div class="firstStep-checkbox">
            <md-checkbox v-model="first_step.term_conditions">{{
              this.field_name.term_conditions
            }}</md-checkbox>
            <md-checkbox v-model="first_step.term_conditions_greentrax">{{
              this.field_name.term_conditions_greentrax
            }}</md-checkbox>
          </div>
          <div class="error" style="display:none">
            <div class="alert alert-danger">
              <span>{{ this.field_name.error }}</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  </ValidationObserver>
</template>
<script>
import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import lang from "@/assets/lang/de.json";

export default {
  components: {},
  props: {
    banner: {
      type: String,
      default: require("@/assets/img/banner2.png")
    }
  },
  data() {
    return {
      field_name: {
        error: "",
        heading: lang.de.first_step.heading,
        title: lang.de.first_step.title,
        confirm_ownership: lang.de.first_step.confirm_ownership,
        confirm_energy_contract: lang.de.first_step.confirm_energy_contract,
        term_conditions: lang.de.first_step.term_conditions,
        term_conditions_greentrax: lang.de.first_step.term_conditions_greentrax
      },
      first_step: {
        step: "first_step",
        confirm_ownership: false,
        confirm_energy_contract: false,
        term_conditions: false,
        term_conditions_greentrax: false
      }
    };
  },
  methods: {
    validate() {
      return this.$refs.form.validate().then(res => {
        if (
          this.first_step.confirm_ownership === false ||
          this.first_step.confirm_energy_contract === false ||
          this.first_step.term_conditions === false ||
          this.first_step.term_conditions_greentrax === false
        ) {
          document.querySelector(".error").style.display = "block";
          this.field_name.error = lang.de.first_step.error;
        } else {
          document.querySelector(".error").style.display = "none";
          this.field_name.error = "";
          this.$emit("on-validated", this.first_step);
          return res;
        }
      });
    }
  }
};
</script>
<style></style>
