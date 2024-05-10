<script lang="ts">
	import { GradientButton } from 'flowbite-svelte';
	function handleLogin() {
	  window.location.href = "/api/auth/login";
	}
  </script>
  
  <GradientButton color="teal" on:click={handleLogin}>Log in</GradientButton>
  