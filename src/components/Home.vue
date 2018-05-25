<template>
<div class="home">
    <div class="header">
        <div class="avatar-div">
            <img src="../assets/avatar.png" alt="avatar">
        </div><br>
        <div class="intro">
            <span ref="header" class="typed"></span>
            <p class="interest"> I'm very passionate about technology, humanity and problem solving. 
                My proficiency encomprises of: The LAMP (Linux, Apache, MySQL, PHP) and the MEVN (Mongo, Express, Vue JS, Node JS) Stacks. <br>
                I also love to play around frameworks like <a href="https://www.laravel.com" target="_blank">Laravel</a>, 
                <a href="https://www.vuejs.org" target="_blank">Vue JS</a> and design tool <a href="https://www.figma.com" target="_blank">Figma</a>.
                You can contact me <router-link to="/contact-me"> here <i class="fa fa-arrow-circle-right"></i> </router-link>
            </p>
        </div>
        <div>

            <a href="https://twitter.com/Davecodes01?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @Davecodes01</a>
        </div>
    </div>
</div>
</template>


<script>
import Typed from 'typed.js'

export default {
    mounted () {
        this.animateMsg()
    },
    methods: {
        animateMsg () {
            var element = this.$refs.header
            var options = {
                strings: [
                    "<h2>Hi, I am Chuks and I'm a <a href='/google-cert' target='_blank'> Google</a> certified full-stack Web developer.</h2><span style='color:white; font-weight:bold';>(Okpala Chukwualasu) <img src='http://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/128/Nigeria-Flag-icon.png' alt='flag' style='width:13px; height:13px'></span>",
                    ],
                typeSpeed: 50
            }
            var typed = new Typed(element, options);            
        }
    },
    created () {
        let twitter = document.createElement('script');    
        twitter.setAttribute('src',"https://platform.twitter.com/widgets.js");
        twitter.setAttribute('charset',"utf-8")
        document.head.appendChild(twitter);
    }

}
</script>

<style scoped>
.home {
    display: flex;
    width: 100%;
    border: 1px solid orange;
}
p {
    color: #BDBDBD;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 5%;
}

.avatar-div {
    padding-top: 0px;
    border: 2px solid #FFFFFF;
    width: 140px; 
    border-radius: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
}
img {
    width: 140px;
    height: 140px;
    border-radius: 140px;
}
em {
    color: orange;
}
.intro {
    color: #FFFFFF;
    text-align: center;
    width: 70%;
}

.interest {
    text-align: center;
}

@media screen and (max-width: 568px) {
    /* TODOS:
    * avatar resize 
    */
    .typed {
        font-size: 14px;
    }
    .avatar-div {
        padding-top: 0px;
        border: 2px solid #FFFFFF;
        width: 100px; 
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img {
        width: 100px;
        height: 100px;
        border-radius: 100px;
    }

    .header {
        padding: 5% 5%;
    }

    .intro {
        width: 100%;
    }
}

</style>
