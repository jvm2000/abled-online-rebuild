<script setup lang="ts">
defineOptions({ inheritAttrs: false })

type ButtonProps = {
  /**
   * If the input is required.
   */
  type?: 'primary' | 'secondary',

  /**
   * If the input is required.
   */
  disabled?: boolean,
}

const props = withDefaults(
  defineProps<{
    type?: ButtonProps['type'],
    disabled?: ButtonProps['disabled'],
  }>(),
  {
    type: 'primary',
    disabled: false,
  }
)
</script>

<template>
  <button 
    v-bind="$attrs"
    class="flex items-center px-4 py-2.5 bg-teal-500 text-sm rounded-md ring-1 ring-teal-500 font-medium bg"
    :class="[
      props.type === 'primary'
        ? 'bg-teal-500 text-white'
        : 'bg-inherit text-teal-500'
    ]"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>