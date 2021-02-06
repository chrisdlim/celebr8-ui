<template>
  <div>
    <h3>Celebrations Component</h3>
    <pre>{{ celebrationsJSON | prettify }}</pre>
  </div>
</template>

<script>

import CelebrationsService from '../services/celebrations.service';

var celebrationsJSON = null;

export default {
  name: 'Celebrations',
  props: {
    msg: String
  },
  data () {
    return {
      celebrationsJSON,
    }
  },
  async mounted () {
    this.getCelebrations();
  },
  methods: {
    async getCelebrations() {
      this.celebrationsJSON = JSON.stringify(await CelebrationsService.getCelebrations().then(res => ({ data: res.data })))
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
