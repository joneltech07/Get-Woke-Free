<template>
<div class="row row-cols-lg-4">
    <div class="col p-0"
            v-for="company in companies">
        <div class="card m-2 p-3">
            <div class="img-wrapper ">
                <img src="../assets/img/placeholder-img.png" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ company.name }}</h5>
                <p class="card-text">{{ company.details }}</p>
                <p class="card-text">{{ company.rating }}</p>
            </div>
        </div>
    </div>
</div>
</template>


<script setup>

import { ref } from 'vue';

const companies = ref([
    { name: 'Company Name 2', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name 2', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name 2', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name 2', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name 2', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name 2', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name 2', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name 2', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name 2', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name 2', details: 'Company details', rating: 'Woke Rating' },
]);

</script>