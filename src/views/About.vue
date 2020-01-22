<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  mounted(){
    var oReq = new XMLHttpRequest();
    oReq.onload=function(){
      alert("123");
      alert(this.responseText);
    }
    oReq.open("GET", "/about");
    alert("send");
    oReq.send();
    
  }
}
</script>
