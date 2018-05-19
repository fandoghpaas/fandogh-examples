<template>
    <header >
        <nav class="header-container row between-xs" >
            <div class="logo col-xs-6">
                <a>
                    <img src="../assets/svg/ic-fandogh.svg" />
                </a>
            </div>
            <div class="social col-xs-6">
                <a href="https://twitter.com/fandoghpaas" target="_blank"> <img src="../assets/svg/ic-twitter.svg" /> </a>
                <a href="https://github.com/fandoghpaas/fandogh-examples" target="_blank"> <img src="../assets/svg/ic-github.svg" /> </a>
            </div>
        </nav>
    </header>
</template>

<script>
import icon from './Icons.vue'
export default {
  components:{
    icon
  }
}
</script>

<style lang="stylus">
    .header-container
        height: 60px
        margin-top: 30px
    header
        .social
            text-align: left
            a
              margin-right: 20px
</style>



