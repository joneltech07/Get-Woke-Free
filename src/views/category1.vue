<template>
<div class="row row-cols-lg-4">
    <div class="col-12 p-0"
        v-for="company in companies">
        <div class="card m-2 p-3">
            <img class="card-img-top" src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="...">
            <div class="card-header bg-dark text-light">
                {{ company.name }}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ company.details }}</li>
                <li class="list-group-item">{{ company.rating }}</li>
            </ul>
        </div>
    </div>
</div>
</template>


<script setup>

import { ref } from 'vue';

const companies = ref([
    { name: 'Company Name', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name', details: 'Company details', rating: 'Woke Rating' },
    { name: 'Company Name', details: 'Company details', rating: 'Woke Rating' },
]);

</script>