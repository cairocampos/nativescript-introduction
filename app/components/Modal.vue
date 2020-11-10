<template>
    <Page>
        <StackLayout>
            <Button @tap="$modal.close" text="Close" />
            <WebView :src="url" />
        </StackLayout>
    </Page>
</template>

<script>
export default {
    props: {
        url: String
    }
}
</script>>

