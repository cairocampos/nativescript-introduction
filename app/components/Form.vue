<template>
    <FlexboxLayout>
        <TextField  hint="Adicionar usuário" class="input" v-model="user" />
        <Button clas="button" @tap="save">
            <Span class="fas" text.decode="&#xf067;" />
        </Button>
    </FlexboxLayout>
</template>

<script>
export default {
    data() {
        return {
            user: ""
        }
    },
    methods: {
        save(){
            this.$store.dispatch("loadUser", this.user);
            this.user = "";
        }
    }
}
</script>

<style scoped>
.input {
    background: #EEE;
    border-radius: 4px;
    border-width: 1;
    flex:1;
    border-color: #EEE;
    padding: 0 15;
    height: 40;
    color:#333;
}
</style>