<script>
    import { page } from "$app/stores";
    import ProductHeader from "../ProductHeader.svelte";

    $: console.log(page);
</script>

<ProductHeader />

<p> Product ID: {$page.params.id}</p>

<h1>Product Page</h1>