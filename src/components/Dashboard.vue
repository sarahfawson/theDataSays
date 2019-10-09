<template>
  <section id="dashboard">
    <!-- <mdb-card class="mb-4">
      <mdb-card-body class="d-sm-flex justify-content-between">
        <h4 class="mb-sm-0 pt-2">
          Welcome!
        </h4>
      </mdb-card-body>
    </mdb-card> -->
    <section>
      <mdb-row>
        <mdb-col md="9">
          <section class="d-flex text-center pb-3">
            <mdb-row class="d-flex justify-content-center">
              <mdb-col lg="4" class="mb-3">
                <mdb-card cascade narrow class="d-flex mb-3">
                  <mdb-view>
                    <img src="../assets/img/demdebate3issues.jpg" alt="Project" class="img-fluid"/>
                  </mdb-view>
                  <mdb-card-body>
                    <mdb-card-title class="font-bold mb-3">
                      <a href="/profile#personalDataViz"><strong>2020 Presidential Race</strong></a>
                    </mdb-card-title>
                    <mdb-card-text>Analyzed & Illustrated facts & figures surrounding the 2020 US Presidential race.</mdb-card-text>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col lg="4" class="mb-3">
                <mdb-card cascade narrow class="d-flex mb-3">
                  <mdb-view>
                    <img src="../assets/img/toughOnCrime2.jpg" alt="sentiment Analysis" class="img-fluid"/>
                    <mdb-mask overlay="white-slight" waves/>
                  </mdb-view>
                  <mdb-card-body>
                    <mdb-card-title class="font-bold mb-3">
                      <a href="/profile#civilRights"><strong>Civil Rights</strong></a>
                    </mdb-card-title>
                    <mdb-card-text>Stats on the criminal justice system in America.</mdb-card-text>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col lg="4" class="mb-3">
                <mdb-card cascade narrow class="d-flex mb-3">
                  <mdb-view>
                    <img src="../assets/img/t1dAutoimmune.jpg" alt="Project" class="img-fluid"/>
                  </mdb-view>
                  <mdb-card-body>
                    <mdb-card-title class="font-bold mb-3">
                      <a href="/profile#t1d"><strong>Healthcare</strong></a>
                    </mdb-card-title>
                    <mdb-card-text>Type 1 Diabetes & more to come.</mdb-card-text>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col lg="4" class="mb-3">
                <mdb-card cascade narrow class="d-flex mb-3">
                  <mdb-view>
                    <img src="../assets/img/vaderScore.png" alt="sentiment Analysis" class="img-fluid"/>
                    <mdb-mask overlay="white-slight" waves/>
                  </mdb-view>
                  <mdb-card-body>
                    <mdb-card-title class="font-bold mb-3">
                      <a href="/profile#sentimentAnalysis"><strong>Sentiment Analysis</strong></a>
                    </mdb-card-title>
                    <mdb-card-text>NLP analysis on Russian Troll tweets used during the 2016 US Presidential Election</mdb-card-text>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col lg="4" class="mb-3">
                <mdb-card cascade narrow class="d-flex mb-2">
                  <mdb-view>
                    <img src="../assets/img/3yearAnniversaryInfographic.jpg" alt="Project3" class="img-fluid"/>
                    <mdb-mask overlay="white-slight" waves/>
                  </mdb-view>
                  <mdb-card-body>
                    <mdb-card-title class="font-bold mb-3">
                      <a href="/profile#personalDataViz"><strong>Illustrated Data</strong></a>
                    </mdb-card-title>
                    <mdb-card-text>Some personal projects.</mdb-card-text>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
              <mdb-col lg="4" class="mb-3">
                <mdb-card cascade narrow class="d-flex mb-2">
                  <mdb-view>
                    <img src="../assets/img/cdcHealthRadar.gif" alt="Project3" class="img-fluid"/>
                    <mdb-mask overlay="white-slight" waves/>
                  </mdb-view>
                  <mdb-card-body>
                    <mdb-card-title class="font-bold mb-3">
                      <a href="/profile#socialDeterminantsOfHealth"><strong>Social Determinants of Health</strong></a>
                    </mdb-card-title>
                    <mdb-card-text>Some personal projects.</mdb-card-text>
                  </mdb-card-body>
                </mdb-card>
              </mdb-col>
            </mdb-row>
          </section>
        </mdb-col>
      </mdb-row>
    </section>
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
    <!-- <section>
      <mdb-row>
        <mdb-col lg="6" class="mb-4">
          <mdb-card>
            <mdb-card-header>Google Map</mdb-card-header>
            <mdb-card-body>
              <GmapMap
                :center="{lat:10, lng:10}"
                :zoom="7"
                style="width: 100%; height: 300px"
              >
              </GmapMap>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
        <mdb-col lg="6" class="mb-4">
          <mdb-card>
            <mdb-card-header>Modals</mdb-card-header>
            <mdb-card-body>
              <section>
                <h4 class="mb-5 mt-4 dark-grey-text text-center font-bold"><strong>Position & Sizes</strong></h4>
                <div class="text-center mb-5">
                  <p class="lead">Click buttons below to launch modals demo</p>
                </div>
                <mdb-row>
                  <mdb-col md="3" class="mb-3">
                    <h5 class="text-center mb-3">Frame modal</h5>
                    <img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal4.jpg" alt="frame position"/>
                    <div class="text-center">
                      <h5 class="my-3">Position</h5>
                      <mdb-btn color="primary" size="sm" @click.native="showFrameModalTop = true">Top</mdb-btn>
                      <mdb-modal frame removeBackdrop position="top" :show="showFrameModalTop" @close="showFrameModalTop = false">
                        <mdb-modal-body class="text-center">
                          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                          <mdb-btn color="secondary" @click.native="showFrameModalTop = false">Close</mdb-btn>
                          <mdb-btn color="primary">Save changes</mdb-btn>
                        </mdb-modal-body>
                      </mdb-modal>
                      <mdb-btn color="primary" size="sm" @click.native="showFrameModalBottom = true">Bottom</mdb-btn>
                      <mdb-modal frame removeBackdrop position="bottom" :show="showFrameModalBottom" @close="showFrameModalBottom = false">
                        <mdb-modal-body class="text-center">
                          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...</span>
                          <mdb-btn color="secondary" @click.native="showFrameModalBottom = false">Close</mdb-btn>
                          <mdb-btn color="primary">Save changes</mdb-btn>
                        </mdb-modal-body>
                      </mdb-modal>
                    </div>
                  </mdb-col>
                  <mdb-col md="3" class="mb-3">
                    <h5 class="text-center mb-3">Side modal</h5>
                    <img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal3.jpg" alt="frame position"/>
                    <div class="text-center">
                      <h5 class="my-3">Position</h5>
                      <mdb-btn color="primary" size="sm" @click.native="showSideModalTopRight = true">Top right</mdb-btn>
                      <mdb-modal side position="top-right" :show="showSideModalTopRight" @close="showSideModalTopRight = false">
                        <mdb-modal-header>
                          <mdb-modal-title>Modal title</mdb-modal-title>
                        </mdb-modal-header>
                        <mdb-modal-body>...</mdb-modal-body>
                        <mdb-modal-footer>
                          <mdb-btn color="secondary" @click.native="showSideModalTopRight = false">Close</mdb-btn>
                          <mdb-btn color="primary">Save changes</mdb-btn>
                        </mdb-modal-footer>
                      </mdb-modal>
                      <mdb-btn color="primary" size="sm" @click.native="showSideModalTopLeft = true">Top left</mdb-btn>
                      <mdb-modal side position="top-left" :show="showSideModalTopLeft" @close="showSideModalTopLeft = false">
                        <mdb-modal-header>
                          <mdb-modal-title>Modal title</mdb-modal-title>
                        </mdb-modal-header>
                        <mdb-modal-body>...</mdb-modal-body>
                        <mdb-modal-footer>
                          <mdb-btn color="secondary" @click.native="showSideModalTopLeft = false">Close</mdb-btn>
                          <mdb-btn color="primary">Save changes</mdb-btn>
                        </mdb-modal-footer>
                      </mdb-modal>
                      <mdb-btn color="primary" size="sm" @click.native="showSideModalBottomRight = true">Bottom right</mdb-btn>
                      <mdb-modal side position="bottom-right" :show="showSideModalBottomRight" @close="showSideModalBottomRight = false">
                        <mdb-modal-header>
                          <mdb-modal-title>Modal title</mdb-modal-title>
                        </mdb-modal-header>
                        <mdb-modal-body>...</mdb-modal-body>
                        <mdb-modal-footer>
                          <mdb-btn color="secondary" @click.native="showSideModalBottomRight = false">Close</mdb-btn>
                          <mdb-btn color="primary">Save changes</mdb-btn>
                        </mdb-modal-footer>
                      </mdb-modal>
                      <mdb-btn color="primary" size="sm" @click.native="showSideModalBottomLeft = true">Bottom left</mdb-btn>
                      <mdb-modal side position="bottom-left" :show="showSideModalBottomLeft" @close="showSideModalBottomLeft = false">
                        <mdb-modal-header>
                          <mdb-modal-title>Modal title</mdb-modal-title>
                        </mdb-modal-header>
                        <mdb-modal-body>...</mdb-modal-body>
                        <mdb-modal-footer>
                          <mdb-btn color="secondary" @click.native="showSideModalBottomLeft = false">Close</mdb-btn>
                          <mdb-btn color="primary">Save changes</mdb-btn>
                        </mdb-modal-footer>
                      </mdb-modal>
                    </div>
                  </mdb-col>
                  <mdb-col md="3" class="mb-3">
                    <h5 class="text-center mb-3">Central modal</h5>
                    <img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal2.jpg" alt="frame position"/>
                    <div class="text-center">
                      <h5 class="my-3">Size</h5>
                      <mdb-btn color="primary" size="sm" @click.native="showCentralModalSmall = true">Small</mdb-btn>
                      <mdb-modal size="sm" :show="showCentralModalSmall" @close="showCentralModalSmall = false">
                        <mdb-modal-header>
                          <mdb-modal-title>Modal title</mdb-modal-title>
                        </mdb-modal-header>
                        <mdb-modal-body>...</mdb-modal-body>
                        <mdb-modal-footer>
                          <mdb-btn size="sm" color="secondary" @click.native="showCentralModalSmall = false">Close</mdb-btn>
                          <mdb-btn size="sm" color="primary">Save changes</mdb-btn>
                        </mdb-modal-footer>
                      </mdb-modal>
                      <mdb-btn color="primary" size="sm" @click.native="showCentralModalMedium = true">Medium</mdb-btn>
                      <mdb-modal :show="showCentralModalMedium" @close="showCentralModalMedium = false">
                        <mdb-modal-header>
                          <mdb-modal-title>Modal title</mdb-modal-title>
                        </mdb-modal-header>
                        <mdb-modal-body>...</mdb-modal-body>
                        <mdb-modal-footer>
                          <mdb-btn color="secondary" @click.native="showCentralModalMedium = false">Close</mdb-btn>
                          <mdb-btn color="primary">Save changes</mdb-btn>
                        </mdb-modal-footer>
                      </mdb-modal>
                      <mdb-btn color="primary" size="sm" @click.native="showCentralModalLarge = true">Large</mdb-btn>
                      <mdb-modal size="lg" :show="showCentralModalLarge" @close="showCentralModalLarge = false">
                        <mdb-modal-header>
                          <mdb-modal-title>Modal title</mdb-modal-title>
                        </mdb-modal-header>
                        <mdb-modal-body>...</mdb-modal-body>
                        <mdb-modal-footer>
                          <mdb-btn color="secondary" @click.native="showCentralModalLarge = false">Close</mdb-btn>
                          <mdb-btn color="primary">Save changes</mdb-btn>
                        </mdb-modal-footer>
                      </mdb-modal>
                      <mdb-btn color="primary" size="sm" @click.native="showCentralModalFluid = true">Fluid</mdb-btn>
                      <mdb-modal size="fluid" :show="showCentralModalFluid" @close="showCentralModalFluid = false">
                        <mdb-modal-header>
                          <mdb-modal-title>Modal title</mdb-modal-title>
                        </mdb-modal-header>
                        <mdb-modal-body>...</mdb-modal-body>
                        <mdb-modal-footer>
                          <mdb-btn color="secondary" @click.native="showCentralModalFluid = false">Close</mdb-btn>
                          <mdb-btn color="primary">Save changes</mdb-btn>
                        </mdb-modal-footer>
                      </mdb-modal>
                    </div>
                  </mdb-col>
                  <mdb-col md="3" class="mb-3">
                    <h5 class="text-center mb-3">Fluid modal</h5>
                    <img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/brandflow/modal1.jpg" alt="frame position"/>
                    <div class="text-center">
                      <h5 class="my-3">Position</h5>
                      <mdb-btn color="primary" size="sm" @click.native="showFluidModalRight = true">Right</mdb-btn>
                      <mdb-modal fullHeight position="right" :show="showFluidModalRight" @close="showFluidModalRight = false">
                        <mdb-modal-header>
                          <mdb-modal-title>Modal title</mdb-modal-title>
                        </mdb-modal-header>
                        <mdb-modal-body>...</mdb-modal-body>
                        <mdb-modal-footer>
                          <mdb-btn color="secondary" @click.native="showFluidModalRight = false">Close</mdb-btn>
                          <mdb-btn color="primary">Save changes</mdb-btn>
                        </mdb-modal-footer>
                      </mdb-modal>
                      <mdb-btn color="primary" size="sm" @click.native="showFluidModalLeft = true">Left</mdb-btn>
                      <mdb-modal fullHeight position="left" :show="showFluidModalLeft" @close="showFluidModalLeft = false">
                        <mdb-modal-header>
                          <mdb-modal-title>Modal title</mdb-modal-title>
                        </mdb-modal-header>
                        <mdb-modal-body>...</mdb-modal-body>
                        <mdb-modal-footer>
                          <mdb-btn color="secondary" @click.native="showFluidModalLeft = false">Close</mdb-btn>
                          <mdb-btn color="primary">Save changes</mdb-btn>
                        </mdb-modal-footer>
                      </mdb-modal>
                      <mdb-btn color="primary" size="sm" @click.native="showFluidModalTop = true">Top</mdb-btn>
                      <mdb-modal fullHeight position="top" :show="showFluidModalTop" @close="showFluidModalTop = false">
                        <mdb-modal-header>
                          <mdb-modal-title>Modal title</mdb-modal-title>
                        </mdb-modal-header>
                        <mdb-modal-body>...</mdb-modal-body>
                        <mdb-modal-footer>
                          <mdb-btn color="secondary" @click.native="showFluidModalTop = false">Close</mdb-btn>
                          <mdb-btn color="primary">Save changes</mdb-btn>
                        </mdb-modal-footer>
                      </mdb-modal>
                      <mdb-btn color="primary" size="sm" @click.native="showFluidModalBottom = true">Bottom</mdb-btn>
                      <mdb-modal fullHeight position="bottom" :show="showFluidModalBottom" @close="showFluidModalBottom = false">
                        <mdb-modal-header>
                          <mdb-modal-title>Modal title</mdb-modal-title>
                        </mdb-modal-header>
                        <mdb-modal-body>...</mdb-modal-body>
                        <mdb-modal-footer>
                          <mdb-btn color="secondary" @click.native="showFluidModalBottom = false">Close</mdb-btn>
                          <mdb-btn color="primary">Save changes</mdb-btn>
                        </mdb-modal-footer>
                      </mdb-modal>
                    </div>
                  </mdb-col>
                </mdb-row>
              </section>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
