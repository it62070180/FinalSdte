<template>
  <div class="container-fluid">
     <img alt="banner" src="../assets/WebBanner.jpg">
    <div class="container">
      <header style="display:flex;justify-content: center;"  >
        <h3> ดีแทค เปิดลงทะเบียน <br class="d-block d-md-none"> รับการฉีดวัคซีนโควิด-19</h3>
        </header>
        <div class="m-5">
          <h4>เลือกศูนย์ฉีดวัคซีนโควิด-19</h4>
        </div>
        <div class="row">
          <div class="col-7">
            <p style="color:#108bde">กระตุ้นเข็มที่ 3 (12-18ปี)</p>
            <p>สำหรับคนไทยและต่างชาติ<b> อายุตั้งแต่ 12-18 ปี </b> <br>
            ที่ต้องการฉีดวัคซีนกระตุ้นเข็มที่ 3 ด้วยวัคซีนไฟเซอร์ <br>
            <b>โดยได้รับเข็มที่ 2 มาแล้วอย่างน้อย 120 วัน <br>
            เริ่มฉีด 1 - 31 พ.ค. 65 </b><br>
            ฉีดที่ ศูนย์ฉีดวัคซีนกลางบางซื่อ<br> (สถานีกลางบางซื่อ ประตู 2 โดยเข้าทาง ถ.กำแพงเพชร)</p>
          </div>
           <div class="col-4" style="display:flex;justify-content: center;">
              <button type="button" class="btn btn-link" @click="searchLocation()">ลงทะเบียนฉีด กระตุ้นเข็มที่ 3 (12-18ปี)</button>
            </div>
          </div>
           
          </div>
        <div class="row">
           <div class="col-7">
         <p style="color:#e07516"> กระตุ้นเข็มที่ 3 </p>
           <p>สำหรับคนไทยและต่างชาติ อายุ 18 ปีขึ้นไป<br>
          ที่ต้องการฉีดวัคซีนกระตุ้นเข็มที่ 3 ด้วยวัคซีนไฟเซอร์<br>
          <b>โดยได้รับเข็มที่ 2 มาแล้วอย่างน้อย 90 วัน<br>
          เริ่มฉีด 1 - 31 พ.ค. 65 </b><br>
          ฉีดที่ ศูนย์ฉีดวัคซีนกลางบางซื่อ<br> (สถานีกลางบางซื่อ ประตู 2 โดยเข้าทาง ถ.กำแพงเพชร)</p>
            </div>
            <div class="col-4" style="display:flex;justify-content: center;">
               <button type="button" class="btn btn-link" @click="searchLocation()">ลงทะเบียน</button>
           </div>
        </div>
        <div class="row">
          <div class="col-7">
          <p style="color:#af15d1"> กระตุ้นเข็มที่ 4 </p>
          <p>สำหรับคนไทยและต่างชาติ อายุ 18 ปีขึ้นไป<br>
          ที่ต้องการฉีดวัคซีนกระตุ้นเข็มที่ 4 ด้วยวัคซีนไฟเซอร์<br>
          <b>โดยได้รับเข็มที่ 3 มาแล้วอย่างน้อย 120 วัน<br>
          เริ่มฉีด 1 - 31 พ.ค. 65 </b><br>
          ฉีดที่ ศูนย์ฉีดวัคซีนกลางบางซื่อ<br> (สถานีกลางบางซื่อ ประตู 2 โดยเข้าทาง ถ.กำแพงเพชร)</p>
          </div>
          <div class="col-4" style="display:flex;justify-content: center;">
               <button type="button" class="btn btn-link" @click="searchLocation()">ลงทะเบียน</button>
           </div>
        </div>
        <div style="display:flex;justify-content: center;" >
           <h3>ตรวจสอบการลงทะเบียน / QR Code </h3>
        </div>
        <div style="display:flex;justify-content: center;" >
          
            <button type="button" class="btn btn-primary" >ตรวจสอบ</button>
        </div>

        
  </div>
</template>

<script>
export default {
  name:'main',
  data(){

  },
    methods:{
            searchLocation(){
              this.$router.push({ path: '/regis' });
            }
        }
}
</script>