<template lang="">
    <div  v-if="show"  class="fixed inset-0 transition-opacity bg-gray-500/70" aria-labelledby="modal-title" role="dialog"
        aria-modal="true">
    </div>
    <transition enter-active-class="transition ease-out duration-500" enter-from-class="transform opacity-0 scale-50"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-500"
        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-50">
        <!-- Modal -->
        <div v-if="show"  class="fixed inset-0 overflow-y-auto">
            <div class="flex  justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <!-- Modal panel -->
                <div class="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl  sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <!-- Modal content -->
                        <div class="sm:flex sm:items-start">
                            <div
                                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                <!-- Icon for newsletter -->
                                <font-awesome-icon :icon="['fas', 'user']"/>
                            </div>
                            <div class="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <slot name="header"></slot>
                                <div class="mt-2">
                                    <!-- Email input -->
                                    
                                    <slot name="body"></slot>
                                </div>
                            </div>
                        </div>
                    </div>
                     <!-- footer content -->
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <!-- Subscribe button -->
                        <slot name="footer"></slot>
                        <!-- Cancel button -->
                        <button @click="$emit('close')" type="button"
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    emits: ['close'],
    props: {
    show: Boolean
  }
}
</script>
<style lang="">
    
</style>