<script setup lang="ts">
import { computed } from 'vue';

defineOptions({ inheritAttrs: false })

type ButtonProps = {
  /**
   * Button style variant
   */
  type?: 'primary' | 'secondary',

  /**
   * Disabled state
   */
  disabled?: boolean,

  /**
   * Loading state — when true shows indicator and disables the button
   */
  loading?: boolean,
}

const props = withDefaults(
  defineProps<{
    type?: ButtonProps['type'],
    disabled?: ButtonProps['disabled'],
    loading?: ButtonProps['loading'],
  }>(),
  {
    type: 'primary',
    disabled: false,
    loading: false,
  }
)

// computed disabled when either disabled prop or loading is true
const isDisabled = computed(() => props.disabled || props.loading)
</script>

<template>
  <button
    v-bind="$attrs"
    :disabled="isDisabled"
    :aria-busy="props.loading ? 'true' : 'false'"
    :aria-disabled="isDisabled ? 'true' : 'false'"
    class="flex items-center justify-center gap-2 px-4 py-2.5 text-sm rounded-md ring-1 ring-teal-600 font-medium hover:scale-105 transition-transform duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed"
    :class="[
      props.type === 'primary' ? 'bg-teal-600 text-white' : 'bg-white text-teal-600',
    ]"
  >
    <!-- Loading indicator (left) -->
    <svg
      v-if="props.loading"
      class="w-4 h-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>

    <!-- Default slot (button label) -->
    <span v-if="!props.loading">
      <slot />
    </span>

    <!-- Optional loading label when loading; uses slot 'loading' if provided -->
    <span v-else>
      <slot name="loading">Loading...</slot>
    </span>
  </button>
</template>
