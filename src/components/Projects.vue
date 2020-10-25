<template>
  <section id="projects">
    <mdb-row>
      <mdb-col md="12">
        <section class="text-center pb-3">
          <mdb-row class="d-flex justify-content-center">
            <mdb-col lg="4" class="mb-3">
              <mdb-card cascade narrow class="d-flex mb-3" id="personalDataViz">
                <mdb-card-body>
                  <mdb-card-title class="font-bold mb-3">
                    <strong>Politics</strong>
                  </mdb-card-title>
                  <mdb-card-text>Analyzed & Illustrated facts & figures surrounding the 2020 US Presidential race.</mdb-card-text>
                </mdb-card-body>
                <mdb-view>
                  <img src="../assets/img/demdebate3issues.jpg" alt="Project" class="img-fluid"/>
                </mdb-view>
              </mdb-card>
            </mdb-col>
            <mdb-col lg="4" class="mb-3">
              <mdb-card cascade narrow class="d-flex mb-3" id="civilRights">
                <mdb-card-body>
                  <mdb-card-title class="font-bold mb-3">
                    <strong>Civil Rights</strong>
                  </mdb-card-title>
                  <mdb-card-text>Visualizing civil rights and particularly criminal justice system in America.</mdb-card-text>
                </mdb-card-body>
                <mdb-view>
                  <img src="../assets/img/toughOnCrime2.jpg" alt="sentiment Analysis" class="img-fluid"/>
                  <mdb-mask overlay="white-slight" waves/>
                </mdb-view>
              </mdb-card>
            </mdb-col>
            <mdb-col lg="4" class="mb-3">
              <mdb-card cascade narrow class="d-flex mb-3" id="t1d">
                <mdb-card-body>
                  <mdb-card-title class="font-bold mb-3">
                    <strong>Healthcare</strong>
                  </mdb-card-title>
                  <mdb-card-text>Autoimmune diseases & more to come.</mdb-card-text>
                </mdb-card-body>
                <mdb-view>
                  <img src="../assets/img/art/t1dAutoimmune.jpg" alt="Project" class="img-fluid"/>
                </mdb-view>
              </mdb-card>
            </mdb-col>
            <mdb-col lg="4" class="mb-3">
              <mdb-card cascade narrow class="d-flex mb-3" id="sentimentAnalysis">
                <mdb-card-body>
                  <mdb-card-title class="font-bold mb-3">
                    <strong>Sentiment Analysis</strong>
                  </mdb-card-title>
                  <mdb-card-text>NLP analysis on Russian Troll tweets used during the 2016 US Presidential Election</mdb-card-text>
                </mdb-card-body>
                <mdb-view>
                  <img src="../assets/img/vaderScore.png" alt="sentiment Analysis" class="img-fluid"/>
                  <mdb-mask overlay="white-slight" waves/>
                </mdb-view>
              </mdb-card>
            </mdb-col>
            <mdb-col lg="4" class="mb-3">
              <mdb-card cascade narrow class="d-flex mb-2" id="personalDataViz">
                <mdb-card-body>
                  <mdb-card-title class="font-bold mb-3">
                    <strong>Illustrated Data</strong>
                  </mdb-card-title>
                  <mdb-card-text>Some personal projects.</mdb-card-text>
                </mdb-card-body>
                <mdb-view>
                  <img src="../assets/img/3yearAnniversaryInfographic.jpg" alt="Project3" class="img-fluid"/>
                  <mdb-mask overlay="white-slight" waves/>
                </mdb-view>
              </mdb-card>
            </mdb-col>
            <mdb-col lg="4" class="mb-3">
              <mdb-card cascade narrow class="d-flex mb-2" id="socialDeterminantsOfHealth">
                <mdb-card-body>
                  <mdb-card-title class="font-bold mb-3">
                    <strong>Social Determinants of Health</strong>
                  </mdb-card-title>
                  <mdb-card-text>Some personal projects.</mdb-card-text>
                </mdb-card-body>
                <mdb-view>
                  <img src="../assets/img/cdcHealthRadar.gif" alt="Project3" class="img-fluid"/>
                  <mdb-mask overlay="white-slight" waves/>
                </mdb-view>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </section>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbView, mdbMask, mdbCardTitle, mdbCardText, mdbCardFooter, mdbIcon, mdbBtn, mdbPagination, mdbPageNav, mdbPageItem } from 'mdbvue'

export default {
  name: 'projects',
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbView,
    mdbMask,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbIcon,
    mdbBtn,
    mdbPagination,
    mdbPageNav,
    mdbPageItem
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.projects-card-footer {
  background-color: #F7F7F7 !important;
  padding: 1.25rem;
}
.card.card-cascade .view {
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);
}
</style>
