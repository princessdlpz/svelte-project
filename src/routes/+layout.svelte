<script lang="ts">
	import LogoutButton from './../lib/components/LogoutButton.svelte';
	import 'modern-normalize/modern-normalize.css';
	import '../styles/main.scss';
	import type { LayoutData } from './$types';
	
	export let data: LayoutData;
	$:user = data.user;	
</script>

{data.user?.display_name}

{#if user}
	<p>Welcome Back {user.display_name}</p>
	<LogoutButton />

{/if}

<slot />