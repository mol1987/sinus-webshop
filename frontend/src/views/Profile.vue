<template>
    <div class="profile">
        <header><h1>{{}} profile</h1></header>
        <aside>
            dsfg
        </aside>
        <body>
            sdfgf
        </body>
        <footer>
            dfg
        </footer>
    </div>
</template>

<script>
export default {
    name: "Profile"
}
</script>

<style lang="scss" scoped>
.profile {
    width: 100%;
    display: grid;
    grid-template-areas:
        'header header header header'
        'aside body body body'
        'aside body body body'
        'aside body body body'
        'footer footer footer footer';
}
header {
    grid-area: header;
    background-color: lightgreen;
    padding: 10% 0;
}
aside {
    grid-area: aside;
    background-color: orange;
}
body {
    grid-area: body;
    background-color: lightblue;
    height: 80%;
    padding: 80% 0;
}
footer {
    grid-area: footer;
    background-color: hotpink;
    height: 20%;
    padding: 10% 0;
}
</style>