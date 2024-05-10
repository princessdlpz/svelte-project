<script lang = "ts">
    export let element = "button" | "a";
    export let variant: 'solid' | 'outline' | 'danger' = 'solid';
    export let className:string='';

</script>

<svelte:element this = {element} />
