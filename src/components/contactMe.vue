<template>
    <transition name="fade">
        <div class="container">
            <div class="contact-container">
                <h2 class="contact-header">Contact Me</h2>
                <p class="contact-instruction">
                    Would you be needing my service on a project? Kindly contact me below. 
                </p>
                    <i class="fa fa-arrow-circle-down" style="color:orange"></i> <br>
                <div class="form-div">                
                    <form action="" id="main-form" @submit.prevent="sendMail">
                        <div>
                            <input type="text" name="name" class="input" v-model="name" placeholder="Full Name" required>
                        </div>
                        <div>
                            <input type="email" name="email"  v-model="email" class="input" placeholder="Email Address" required>
                        </div>
                        <div>
                            <textarea name="message" cols="30" rows="10" class="textarea" v-model="message" placeholder="Message" required></textarea>
                        </div>
                        <div>
                            <button type="submit" class="contact-btn">Send Message</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data (){
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        sendMail () {
            axios.post('http://localhost:3000/contact', {
                name: this.name,
                email: this.email,
                message: this.message,
            })
            .then((response) => {
                this.resetForm()
                alert('Email sent successfully', response)
            })
            .catch((error) => {
                this.resetForm()                
                console.log(error);
            })
        },
        resetForm () {
            console.log('Resetting the form')
            this.name = this.email = this.message = ''
        }
    }
 
}
</script>

<style scoped>
.contact-header {
    color: #F2F2F2;
    margin-bottom: 0px;
}

.contact-instruction {
    color: #BDBDBD;
    font-size: 15px;
    text-align: center;
}
.container {
    display: flex;
    border: 1px solid orange;
    width: 100%;
    height: 100%;
}

.contact-container {
    display: flex;
    flex-direction: column;
    padding: 2% 2% 5%;
    align-items: center;
    height: 100%;
}
form {
    display: flex;
    flex-direction: column;
}

.form-div {
    flex: 0 0 auto;
    width: 95%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media screen and (max-width: 568px) {
    .contact-header {
        font-size: 20px;
    }
    .contact-container {
        padding: 0% 2% 5%;
    }
}

@media screen and (min-width: 756px) {
    .form-div {
        width: 650px;
        margin-right: auto;
        margin-left: auto;
    }
    .contact-container {
        padding: 1% 2% 5%;
    }
}

</style>
