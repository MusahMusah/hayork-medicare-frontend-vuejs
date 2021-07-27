<template>
  <div>
    <footer class="footer">
          <div class="container-fluid">
            <div class="row">
              <div class="text-center col-md-12 footer-copyright">
                <p class="mb-0">Copyright 2021 @Hayok Medicare. </p>
              </div>
            </div>
          </div>
        </footer>
  </div>
</template>

<script>
  import json from '../data/menu'
export default {
  name: 'footerpage',
  data(){
    return{
      customizer :false,
      data:"data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json)),
    }
  }
}
</script>
