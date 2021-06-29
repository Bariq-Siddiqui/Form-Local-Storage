var btndis=document.getElementById("disable");
function storeData(){
    function CheckData(name,fname,address,email,phoneno){
        this.name=name;
        this.fname=fname;
        this.address=address;
        this.email=email;
        this.phoneno=phoneno;
    }
    var name=document.record.name.value;
    var fname=document.record.fname.value;
    var address=document.record.address.value;
    var email=document.record.email.value;
    var phoneno=document.record.phoneno.value;
    var checkData=new CheckData(name,fname,address,email,phoneno)
    // console.log(checkData1)
    localStorage.setItem("checkData1",JSON.stringify(checkData))
    btndis.disabled = false;
}
function checkData(){
    // button remove
    var btn=document.createElement("button");
    var txtBtn=document.createTextNode("Remove Storage")
    btn.appendChild(txtBtn)
    btn.setAttribute("onclick","remove(this)")
    var btnRemove=document.getElementById("btnRemove")
    btnRemove.appendChild(btn)
    var getItem = JSON.parse(localStorage.getItem('checkData1'));
    // console.log(getItem);
    document.getElementById("pushItem").style.display="block";
    var stdNname=document.getElementById("stdName");
    var stdFname=document.getElementById("stdFname");
    var stdAddress=document.getElementById("stdAddress");
    var stdEmail=document.getElementById("stdEmail");
    var stdPhone=document.getElementById("stdPhone");
    stdNname.innerText=getItem.name;
    stdFname.innerText=getItem.fname;
    stdAddress.innerText=getItem.address;
    stdEmail.innerText=getItem.email;
    stdPhone.innerText=getItem.phoneno;
}
function remove(e){
    localStorage.clear()
    document.getElementById("pushItem").style.display="none";
    btndis.disabled = true;
}