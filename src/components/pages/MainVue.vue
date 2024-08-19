<template>
    <div class="container d-flex align-items-center min-vh-100">
        <div class="row g-0 justify-content-center">
            <!-- TITLE -->
            <div class="col-lg-4 offset-lg-1 mx-0 px-0">
                <div id="title-container">
                    <img class="salve-maria-image" src="../../assets/salve_maria.png">
                    <h2>Salve Maria &#x1F339;</h2>
                    <p>Personalizar seu terço não é apenas uma questão de estética; é uma forma de expressar sua fé de maneira pessoal e significativa. Um terço personalizado pode servir como um lembrete constante das suas crenças, de eventos importantes na sua vida ou de pessoas que são especiais para você. Além disso, um terço personalizado pode ser um presente maravilhoso e significativo para amigos e familiares.</p>
                </div>
           </div>
           
           <!-- FORMS -->
           <div class="col-lg-7 mx-0 px-0">
            <div class="progress">
               <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 0%"></div>
            </div>
            <div id="qbox-container">
               <form class="needs-validation" id="form-wrapper" method="post" name="form-wrapper" novalidate="">
                  
                  <div id="steps-container">

                    <!-- ETAPA DE PEGAR AS INFORMACOES DO USUARIO -->                  
                    <div class="step">

                        <h1>Dados de Identificação</h1>
                        <div class="mt-4">
                           <label class="form-label">Nome:</label> 
                           <input class="form-control" id="full_name" name="full_name" placeholder="Seu Nome" type="text">
                        </div>
                        <div class="mt-4">
                            <label class="form-label">Telefone:</label> 
                            <input class="form-control" id="phone" name="phone" placeholder="(xx) xxxxx-xxxx" type="tel">


                        </div>
                     </div>
                     <!-- FIM ETAPA PEGAR AS INFORMACOES DO USUARIO -->
 
                     <div class="step">
                        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing.</h4>
                        <div class="form-check ps-0 q-box">
                           <div class="q-box__question">
                              <input class="form-check-input question__input" id="q_1_yes" name="q_1" type="radio" value="Yes"> 
                              <label class="form-check-label question__label" for="q_1_yes">Lorem ipsum dolor sit amet consectetur.</label>
                           </div>
                           <div class="q-box__question">
                              <input checked class="form-check-input question__input" id="q_1_no" name="q_1" type="radio" value="No"> 
                              <label class="form-check-label question__label" for="q_1_no">Lorem ipsum dolor sit amet.</label>
                           </div>
                        </div>
                     </div>
                     <div class="step">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit molestiae libero sint consequatur animi dolore excepturi! Beatae autem cumque voluptatem hic corporis aspernatur ducimus nisi! Suscipit nisi nobis impedit!</h4>
                        <div class="form-check ps-0 q-box">
                           <div class="q-box__question">
                              <input class="form-check-input question__input" id="q_2_yes" name="q_2" type="radio" value="Yes"> 
                              <label class="form-check-label question__label" for="q_2_yes">Yes</label>
                           </div>
                           <div class="q-box__question">
                              <input checked class="form-check-input question__input" id="q_2_no" name="q_2" type="radio" value="No"> 
                              <label class="form-check-label question__label" for="q_2_no">No</label>
                           </div>
                        </div>
                     </div>
                     <div class="step">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit molestiae libero sint consequatur animi dolore excepturi! Beatae autem cumque voluptatem hic corporis aspernatur ducimus nisi! Suscipit nisi nobis impedit!</h4>
                        <div class="form-check ps-0 q-box">
                           <div class="q-box__question">
                              <input class="form-check-input question__input" id="q_3_yes" name="q_3" type="radio" value="Yes"> 
                              <label class="form-check-label question__label" for="q_3_yes">Yes</label>
                           </div>
                           <div class="q-box__question">
                              <input checked class="form-check-input question__input" id="q_3_no" name="q_3" type="radio" value="No"> 
                              <label class="form-check-label question__label" for="q_3_no">No</label>
                           </div>
                        </div>
                     </div>
                     <div class="step">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit molestiae libero sint consequatur animi dolore excepturi! Beatae autem cumque voluptatem hic corporis aspernatur ducimus nisi! Suscipit nisi nobis impedit!</h4>
                        <div class="row">
                           <div class="col-lg-6">
                              <div class="form-check ps-0 q-box">
                                 <div class="q-box__question">
                                    <input class="form-check-input question__input q-checkbox" id="q_4_uk" name="q_4" type="checkbox" value="uk"> 
                                    <label class="form-check-label question__label" for="q_4_uk">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, id?</label>
                                 </div>
                              </div>
                              <div class="form-check ps-0 q-box">
                                 <div class="q-box__question">
                                    <input class="form-check-input question__input" id="q_4_us" name="q_4" type="checkbox" value="us"> 
                                    <label class="form-check-label question__label" for="q_4_us">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, id?</label>
                                 </div>
                              </div>
                              <div class="form-check ps-0 q-box">
                                 <div class="q-box__question">
                                    <input class="form-check-input question__input" id="q_4_br" name="q_3" type="checkbox" value="br"> 
                                    <label class="form-check-label question__label" for="q_4_br">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, id?</label>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="form-check ps-0 q-box">
                                 <div class="q-box__question">
                                    <input class="form-check-input question__input" id="q_4_de" name="q_4" type="checkbox" value="de"> 
                                    <label class="form-check-label question__label" for="q_4_de">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, id?</label>
                                 </div>
                              </div>
                              <div class="form-check ps-0 q-box">
                                 <div class="q-box__question">
                                    <input class="form-check-input question__input" id="q_4_in" name="q_4" type="checkbox" value="in"> 
                                    <label class="form-check-label question__label" for="q_4_in">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, id?</label>
                                 </div>
                              </div>
                              <div class="form-check ps-0 q-box">
                                 <div class="q-box__question">
                                    <input class="form-check-input question__input" id="q_4_eu" name="q_4" type="checkbox" value="eu"> 
                                    <label class="form-check-label question__label" for="q_4_eu">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, id?</label>
                                 </div>
                              </div>
                           </div>
                           <div class="col-lg-12">
                              <div class="form-check ps-0 q-box">
                                 <div class="q-box__question">
                                    <input class="form-check-input question__input" id="q_4_none" name="q_4" type="checkbox" value="none"> 
                                    <label class="form-check-label question__label" for="q_4_none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit molestiae libero sint consequatur animi dolore excepturi! Beatae autem cumque voluptatem hic corporis aspernatur ducimus nisi! Suscipit nisi nobis impedit!</label>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="step">
                        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, id?</h4>
                        <div class="row">
                           <div class="form-check ps-0 q-box">
                              <div class="q-box__question">
                                 <input class="form-check-input question__input" id="q_5_breathing" name="q_5_breathing" type="checkbox" value="breathing"> 
                                 <label class="form-check-label question__label" for="q_5_breathing">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, id?</label>
                              </div>
                           </div>
                           <div class="form-check ps-0 q-box">
                              <div class="q-box__question">
                                 <input class="form-check-input question__input" id="q_5_chest" name="q_5_chest" type="checkbox" value="chest pain"> 
                                 <label class="form-check-label question__label" for="q_5_chest">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, id?</label>
                              </div>
                           </div>
                           <div class="form-check ps-0 q-box">
                              <div class="q-box__question">
                                 <input class="form-check-input question__input" id="q_5_speech" name="q_5_speech" type="checkbox" value="speech problem"> 
                                 <label class="form-check-label question__label" for="q_5_speech">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, id?</label>
                              </div>
                           </div>
                           <div class="form-check ps-0 q-box">
                              <div class="q-box__question">
                                 <input class="form-check-input question__input" id="q_5_pale" name="q_5_pale" type="checkbox" value="pale"> 
                                 <label class="form-check-label question__label" for="q_5_pale">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, id?</label>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="step">
                        <h4>Provide us with your personal information:</h4>
                        <div class="mt-1">
                           <label class="form-label">Complete Name:</label> 
                           <input class="form-control" id="full_name" name="full_name" type="text">
                        </div>
                        <div class="mt-2">
                           <label class="form-label">Complete Address:</label> 
                           <input class="form-control" id="address" name="address" type="text">
                        </div>
                        <div class="mt-2">
                           <label class="form-label">Email:</label> 
                           <input class="form-control" id="email" name="email" type="email">
                        </div>
                        <div class="mt-2">
                           <label class="form-label">Phone / Mobile Number:</label> 
                           <input class="form-control" id="phone" name="phone" type="text">
                        </div>
                        <div class="row mt-2">
                           <div class="col-lg-2 col-md-2 col-3">
                              <label class="form-label">Age:</label>
                              <div class="input-container">
                                 <input class="form-control" id="age" name="age" type="text">
                              </div>
                           </div>
                           <div class="col-lg-8">
                              <div id="input-container">
                                 <input class="form-check-input" name="gender" type="radio" value="male"> 
                                 <label class="form-check-label radio-lb">Male</label> 
                                 <input class="form-check-input" name="gender" type="radio" value="female"> 
                                 <label class="form-check-label radio-lb">Female</label> 
                                 <input checked class="form-check-input" name="gender" type="radio" value="undefined"> 
                                 <label class="form-check-label radio-lb">Rather not say</label>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="step">
                        <div class="mt-1">
                           <div class="closing-text">
                              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing.!</h4>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque minima ipsam id hic rerum amet.</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, corrupti?.</p>
                           </div>
                        </div>
                     </div>
                     <div id="success">
                        <div class="mt-5">
                           <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nobis perspiciatis dolores nihil suscipit!.</p>
                           <a class="back-link" href="">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
                        </div>
                     </div>
                  </div>
                  <div id="q-box__buttons">
                     <button id="prev-btn" type="button">Anterior</button> 
                     <button id="next-btn" type="button">Próximo</button> 
                     <button id="submit-btn" type="submit">Clique aqui</button>
                  </div>
               </form>
            </div>
         </div>
        </div>
    </div>    
