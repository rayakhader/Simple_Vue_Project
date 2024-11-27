export default {
    template:`
    <form @submit.prevent="add">
        <div class="flex text-black">
        <input type="text" placeholder="New Assignment..." v-model="newAssignment" class="p-2 w-full">
        <button type="submit" class="bg-white color-black p-2 border-l" >Add</button>
        </div>
        </form>
    `,

    data() {
        return {
            newAssignment : ''
        }
    },

    methods: {
        add(){
            this.$emit('add', this.newAssignment)
            this.newAssignment = ''
        }

    }
}