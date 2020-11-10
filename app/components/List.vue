<template>
    <ListView for="item in getUsers">
        <v-template>
            <ListItem 
                :avatar="item.avatar_url"
                :name="item.name"
                :bio="item.bio"
                :id="item.id"
            />
        </v-template>
    </ListView>
</template>

<script>
import ListItem from "./ListItem";
import {mapGetters} from "vuex";
export default {
    components: {ListItem},
    computed: {
        ...mapGetters(["getUsers"])
    }
}
</script>