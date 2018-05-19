<template>
    <div class="box">
        <div >
            <img v-if="image === 'scale'" src="../assets/svg/ic-auto-scaling.svg" />
            <img style="width: 100px" v-if="image === 'docker'" src="../assets/svg/ic-docker.svg" />
            <img v-if="image === 'database'" src="../assets/svg/ic-databases.svg" />
        </div>
        <div class="text-container">
            <p class="title"> {{title}} </p>
            <p class="p-title">{{pTitle}}</p>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['image', 'title', 'pTitle']
  }
</script>

<style scoped lang="stylus">
    .box
        background-color rgba(255,255,255, .1)
        padding: 20px 15px
        border-radius 5px
        margin-left 5px
        margin-bottom 20px
    .box:last-child
        margin-left 0
        img
            width 90px

    .box
        div
            display inline-block
            vertical-align top
            height 100px
            width: 100px
            padding 5px
            img
                margin-left: auto
                margin-right: auto
                position: relative
                top: 50%
                transform: translateY(-50%)

        div.text-container
            width: auto

    .title
        font-weight bold

    @media only screen and (max-width: 991px)
        .box
            margin-left 0
            div
                display: block
                text-align center
                width 100%
                top: 0
                transform none


</style>
