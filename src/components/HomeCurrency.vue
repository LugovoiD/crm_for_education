<template>
  <div class="col s12 m6 l8">
    <div class="card orange darken-3 bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">{{'Exchange_Rates' | localize}}</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>{{'Currency' | localize}}</th>
              <th>{{'Rates' | localize}}</th>
              <th>{{'Date' | localize}}</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="cur of currencies"
              :key="cur"
            >
              <td>{{cur}}</td>
              <td>{{rates[cur]}}</td>
              <td>{{date | date(date)}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rates', 'date'],
  data: () => ({
    currencies: ['RUB', 'USD', 'EUR']
  }),
  computed: {
    base() {
      return this.$store.getters.info.bill / (this.rates['RUB'] / this.rates['EUR'])
    }
  },
  methods: {
    getCurrency(currency) {
      return Math.floor(this.base * this.rates[currency])
    }
  }
}
</script>
