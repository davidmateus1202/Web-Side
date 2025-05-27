<style scoped>
.btn {
  display: inline-block;
  padding: 0.9rem 1.8rem;
  font-size: 15px;
  font-weight: 700;
  color: white;
  border: 3px solid #246364;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  border-radius: 15px;
}

.btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #246364;
  transform: translateX(-100%);
  transition: all .3s;
  z-index: -1;
}

.btn:hover::before {
  transform: translateX(0);
}
</style>

<template>
  <button class="btn" @click="props.action">{{ props.text }}</button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Button'
  },
  action: {
    type: Function,
    default: () => {}
  }
});

</script>
