<template>
  <ValidationObserver ref="form">
    <form @submit.prevent="validate">
      <div>
        <div class="md-layout-item md-size-100 md-small-size-100 second-step">
          <h4>{{ this.field_name.title }}</h4>
          <p>{{ this.field_name.heading }}</p>
          <tabs :tab-name="['Privatperson', 'Gewerbe']" color-button="warning">
            <!-- here you can add your content for tab-content -->
            <template slot="tab-pane-1">
              <div class="md-layout">
                <div class="md-layout-item md-size-50 md-small-size-100">
                  <md-field>
                    <label>{{ this.field_name.ownership_first_name }}</label>
                    <md-input
                      type="text"
                      v-model="ownership_first_name"
                    ></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-50 md-small-size-100">
                  <md-field>
                    <label>{{ this.field_name.ownership_last_name }}</label>
                    <md-input
                      type="text"
                      v-model="ownership_last_name"
                    ></md-input>
                  </md-field>
                  <input type="hidden" class="tabCheckThird" id="personal" />
                </div>
              </div>
            </template>
            <template slot="tab-pane-2">
              <div class="md-layout">
                <div class="md-layout-item md-size-100 md-small-size-100">
                  <md-field>
                    <label>{{ this.field_name.ownership_company }}</label>
                    <md-input
                      type="text"
                      v-model="ownership_company"
                    ></md-input>
                  </md-field>
                  <input type="hidden" class="tabCheckThird" id="company" />
                </div>
              </div>
            </template>
          </tabs>
          <div class="md-layout">
            <div class="md-layout-item md-size-60 md-small-size-100">
              <md-field>
                <label>{{ this.field_name.ownership_vehicle_number }}</label>
                <md-input
                  type="text"
                  v-model="ownership_vehicle_number"
                ></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <md-card>
                <md-card-content>
                  <md-datepicker v-model="contract_start">
                    <label>{{ this.field_name.contract_start }}</label>
                  </md-datepicker>
                </md-card-content>
              </md-card>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100">
              <md-card>
                <md-card-content>
                  <md-datepicker v-model="contract_end">
                    <label>{{ this.field_name.contract_end }}</label>
                  </md-datepicker>
                </md-card-content>
              </md-card>
            </div>
          </div>
          <div class="errorSecond" style="display:none">
            <div class="alert alert-danger">
              <span>{{ this.field_name.error }}</span>
            </div>
          </div>
        </div>
        <div class="errorThird" style="display:none">
          <div class="alert alert-danger">
            <span>{{ this.field_name.error }}</span>
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
        error: lang.de.third_step.error,
        heading: lang.de.third_step.heading,
        title: lang.de.third_step.title,
        ownership_first_name: lang.de.third_step.ownership_first_name,
        ownership_last_name: lang.de.third_step.ownership_last_name,
        ownership_company: lang.de.third_step.ownership_company,
        ownership_vehicle_number: lang.de.third_step.ownership_vehicle_number,
        contract_start: lang.de.third_step.contract_start,
        contract_end: lang.de.third_step.contract_end
      },
      ownership_first_name: null,
      ownership_last_name: null,
      ownership_company: null,
      ownership_vehicle_number: null,
      contract_start: null,
      contract_end: null
    };
  },
  methods: {
    validate() {
      return this.$refs.form.validate().then(res => {
        let checkTabDepency = false;
        const tabCheck = document.querySelector(".tabCheckThird").id;
        if (tabCheck === "personal") {
          this.ownership_company = null;
        } else if (tabCheck === "company") {
          this.ownership_first_name = null;
          this.ownership_last_name = null;
        }
        if (
          this.ownership_first_name !== null &&
          this.ownership_last_name !== null &&
          this.ownership_company === null
        ) {
          checkTabDepency = true;
        } else if (
          this.ownership_first_name === null &&
          this.ownership_last_name === null &&
          this.ownership_company !== null
        ) {
          checkTabDepency = true;
        }

        if (
          !checkTabDepency ||
          this.ownership_vehicle_number === null ||
          this.contract_start === null ||
          this.contract_end === null
        ) {
          document.querySelector(".errorThird").style.display = "block";
        } else {
          document.querySelector(".errorThird").style.display = "none";
          this.$emit("on-validated", res);
          return res;
        }
      });
    }
  }
};
</script>
<style></style>
