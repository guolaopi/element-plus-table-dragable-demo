<template>
    <h2>Try to drag the row or column's header.</h2>
    <el-table
        height="500"
        key="id"
        border
        v-dragable="dragOptions"
        :data="data"
    >
        <el-table-column
            v-for="item in columns"
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
        />
    </el-table>
</template>

<script setup>
import { vDragable } from "element-plus-table-dragable";
import { ElMessage } from "element-plus";
import { ref } from "vue";

const dragOptions = [
    {
        selector: "thead tr", // add drag support for column
        option: {
            // sortablejs's option
            animation: 150,
            onEnd: (evt) => {
                let oldCol = {};
                Object.assign(oldCol, columns.value[evt.oldIndex]);
                columns.value.splice(evt.oldIndex, 1); // 因为新增了数据，所以要移除原来的列的index要在原来的基础上
                setTimeout(() => {
                    columns.value.splice(evt.newIndex, 0, oldCol); // 把原来的列数据添加到新的位置，然后再从原位置移除它，触发table的重绘
                }, 30);
                console.log(evt.oldIndex, evt.newIndex);
            },
        },
    },
    {
        selector: "tbody", // add drag support for row
        option: {
            // sortablejs's option
            animation: 150,
            onEnd: (evt) => {
                ElMessage.success(
                    `Drag the ${evt.oldIndex}th row to ${evt.newIndex}`
                );
                // console.log(evt.oldIndex, evt.newIndex);
            },
        },
    },
];

const columns = ref([
    { prop: "id", label: "ID" },
    { prop: "name", label: "Name" },
    { prop: "sex", label: "Sex" },
]);

const data = ref([
    { id: 1, name: "UserA", sex: "Male" },
    { id: 2, name: "UserB", sex: "Female" },
    { id: 3, name: "UserC", sex: "Male" },
    { id: 4, name: "UserD", sex: "Male" },
    { id: 5, name: "UserE", sex: "Female" },
    { id: 6, name: "UserF", sex: "Male" },
    { id: 7, name: "UserG", sex: "Male" },
    { id: 8, name: "UserH", sex: "Female" },
    { id: 9, name: "UserI", sex: "Female" },
]);
</script> 