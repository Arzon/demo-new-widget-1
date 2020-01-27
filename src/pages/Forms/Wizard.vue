<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100 md-xsmall-size-100 mx-auto">
      <simple-wizard>
        <template slot="header">
          <img class="img evLogo" :src="logo" />
        </template>

        <wizard-tab :before-change="() => validateStep('step1')">
          <template slot="label">
            Start
          </template>
          <first-step ref="step1" @on-validated="onStepValidated"></first-step>
        </wizard-tab>

        <wizard-tab :before-change="() => validateStep('step2')">
          <template slot="label">
            Daten Stromvertrag
          </template>
          <second-step
            ref="step2"
            @on-validated="onStepValidated"
          ></second-step>
        </wizard-tab>

        <wizard-tab :before-change="() => validateStep('step3')">
          <template slot="label">
            Daten E-Auto
          </template>
          <third-step ref="step3" @on-validated="onStepValidated"></third-step>
        </wizard-tab>

        <wizard-tab :before-change="() => validateStep('step4')">
          <template slot="label">
            Nachweise
          </template>
          <fourth-step ref="step4" @on-validated="wizardComplete"></fourth-step>
        </wizard-tab>

        <!-- <wizard-tab :before-change="() => validateStep('step5')">
          <template slot="label">
            Thank You
          </template>
          <fifth-step ref="step5" @on-validated="wizardComplete"></fifth-step>
        </wizard-tab> -->
      </simple-wizard>
    </div>
  </div>
</template>
<script>
import FirstStep from "./Wizard/FirstStep.vue";
import SecondStep from "./Wizard/SecondStep.vue";
import ThirdStep from "./Wizard/ThirdStep.vue";
import FourthStep from "./Wizard/FourthStep.vue";
// import FifthStep from "./Wizard/FifthStep.vue";

import Swal from "sweetalert2";
import { SimpleWizard, WizardTab } from "@/components";

export default {
  name: "registration-wizard",
  data() {
    return {
      wizardModel: {}
    };
  },
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
    FourthStep,
    SimpleWizard,
    WizardTab
  },
  props: {
    logo: {
      type: String,
      default: require("@/assets/img/innogy.svg")
    }
  },
  methods: {
    validateStep(ref) {
      return this.$refs[ref].validate();
    },
    onStepValidated(validated, model) {
      this.wizardModel = {
        ...this.wizardModel,
        ...model
      };
    },
    wizardComplete() {
      // Swal.fire({
      //   title: "Good job!",
      //   text: "You clicked the finish button!",
      //   type: "success",
      //   confirmButtonClass: "md-button md-success",
      //   buttonsStyling: false
      // });
      this.$router.push("thankyou");
    }
  }
};
</script>
<style lang="scss" scoped>
.evLogo {
  height: 100px;
}
</style>
