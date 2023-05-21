<template>
	<ClickOutside
		:do="
			() => {
				close();
			}
		"
	>
		<div class="md:relative">
			<button
				v-if="selected"
				@click.stop="open = !open"
				class="inline-flex h-12 px-1 items-center"
			>
				<img class="h-6 flag w-6" :src="images[selected.flag]" alt="" />
				<span class="country ml-1 uppercase text-black">
					{{ selected.currency }}
				</span>
				<span>
					<img
						class="ml-1 h-2 w-2"
						src="~/assets/images/caret-down.svg"
						alt=""
					/>
				</span>
			</button>
			<div
				v-show="open"
				class="min-w-sm max-w-lg bg-white md:w-[20rem] absolute w-full rounded-lg drop-shadow z-10 -right-1.5 top-0"
			>
				<div class="rounded-lg w-full">
					<ul role="listbox" class="pt-6 pb-3 px-2">
						<li class="mb-6 px-3">
							<a href="#">
								<div>
									<span>
										<input
											type="text"
											@click.stop=""
											placeholder="Search"
											class="w-full text-gray-500 h-8 rounded-sm border-[0.5px] border-black focus:outline-none px-3 border"
										/>
									</span>
								</div>
							</a>
						</li>
						<li class="text-gray-400 px-3 mb-4 text-xs text-left font-normal">
							Western Countries
						</li>
						<li
							role="option"
							class="cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-lg mb-6 w-full"
						>
							<a href="#" class="flex items-center">
								<img
									class="h-6 w-6 mr-3"
									:src="images[firstCountry.flag]"
									alt=""
								/>
								<span>{{ firstCountry.name }}</span>
								<span class="ml-auto uppercase">{{
									firstCountry.currency
								}}</span>
							</a>
						</li>
						<li class="text-gray-400 px-3 mb-4 text-xs text-left font-normal">
							WAEMU countries
						</li>
						<li
							v-for="(country, cindex) in countries.slice(1)"
							role="option"
							tabindex="-1"
							@click="handleSelection(country)"
							class="cursor-pointer hover:bg-gray-100 py-2 px-3 rounded-lg w-full"
						>
							<a href="#" class="flex h-full items-center">
								<img class="h-6 w-6 mr-3" :src="images[country.flag]" alt="" />
								<span>{{ country.name }}</span>
								<span class="ml-auto uppercase">{{ country.currency }}</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</ClickOutside>
</template>
<script>
import { ref, reactive, computed, watch, toRefs } from "vue";
import { filename } from "pathe/utils";
export default {
	props: ["modelValue"],
	setup(props, ctx) {
		const state = reactive({
			glob: import.meta.glob("~/assets/images/*.svg", { eager: true }),
			open: false,
			images: computed(() =>
				Object.fromEntries(
					Object.entries(state.glob).map(([key, value]) => [
						filename(key),
						value.default,
					])
				)
			),
			open: false,
			firstCountry: computed(() => state.countries[0]),
			countries: [
				{
					name: "Canada",
					flag: "canada",
					currency: "cad",
				},
				{
					name: "Benin",
					flag: "benin",
					currency: "xof",
				},
				{
					name: "Burkina Faso",
					flag: "burkinafaso",
					currency: "xof",
				},
				{
					name: "Côte d'Ivoire",
					flag: "cotedivoire",
					currency: "xof",
				},
				{
					name: "Guinea-Bissau",
					flag: "g-bissau",
					currency: "xof",
				},
				{
					name: "Mali",
					flag: "mali",
					currency: "xof",
				},
				{
					name: "Niger",
					flag: "niger",
					currency: "xof",
				},
			],
		});

		function close() {
			state.open = false;
		}
		function handleSelection(data) {
			ctx.emit("update:modelValue", data);
			close();
		}

		return {
			...toRefs(state),
			handleSelection,
			selected: computed(() => props.modelValue),
			close,
		};
	},
};
</script>
