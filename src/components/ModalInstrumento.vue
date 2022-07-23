<template>
  <dialog :open="open">
    <form class="instrumentosForm">
        <label>Nombre: 
            <input type="text" v-model="Instrumento.nombre"/>
        </label>

        <label>Marca: 
            <input type="text" v-model="Instrumento.marca"/>
        </label>

        <label>Modelo: 
            <input type="text" v-model="Instrumento.modelo"/>
        </label>

        <label>Imagen URL: 
            <input type="text" v-model="Instrumento.imagen"/>
        </label>

        <label>Precio: 
            <input type="number" v-model="Instrumento.precio"/>
        </label>

        <label>Costo de Envío: 
            <input type="number" v-model="Instrumento.costoEnvio"/>
        </label>

        <label>Cantidad Vendidos: 
            <input type="number" v-model="Instrumento.cantidadVendida"/>
        </label>

        <label>Descripción: 
            <input type="text" v-model="Instrumento.descripcion"/>
        </label>
    </form>
    <section class="buttonsSection">
    <button v-if="Instrumento.id" class="guardar" @click="editar()">Editar Instrumento</button>
    <button v-else class="guardar" @click="agregar()">Nuevo Instrumento</button>
    <button class="cerrar" @click="cerrarModal()">Cerrar</button>
    </section>
  </dialog>  
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:{
        open: Boolean,
        Instrumento: Object
    },
    methods:{
        ...mapActions('instrumentos',['agregarInstrumento', 'editarInstrumento']),
        agregar(){
            this.agregarInstrumento(this.Instrumento)
            this.cerrarModal()
        },
        editar(){
            this.editarInstrumento(this.Instrumento)
            this.cerrarModal()
        },
        cerrarModal(){
            this.$emit('cerrarModal', false)
        }
    }
}
</script>

<style>
    .instrumentosForm label{
        display:block;
        margin-bottom: 0.4em;
    }
    .instrumentosForm label input{
        padding: 0.5em 0.3em;
    }
    .buttonsSection{
        display:flex;
        justify-content:space-between;
    }
    .guardar{
        display:block;
        background-color: #291ebe;
        color: #fff;
        border: none;
        outline: none;
        padding: 0.6em 1em;
        cursor:pointer;
    }
    .cerrar{
        background-color: #be1e1e;
        color: #fff;
        border: none;
        outline: none;
        padding: 0.6em 1em;
        cursor:pointer;
    }
</style>