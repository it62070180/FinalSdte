# FinalSdte
### UserFlow-FinalSdte DTAC ลงทะเบียน
* Link:https://drive.google.com/file/d/1fOTfA9lwJW_MNTISbNDyaNsCoEOB0dEZ/view
* image
![](https://i.imgur.com/O1KMvq6.png)

<br> Trello
* Link:https://trello.com/b/JkHrkp3r/finalsdte

1. เลือกประเภทของวัคซีน ได้แก่
    - เข็ม 3 อายุ 12-18ปี
    - เข็ม 3 
    - เข็ม 4
2. กรอกข้อมูลเบื้องต้น
3. ยืนยันข้อมูล
4. ยืนยันวันฉีด


# Commit message 
### System : description <br/> 
ใช้เวลาเพิ่ม package.json 
### feature name : description <br/>
ใช้เวลาเพิ่มเติมหรือกำลังทำใน Feature ไหนๆ
### fix : [description] <br/>
ใช้เวลาแก้ไขงานต่างๆใน feature ต่างๆ <br/>
## กรณีCommitมาเยอะ 
กรณีCommitมาเยอะ ให้ใช้ `;` เพื่อเป็นการเพิ่มเติมสิ่งต่างๆใน commitนั้นๆ <br/>
ตัวอย่าง System: description `;` feature [name]: description `;` fix[name]: description

# Acceptance test
| Case No. | Case Name| Case Description | Steps | Input | Expected result| Actual result |
|----------|-----------------------|:----------------------------------------:|-------|----------------------------|-----------------------------------------------|--------------------------------------------------------------| 
| 1 | ลงทะเบียน เข็ม 4|  กรอกข้อมูลผู้ใช้ | <ul><li>กรอกชื่อในช่อง “ชื่อ-นามสกุล”</li><li>กรอกวันที่ฉีดเข็ม3</li><li>ยืนยันข้อมูล</li><li>ยืนยันวันที่ฉีดเข็ม 4</li></ul> | "สำเร็จ" | แสดงผลลัพธ์เป็นวันที่จะได้รับการฉีดเข็ม 4 | แสดงผลลัพธ์เป็นวันที่จะได้รับการฉีดเข็ม 4 ได้ตามคาดหวังไว้ |
| 2 | ลงทะเบียน เข็ม 3 | กรอกไม่ได้เพราะฉีดเข็ม 3 ไปแล้ว | ไม่ไปต่อ | - | กลับมาหน้าหลัก | กลับมาหน้าหลักได้ตามคาดหวังไว้ |


#วิธีการ RUN ผ่าน Docker
1. git clone https://github.com/it62070180/FinalSdte.git
2. docker-compose -f docker-compose-build.yml build
3. docker-compose -f docker-compose-deploy.yml up 
4. เปิด localhost:8085 ใน browser

