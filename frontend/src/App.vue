<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Homecards from "@/components/Homecards.vue";
import Joblistings from "@/components/Joblistings.vue";
</script>


<template>
    <Navbar />
    <Hero title="Test Title" description="Test Description"/>
    <Homecards/>
    <Joblistings :limit="3" :showButton="true"/>
</template>