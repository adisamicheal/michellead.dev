<template>
  <div class="footer white">
      <div class="hi_links">
          <div>
              <h3>SAY HI</h3>
              <a href="mailto:adisamicheal20@gmail.com">adisamicheal20@gmail.com</a>
          </div>
          <div class="links">
              <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </div>
      </div>
      <div class="mail_socials">
          <hr>
          <div class="below_hr">
              <p>© Micheal Adisa {{ date }}</p>
              <div class="socials">
                  <ul>
                      <li><a href="https://github.com/adisamicheal" rel="noopener" target="_blank">GH</a></li>
                      <li><a href="https://twitter.com/michellead">TW</a></li>
                      <li><a href="https://www.linkedin.com/in/micheal-adisa-5b5250170/">LN</a></li>
                      <!-- <li><a href="">IN</a></li> -->
                      <!-- <li><a href="">FB</a></li> -->
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'footer',
    data: () => ({
        date: new Date().getFullYear()
    })
}
</script>

<style scoped>
.footer {
    background: #1B4079;
    display: grid;
    grid-template-columns: 1fr;
    padding: 150px;
}
h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 20px;
}
.hi_links {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.hi_links li {
    margin-top: 20px;
}
.hi_links a {
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #fafafa;
    /* margin-top: 20px; */
}
.links ul {
    list-style: none;
}
.mail_socials {
    margin-top: 150px;
}
.below_hr {
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.socials ul{
    list-style: none;
    display: flex;
}
.socials ul li {
    margin-left: 10px;
    
}
.socials ul li a {
    color: #fafafa;
    text-decoration: none;
}

@media screen and (max-width: 768px) {
    .footer {
        padding: 50px 20px;
    }
    .links ul {
        text-align: right;
    }
}
</style>