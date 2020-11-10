<template>
    <Page>
        <ActionBar>
            <Label text="Users"/>
        </ActionBar>
        <StackLayout>
            <Form/>
            <List />
        </StackLayout>
    </Page>
</template>

<script>
import request from "@/utils/request";
import Form from "@/components/Form";
import List from "@/components/List";
export default {
    components:{Form, List},
    
}
</script>

<style scoped>
</style>