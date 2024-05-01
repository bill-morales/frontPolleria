<template>
    <div class="bg-gray-100 font-karla flex">
        <Sidebar />
        <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
            <!-- Desktop Header -->
            <Navbar :isOpen="isOpen" />

            <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
                <main class="w-full flex-grow p-6">

                    <!-- Content goes here! 😁 -->
                    <div class=" mx-auto">
                        <button @click="showCreateModal" @mouseover="isHovering = true" @mouseleave="isHovering = false"
                            class="w-1/7 px-2 bg-white text-blue-700 font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-slate-400 flex items-center justify-center">
                            <font-awesome-icon :icon="['fas', 'folder-plus']" class="mr-2" :beat="isHovering" />Nueva
                            Categoria
                        </button>
                        <div class="bg-white  shadow-md rounded my-6 overflow-hidden ">
                            <table class="text-left w-full table-auto border-collapse">
                                <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->

                                <thead>
                                    <tr>
                                        <th
                                            class="py-4 px-6 font-bold bg-slate-400  uppercase text-sm text-grey-dark border-b border-grey-light">
                                            ID</th>
                                        <th
                                            class="py-4 px-6 font-bold bg-slate-400 uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Categoria</th>
                                        <th
                                            class="py-4 px-6 w-36 xl:w-auto  font-bold bg-slate-400 uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-grey-lighter" v-for="{ id, name } in categories" :key="id">
                                        <td class="py-4 px-6 border-b border-grey-light ">{{ id }}</td>
                                        <td class="py-4 px-6 border-b border-grey-light ">{{ name }}</td>
                                        <td class="py-4 px-6 border-b border-grey-light">
                                            <a @click="showEditModal(id, name)"
                                                class="py-1 px-3 rounded text-xs  bg-slate-400 mr-2 cursor-pointer"><font-awesome-icon
                                                    class="hover:text-blue-600" :icon="['fas', 'pen-to-square']" /></a>
                                            <a @click="showDeleteModal(id)"
                                                class="py-1 px-3 rounded text-xs bg-slate-400 cursor-pointer"><font-awesome-icon
                                                    class="hover:text-red-600 " :icon="['fas', 'trash']" /></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>

                <footer class="w-full bg-white text-right p-4">link
                    Built by <a target="_blank" href="https://davidgrzyb.com" class="underline">David Grzyb</a>.
                </footer>
            </div>

        </div>
    </div>

    <Modal :show="showModal" @close="showModal = false">
        <template #header>
            <h2 class=" text-xl font-bold">{{ modalTitle }}</h2>
        </template>


        <template #body>
            <div v-if="modalAction == 'Eliminar'">
                <p>¿Estás seguro de que quieres eliminar este elemento?</p>
            </div>

            <form @submit.prevent="handleAction" ref="form" v-else>
                <p class="text-sm text-gray-500"> Ingrese la categoria </p>
                <input type="text" v-model="inputValue"
                    class="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                    placeholder="ejem: marino">
                    <p v-if="!isObjectEmpty(formErrors)">{{formErrors.name[0]}}</p>
            </form>
        </template>
        <template #footer>
            <button @click="submitForm" type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2  text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                :class="[btnAction === 'Eliminar' ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700']">{{
                    btnAction }}</button>

        </template>

    </Modal>
</template>
<script>
import Modal from "@/components/Modal.vue";
import Sidebar from '@/layout/dashboard/Sidebar.vue';
import Navbar from '@/layout/dashboard/Navbar.vue';
import { mapState, mapGetters, mapActions } from "vuex";

export default {
    name: "category",
    data() {
        return {
            showModal: false,
            isOpen: false,
            isHovering: false,
            modalTitle: "",
            modalAction: "",
            btnAction: "",
            inputValue: "",
            id: "",
            formErrors: {},
            links: [
                {
                    name: "Categoria",
                    path: "category",
                    icon: "tag"
                },
                {
                    name: "Sub categoria",
                    path: "subcategory",
                    icon: "tags"
                },
                {
                    name: "Platillos",
                    path: "platillos",
                    icon: "utensils"
                },
                {
                    name: "Usuarios",
                    path: "user",
                    icon: "users"
                },
            ],
        };
    },
    components: {
        Sidebar,
        Navbar,
        Modal
    },
    methods: {
        ...mapActions('category', ["getCategories", "createCategory", "deleteCategory", "updateCategory"]),
        isObjectEmpty(obj) {
      return Object.keys(obj).length === 0;
        },
        submitForm() {
            if (this.modalAction !== 'Eliminar') {
                this.$refs.form.requestSubmit();
            } else {
                this.handleAction();
            }
        },
        showCreateModal() {
            this.modalTitle = 'Crear Categoria';
            this.modalAction = 'Crear';
            this.inputValue = '';
            this.showModal = true;
            this.btnAction = 'Guardar'
        },
        showEditModal(id, name) {
            this.modalTitle = 'Editar Categoria';
            this.modalAction = 'Editar';
            this.inputValue = name;
            this.showModal = true;
            this.btnAction = 'Guardar'
            this.id = id;
        },
        showDeleteModal(id) {
            this.modalTitle = 'Eliminar Categoria';
            this.modalAction = 'Eliminar';
            this.inputValue = '';
            this.showModal = true;
            this.btnAction = 'Eliminar'
            this.id = id;
        },
        async handleAction() {
            if (this.modalAction === 'Crear') {
                console.log("crear");
                this.createCategory({ name: this.inputValue })
            } else if (this.modalAction === 'Editar') {
                console.log("actualizar");
                const errors = await this.updateCategory({ id: this.id, name: this.inputValue })
                if (errors) {
                    this.formErrors = errors;
                    return;
                }
            } else if (this.modalAction === 'Eliminar') {
                console.log("eliminar");
                this.deleteCategory(this.id);
            }
            this.showModal = false;
        }

    },
    computed: {
        ...mapGetters('category', ["categories"])
    },
    mounted() {
        this.getCategories();
    }


}
</script>
<style>
.active-nav-link {
    background: #1947ee;
}
</style>
