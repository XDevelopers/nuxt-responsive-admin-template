<template>
  <div>
    
    
    <Loading v-if="showLoading" />
  </div>
</template>

<script>
  import Loading from "~/components/Loading";
  export default {
    layout: "empty",
    components: {
      Loading
    },
    data () {
      return {
        showLoading: false
      }
    }
  }
</script>

<style>
  
</style>
