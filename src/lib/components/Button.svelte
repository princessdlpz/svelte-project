<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { HTMLAttributes } from 'svelte';
  
	interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	  variant?: 'solid' | 'outline' | 'danger';
	  className?: string;
	}
  
	export let variant: 'solid' | 'outline' | 'danger' = 'solid';
	export let className: string = '';
  
	const dispatch = createEventDispatcher();
  
	function handleClick() {
	  dispatch('click');
	}
  </script>
  
  <button
	class="button button-{variant} {className}"
	on:click={handleClick}
  >
	<slot />
  </button>
  