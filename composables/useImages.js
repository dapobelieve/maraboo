import { reactive, computed } from "vue";
import { filename } from "pathe/utils";

export function useImages() {
  const state = reactive({
    glob: import.meta.glob("~/assets/images/*.svg", { eager: true }),
    flags: import.meta.glob("~/assets/images/flags/*.svg", { eager: true }),
    images: computed(() =>
      Object.fromEntries(
        Object.entries(state.glob).map(([key, value]) => [
          filename(key),
          value.default,
        ])
      )
    ),
    flagsImages: computed(() =>
      Object.fromEntries(
        Object.entries(state.flags).map(([key, value]) => [
          filename(key),
          value.default,
        ])
      )
    ),
  });

  return { images: state.images, flags: state.flagsImages };
}
