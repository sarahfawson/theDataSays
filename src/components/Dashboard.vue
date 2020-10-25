<template>
  <section id="dashboard">
      <mdb-row>
        <mdb-col md="12">
          <section class="d-flex text-center pb-3">
            <mdb-row class="d-flex justify-content-center">
              <mdb-col lg="3" class="mb-3">
                <mdb-card cascade narrow class="d-flex mb-3">
                  <mdb-view>
                    <img src="../assets/img/demdebate3issues.jpg" alt="Project" class="img-fluid"/>
                  </mdb-view>
                  <mdb-card-body>
                    <mdb-card-title class="font-bold mb-3">
                      <a href="/projects#personalDataViz"><strong>Politics</strong></a>
                    </mdb-card-title>
                    <!-- <mdb-card-text>Analyzed & Illustrated facts & figures surrounding the 2020 US Presidential race.</mdb-card-text> -->
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col lg="3" class="mb-3">
                <mdb-card cascade narrow class="d-flex mb-3">
                  <mdb-view>
                    <img src="../assets/img/toughOnCrime2.jpg" alt="sentiment analysis" class="img-fluid"/>
                    <mdb-mask overlay="white-slight" waves/>
                  </mdb-view>
                  <mdb-card-body>
                    <mdb-card-title class="font-bold mb-3">
                      <a href="/projects#civilRights"><strong>Criminal Justice System</strong></a>
                    </mdb-card-title>
                    <!-- <mdb-card-text>Stats on the criminal justice system in America.</mdb-card-text> -->
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col lg="3" class="mb-3">
                <mdb-card cascade narrow class="d-flex mb-3">
                  <mdb-view>
                    <img src="../assets/img/visualizations/voting-rights-by-state.jpg" alt="tile map of voting rights by US state" class="img-fluid"/>
                  </mdb-view>
                  <mdb-card-body>
                    <mdb-card-title class="font-bold mb-3">
                      <a href="/Thesis"><strong>When is Time Served?</strong></a>
                    </mdb-card-title>
                    <!-- <mdb-card-text>A visual essay showing the inequities that exist after time has been served behind bars in America.</mdb-card-text> -->
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col lg="3" class="mb-3">
                <mdb-card cascade narrow class="d-flex mb-3">
                  <mdb-view>
                    <img src="../assets/img/art/t1dAutoimmune.jpg" alt="Project" class="img-fluid"/>
                  </mdb-view>
                  <mdb-card-body>
                    <mdb-card-title class="font-bold mb-3">
                      <a href="/projects#t1d"><strong>Healthcare</strong></a>
                    </mdb-card-title>
                    <!-- <mdb-card-text>Type 1 Diabetes & more to come.</mdb-card-text> -->
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col lg="3" class="mb-3">
                <mdb-card cascade narrow class="d-flex mb-3">
                  <mdb-view>
                    <img src="../assets/img/vaderScore.png" alt="sentiment Analysis" class="img-fluid"/>
                    <mdb-mask overlay="white-slight" waves/>
                  </mdb-view>
                  <mdb-card-body>
                    <mdb-card-title class="font-bold mb-3">
                      <a href="/projects#sentimentAnalysis"><strong>Sentiment Analysis</strong></a>
                    </mdb-card-title>
                    <!-- <mdb-card-text>NLP analysis on Russian Troll tweets used during the 2016 US Presidential Election</mdb-card-text> -->
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col lg="3" class="mb-3">
                <mdb-card cascade narrow class="d-flex mb-2">
                  <mdb-view>
                    <img src="../assets/img/3yearAnniversaryInfographic.jpg" alt="Project3" class="img-fluid"/>
                    <mdb-mask overlay="white-slight" waves/>
                  </mdb-view>
                  <mdb-card-body>
                    <mdb-card-title class="font-bold mb-3">
                      <a href="/projects#personalDataViz"><strong>Illustrated Data</strong></a>
                    </mdb-card-title>
                    <!-- <mdb-card-text>Some personal projects.</mdb-card-text> -->
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col lg="3" class="mb-3">
                <mdb-card cascade narrow class="d-flex mb-2">
                  <mdb-view>
                    <img src="../assets/img/cdcHealthRadar.gif" alt="Project3" class="img-fluid"/>
                    <mdb-mask overlay="white-slight" waves/>
                  </mdb-view>
                  <mdb-card-body>
                    <mdb-card-title class="font-bold mb-3">
                      <a href="/projects#socialDeterminantsOfHealth"><strong>Social Determinants of Health</strong></a>
                    </mdb-card-title>
                    <!-- <mdb-card-text>Some personal projects.</mdb-card-text> -->
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
            </mdb-row>
          </section>
        </mdb-col>
      </mdb-row>
    <!-- viz examples in mdb vue  -->
    <!-- <section class="mt-lg-5">
      <mdb-row>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="money-bill-alt" far class="primary-color"/>
              <div class="data">
                <p>SALES</p>
                <h4>
                  <strong>$2000</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg-primary" role="progressbar"
                  style="width: 25%"></div>
              </div>
              <mdb-card-text>Better than last week (25%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-line" class="warning-color"/>
              <div class="data">
                <p>SUBSCRIPTIONS</p>
                <h4>
                  <strong>200</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg grey darken-2" role="progressbar"
                  style="width: 25%"></div>
              </div>
              <mdb-card-text>Worse than last week (25%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-pie" class="light-blue lighten-1"/>
              <div class="data">
                <p>TRAFFIC</p>
                <h4>
                  <strong>20000</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="75" class="progress-bar grey darken-2" role="progressbar"
                  style="width: 75%"></div>
              </div>
              <mdb-card-text>Worse than last week (75%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col xl="3" md="6" class="mb-r">
          <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
              <mdb-icon icon="chart-bar" class="red accent-2"/>
              <div class="data">
                <p>ORGANIC TRAFFIC</p>
                <h4>
                  <strong>2000</strong>
                </h4>
              </div>
            </div>
            <mdb-card-body>
              <div class="progress">
                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" class="progress-bar bg-primary" role="progressbar"
                  style="width: 25%"></div>
              </div>
              <mdb-card-text>Better than last week (25%)</mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section> -->
    <!-- <section>
      <mdb-row class="mt-5">
          <mdb-col md="9" class="mb-4">
              <mdb-card>
                  <mdb-card-body>
                      <div style="display: block">
                        <mdb-bar-chart :data="barChartData" :options="barChartOptions" :height="500"/>
                      </div>
                  </mdb-card-body>
              </mdb-card>
          </mdb-col>
          <mdb-col md="3" class="mb-4">
              <mdb-card class="mb-4">
                  <mdb-card-header class="text-center"> Pie chart </mdb-card-header>
                  <mdb-card-body>
                      <div style="display: block">
                        <mdb-pie-chart :data="pieChartData" :options="pieChartOptions" :height="200"/>
                      </div>
                  </mdb-card-body>
              </mdb-card>
              <mdb-card class="mb-4">
                  <mdb-card-body>
                      <mdb-list-group class="list-group-flush">
                          <mdb-list-group-item action waves>Sales
                              <mdb-badge color="success-color" pill class="pull-right">22%
                                  <mdb-icon icon="arrow-up" class="ml-1"/>
                              </mdb-badge>
                          </mdb-list-group-item>
                          <mdb-list-group-item action waves>Traffic
                              <mdb-badge color="danger-color" pill class="pull-right">5%
                                  <mdb-icon icon="arrow-down" class="n ml-1"/>
                              </mdb-badge>
                          </mdb-list-group-item>
                          <mdb-list-group-item action waves>Orders
                              <mdb-badge color="primary-color" pill class="pull-right">14</mdb-badge>
                          </mdb-list-group-item>
                          <mdb-list-group-item action waves>Issues
                              <mdb-badge color="primary-color" pill class="pull-right">123</mdb-badge>
                          </mdb-list-group-item>
                          <mdb-list-group-item action waves>Messages
                              <mdb-badge color="primary-color" pill class="pull-right">8</mdb-badge>
                          </mdb-list-group-item>
                      </mdb-list-group>
                  </mdb-card-body>
              </mdb-card>
          </mdb-col>
      </mdb-row>
    </section> -->
    <!-- <section>
      <mdb-row class="mt-3">
        <mdb-col md="12" lg="4" class="mb-4">
          <mdb-card class="mb-4">
            <mdb-card-header> Line chart </mdb-card-header>
            <mdb-card-body>
              <div style="display: block">
                <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :height="200"/>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col md="12" lg="4" class="mb-4">
          <mdb-card class="mb-4">
            <mdb-card-header> Radar chart </mdb-card-header>
            <mdb-card-body>
              <div style="display: block">
                <mdb-radar-chart :data="radarChartData" :options="radarChartOptions" :height="300"/>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col md="12" lg="4" class="mb-4">
          <mdb-card class="mb-4">
            <mdb-card-header> Doughnut chart </mdb-card-header>
            <mdb-card-body>
              <div style="display: block">
                <mdb-doughnut-chart :data="doughnutChartData" :options="doughnutChartOptions" :height="300"/>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section> -->
  </section>
</template>

<script>
import { mdbRow, mdbCol, mdbBtn, mdbCard, mdbCardBody, mdbCardHeader, mdbCardText, mdbIcon, mdbBarChart, mdbPieChart, mdbLineChart, mdbRadarChart, mdbDoughnutChart, mdbListGroup, mdbListGroupItem, mdbCardTitle, mdbCardFooter, mdbView, mdbMask } from 'mdbvue'

export default {
  name: 'Dashboard',
  components: {
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbCardText,
    mdbIcon,
    mdbBarChart,
    mdbPieChart,
    mdbLineChart,
    mdbRadarChart,
    mdbDoughnutChart,
    mdbListGroup,
    mdbListGroupItem,
    mdbCardTitle,
    mdbCardFooter,
    mdbView,
    mdbMask
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
/* .mdb-card-text {
  font-size: 12px;
} */

a {
  font-size: 1rem;
}

.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 1px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  color: #999999;
  font-size: 12px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
</style>
