<template>
  <div>
    Worksheet will go here...
    <!-- <Spreadsheet :height="500" :columns="10" :rows="50"></Spreadsheet> -->
  </div>
</template>

<script>
// import { license } from '@progress/kendo-licensing';
// import { Spreadsheet } from '@progress/kendo-spreadsheet-vue-wrapper';

export default {
  name: 'App',
  components: {
    // Spreadsheet
  },
  mounted() {
    // license('LIC KEY GOES HERE');
  },
  methods: {
    onRender(arg) {
      console.log("Spreadsheet is rendered");
    },
    onSelect(arg) {
      console.log("New range selected. New value: " + arg.range.value());
    }
  }
}
</script>