</template>

<script>
export default {
  name: 'MainVue'
}
</script>

<style scoped>
/* GENERAL */
 
body {
    background-image: url('../../assets/fundo-formulario.png');
    background-repeat: repeat;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4;
    color: #555;
}
 
h1,
h2,
h3,
h4,
h5,
h6 {
    color: #00011c;
}
 
p {
    margin-bottom: 24px;
    line-height: 1.9;
}
 
label {
    font-size: 16px;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 5px;
    color: #00011c;
}

/* TITLE */
 
#title-container {
    min-height: 460px;
    height: 100%;
    color: #fff;
    background-color: #2ba5f6;
    text-align: center;
    padding: 105px 28px 28px 28px;
    box-sizing: border-box;
    position: relative;
    box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);
    -webkit-box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);
    -moz-box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);
}
 
#title-container h2 {
    font-size: 45px;
    font-weight: 800;
    color: #fff;
    padding: 0;
    margin-bottom: 0px;
}
 
#title-container h3 {
    font-size: 25px;
    font-weight: 600;
    color: #82000a;
    padding: 0;
}
 
#title-container p {
    font-size: 1.em;
    padding: 0 25px;
    line-height: 20px;
}
 
.salve-maria-image {
    width: 300px;
    margin-bottom: 15px;
}

