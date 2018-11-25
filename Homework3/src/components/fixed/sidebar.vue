<template>
<Menu :style="{background: '#fff', height: '100%'}" active-name="0" theme="light" width="auto">
<router-link to="/">
<MenuItem name="0" style="margin-left:0%">
<Icon type="ios-navigate"></Icon>
  Homepage
</MenuItem>
</router-link>
<router-link to="/important">
<MenuItem name="1" style="margin-left:0%">
<Icon type="ios-star"></Icon>
Important
</MenuItem>
</router-link>
</Menu>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>
