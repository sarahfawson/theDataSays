<template>
  <section id="thesis">
    <mdb-row class="d-flex">
      <mdb-col md="1" class="mb-3"></mdb-col>
      <mdb-col md="10" class="mb-3">
        <h1>When is Time Served?</h1>
        <p>By Sarah Fawson</p>
        <hr>
        <br>
        <p class="bodyText">The justice system exists to protect Americans and provide fair treatment and rehabilitation to those convicted of a crime. There are major disparities in the expressed goals of the justice system and what is happening in reality, and the results are striking. I would like to create a comprehensive analysis of the burden of criminal disenfranchisement in America and how time is never truly served, but prolonged for the rest of someone’s life through restrictions on political rights, employment, and opportunities, all of which leads to higher rates of racial discrimination and recidivism.</p>
      </mdb-col>
      <mdb-col md="1" class="mb-3"></mdb-col>
    </mdb-row>
    <br>
    <!-- bar chart section -->
    <mdb-row class="d-flex">
      <mdb-col md="1" class="mb-3"></mdb-col>
      <mdb-col md="10" class="mb-3">
        <h3>International Rates of Incarceration</h3>
        <p class="chartSubhead">The U.S. has been on top of the list for X years.</p>
        <!-- <div id="barChart"></div> -->
        <div class="Thesis">
          <BarChart
            class="chart"
            :data-set="incarcerationRates"
            :margin-left="50"
            :margin-top="40"
            :tick-count="5"
            :bar-padding="0.5"
          />
        </div>
        <p class="bodyText">lorem ipsum dolor sin amet </p>
      </mdb-col>
      <mdb-col md="1" class="mb-3"></mdb-col>
    </mdb-row>
    <br>
    <!-- map section -->
    <mdb-row class="d-flex">
      <mdb-col md="1" class="mb-3"></mdb-col>
      <mdb-col md="10" class="mb-3">
        <h3>State Rights</h3>
        <p class="chartSubhead">Map description here</p>
        <div id="barChart"></div>
      </mdb-col>
      <mdb-col md="1" class="mb-3"></mdb-col>
    </mdb-row>
    <br>
    <!-- sources section -->
    <mdb-row class="d-flex">
      <mdb-col md="1" class="mb-3"></mdb-col>
      <mdb-col md="10" class="mb-3">
        <h3>Sources & Methodology</h3>
        <p class="chartSubhead">Description here</p>
        <div id="barChart"></div>
      </mdb-col>
      <mdb-col md="1" class="mb-3"></mdb-col>
    </mdb-row>

  </section>
</template>

<script>
import { mdbRow, mdbCol, mdbView, mdbMask, mdbIcon, mdbBtn } from 'mdbvue'
import BarChart from './BarChart'

export default {
  name: 'Thesis',
  components: {
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask,
    mdbIcon,
    mdbBtn,
    BarChart
  },
  data () {
    return {
      incarcerationRates: [
        ['USA', 639],
        ['El Salvado', 566],
        ['Turkmenistan', 552],
        ['Thailand', 549],
        ['Palau', 522],
        ['Rwanda', 511],
        ['Cuba', 510],
        ['Maldives', 499],
        ['Northern Mariana Islands', 482],
        ['Virgin Islands (UK)', 447],
        ['Bahamas', 442],
        ['Grenada', 429],
        ['Panama', 412],
        ['Guam', 411]
      ],
      dropdownOptions: [
        {state: 'Alabama', value: 20.5},
        {country: 'Alaska', value: 13.4},
        {country: 'Colorado', value: 4.0},
        {country: 'Oklahoma', value: 4.9},
        {country: 'Texas', value: 2.8}
      ]
    }
  }
}
</script>

<style scoped>
.chart {
  margin: 40px auto 0;
  display: block;
}

.chartSubhead {
  font-family: 'Public Sans', sans-serif;
  font-weight: 200;
  font-size: .90rem;
  color: gray;
  line-height: 1.6;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.projects-card-footer {
  background-color: #F7F7F7 !important;
  padding: 1.25rem;
}
.card.card-cascade .view {
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);
}
</style>
