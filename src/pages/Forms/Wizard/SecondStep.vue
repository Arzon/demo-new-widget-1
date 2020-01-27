<template>
  <ValidationObserver ref="form">
    <form @submit.prevent="validate">
      <div>
        <div class="md-layout-item md-size-100 md-small-size-100 second-step">
          <h4>{{ this.field_name.title }}</h4>
          <p>{{ this.field_name.heading }}</p>
          <tabs :tab-name="['Privatperson', 'Gewerbe']" color-button="warning">
            <template slot="tab-pane-1">
              <div class="md-layout">
                <div class="md-layout-item md-size-50 md-small-size-100">
                  <md-field>
                    <label>{{ this.field_name.first_name }}</label>
                    <md-input type="text" v-model="first_name"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-50 md-small-size-100">
                  <md-field>
                    <label>{{ this.field_name.last_name }}</label>
                    <md-input type="text" v-model="last_name"></md-input>
                  </md-field>
                  <input type="hidden" class="tabCheck" id="personal" />
                </div>
              </div>
            </template>
            <template slot="tab-pane-2">
              <div class="md-layout">
                <div class="md-layout-item md-size-100 md-small-size-100">
                  <md-field>
                    <label>{{ this.field_name.customer_company }}</label>
                    <md-input type="text" v-model="customer_company"></md-input>
                  </md-field>
                  <input type="hidden" class="tabCheck" id="company" />
                </div>
              </div>
            </template>
          </tabs>
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-small-size-100">
              <md-field>
                <label>{{ this.field_name.email }}</label>
                <md-input type="text" v-model="email"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <md-field>
                <label>{{ this.field_name.customer_number }}</label>
                <md-input type="text" v-model="customer_number"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-80 md-small-size-100">
              <md-field>
                <label>{{ this.field_name.street }}</label>
                <md-input type="text" v-model="street"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-20 md-small-size-100">
              <md-field>
                <label>{{ this.field_name.housenumber }}</label>
                <md-input type="text" v-model="housenumber"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-20 md-small-size-100">
              <md-field>
                <label>{{ this.field_name.postal_code }}</label>
                <md-input type="text" v-model="postal_code"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-80 md-small-size-100">
              <md-field>
                <label>{{ this.field_name.city }}</label>
                <md-input type="text" v-model="city"></md-input>
              </md-field>
            </div>
          </div>
          <div class="errorSecond" style="display:none">
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
import { Tabs } from "@/components";
import lang from "@/assets/lang/de.json";

export default {
  components: {
    Tabs
  },
  data() {
    return {
      field_name: {
        error: lang.de.second_step.error,
        title: lang.de.second_step.title,
        heading: lang.de.second_step.heading,
        first_name: lang.de.second_step.first_name,
        last_name: lang.de.second_step.last_name,
        customer_company: lang.de.second_step.customer_company,
        email: lang.de.second_step.email,
        customer_number: lang.de.second_step.customer_number,
        street: lang.de.second_step.street,
        housenumber: lang.de.second_step.housenumber,
        postal_code: lang.de.second_step.postal_code,
        city: lang.de.second_step.city
      },
      first_name: null,
      last_name: null,
      customer_company: null,
      email: null,
      customer_number: null,
      street: null,
      housenumber: null,
      postal_code: null,
      city: null
    };
  },
  methods: {
    validate() {
      return this.$refs.form.validate().then(res => {
        let checkTabDepency = false;
        const tabCheck = document.querySelector(".tabCheck").id;
        if (tabCheck === "personal") {
          this.customer_company = null;
        } else if (tabCheck === "company") {
          this.first_name = null;
          this.last_name = null;
        }

        if (
          this.first_name !== null &&
          this.last_name !== null &&
          this.customer_company === null
        ) {
          checkTabDepency = true;
        } else if (
          this.first_name === null &&
          this.last_name === null &&
          this.customer_company !== null
        ) {
          checkTabDepency = true;
        }

        if (
          !checkTabDepency ||
          this.email === null ||
          this.street === null ||
          this.housenumber === null ||
          this.postal_code === null ||
          this.city === null
        ) {
          document.querySelector(".errorSecond").style.display = "block";
        } else {
          document.querySelector(".errorSecond").style.display = "none";
          this.$emit("on-validated", res);
          return res;
        }
      });
    }
  }
};
</script>
<style></style>
