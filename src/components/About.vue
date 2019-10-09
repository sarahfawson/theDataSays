<template>
  <section id="about">
    <mdb-row>
      <mdb-col md="12">
        <mdb-card cascade narrow class="mt-5">
          <!-- <mdb-view class="gradient-card-header blue darken-2">
            <h4 class="h4-responsive text-white">Bio</h4>
          </mdb-view> -->
          <mdb-card-body>
            <mdb-card-title class="font-bold mb-3">
              <h3><strong>Hello There!</strong></h3>
            </mdb-card-title>
            <p>Thanks for stopping by. Let me tell you a bit about myself.</p>
            <p> I'm passionate about visualizing data and creating great user experiences. Currently I am achieving these things through data analysis and visualization, illustration, web development, and a genuine curiosity and eagerness with whoever I am working with. I am also getting my Master's at MICA in Information Visualization to expand my data storytelling capability further.
            <br><br>
              I received a BS in Supply Chain Management from the University of Oklahoma, then moved to Kansas to work for a chemical company, managing a complex industrial 
              global supply chain. This experience helped me build a robust set of skills around decomposing complex systems, 
              extracting the information that is useful in those systems, and using it to achieve optimal results. 
              Next, I took on a role at a comminications and marketing agency as a data analyst and an operations manager where I built 
              comprehensive operations and financial data visualization dashboards, advised on business operations strategy, and project managed the launch 
              of the company onto a enterprise project management and time management software. Now, I am working as a data visualization specialist
              and front-end web developer at Booz Allen Hamilton, where I specialize within vue.js (HTML/CSS/JS), figma, tableau, user experience research, and design.
              <br/><br/>After work, I am in class at MICA, pursuing my Master's in Information Visualization. 
              I'm SO excited to dig deeper into data visualization with the tools, design knowledge and languages I've been 
              learning so I can become a more effective visual communicator.
              <br/><br/>When I'm not working or coding, I'm usually illustrating, rock climbing with my husband, or playing with my adorable dog
              <a
                target="#_blank" 
                href="https://www.instagram.com/pablo_thoughts/"
                class="card-link">Pablo</a>.
            </p>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
    <!-- <mdb-row>
      <mdb-col md="12">
        <mdb-card cascade narrow class="mt-5">
          <mdb-view class="gradient-card-header blue darken-2">
            <h4 class="h4-responsive text-white">Basic tables</h4>
          </mdb-view>
          <mdb-card-body>
            <h3 class="mt-5 text-left"><strong>Basic examples</strong></h3>
            <p>Using the most basic table markup, here’s how .table-based tables look in Bootstrap. All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the parent.</p>
            <mdb-tbl>
              <thead>
                <tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr>
              </thead><tbody>
                <tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th scope="row">3</th><td>Larry</td><td>the Bird</td><td>@twitter</td></tr>
              </tbody>
            </mdb-tbl>
            <h3 class="mt-5 text-left"><strong>Table head options</strong></h3>
            <p>To change a background-color of thead (or any other element) use our color classes. If you are going to use a dark background you should also consider white text (to provide a proper contrast) by adding .text-white class. </p>
            <mdb-tbl>
              <thead class="blue-grey lighten-4">
                <tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th scope="row">3</th><td>Larry</td><td>the Bird</td><td>@twitter</td></tr>
              </tbody>
            </mdb-tbl>
            <mdb-tbl>
              <thead class="mdb-color darken-3">
                <tr class="text-white"><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th scope="row">3</th><td>Larry</td><td>the Bird</td><td>@twitter</td></tr>
              </tbody>
            </mdb-tbl>
            <h3 class="mt-5 text-left"><strong>Striped rows:</strong></h3>
            <table class="table table-striped">
              <thead>
                <tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th scope="row">3</th><td>Larry</td><td>the Bird</td><td>@twitter</td></tr>
              </tbody>
            </table>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row> -->
  </section>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbView, mdbCardBody, mdbCardTitle } from 'mdbvue'

export default {
  name: 'About',
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbView,
    mdbCardBody,
    mdbCardTitle
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card.card-cascade .view.gradient-card-header {
  padding: 1rem 1rem;
  text-align: center;
}
.card.card-cascade h3,
.card.card-cascade h4 {
  margin-bottom: 0;
}
</style>
