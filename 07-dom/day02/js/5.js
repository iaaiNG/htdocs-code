(()=>{
    var form = document.getElementById("form1")
    var txtName = form.querySelector("#form1 [name=username]")
    var txtPwd = form.querySelector("#form1 [name=pwd]")
    txtName.onfocus = txtPwd.onfocus =function(){
        this.className = "txt_focus"
        var div = this.parentNode.parentElement.children[2].firstElementChild
        div.className = ""
    }
    txtName.onblur =function(){
        vali(this,/^\w{10}$/)
    }
    txtPwd.onblur =function(){
        vali(this,/^\d{6}$/)
    }
    function vali(txt,re){
        txt.className=""
        var div = txt.parentNode.parentElement.children[2].firstElementChild
        console.log(re.test(txt.value))
        if(re.test(txt.value)){
            div.className="vali_success"
        }else
            div.className="vali_fail"
    }
})()