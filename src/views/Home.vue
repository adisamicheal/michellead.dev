<template>
  <div>
      <div>
        <Navbar class="nav" />
      </div>
    <div class="app">
      <div class="intro" id="home">
        <!-- <div><img src="../assets/me.png" /></div> -->
        <div class="intro_text">
          <h4>Hi there, i'm</h4>
          <h3 class="name">MICHEAL ADISA.</h3>
          <h5>Software Engineer</h5>
          <p>
            I like to build scalable FE products with great user experiences.
          </p>
          <p>“Transforming your designs for use”</p>
          <h6>Lagos, Nigeria.</h6>
          <div class="socials">
              <ul>
                  <li><a href="https://github.com/adisamicheal" rel="noopener" target="_blank">GH</a></li>
                  <li><a href="https://twitter.com/michellead">TW</a></li>
                  <li><a href="https://www.linkedin.com/in/micheal-adisa-5b5250170/">LN</a></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="about_me" id="about">
      <h2 class="hero_text blue">
        ABOUT
      </h2>
      <p class="body_text"
        >A budding Software enginner keen about growth and development. I like
        to transform designs into relatable and interactive softwares having
        scalability in mind. Highly skilled at progressive enhancemnet, design
        systems and UI Engineering. I am an engineer who values high-performance
        accessible web experiences. I design and ensure my products are quality,
        user-friendly and scalable. I believe in the fact that every
        problem have an actual solution. <br><br> PS: In my spare time i do music &#128513;.
      </p>
    </div>
    <div class="services white" id="services">
      <!-- <h2 class="hero_text white center">SERVICES</h2> -->
      <div>
        <h3>
          I <span>design</span> <br>
          and <span>build</span>  <br>
          cool stuffs.
        </h3>

        <p>Provide solutions for Enginnering Problems.</p>
        <a href="#contact">Hire me</a>
      </div>
    </div>
    <div class="projects" id="projects">
      <!-- <h2 class="center">PROJECTS</h2>
      <p class="center">Enjoy the awesome projects i have worked on individually and on a team ! </p> -->
      <h2 class="center">Micheal Adisa</h2>
    </div>
    <div class="contact white" id="contact">
      <!-- <h2 class="center">CONTACT</h2> -->
      <p class="center">Send me a message ! </p>
      <div class="form">
        <form action="">
          <div class="info">
            <div class="contact_name">
              <label for="name">Your Name</label>
              <input type="text" id="name">
            </div>
            <div class="contact_email">
              <label for="email">Your Email</label>
              <input type="email" id="email">
            </div>
          </div>
          <div class="contact_message">
            <label for="message">Your Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
          </div>
          <button>
            Tell me 
            <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3678 4.35355C21.5631 4.15829 21.5631 3.84171 21.3678 3.64645L18.1859 0.464466C17.9906 0.269204 17.674 0.269204 17.4787 0.464466C17.2835 0.659728 17.2835 0.976311 17.4787 1.17157L20.3072 4L17.4787 6.82843C17.2835 7.02369 17.2835 7.34027 17.4787 7.53553C17.674 7.7308 17.9906 7.7308 18.1859 7.53553L21.3678 4.35355ZM0.0142822 4.5L21.0143 4.5V3.5L0.0142822 3.5L0.0142822 4.5Z" fill="#FAFAFF"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  },
};
</script>

<style src="./Home.css" scoped></style>
