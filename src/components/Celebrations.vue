<template>
  <div>
    <h3>Celebrations Component</h3>
    {{ celebrations }}
  </div>
</template>

<script>

import CelebrationsService from '../services/celebrations.service';
const celebrations = null;

export default {
  name: 'Celebrations',
  props: {
    msg: String
  },
  data () {
    return {
      celebrations,
    }
  },
  async mounted () {
    this.getCelebrations();
  },
  methods: {
    async getCelebrations() {
      this.celebrations = await CelebrationsService.getCelebrations().then(res => res.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
