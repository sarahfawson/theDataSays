<template>
  <div class="flexible-content">
    <!--Navbar-->
    <mdb-navbar class="flexible-navbar white" light position="top" scrolling>
      <mdb-navbar-brand href="#" target="_blank">TheDataSays</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav left>
          <!-- <mdb-nav-item to="/" waves-fixed active class="active">Home</mdb-nav-item> -->
          <router-link to="/dashboard" @click.native="activeItem = 1">
            <mdb-list-group-item :action="true" :class="activeItem === 1 && 'active'">Home</mdb-list-group-item>
          </router-link>
          <router-link to="/projects" @click.native="activeItem = 2">
            <mdb-list-group-item :action="true" :class="activeItem === 2 && 'active'">Vizualizations</mdb-list-group-item>
          </router-link>
          <router-link to="/about"  @click.native="activeItem = 3">
            <mdb-list-group-item :action="true" :class="activeItem === 3 && 'active'">About</mdb-list-group-item>
          </router-link>
          <router-link to="/thesis" @click.native="activeItem = 4">
            <mdb-list-group-item :action="true" :class="activeItem === 4 && 'active'">Thesis</mdb-list-group-item>
          </router-link>
        </mdb-navbar-nav>
        <mdb-navbar-nav right>
          <p class="social">
            <a href="https://www.instagram.com/thedatasays/" target="#_blank" data-animate-hover="pulse" class="instagram"><mdb-icon fab icon="instagram"></mdb-icon></a>
            <a href="https://www.linkedin.com/in/sarahfawson/" target="#_blank" data-animate-hover="pulse" class="linkedin"><mdb-icon fab icon="linkedin"></mdb-icon></a>
            <a href="https://twitter.com/SarahFawson" target="#_blank" data-animate-hover="pulse" class="twitter"><mdb-icon fab icon="twitter"></mdb-icon></a>
            <a href="https://github.com/sarahfawson" target="#_blank" data-animate-hover="pulse" class="github"><mdb-icon fab icon="github"></mdb-icon></a>
          </p>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <!-- Sidebar -->
    <!-- <div class="sidebar-fixed position-fixed">
      <span class="whitespace"></span>
      <span id="bio" class="bio">
        <h4><strong>The Data Says</strong></h4>
        <p>Original data visualizations on politics, civil rights, and topics that promote social justice.</p>
      </span>
      <mdb-list-group class="list-group-flush">
        <router-link to="/dashboard" @click.native="activeItem = 1">
          <mdb-list-group-item :action="true" :class="activeItem === 1 && 'active'">Home</mdb-list-group-item>
        </router-link>
        <router-link to="/projects" @click.native="activeItem = 2">
          <mdb-list-group-item :action="true" :class="activeItem === 2 && 'active'">Vizualizations</mdb-list-group-item>
        </router-link>
        <router-link to="/about"  @click.native="activeItem = 3">
          <mdb-list-group-item :action="true" :class="activeItem === 3 && 'active'">About</mdb-list-group-item>
        </router-link>
        <router-link to="/thesis" @click.native="activeItem = 4">
          <mdb-list-group-item :action="true" :class="activeItem === 4 && 'active'">Thesis</mdb-list-group-item>
        </router-link>
      </mdb-list-group>
      <p class="social">
        <a href="https://www.instagram.com/thedatasays/" target="#_blank" data-animate-hover="pulse" class="instagram"><mdb-icon fab icon="instagram"></mdb-icon></a>
        <a href="https://www.linkedin.com/in/sarahfawson/" target="#_blank" data-animate-hover="pulse" class="linkedin"><mdb-icon fab icon="linkedin"></mdb-icon></a>
        <a href="https://twitter.com/SarahFawson" target="#_blank" data-animate-hover="pulse" class="twitter"><mdb-icon fab icon="twitter"></mdb-icon></a>
        <a href="https://github.com/sarahfawson" target="#_blank" data-animate-hover="pulse" class="github"><mdb-icon fab icon="github"></mdb-icon></a>
        <a href="mailto:hello@sarahfawson.com" data-animate-hover="pulse" class="email"><mdb-icon fab icon="envelope"></mdb-icon></a>
      </p>
    </div> -->
    <!-- /Sidebar  -->
    <main>
      <div class="p-5">
        <router-view></router-view>
      </div>
      <ftr class="text-center font-small darken-2 footerDark">
        <!-- <hr class="my4"/> -->
        <!-- <div class="pb-4">
          <a href="https://www.instagram.com/thedatasays/" target="_blank"><mdb-icon fab icon="instagram" class="mr-3" /></a>
          <a href="https://www.linkedin.com/in/sarahfawson/" target="_blank"><mdb-icon fab icon="linkedin" class="mr-3"/></a>
          <a href="https://twitter.com/SarahFawson" target="_blank"><mdb-icon fab icon="twitter" class="mr-3"/></a>
          <a href="https://github.com/sarahfawson" target="_blank"><mdb-icon fab icon="github" class="mr-3"/></a>
        </div> -->
        <!-- <a href="mailto:hello@sarahfawson.com" data-animate-hover="pulse" class="email"><mdb-icon fab icon="envelope"></mdb-icon></a> -->
        <p class="footer-copyright mb-0 py-3 text-center">
          &copy; {{new Date().getFullYear()}} Sarah Fawson
        </p>
      </ftr>
    </main>
  </div>
</template>

<script>
import { mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbBtn, mdbIcon, mdbListGroup, mdbListGroupItem, mdbCardBody, mdbFooter, waves } from 'mdbvue'
import Dashboard from './components/Dashboard'
import projects from './components/projects'
// @import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500&display=swap')

export default {
  name: 'App',
  components: {
    mdbContainer,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbListGroup,
    mdbListGroupItem,
    mdbIcon,
    mdbCardBody,
    'ftr': mdbFooter,
    Dashboard,
    projects
  },
  data () {
    return {
      activeItem: 1
    }
  },
  beforeMount () {
    this.activeItem = this.$route.matched[0].props.default.page
  },
  mixins: [waves]
}
</script>

<style scoped>
main {
  background-color: rgb(240, 240, 240);
  margin: 0px;
  min-height: 100vh;
}

body {
  margin: 0px;
}

b, strong {
  font-weight: bolder;
}

.flexible-content {
  /* transition: padding-left 0.3s; */
  padding-top: 60px;
  /* padding-left: 270px; */
  margin: 0px;
}

.footerDark {
  background-color: #253746;
  color: #fff;
}

p.social a {
  margin: 1.5rem .6rem 0.6rem 0;
  color: #fff;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 1.25rem;
  line-height: 2rem;
  font-size: 0.9375rem;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  vertical-align: bottom;
  border: solid 1px #999;
  color: #999;
  transition: all 0.3s;
}

a {
  color: #f115a8;
  text-decoration: none;
}

.list-group-item {
  background-color: white;
  border: none;
  padding: 10px 5px 5px 10px;
  /* margin: 5px; */
}

.list-group-item.active {
  z-index: 2;
  color: hotpink;
  background-color: white;
  text-underline-position: below;
  font-weight: bolder;
}

.mdb-list-group-item {
  padding: 5px;
}

.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #2196f3 !important;
  font-weight: bolder;
}

.flexible-navbar {
  height: 10vh;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

/* .sidebar-fixed .logo-wrapper img{
  width: 100%;
  padding: 2.5rem;
} */

.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.whitespace {
  margin: 30px;
}

@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
}

.bio {
  padding: 1.5rem !important;
}

</style>
