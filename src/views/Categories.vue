<template>
  <div>
    <div class="page-title">
      <h3>{{'Menu_Categories' | localize}}</h3>
    </div>

    <section>
      <Loader v-if="loading"/>

      <div v-else class="row">
        <CategoryCreate @created="addNewCategory"/>
        <CategoryEdit
          v-if="categories.length"
          :categories="categories"
          :key="categories.length + count"
          @updated="updateCategories"/>
        <p v-else class="center">{{'Category_empty_message' | localize}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from '../components/CategoryCreate'
import CategoryEdit from '../components/CategoryEdit'

export default {
  name: 'categories',
  data: () => ({
    categories: [],
    loading: true,
    count: 0
  }),
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false
  },
  components: {CategoryCreate, CategoryEdit},
  methods: {
    addNewCategory(category) {
      this.categories.push(category)
    },
    async updateCategories() {
      this.categories = await this.$store.dispatch('fetchCategories')
      this.count ++
    }
  }
}
</script>