/* FORMS */
 
#qbox-container {
    background-color: #f7f9ff;
    position: relative;
    padding: 62px;
    min-height: 630px;
    box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);
    -webkit-box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);
    -moz-box-shadow: 10px 8px 21px 0px rgba(204, 204, 204, 0.75);
}
 
#steps-container {
    margin: auto;
    width: 500px;
    min-height: 420px;
    display: flex;
    vertical-align: middle;
    align-items: center;
}
 
.step {
    display: none;
}
 
.step h4 {
    margin: 0 0 26px 0;
    padding: 0;
    position: relative;
    font-weight: 500;
    font-size: 23px;
    font-size: 1.4375rem;
    line-height: 1.6;
}
 
button#prev-btn,
button#next-btn,
button#submit-btn {
    font-size: 17px;
    font-weight: bold;
    position: relative;
    width: 130px;
    height: 50px;
    background: #2ba5f6;
    margin: 0 auto;
    margin-top: 40px;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
    transition: color .3s;
    text-align: center;
    color: #fff;
    border: 0;
    -webkit-border-bottom-right-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    -moz-border-radius-bottomleft: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}
 
button#prev-btn:after,
button#next-btn:after,
button#submit-btn:after {
    position: absolute;
    top: 90%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1675b5;
    content: "";
    z-index: -2;
    transition: transform .3s;
}
 
button#prev-btn:hover::after,
button#next-btn:hover::after,
button#submit-btn:hover::after {
    transform: translateY(-80%);
    transition: transform .3s;
}
 
.progress {
    border-radius: 0px !important;
}
 
.q__question {
    position: relative;
}
 
