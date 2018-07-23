<template>
  <div>
    <router-view/>
		<FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
	import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  
	components:{
		FooterGuide
	}
}
</script>

<style>
</style>
