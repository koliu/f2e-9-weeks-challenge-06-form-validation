<template lang="pug">
  .section
    .header
      .title.ft-title General Infomation
      .sub-title.ft-sub-title Tell us who you are!
    .content.ft-form
      .row
        .col
          .label Name (optional)
          input(type="text", name="name", placeholder="Example Name", v-model="name").input-w220.ft-form
        .col
          .label Phone
          my-input(propId="phone", :propValue="phone", propType="text", :propValid="validPhone", propPlaceholder="0912 345 678", propWarnMessage="NUMBERS ONLY", propWarnDirection="right", @propUpdateData="updateData").w-220
      .row
        .label Birth Date (optional)
      .row
        .inline
          input(type="number", name="year", min="1900", max="9999", placeholder="YYYY", v-model="year").input-w140.ft-form
          input(type="number", name="month", min="1", max="12", placeholder="MM", v-model="month").input-w140.ft-form
          input(type="number", name="day", min="1", max="31", placeholder="DD", v-model="day").input-w140.ft-form
      .row
        .label Address
      .row
        .inline
          select.select-w220(v-model="city" @change="dist = ''").ft-form
            option(value="" disabled) CITY
            template(v-for="(item, index) in cityData.city")
              option(:value="index" :key="index" v-text="item")
          select.select-w220(v-model="dist").ft-form
            option(value="" disabled) DIST
            template(v-for="(item, index) in dists")
              option(:value="index" :key="index" v-text="item")
      .row
        my-input(propId="address", :propValue="address", propType="text", :propValid="validAddress", propPlaceholder="Address Detail", propWarnMessage="REQUIRED FILED", propWarnDirection="right", @propUpdateData="updateData").addr-detail

      .submit(@click.stop="submitHandler" :disabled="!success" :class="{'active':success}") SUBMIT &amp; NEXT

</template>
<script>
export default {
  components: {
    "my-input": () => import("./form-component/input.vue")
  },
  data() {
    return {
      name: "",
      phone: "",
      year: "",
      month: "",
      day: "",
      city: "",
      dist: "",
      address: "",
      cityData: {
        cities: [],
        region: []
      },
      dists: []
    };
  },
  methods: {
    updateData(target, value) {
      this[target] = value;
    },
    submitHandler() {
      if (!this.success) {
        return;
      }
      this.updateParentAndGoNext();
    },
    updateParentAndGoNext() {
      this.$emit("emit-update-and-go-next", this.$route.path);
    }
  },
  computed: {
    validPhone() {
      return this.verify.phone(this.phone);
    },
    validAddress() {
      return this.verify.address(this.address);
    },
    success() {
      return (
        this.validPhone &&
        this.validAddress &&
        this.city !== '' &&
        this.dist !== ''
      );
    }
  },
  watch: {
    city() {
      this.dists = this.cityData.region[this.city];
    },
    success() {

    }
  },
  mounted() {
    this.http
      .get(`src/data/city.json`)
      .then(res => {
        this.cityData = res.data;
      })
      .catch(err => {
        throw new Error(`Fail to load city data: ${err}`);
      });
  }
};
</script>
<style lang="scss" scoped>
@import "../css/pages";

.content {
  .row {
    @include flex-box(space-between, flex-start, none);

    .col {
      @include flex-box(space-between, flex-start, column);
    }

    .inline {
      @include flex-box(space-between, flex-start, none);
      width: 100%;
    }

    .addr-detail {
      margin-top: 24px;
      width: 100%;
    }
  }
}
</style>
