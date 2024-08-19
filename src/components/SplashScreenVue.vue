<template>
    <div class="splash-screen">
      <div class="background-animation"></div>
      <div class="logo-container">
        <img src="../assets/salve_maria.png" alt="Game Logo" class="logo" />
        <img src="../assets/butterfly1.gif" alt="Butterfly 1" class="butterfly butterfly-1" />
        <img src="../assets/butterfly2.gif" alt="Butterfly 2" class="butterfly butterfly-2" />
      </div>
      <div class="text-animation">
        {{ displayedText }}<span class="cursor"></span>
      </div>
      <div v-if="progressVisible" class="progress-bar" ref="progressBar">
        <div class="progress-container">
          <div class="progress" :style="{ width: progressWidth + '%' }">
            <div class="roses-container">
              <img v-for="n in numberOfRoses" :key="n" src="../assets/rose.png" class="rose" :style="{ left: calculateRosePosition(n) + 'px' }" />
            </div>
          </div>
        </div>
      </div>
      <button v-if="!progressVisible" class="next-btn start" @click="startGame">Iniciar</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SplashScreenVue',
    data() {
      return {
        progressVisible: true,
        fullText: "Personalizar seu terço não é apenas uma questão de estética; é uma forma de expressar sua fé de maneira pessoal e significativa. Um terço personalizado pode servir como um lembrete constante das suas crenças, de eventos importantes na sua vida ou de pessoas que são especiais para você. Além disso, um terço personalizado pode ser um presente maravilhoso e significativo para amigos e familiares.",
        displayedText: "",
        typingSpeed: 70,
        progressWidth: 0,
        numberOfRoses: 10,
        cursorVisible: true
      };
    },
    mounted() {
      this.typeText();
      this.blinkCursor();
    },
    methods: {
      typeText() {
        let index = 0;
        const interval = setInterval(() => {
          if (index < this.fullText.length) {
            this.displayedText += this.fullText[index];
            index++;
            this.progressWidth = (index / this.fullText.length) * 100;
          } else {
            clearInterval(interval);
            setTimeout(() => {
              this.progressVisible = false;
            }, 500);
          }
        }, this.typingSpeed);
      },
      startGame() {
        alert('Ainda serei implementado :)');
      },
      calculateRosePosition(index) {
        const progressBar = this.$refs.progressBar;
        if (!progressBar) return 0;
  
        const progressBarWidth = progressBar.offsetWidth;
        const roseWidth = 20;
        const spacing = (progressBarWidth - (this.numberOfRoses * roseWidth)) / (this.numberOfRoses + 1);
        return (index * (spacing + roseWidth)) + (spacing / 2) - (roseWidth / 2);
      },
      blinkCursor() {
        setInterval(() => {
          this.cursorVisible = !this.cursorVisible;
        }, 500);
      }
    }
  };
  </script>
  
  <style scoped>
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow: hidden;
  }
  
  .splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    text-align: center;
    padding: 0 20px;
  }
  
  .background-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
      #0d47a1, #1565c0, #1e88e5, #2196f3, #42a5f5);
    background-size: 300% 300%;
    animation: backgroundShift 20s ease infinite;
    z-index: -1;
  }
  
  @keyframes backgroundShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .logo-container {
    position: relative;
    width: 450px; 
    height: auto;
    margin-bottom: 20px;
  }
  
  .logo {
    width: 100%;
    height: auto;
  }
  
  .butterfly {
    position: absolute;
    width: 70px; 
    height: auto;
    opacity: 1;
  }
  
  .butterfly-1 {
    left: -20px; 
    top: 50%; 
    transform: translateY(-50%); 
  }
  
  .butterfly-2 {
    right: -20px; 
    top: 50%; 
    transform: translateY(-50%);
  }
  
  .text-animation {
    font-size: 1.2rem;
    color: #ffffff;
    margin-bottom: 20px;
    max-width: 80%;
    word-wrap: break-word;
    white-space: pre-wrap;
    display: inline-block; /* Permite alinhar o cursor corretamente */
    position: relative;
  }
  
  .cursor {
    display: inline-block;
    background-color: #ffffff;
    width: 2px;
    height: 1.5rem;
    animation: blink 1s step-end infinite;
    position: absolute;
  }
  
  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
  
  .progress-bar {
    width: 80%;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
  }
  
  .progress-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .progress {
    height: 100%;
    background-color: white;
    border-radius: 5px;
    position: absolute;
    left: 0;
    top: 0;
    transition: width 0.5s ease;
  }
  
  .roses-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  
  .rose {
    position: absolute;
    width: 20px;
    height: auto;
    transform: translateY(40%);
  }
  
  .start {
    margin-top: 20px;
    width: 50%;
  }
  
  /* Responsividade */
  @media (max-width: 600px) {

    .logo-container{
        margin-bottom: 0px;
    }

    .logo {
      width: 250px;
      margin-top: 5px;
    }
  
    .text-animation {
      font-size: 1rem;
    }
  
    .start-button {
      font-size: 1.2rem;
      margin-top: -20px;
    }
  
    .rose {
      width: 15px;
    }
  
    .butterfly {
      width: 60px;
    }
  
    .butterfly-1 {
      left: 80px; 
    }
  
    .butterfly-2 {
      right: 80px; 
    }

    .start{
        margin-top: 5px;
    }
  }
  </style>
  