<template>
    <FlexboxLayout flexDirection="column" alignItems="center">
        <Image :src="avatar" class="list__img" />
        <Label :text="name" />
        <Label :text="bio" textWrap/>
        <Button class="list__btn" @tap="show">Ver Perfil</Button>
    </FlexboxLayout>
</template>

<script>
import Stars from "@/containers/Stars"
export default {
    props:["avatar","name","bio", "id"],
    methods: {
        show() {
            this.$navigateTo(Stars, {props: { id:this.id }});
        }
    }
}
</script>

<style scoped lang="scss">
.list {
    &__img {
        width:50;
        height:50;
    }
    
    &__btn {
        font-size: 12;
        margin:0;
        padding:0;
        width: 100%;
    }

}
</style>
