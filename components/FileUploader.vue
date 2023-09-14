<template>
  <form
    enctype="multipart/form-data"
    novalidate
    action=""
    class="bg-gradient-to-r w-full uploader from-[#DDDDDD] to-[#F5F5F5] rounded-lg h-[20rem] p-10 flex items-center justify-center relative mb-6"
    @dragover.prevent="handleDragOver"
    @dragleave.prevent="handleDragLeave"
    :class="{ 'border-gray-600': dragging }"
  >
    <input
      @change="handleFilesChosen"
      type="file"
      multiple
      class="absolute hover:cursor-pointer bg-red-300 opacity-0 w-full h-full left-0 top-0"
    />
    <template v-if="dragging">
      <div class="text-gray-700">
        Let go to upload {{ draggingCount }} items
      </div>
    </template>
    <template v-else>
      <div class="inline-flex mb-1 flex-col items-center">
        <span class="mb-4"><img src="~/assets/images/upload.svg" /></span>
        <div class="text-primary">
          <span class="text-[#5F19F2] font-bold">Click to upload</span> or drag
          and drop
        </div>
        <div>Maximum file size: 50MB</div>
      </div>
    </template>
  </form>
</template>
<script>
export default {
  data() {
    return {
      dragging: false,
      draggingCount: 0,
    };
  },
  methods: {
    handleFilesChosen(e) {
      this.dragging = false;
      this.$emit("file-selected", e.target.files); //File list
    },
    handleDragOver(e) {
      this.dragging = true;
      this.draggingCount = e.dataTransfer.items.length;
    },
    handleDragLeave() {
      this.dragging = false;
      this.draggingCount = 0;
    },
  },
};
</script>
<style lang="scss">
.uploader {
  background-color: #00000005;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23D3CFCFFF' stroke-width='6' stroke-dasharray='6%2c 14' stroke-dashoffset='7' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 20px;
}
</style>
