<template>
  <section class="footer">
    <div class="row around-xs">
      <div class="col-md-4 col-xs-12"> <feature image="scale" title="Auto Scaling" pTitle="مقیاس پذیری آسان"> </feature> </div>
      <div class="col-md-4 col-xs-12"> <feature image="docker" title="Docker" pTitle="به راحتی ساخت یک داکرفایل"> </feature> </div>
      <div class="col-md-4 col-xs-12"> <feature image="database" title="Auto Scaling" pTitle="پایگاه داده مدیریت شده"> </feature> </div>
    </div>
  </section>
</template>

<script>
  import Feature from '../components/Feature'
  export default {
    components:{
      Feature
    }
  }
</script>

<style scoped lang="stylus">
  .footer
    margin-top 90px

</style>
