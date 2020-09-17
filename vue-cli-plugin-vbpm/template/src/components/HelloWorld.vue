<!--
 * @Descripttion: 重写helloworld组件
 * @Author: 王月
 * @Date: 2020-09-16 14:29:05
 * @LastEditors: 王月
 * @LastEditTime: 2020-09-17 13:10:55
-->
<%# REPLACE %>
<template>
    <div class="hello">
        <h1>Welcome to JK-CLI</h1>
        <p>{{ msg }}</p>
    </div>
</template>
<%# END_REPLACE %>

<%# REPLACE %>
<script>
import {getCoachList} from '../api';
import { testData } from '../json';
export default {
    props: ['msg'],
    data() {
        return {
            data: testData
        }
    },
    created() {
        console.log(getCoachList);
        console.log(this.data);
    }
}
</script>>
<%# END_REPLACE %>