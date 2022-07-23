<template>
  <div>
    <ModalInstrumento :open="open" :Instrumento="instrumentoNuevo" @cerrarModal="open = $event"/>
    <form @submit="(e) => {
                        e.preventDefault()
                        buscar()}">
    <input type="text" placeholder="Buscar Instrumento..." class="searchInput" v-model="search"/>
    <button>Buscar</button>
    </form>
    <button class="nuevoInstrumento" @click="open=true">NUEVO INSTRUMENTO</button>
    <section v-for="(instrumento, i) in Instrumentos" :key="i">
        <CardInstrumentos :instrumento="instrumento"/>
    </section>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CardInstrumentos from '@/components/CardInstrumentos.vue'
import ModalInstrumento from '@/components/ModalInstrumento.vue'

export default {
    name:"instrumentos",

    components:{
        CardInstrumentos,
        ModalInstrumento
    },

    created(){
        this.getInstrumentos()
    },

    data(){
        return{
            open:false,
            instrumentoNuevo:{
                nombre:"",
                marca:"",
                modelo:"",
                imagen:"",
                precio:"",
                costoEnvio:"",
                cantidadVendida:"",
                descripcion:""
            },
            search:""
        }
    },

    methods: {
        ...mapActions('instrumentos', ['getInstrumentos', 'searchInstrumento']),
        buscar(){
            this.searchInstrumento(this.search)
        }
    },

    computed: {
        ...mapGetters('instrumentos', ['Instrumentos'])
    }
}
</script>

<style>
 .nuevoInstrumento{
    background-color: #108b21;
        color: #fff;
        border: none;
        outline: none;
        padding: 0.6em 1em;
        cursor:pointer;
 }
 .searchInput{
    padding: 0.3em 0.1em;
    margin-right: 1em;
 }
</style>