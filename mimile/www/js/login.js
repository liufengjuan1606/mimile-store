$(function(){
	function arrsearch(value, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (value == arr[i]) {
                return i;
            }
        }
        return false;
    }

    function arrsearch1(value, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (value == arr[i]) {
                return true;
            }
        }
        return false;
    }
    $(".login-enter i").on("click",function(){
     	var userinfo = getCookie('usermore');
        var userarr = userinfo.split(',');
        if(arrsearch1($('#login-txt').val(), userarr)){
            var index= arrsearch($('#login-txt').val(), userarr);
            if($('#login-txt-psw').val() !=userarr[index+1]){
                alert('密码错误');
            }else{
                addCookie('user1',$('#login-txt').val(),7);
                addCookie('pass1',$('#login-txt-psw').val(),7);
                window.location = "../index.html";
            }
        }else{
            alert('用户名不存在');
        }
    })
})