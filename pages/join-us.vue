<template>
  <main class="container mx-auto px-2">
    <section class="countries py-24 md:pb-32">
      <div class="md:flex items-center">
        <div class="w-full md:w-4/5">
          <div
            class="flex md:items-start text-left items-center flex-col h-full"
          >
            <h1 class="text-purple mb-4 md:mb-10 text-2xl font-extrabold">
              Coming Soon!
            </h1>
            <h1 class="font-heading text-4xl md:text-6xl leading-snug mb-4">
              Get notified when we launch!
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section class="countries py-12 md:py-32">
      <div class="w-full md:w-2/5">
        <div>
          <div @submit.stop="">
            <GlobalInput
              v-model="formData.first_name"
              :error="v$.first_name.$error"
              :errMsg="
                v$.first_name.$error ? v$.first_name?.$errors[0]?.$message : ''
              "
              class="mb-10"
              placeholder="First Name"
            >
              <template v-slot:label>First Name</template>
            </GlobalInput>
            <GlobalInput
              v-model="formData.last_name"
              :error="v$.last_name.$error"
              :errMsg="
                v$.last_name.$error ? v$.last_name?.$errors[0]?.$message : ''
              "
              class="mb-10"
              placeholder="Last Name"
            >
              <template v-slot:label>Last Name</template>
            </GlobalInput>
            <GlobalInput
              v-model="formData.email"
              :error="v$.email.$error"
              :errMsg="v$.email.$error ? v$.email?.$errors[0]?.$message : ''"
              class="mb-10"
              type="email"
              placeholder="Email"
            >
              <template v-slot:label>Email</template>
            </GlobalInput>
            <div>
              <button
                :disabled="loading"
                @click="submit"
                class="bg-black rounded px-12 text-sm py-3 text-white"
              >
                {{ loading ? "loading..." : "Submit" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      v-show="modalOpen"
      class="w-full absolute bg-black flex items-center justify-center h-screen left-0 z-30 top-0"
      style="background: rgba(0, 0, 0, 0.52)"
    >
      <div class="flex w-full h-full max-w-xl items-center justify-center">
        <div class="bg-white rounded-md p-6 w-full">
          <div class="flex flex-col items-center">
            <div class="flex w-full">
              <svg
                @click="modalOpen = false"
                class="ml-auto cursor-pointer"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9594 11.9339L23.6794 2.21394C23.8978 1.95887 24.012 1.63077 23.999 1.2952C23.986 0.959636 23.8469 0.641318 23.6095 0.403858C23.372 0.166399 23.0537 0.0272883 22.7181 0.0143267C22.3826 0.00136521 22.0545 0.115507 21.7994 0.333942L12.0794 10.0539L2.35939 0.320609C2.10432 0.102174 1.77622 -0.0119672 1.44065 0.000994381C1.10509 0.0139559 0.786767 0.153065 0.549308 0.390525C0.311849 0.627984 0.172738 0.946303 0.159777 1.28187C0.146815 1.61744 0.260957 1.94554 0.479392 2.20061L10.1994 11.9339L0.466059 21.6539C0.326483 21.7735 0.213123 21.9206 0.133091 22.086C0.0530604 22.2514 0.00808623 22.4316 0.000993573 22.6152C-0.00609909 22.7988 0.0248422 22.9819 0.0918749 23.153C0.158908 23.3241 0.260585 23.4795 0.390525 23.6095C0.520465 23.7394 0.675861 23.8411 0.846961 23.9081C1.01806 23.9752 1.20117 24.0061 1.3848 23.999C1.56842 23.9919 1.7486 23.9469 1.91402 23.8669C2.07944 23.7869 2.22653 23.6735 2.34606 23.5339L12.0794 13.8139L21.7994 23.5339C22.0545 23.7524 22.3826 23.8665 22.7181 23.8536C23.0537 23.8406 23.372 23.7015 23.6095 23.464C23.8469 23.2266 23.986 22.9082 23.999 22.5727C24.012 22.2371 23.8978 21.909 23.6794 21.6539L13.9594 11.9339Z"
                  fill="black"
                />
              </svg>
            </div>
            <div class="mt-8">
              <img class="" src="~/assets/images/3hand.svg" alt="" />
            </div>
            <div class="">
              <h1 class="font-bold text-4xl w-96 text-center leading-snug">
                Thank you for joining the waitlist
              </h1>
              <p class="text-center my-6">
                We'll send you an email when we launch
              </p>
            </div>
            <div class="socials inline-flex justify-between">
              <a class="mr-2" href="#">
                <img class="" src="~/assets/images/white-linkedin.svg" alt="" />
              </a>
              <a
                class="mr-2"
                target="_blank"
                href="https://twitter.com/Grandmaraboo"
              >
                <img class="" src="~/assets/images/white-twitter.svg" alt="" />
              </a>
              <a
                class="mr-2"
                target="_blank"
                href="https://www.instagram.com/grand.maraboo/"
              >
                <img
                  class=""
                  src="~/assets/images/white-instagram.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { computed, reactive, ref, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { waitList } from "../services/apiService";
import { required, email, helpers } from "@vuelidate/validators";
let formData = reactive({
  first_name: null,
  last_name: null,
  email: null,
});
let modalOpen = ref(false);
let loading = ref(false);

// Computed Props
const rules = computed(() => {
  return {
    first_name: {
      required: helpers.withMessage(
        "The first name field is required",
        required
      ),
      $autoDirty: true,
    },
    last_name: {
      required: helpers.withMessage(
        "The last name field is required",
        required
      ),
      $autoDirty: true,
    },
    email: {
      required: helpers.withMessage("The email field is required", required),
      email: helpers.withMessage("Invalid email format", email),
      $autoDirty: true,
    },
  };
});

//Methods
async function submit() {
  try {
    if (await v$.value.$validate()) {
      loading.value = true;
      let res = await waitList(formData);
      modalOpen.value = true;
      formData = {
        first_name: null,
        last_name: null,
        email: null,
      };
    } else {
      return;
    }
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
}

//watchers
watch(modalOpen, (newVal, oldVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

const v$ = useVuelidate(rules, formData);
</script>
