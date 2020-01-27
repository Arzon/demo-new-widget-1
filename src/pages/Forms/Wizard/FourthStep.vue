<template>
  <ValidationObserver ref="form">
    <form @submit.prevent="validate">
      <div>
        <div class="md-layout-item md-size-100 md-small-size-100 second-step">
          <h4>{{ this.field_name.title }}</h4>
          <p>{{ this.field_name.heading }}</p>
          <div class="md-layout">
            <label class="md-layout-item md-size-20 md-form-label">
              {{ this.field_name.ownership_file }}
            </label>
            <div class="md-layout-item md-xsmall-size-100 adjust">
              <input
                type="file"
                id="ownership_file"
                @change="updateMelliCodeFrontScan"
                required
              />
            </div>
          </div>
          <md-card-content>
            <md-table v-model="tableData" table-header-color="green">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Case">{{ item.key }}</md-table-cell>
                <md-table-cell md-label="Required Proof">{{
                  item.value
                }}</md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>

          <div class="md-layout">
            <label class="md-layout-item md-size-20 md-form-label">
              {{ this.field_name.household_file }}
            </label>
            <div class="md-layout-item md-xsmall-size-100 adjust">
              <input
                type="file"
                id="household_file"
                @change="updateMelliCodeFrontScan"
              />
            </div>
          </div>
          <div class="errorFourth" style="display:none">
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
import {} from "@/components";
import lang from "@/assets/lang/de.json";
import Swal from "sweetalert2";

export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          key: "Ada Lovelace",
          value: "December 10, 1815"
        },
        {
          key: "Grace Hopper",
          value: "December 9, 1906"
        },
        {
          key: "Margaret Hamilton",
          value: "August 17, 1936"
        },
        {
          key: "Joan Clarke",
          value: "June 24, 1917"
        }
      ],
      field_name: {
        error: lang.de.fourth_step.error,
        heading: lang.de.fourth_step.heading,
        title: lang.de.fourth_step.title,
        ownership_file: lang.de.fourth_step.ownership_file,
        household_file: lang.de.fourth_step.household_file
      },
      ownership_file: null,
      household_file: null
    };
  },
  methods: {
    validate() {
      return this.$refs.form.validate().then(res => {
        if (this.ownership_file === null || this.household_file === null) {
          document.querySelector(".errorFourth").style.display = "block";
        } else {
          document.querySelector(".errorFourth").style.display = "none";
          this.$router.push("thankyou");
        }
      });
    },
    updateMelliCodeFrontScan(e) {
      console.log(e);
      let file = e.target.files;
      if (
        (file[0]["type"] === "application/pdf" ||
          file[0]["type"] === "image/png" ||
          file[0]["type"] === "image/jpeg") &&
        file[0]["size"] <= 5242880
      ) {
        if (e.target.id === "ownership_file") {
          this.ownership_file = file[0];
        } else if (e.target.id === "household_file") {
          this.household_file = file[0];
        }
      } else {
        document.getElementById(e.target.id).value = "";
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            "Invalid file format or upload file size crossed the maximum limit of size"
        });
      }
    }
  }
};
</script>
<style></style>
