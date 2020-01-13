<template>
  <div class="wrap">
    <h1 class="wrap-title">{{title}}</h1>
    <form action="" class="wrap-form" @submit.prevent="login" novalidate="true">
        <div class="wrap-form__item">
            <label class="wrap-form__label" for="email" >E-mail</label>
            <input class="wrap-form__input" id="email" name="email" type="text" v-model="email" @input="isEmailTouched = true" :class="{ error: isEmailError }">
            <div class="wrap-form__error" v-if="isEmailError">Error valid E-mail</div>
        </div>
        <div class="wrap-form__item">
            <label class="wrap-form__label" for="password">Password</label>
            <input class="wrap-form__input" type="password" name="password" id="pass" v-model="password" @input="isPasswordTouched = true" :class="{ error: isPasswordError }">
            <div class="wrap-form__error" v-if="isPasswordError">Error valid Password</div>
            <span class="wrap-form__show" v-on:click="show_pass" id="pass_show">
                <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1398 0.333313C5.97316 0.333313 2.41483 2.92498 0.973164 6.58331C2.41483 10.2416 5.97316 12.8333 10.1398 12.8333C14.3065 12.8333 17.8648 10.2416 19.3065 6.58331C17.8648 2.92498 14.3065 0.333313 10.1398 0.333313ZM10.1398 10.75C7.83983 10.75 5.97316 8.88331 5.97316 6.58331C5.97316 4.28331 7.83983 2.41665 10.1398 2.41665C12.4398 2.41665 14.3065 4.28331 14.3065 6.58331C14.3065 8.88331 12.4398 10.75 10.1398 10.75ZM10.1398 4.08331C8.7565 4.08331 7.63983 5.19998 7.63983 6.58331C7.63983 7.96665 8.7565 9.08331 10.1398 9.08331C11.5232 9.08331 12.6398 7.96665 12.6398 6.58331C12.6398 5.19998 11.5232 4.08331 10.1398 4.08331Z" fill="#181C43"/>
                </svg>
            </span>
            <span class="wrap-form__hide" v-on:click="hide_pass" id="pass_hide">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1399 3.41668C12.4399 3.41668 14.3065 5.28335 14.3065 7.58335C14.3065 8.00835 14.2232 8.41668 14.1065 8.80001L16.6565 11.35C17.8149 10.325 18.7315 9.04168 19.3065 7.57501C17.8649 3.92501 14.3065 1.33335 10.1399 1.33335C9.08152 1.33335 8.06486 1.50001 7.10652 1.80835L8.91486 3.61668C9.30652 3.50001 9.71486 3.41668 10.1399 3.41668ZM2.39818 0.633337C2.07318 0.958337 2.07318 1.48334 2.39818 1.80834L4.03984 3.45C2.68984 4.525 1.61484 5.94167 0.973175 7.58334C2.41484 11.2417 5.97318 13.8333 10.1398 13.8333C11.4065 13.8333 12.6148 13.5833 13.7315 13.15L15.9982 15.4167C16.3232 15.7417 16.8482 15.7417 17.1732 15.4167C17.4982 15.0917 17.4982 14.5667 17.1732 14.2417L3.58151 0.633337C3.25651 0.308337 2.72318 0.308337 2.39818 0.633337ZM10.1399 11.75C7.83986 11.75 5.97319 9.88334 5.97319 7.58334C5.97319 6.94167 6.12319 6.33334 6.38152 5.8L7.68986 7.10834C7.66486 7.25834 7.63986 7.41667 7.63986 7.58334C7.63986 8.96667 8.75652 10.0833 10.1399 10.0833C10.3065 10.0833 10.4565 10.0583 10.6149 10.025L11.9232 11.3333C11.3815 11.6 10.7815 11.75 10.1399 11.75ZM12.6149 7.30835C12.4899 6.14168 11.5732 5.23335 10.4149 5.10835L12.6149 7.30835Z" fill="#181C43"/>
                </svg>
            </span>
        </div>
        <div class="wrap-form__item">
            <input class="wrap-form__submit" type="submit" value="Sign Up" :disabled="!isEmailValid || !isPasswordValid">
        </div>
    </form>
    <div class="wrap-signin">
        <p class="wrap-signin__txt">Already have an account?</p>
        <router-link class="wrap-signin__link" to="/sign-up">Sign up</router-link>
    </div>           
    <div class="wrap-error">
        <span class="wrap-error__txt">Wrong email or password</span>
        <button class="wrap-error__close" @click="close">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 0.758309C10.925 0.433309 10.4 0.433309 10.075 0.758309L5.99998 4.82498L1.92498 0.749976C1.59998 0.424976 1.07498 0.424976 0.749976 0.749976C0.424976 1.07498 0.424976 1.59998 0.749976 1.92498L4.82498 5.99998L0.749976 10.075C0.424976 10.4 0.424976 10.925 0.749976 11.25C1.07498 11.575 1.59998 11.575 1.92498 11.25L5.99998 7.17497L10.075 11.25C10.4 11.575 10.925 11.575 11.25 11.25C11.575 10.925 11.575 10.4 11.25 10.075L7.17497 5.99998L11.25 1.92498C11.5666 1.60831 11.5666 1.07498 11.25 0.758309Z" fill="white"/>
            </svg>
        </button>
    </div> 
  </div>
