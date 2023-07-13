<template>
  <div class="instellingen-view">
    <h2>Instellingen</h2>
    <div class="options">
      <div v-for="option in options" :key="option">
        <input
          type="radio"
          :id="option"
          :value="option"
          v-model="selectedOption"
          @change="updateQuestionCount"
        />
        <label :for="option">{{ option }}</label>
      </div>
    </div>
    <button class="btn" @click="goBack">Terug</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [5, 10, 15, 20, 30, 50, 70, 'all'],
      selectedOption: 10, // Default value
    };
  },
  methods: {
    updateQuestionCount() {
      // Emit an event or update a shared state to notify other components about the selected option
      // For example, you can use Vuex or emit an event using an event bus
      // Here, I'll assume you're using Vuex and dispatch an action to update the question count
      this.$store.dispatch('updateQuestionCount', this.selectedOption);
    },
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
