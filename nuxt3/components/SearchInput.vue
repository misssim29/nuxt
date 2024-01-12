<template>
    <div>
        <input type="text" :value="keyword" @input="$emit('input', $event)" @keyup="keyword = $event.target.value" />
        <button>search</button>
    </div>
</template>

<script>
export default {
    props: {
        keyword: {
            type: String,
            required: true,
        }
    }
}
</script>

<style></style>