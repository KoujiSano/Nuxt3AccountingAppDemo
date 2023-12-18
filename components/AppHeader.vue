<script setup lang="ts">
import { publicData } from '@/composables/usePublicData'
const User = publicData()
</script>
<template>
	<div class="container pb-4">
		<header>
			<Row auto align-items="center">
				<Col>
				<h1>
					<NuxtLink to="/">会計</NuxtLink>
				</h1>
				</Col>
				<Col>
				<div> {{User.CompanyName}} / {{ User.Name }} </div>
				</Col>
			</Row>
		</header>
	</div>
</template>

<style>
header {
	color: #fff;
	padding: 20px;
	background-color: #BBBBBB;
}

header a {
	color: #fff;
	text-decoration: none;
}

header a:visited {
	color: #fff;
}

header a:hover {
	color: #fff;
}</style>