<template>
    <section class="mail">
        <input v-model="email" type="text" placeholder="آدرس ایمیل رو وارد کنید" />
        <button v-if="!loading" @click="subscribe" > بهم خبر بده </button>
        <button v-else disabled > loading ... </button>
        <p  class="message" :class="{'error': hasError }"> &nbsp  {{message}} </p>
    </section>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        email:'',
        message: null,
        hasError: false,
        loading: false
      }
    },
    methods: {
      subscribe(){
        if(!this.validateEmail(this.email)) return this.showMessage('ایمیل وارد شده نامعتبر است.', true)
      	this.loading = true
      	axios.post('//fandogh.cloud:8080/api/users/early-access', {email: this.email}).then(res => {
      		this.showMessage("ایمیل شما با موفقیت ثبت شد، با شما تماس خواهیم گرفت.")
        }).catch(e => {
        	this.showMessage('شما قبلا ثبت نام کردید، با شما تماس خواهیم گرفت.', true)
        })
      },
      showMessage(message, error){
      	this.loading = false
      	this.hasError = error
        this.message = message
        setTimeout(() => {
          this.message = null
          if(error) this.hasError = false
        },5000)
      },
      validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .mail
        position relative
        margin-top 60px
        .message
            color greenyellow
        .error
            color red

    button
        width: 160px;
        height: 46px;
        border-radius: 10px;
        background-image: linear-gradient(to right, #deac33, #ff7c00);
        box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.25);
        border none
        position absolute
        top 6px
        left 8px
        transition all 1s ease
    button:hover
        background-image: linear-gradient(to right, #dea433, #ff6b00)
        cursor pointer


    input
        padding 20px
        width 100%
        box-sizing: border-box
        border-radius 10px
        border none

</style>