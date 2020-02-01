<template>
  <ValidationObserver ref="form">
    <form @submit.prevent="validate">
      <div>
        <div class="md-layout-item md-size-100 md-small-size-100 second-step">
          <h4 style="text-align:center;">{{ this.field_name.title }}</h4>
          <p style="text-align:center;">{{ this.field_name.heading }}</p>
          <div class="md-layout">
            <label class="md-layout-item md-size-50 md-xsmall-size-100 md-form-label">
              {{ this.field_name.ownership_file }}
            </label>
            <div class="md-layout-item md-xsmall-size-100 adjust">
              <input
                type="file"
                id="ownership_file"
                accept="application/pdf, image/jpeg, image/png"
                @change="updateMelliCodeFrontScan"
                required
              />
            </div>
          </div>
          <md-card-content>
            <md-table v-model="tableData" table-header-color="green">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Sonderfall/Konstellation">{{
                  item.key
                }}</md-table-cell>
                <md-table-cell md-label="Zusätzlicher Nachweis">{{
                  item.value
                }}</md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>

          <div class="md-layout">
            <label class="md-layout-item md-size-50 md-xsmall-size-100 md-form-label">
              {{ this.field_name.proof_file }}
            </label>
            <div class="md-layout-item md-xsmall-size-100 adjust">
              <input
                type="file"
                id="proof_file"
                accept="application/pdf, image/jpeg, image/png"
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
          key: "Name (Privatperson oder Unternehmen) stimmen überein.",
          value: "-"
        },
        {
          key:
            "Halter des Elektroautos ist andere Person aber wohnt im selben Haushalt.",
          value: "Personalausweis"
        },
        {
          key:
            "Das Elektroauto ist ein Dienstwagen und auf ein Unternehmen zugelassen.",
          value: "Bescheinigung Dienstwagen"
        }
      ],
      field_name: {
        error: "",
        heading: lang.de.fourth_step.heading,
        title: lang.de.fourth_step.title,
        ownership_file: lang.de.fourth_step.ownership_file,
        proof_file: lang.de.fourth_step.proof_file
      },
      fourth_step: {
        step: "fourth_step",
        ownership_file: "",
        proof_file: ""
      }
    };
  },
  methods: {
    validate() {
      return this.$refs.form.validate().then(res => {
        if (
          this.fourth_step.ownership_file === "" ||
          this.fourth_step.proof_file === ""
        ) {
          document.querySelector(".errorFourth").style.display = "block";
          this.field_name.error = lang.de.fourth_step.error;
        } else {
          document.querySelector(".errorFourth").style.display = "none";
          this.field_name.error = "";
          this.$emit("on-validated", this.fourth_step);
          return res;
        }
      });
    },
    updateMelliCodeFrontScan(e) {
      let file = e.target.files;
      if (
        (file[0]["type"] === "application/pdf" ||
          file[0]["type"] === "image/png" ||
          file[0]["type"] === "image/jpeg") &&
        file[0]["size"] <= 5242880
      ) {
        if (e.target.id === "ownership_file") {
          this.fourth_step.ownership_file = file[0];
        } else if (e.target.id === "proof_file") {
          this.fourth_step.proof_file = file[0];
        }
      } else {
        document.getElementById(e.target.id).value = "";
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text:
            "Deine Datei hat ein falsches Dateiformat (erforderlich ist entweder .pdf, .jpeg oder .png). Oder deine Datei ist zu groß (15 MB). Bitte versuche es erneut."
        });
      }
    }
  }
};
</script>
<style></style>