.q__question:not(:last-child) {
    margin-bottom: 10px;
}
 
.question__input {
    position: absolute;
    left: -9999px;
}
 
.question__label {
    position: relative;
    display: block;
    line-height: 40px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    background-color: #fff;
    padding: 5px 20px 5px 50px;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
}
 
.question__label:hover {
    border-color: #2ba5f6;
}
 
.question__label:before,
.question__label:after {
    position: absolute;
    content: "";
}
 
.question__label:before {
    top: 12px;
    left: 10px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: inset 0 0 0 1px #ced4da;
    -webkit-transition: all 0.15s ease-in-out;
    -moz-transition: all 0.15s ease-in-out;
    -o-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
}
 
.question__input:checked+.question__label:before {
    background-color: #2ba5f6;
    box-shadow: 0 0 0 0;
}
 
.question__input:checked+.question__label:after {
    top: 22px;
    left: 18px;
    width: 10px;
    height: 5px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg);
}
 
.form-check-input:checked,
.form-check-input:focus {
    background-color: #2ba5f6 !important;
    outline: none !important;
    border: none !important;
}
 
input:focus {
    outline: none;
}
 
#input-container {
    display: inline-block;
    box-shadow: none !important;
    margin-top: 36px !important;
}
 
label.form-check-label.radio-lb {
    margin-right: 15px;
}
 
#q-box__buttons {
    text-align: center;
}
 
input[type="text"],
input[type="email"] {
    padding: 8px 14px;
}
 
input[type="text"]:focus,
input[type="email"]:focus {
    border: 1px solid #2ba5f6;
    border-radius: 5px;
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
    -webkit-transition: all 0.15s ease-in-out;
    -moz-transition: all 0.15s ease-in-out;
    -o-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
}
 
.form-check-input:checked[type=radio],
.form-check-input:checked[type=radio]:hover,
.form-check-input:checked[type=radio]:focus,
.form-check-input:checked[type=radio]:active {
    border: none !important;
    -webkit-outline: 0px !important;
    box-shadow: none !important;
}
 
.form-check-input:focus,
input[type="radio"]:hover {
    box-shadow: none;
    cursor: pointer !important;
}
 
#success {
    display: none;
}
 
#success h4 {
    color: #2ba5f6;
}
 
.back-link {
    font-weight: 700;
    color: #2ba5f6;
    text-decoration: none;
    font-size: 18px;
}
 
.back-link:hover {
    color: #82000a;
}

/* PRELOADER */
 
#preloader-wrapper {
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
}
 
#preloader {
    background-image: url('../../assets/preloader.gif');
    width: 120px;
    height: 119px;
    border-top-color: #fff;
    border-radius: 100%;
    display: block;
    position: relative;
    top: 50%;
    left: 50%;
    margin: -75px 0 0 -75px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    z-index: 1001;
}
 
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
 
@keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
 
#preloader-wrapper .preloader-section {
    width: 51%;
    height: 100%;
    position: fixed;
    top: 0;
    background: #F7F9FF;
    z-index: 1000;
}
 
#preloader-wrapper .preloader-section.section-left {
    left: 0
}
 
#preloader-wrapper .preloader-section.section-right {
    right: 0;
}
 
.loaded #preloader-wrapper .preloader-section.section-left {
    transform: translateX(-100%);
    transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
}
 
.loaded #preloader-wrapper .preloader-section.section-right {
    transform: translateX(100%);
    transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
}
 
.loaded #preloader {
    opacity: 0;
    transition: all 0.3s ease-out;
}
 
.loaded #preloader-wrapper {
    visibility: hidden;
    transform: translateY(-100%);
    transition: all 0.3s 1s ease-out;
}

/* MEDIA QUERIES */
 
@media (min-width: 990px) and (max-width: 1199px) {
    #title-container {
        padding: 80px 28px 28px 28px;
    }
    #steps-container {
        width: 85%;
    }
}
 
@media (max-width: 991px) {
    #title-container {
        padding: 30px;
        min-height: inherit;
    }
}
 
@media (max-width: 767px) {
    #qbox-container {
        padding: 30px;
    }
    #steps-container {
        width: 100%;
        min-height: 400px;
    }
    #title-container {
        padding-top: 50px;
    }
}
 
@media (max-width: 560px) {
    #qbox-container {
        padding: 40px;
    }
    #title-container {
        padding-top: 45px;
    }
}
</style>