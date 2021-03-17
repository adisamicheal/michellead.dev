<template>
  <div>
    <nav class="header fixed-top">
      <router-link to="/"
        ><img alt="Logo" class="logo" src="../assets/ma.svg"
      /></router-link>
      <div class="nav" id="lg-menu">
        <a href="#home" class="nav_links">Home</a>
        <a href="#about" class="nav_links">About</a>
        <a href="#services" class="nav_links">Services</a>
        <!-- <a href="#projects" class="nav_links">Projects</a> -->
        <a href="#contact" class="nav_links">Contact</a>
      </div>
      <div id="toggler">&#9776;</div>
    </nav>
    <div id="sm-menu" class="hide show">
        <div id="hider">&times;</div>
        <ul class="poppins">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  // mounted() {
  //       $(document).scroll(function(){
  //       var $nav = $(".navbar");
  //       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  //   });
  // 0f1e32
  // }
  mounted() {    
        const openMenu =document.getElementById('toggler')
        const closeMenu =document.getElementById('hider')
        const smMenu =document.getElementById('sm-menu')
        
        openMenu.onclick=()=>{
            smMenu.className=''
        }
        closeMenu.onclick=()=>{
            smMenu.className='hide'
        }
    },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  padding: 25px 100px 50px 100px;
  width: 100vw;
  /* background: #ffffff; */
}
.fixed-top.scrolled{
    background-color: #ffffff !important;
    color: #000000;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    transition: background-color 200ms linear;
}
.fixed-top.scrolled a{
    color: #000000 !important;
}

/* .fixed-top.scrolled li{
    color:#000!important;
} */

/* .fixed-top.scrolled button{
    background-color: #05b169 !important;
} */
/* .fixed-top.scrolled:hover {
    background-color: rgb(0, 165, 93);
    border-color: rgb(0, 165, 93);
}
.fixed-top.scrolled .coinlink{
    color: #1652f0 !important;
} */

.fixed-top{
    background-color: #0f1e32 !important;

}
.logo {
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}
.nav_links {
  text-transform: uppercase;
  font-family: Lato;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  margin-left: 30px;
  text-decoration: none;
  color: #ffffff;
}
#toggler{
    display: none;
}
#sm-menu{
    display: none;
}
@media only screen and (max-width: 768px){
    .header {
        padding: 30px;
    }
    #toggler,#hider{
        padding: .25em;
        font-size: x-large;
        cursor: pointer;
        font-weight: bolder;
        display: block;
        color: #ffffff;
        
    }
    
    #lg-menu{
        display: none;
    }
    #sm-menu{
        width: 250px;
        transition: transform 1s ease;
        display: flex;
        flex-direction: column;
        position: absolute;
        background: #0f1e32;
        top: 0;
        height: 100vh;
        right: 0;
    }
    #sm-menu ul {
        display: flex;
        align-items: center;
        flex-direction: column;
        list-style: none;
    }
    #sm-menu a {
      text-decoration: none;
      font-size:14px;
      color: #ffffff;
            
    }
    #sm-menu li {
      margin-top: 20px;
    }
    #hider{
        text-align: end;
        background: #0f1e32;
        color: #ffffff;
        padding: 10px;
    }
    #hider:hover{
        color: navy;
    }
    #sm-menu.hide{
        display: none;
        transform: translate(300px) !important;
    }
    #sm-menu.show {
        transform: translate(300px) !important;
    }
}
</style>
