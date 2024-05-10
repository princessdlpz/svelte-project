<script lang="ts">
	import { onMount } from 'svelte';
	import { Button, Card } from '$components';
	import type { PageData } from './$types';
	import { writable } from 'svelte/store';

	export let data: PageData;

	let sections = writable<
		{
			title: string;
			path: string;
			items: (SpotifyApi.AlbumObjectSimplified | SpotifyApi.PlaylistObjectSimplified)[];
		}[]
	>([]);

	onMount(async () => {
		let _sections = [];

		console.log(data);

		if (data && data.newReleases) {
			_sections.push({
				title: 'New Releases',
				path: '/sections/new-releases',
				items: (await data.newReleases).albums.items
			});
		}
		if (data && data.featuredPlaylists) {
			_sections.push({
				title: 'Featured Playlists',
				path: '/sections/featured-playlists',
				items: (await data.featuredPlaylists).playlists.items
			});
		}
		
		if (data && data.userPlaylists) {
			_sections.push({
				title: 'Your Playlists',
				path: '/playlists',
				items: (await data.userPlaylists).items
			});
		}

		sections.set(_sections);
	});
</script>

{#each $sections as section, i (section.title)}
	<div>
		<h2>{section.title}</h2>
		<div class="grid grid-cols-6">
			{#each section.items as item (item.id)}
				<div class="col-span-1 h-20 w-20"><Card {item} /></div>
			{/each}
		</div>
	</div>
{/each}
