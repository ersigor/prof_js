Vue.component('filter_', {
    data(){
        return {
            userSearch:"",
        }
    },
template: `
        <form v-on:submit.prevent="$parent.$refs.products.filter(userSearch)" action="#" class="search-form" >
                <input type="text" class="search-field" v-model="userSearch">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
        </form>
        `
        


})