</template>    

<script>
import $ from 'jquery';
const emailCheckRegex = new RegExp('[^@]+@[^@]+\\.[^@]+');
const passCheckRegex = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%])(?=.*[a-z]).{8,})');

export default {
  name: 'SignIn',
  props:{
      title: String
  },
  data() {
    return {
      email: null,
      password: null,
      isEmailTouched: false,
      isPasswordTouched: false,
    };
  },
  computed: {
    isEmailValid() {
      return emailCheckRegex.test(this.email);
    },

    isEmailError() {
      return !this.isEmailValid && this.isEmailTouched;
    },

    isPasswordValid() {
       return passCheckRegex.test(this.password);
    },

    isPasswordError() {
      return !this.isPasswordValid && this.isPasswordTouched;
    },
  },
  methods: {
    bubble: function () {
        $('.wrap-form__message').toggleClass('active');
    },
    show_pass: function(){
        $('#pass_show').hide();
        $('#pass_hide').show();
        $('#pass').attr('type', 'text');
    },
    hide_pass: function(){
        $('#pass_show').show();
        $('#pass_hide').hide();
        $('#pass').attr('type', 'password');
    },
    show_passr: function(){
        $('#passr_show').hide();
        $('#passr_hide').show();
        $('#passr').attr('type', 'text');
    },
    hide_passr: function(){
        $('#passr_show').show();
        $('#passr_hide').hide();
        $('#passr').attr('type', 'password');
    },
    login: function () {
        let email = $('#email').val();
        let pass = $('#pass').val();
        if(email == 'krosten92@gmail.com' && pass == '#rgrtyTFytu'){
            this.$router.push('/main');
        }else{
            $('.wrap-error').show();
        }
        
    },
    close: function(){
        $('.wrap-error').hide();
    }
  }  
}
</script>

<style scoped lang="scss">
    .wrap{
        width: 100%;
        height: 100%;
        .wrap-title{
            margin-top: 15px;
            font-weight: 800;
            font-size: 22px;
            line-height: 30px;
            align-items: center;
            text-align: center;
            letter-spacing: 0.02em;
            color: #181C43;
        }
        .wrap-form{
            padding:25px;
            display: block;
            max-width:275px;
            margin:0 auto;
            background: #FFFFFF;
            border-radius: 40px;
            .wrap-form__item{
                position:relative;
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 15px;
                &:last-child{
                    margin-top:45px;
                    margin-bottom: 0;
                }
                .wrap-form__label{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    margin-bottom: 5px;
                    margin-left: 15px;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 20px;                  
                }
                .wrap-form__input{
                    width:230px;
                    height:35px;
                    padding-left:15px;
                    background: #F3F3FA;
                    border-radius: 50px;
                    border:0;
                    &.error{
                        background: #FF6683;
                    }
                }
                .wrap-form__error{
                    position:absolute;
                    bottom:-20px;
                    display: flex;
                    width: 100%;
                    font-size: 10px;
                    line-height: 20px;
                    justify-content: flex-start;
                    color: #FF6683;
                    margin-left:15px;
                    margin-top:5px;
                }
                .wrap-form__faq{
                    position:absolute;
                    right:15px;
                    top:1px             
                }
                .wrap-form__message{
                    display: none;
                    position:absolute;
                    top:-50px;
                    right:0;
                    padding:10px;
                    color: #F3F3F3;
                    background: #1E1A3E;
                    box-shadow: 0px 5.44862px 13.6215px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    font-size: 10px;
                    line-height: 14px;
                    align-items: center;
                    justify-content: center;
                    letter-spacing: -0.4px;
                    &.active{
                        display: flex;
                    }
                    &:after{
                        content:'';
                        position:absolute;
                        bottom:-5px;
                        right:15px;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 5px 5px 0 5px;
                        border-color: #1e1a3e transparent transparent transparent;
                    }
                }  
                .wrap-form__show, .wrap-form__hide{
                    position: absolute;
                    right:15px;
                    bottom:8px;
                }   
                .wrap-form__hide{
                    display: none;
                    bottom:6px;
                }          
                .wrap-form__submit{
                    display: flex;
                    width:230px;
                    height:48px;
                    justify-content: center;
                    align-items: center;
                    color:#fff;
                    background: #1E1A3E;
                    border-radius: 50px;
                    border:0;
                    cursor:pointer;
                    &:hover{
                        background: #efce4a;
                    }
                    &[disabled]{
                        background: #CDCDCD;
                    }
                }
            }
        }
        .wrap-signin{
            display: flex;
            flex-wrap:wrap;
            justify-content: center;
            .wrap-signin__txt{
                display: flex;
                justify-content: center;
                width: 100%;
                color: #1E1A3E;
                margin-bottom: 5px;
            }
            .wrap-signin__link{
                color: #1E1A3E;
            }
        }

        .wrap-error{
            display: none;
            position:absolute;
            padding:15px;
            border-radius: 50px;
            background: #FF6683;
            color:#fff;
            margin:0 auto;
            width:275px;
            bottom:15px;
            left:0;
            right:0;
            text-align: center;
            .wrap-error__txt{
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
            }

            .wrap-error__close{
                position:absolute;
                right:15px;
                top:18px;
                background:transparent;
                border:0;
                cursor:pointer
            }

        }
    }    
</style>