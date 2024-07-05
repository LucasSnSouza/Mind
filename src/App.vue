<template>

	<div class="app flex w-full h-full x-end y-center bg-color-brand-two">

		<div class="app menubar-wrapper p-lg">

			<div class="flex flex-column gap-lg color-brand-two">
				<div class="app-grid-template grid gap-md">
					<ButtonBasic 
						v-for="(item, index) of appItems" 
						type="two"
						class="w-full p-lg rounded-md color-brand-two" 
						:key="index"
						@click="selectMenuButton(index)"
					>
						<div class="flex h-full y-center gap-lg">
							<label v-if="item?.selected"></label>
							<p 
								class="text-start"
								style="margin-top: 3px;"
							>
								{{ item.name }}
							</p>
						</div>
					</ButtonBasic>
				</div>
			</div>

		</div>

		<div class="app route-view-wrapper h-full shadow-sm" :class="{ 'retreat': navigationStore.getMenubarStatus }"
			@click.stop="navigationStore.setMenubarStatus(false)">
			<RouterView />
		</div>
	</div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

import { useNavigationStore } from '@/stores/navigation.js'

import * as Button from "@/components/Button";
import * as Input from "@/components/Input";
import * as Misc from "@/components/Misc";

export default {
	data() {
		return {
			navigationStore: useNavigationStore(),
			appItems: [
				{
					name: "Tela inicial",
					selected: true,
				},
				{
					name: "Meus aplicativos",
					selected: false,
				},
			]
		}
	},
	components: {
		...Button,
		...Input,
		...Misc
	},
	methods: {
		selectMenuButton(index){
			this.appItems = this.appItems.map((item, idx) => {
				if(idx === index){
					return {
						name: item.name,
						selected: true,
					}
				}
				else{
					return {
						name: item.name,
						selected: false,
					}
				}
			})
		}
	}
}

</script>

<style lang="scss" scoped>
.app {

	overflow: hidden;

	.menubar-wrapper {
		width: 65%;
		height: 90%;

		.app-grid-template {
			grid-template-columns: 100%;

			button{

				height: 50px;

				label {
					width: 5px;
					height: 100%;
					border-radius: var(--scale-brand-md);
					background: var(--color-brand-five);
					opacity: 1;
					transition: 0.5s;
				}
			}

		}

	}

	.route-view-wrapper {
		transition: .5s;
		min-width: 100vw;
		height: 100%;

		&.retreat {
			height: 90%;
			margin-right: -65%;
			border-top-left-radius: 20px;
			border-bottom-left-radius: 20px;
		}
	}

}
</style>
