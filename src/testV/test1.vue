<template>
<div>
   <div ref="div1">{{items.length}}</div>
   <div ref="div2" >{{count}}</div>
   <div id="div3" v-if="bol">这是div3</div>
   <button @click="count++">点我数据count+1</button>
   <button @click="bol=!bol">点我删除div3</button>
</div>
</template>

<script>
export default {
    data(){
        return {
            items:[],
            count:0,
            bol: true
        };
    },
    beforeCreate(){  //这是发生在实例创建之后，数据注入之前
        console.log("beforeCreate",this.items);
    },
    created() {  //这是发生在注入数据之后，生成虚拟dom之前
        console.log("created",this.items)
    },
    beforeMount() {   //这是生成虚拟dom之后，渲染真实dom之前
        console.log("beforeMount",this.$refs.div1);
    },
    mounted() {//这是发生在渲染真实dom之后
        console.log("mounted", this.$refs.div1);
        this.items = [1,2,3];  //改了这个数据后，就会执行beforeUpdate和updated这两个函数
    },
    beforeUpdate() {  //这是发生在数据变动之前
        console.log("beforeUpdate",this.$refs.div2.innerText);
    },
    updated(){  //这是发生在数据变动之后
        console.log("update", this.$refs.div2.innerText);
    },
    beforeDestroy(){  //这是发生在组件销毁之前
        console.log("beforeDestroy");
    },
    destroyed(){
        console.log("destroyed");
    }
}
</script>

<style>

</style>