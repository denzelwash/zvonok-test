<template>
  <vSelect v-model="city" :options="['Canada', 'United States', 'Russia']" transition="" :searchable="false" :clearable="false">
    <template #open-indicator>
      <img src="@/assets/icons/icn_arrow_down.svg" width="21" height="20" />
    </template>
  </vSelect>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const city = ref('Canada')
</script>

<style lang="scss">
.v-select {
  --vs-search-input-color: #fff;
  --vs-search-input-bg: #e9e9f31a;
  --vs-search-input-placeholder-color: inherit;
  --vs-font-size: 22px;
  --vs-line-height: 1.2;
  --vs-border-width: 0px;
  --vs-border-radius: 8px;
  --vs-actions-padding: 0 16px 0 0;
  --vs-controls-color: #fff;
  --vs-selected-color: #fff;
  --vs-dropdown-bg: #e9e9f31a;
  --vs-dropdown-color: fff;
  --vs-dropdown-z-index: 1000;
  --vs-dropdown-min-width: 246px;
  --vs-dropdown-max-height: 230px;
  --vs-dropdown-box-shadow: none;
  --vs-dropdown-option-color: #fff;
  --vs-dropdown-option-padding: 10px 16px;
  --vs-dropdown-option--active-bg: #e9e9f333;
  --vs-dropdown-option--active-color: #fff;
  --vs-transition-duration: 0;
  min-width: 246px;
  @media (max-width: $md) {
    font-size: 14px;
  }
  @media (max-width: $sm) {
    min-width: unset;
    width: 100%;
  }
  .vs__dropdown-toggle {
    background-color: #e9e9f31a;
    height: 46px;
    padding: 0;
    border-radius: 8px !important;
    @media (max-width: $md) {
      height: 36px;
    }
  }
  .vs__dropdown-menu {
    border-radius: 8px !important;
    top: calc(100% + 12px);
    padding: 0;
    background: #1a669c;

    .vs__dropdown-option {
      background-color: #e9e9f31a;
      &--highlight {
        background: #e9e9f333;
      }
    }
  }
  .vs__selected {
    margin: 0;
  }
  &.vs--open {
    .vs__selected {
      top: 11px;
      @media (max-width: $md) {
        top: 8px;
      }
    }
  }
  .vs__open-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vs__selected-options {
    padding-left: 10px;
  }
}
</style>
