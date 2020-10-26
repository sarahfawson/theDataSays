<template>
  <section id="about">
    <mdb-row>
      <mdb-col md="12">
        <mdb-card cascade narrow class="mt-5">
          <mdb-card-body>
            <mdb-row>
              <mdb-col md="8">
              <mdb-card-title class="font-bold mb-3">
                <h3><strong>Hello there!</strong></h3>
              </mdb-card-title>
              <p> I'm Sarah, a visual analyst and illustrator based in Denver, Colorado. I use design and analyses to translate nuanced subjects into something that is more understandable.
                  <br><br>When I'm not designing or coding, I'm usually crafting, hiking with my husband, or playing with my adorable dog
                  <a target="#_blank"
                    href="https://www.instagram.com/pablo_thoughts/"
                    class="card-link">Pablo</a>.
              </p>
              <p>Get in touch by sending a note to hello [at] sarahfawson [dot] com.</p>
              </mdb-col>
              <mdb-col md="4">
                <img src="../assets/purplePortrait.jpg" width="250rem" class="rounded-circle img-fluid portrait">
              </mdb-col>
            </mdb-row>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardTitle } from 'mdbvue'

export default {
  name: 'About',
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
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

.portrait {
  /* margin: 2rem; */
  padding: 20px;
}
</style>
