<template>
    <div class="main">
        <div class="row middle-xs">
            <div class="col-md-6 col-md-offset-1 col-sm-12">
                <h1>
                    همه چیز با یه داکرفایل شروع میشه ...
                </h1>
                <p>
                    فندق یه PaaS هست که به شما این امکان رو میده که سرویس‌های خودتون رو بر روی سرورهای ابری مستقر کنید و نگران مدیریت سرورها و سرویس‌هایی که نیاز دارید نباشید.
                    <br/>
                    زمان زیادی تا شروع به کار نسخه بتای فندق باقی نمونده. اگر دوست دارید جزء اولین کسایی باشید که این سرویس رو تست میکنه و با بازخوردش به بهبود اون کمک میکنه ایمیلتون رو با ما به اشتراک بذارید.
                </p>
                <Email/>
            </div>
            <div class="col-md-5 col-sm-12 illustrate">
                <img class="img-responsive" src="../assets/svg/ic-illustration.svg" />
            </div>
        </div>
    </div>
</template>

<script>
    import Email from '../components/Mail'
    export default {
      components:{
        Email
      }
    }
</script>

<style lang="stylus" scoped>
  .main
    margin-top: 90px
  .illustrate
    text-align: left
  @media only screen and (max-width: 991px)
      .illustrate
        margin-top 60px
        text-align: center
</style>