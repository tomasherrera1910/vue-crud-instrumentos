<template>
    <div>
    <ModalInstrumento :open="open" :Instrumento="instrumento" @cerrarModal="open = $event"/>
    <article class="cardContainer">
        <img :src="instrumento.imagen" :alt="instrumento.nombre"/>
        <ul>
            <li><h1 class="nameStyle">{{instrumento.nombre}}</h1></li>
            <li><span>Marca: </span>{{instrumento.marca}}<span> - Modelo: </span>{{instrumento.modelo}}</li>
            <li class="precio">${{instrumento.precio}}</li>
            <li><span>{{instrumento.cantidadVendida}} vendidos</span></li>
            <li v-if="instrumento.costoEnvio > 0"><p class="envioPago">Costo Envío: ${{instrumento.costoEnvio}}</p></li>
            <li v-else><p class="envioGratis">Envío gratuito a todo el país</p></li>
        </ul>
        <section>
            <button class="editarButton" @click="open = true">EDITAR</button>
            <button class="eliminarButton" @click="eliminar(instrumento.id)">ELIMINAR</button>
        </section>
    </article>   
    </div> 
</template>

<script>
import {mapActions} from 'vuex'
import ModalInstrumento from '@/components/ModalInstrumento.vue'
export default {
    components: {
        ModalInstrumento
    },
    data(){
        return{
            open:false
        }
    },

    props: {
        instrumento: Object
    },
    methods: {
        ...mapActions('instrumentos',['deleteInstrumento']),

        eliminar(instrumento){
            this.deleteInstrumento(instrumento)
        }
    }
}
</script>

<style>
    .cardContainer{
        display:flex;
        align-items: center;
        padding: 0.5em 3em;
        gap:5em;
        border-bottom: solid 1px #888;
        text-align: left;
    }
    .cardContainer ul{
        list-style:none;
        padding:auto 0;
        margin: auto 0;
    }
    .cardContainer ul li span{
        font-size: 12px;
        color: #888;
    }
    .nameStyle{
        margin: 0.5em 0;
        font-size: 2em;
    }
    .precio{
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 600;
    }
    .envioGratis{
        color: #0c8c21;
        font-size: 13px;
        margin:0;
    }
    .envioPago{
        color: #ce621f;
        font-size: 13px;
        margin:0;
    }
    .editarButton{
        display:block;
        background-color: #291ebe;
        color: #fff;
        border: none;
        outline: none;
        margin-bottom: 1em;
        padding: 0.6em 1em;
        cursor:pointer;
    }
    .eliminarButton{
        background-color: #be1e1e;
        color: #fff;
        border: none;
        outline: none;
        padding: 0.6em 1em;
        cursor:pointer;
    }
</style>
