var submit= document.getElementById('submit')

var fullName = document.getElementById('fn')
var age = document.getElementById('age')
var number = document.getElementById('number')
var cnic = document.getElementById('cnic')
var rollno = 1001
// console.log(typeof fullName);
count=0 
var showCount = document.getElementById('countno')
var showRoll = document.getElementById('show-roll')
var showName = document.getElementById('show-name')
var showAge = document.getElementById('show-age')
var showPhone = document.getElementById('show-ph')
var showCNIC = document.getElementById('show-cnic')
var dlt = document.getElementById('dlt')
submit.addEventListener('click',()=>{
    if (fullName.value !='' && age.value !='' &&cnic.value !='' &&number.value !='') {
        
        showCount.innerHTML+= `<h4>${++count}</h4>`
        showRoll.innerHTML+= `<h4>${rollno++}</h4>`
        showName.innerHTML+= `<h4>${fullName.value}</h4>`
        showAge.innerHTML+= `<h4>${age.value}</h4>`
        showPhone.innerHTML+= `<h4>${number.value}</h4>`
        showCNIC.innerHTML+= `<h4>${cnic.value}</h4>`
        // dlt.innerHTML+= `<h3 id="dltbtn"><button><i class="fa-solid fa-delete-left"></i></button></h3>`
        // var coulom = document.getElementsByClassName('coulom')
    }else{
        alert('Please Fill The Form First')
    }
    fullName.value=''
    age.value=''
    number.value=''
    cnic.value=''
})
// var dltbtn = document.getElementById('dltbtn')
// dltbtn.addEventListener('click',{
//     alert('ok')
// })



