<template>
    <Page>
        <ActionBar title="Repositorios">
            <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack"/>
        </ActionBar>

        <StackLayout>
            <FlexboxLayout class="profile" jutifyContent="center" alignItems="center" flexDirection="column">
                <Image :src="me.avatar_url" class="profile__img" borderRadius="100" />
                <Label :text="me.name" class="profile__name" />
                <Label :text="me.bio" class="profile__bio" textWrap />
            </FlexboxLayout>

            <Label text="Repositórios curtidos" class="title" />

            <ListView for="item in getRepos" class="list">
                <v-template>
                    <FlexboxLayout flexDirection="column" justifyContent="center" class="repos">
                        <Image :src="item.owner.avatar_url" class="repos__img" />
                        <Label :text="item.name" class="repos__label-title text-center" />
                        <Label :text="item.description" class="repos__label-description text-center" textWrap />
                        <Button @tap="open(item.html_url)">Ver no github</Button>
                    </FlexboxLayout>
                </v-template>
            </ListView>
            
        </StackLayout>
    </Page>
</template>

<script>
import { mapGetters } from 'vuex';
import Modal from "@/components/Modal";
export default {
    props: {id:Number},
    computed: {
        ...mapGetters(["getUsers","getRepos"]),
        me() {
            return this.$store.state.users.filter(user => user.id === this.id)[0];
        }
    },
    methods: {
        open(url) {
            this.$showModal(Modal, {fullscreen:true, props: {url}});
        }
    },
    created() {
        this.$store.dispatch("loadRepos", this.me.login);
    }
}
</script>

<style lang="scss">
.profile {
    margin-top:40;
    &__img {
        height:100;
        width:100;
    }
    &_name {
        font-size:16;
        font-weight: bold;
    }
    &__bio {
        text-align: center;
        margin:0 20 0 20;
    }
}

.text-center {
    text-align: center;
}

.title {
    font-size:20;
    font-weight:bold;
    margin-top:50;
    margin-left:10;
}

.repos {
    &__label-title {
        font-weight: bold;
        font-size: 10;
    }
    &__img {
        width:40;
        height:40;
    }
}
</style>