<script>
import { ref, h, onMounted } from "vue";
export default {
  props: ["do"],
  setup(props, ctx) {
    const thisElement = ref(null);

    onMounted(() => {
      const listener = (el) => {
        if (
          el.target === thisElement ||
          thisElement.value?.contains(el.target)
        ) {
          return;
        }
        props.do();
      };
      document.addEventListener("click", listener);
    });
    return () =>
      h(
        "div",
        {
          ref: thisElement,
        },
        ctx.slots.default()[0]
      );
  },
};
</script>
