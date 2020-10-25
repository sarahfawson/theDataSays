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
        <p class="chartSubhead">Description here</p>
        <div id="barChart"></div>
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

export default {
  name: 'Thesis',
  components: {
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask,
    mdbIcon,
    mdbBtn
  },
  data () {
    return {
      dropdownOptions: [
        {state: 'Alabama', value: 20.5},
        {country: 'China', value: 13.4},
        {country: 'Germany', value: 4.0},
        {country: 'Japan', value: 4.9},
        {country: 'France', value: 2.8}
      ],
      incarcerationRate: [
        {label: 'USA', value: 639},
        {label: 'El Salvador', value: 566},
        {label: 'Turkmenistan', value: 552},
        {label: 'Thailand', value: 549},
        {label: 'Palau', value: 522},
        {label: 'Rwanda', value: 511},
        {label: 'Cuba', value: 510},
        {label: 'Maldives', value: 499},
        {label: 'Northern Mariana Islands', value: 482},
        {label: 'Virgin Islands (UK)', value: 447},
        {label: 'Bahamas', value: 442},
        {label: 'Grenada', value: 429},
        {label: 'Panama', value: 412},
        {label: 'Guam', value: 411}
      ]
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
