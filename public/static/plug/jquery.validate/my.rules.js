$(function(){
	// QQ号码验证   
	jQuery.validator.addMethod("qq", function (value, element) {
	    var tel = /^[1-9]\d{4,9}$/;
	    return this.optional(element) || (tel.test(value));
	}, " qq号码格式错误");
	
	
	// 字母和数字的验证
	jQuery.validator.addMethod("chrnum", function (value, element) {
	    var chrnum = /^([a-zA-Z0-9]+)$/;
	    return this.optional(element) || (chrnum.test(value));
	}, " 只能输入数字和字母(字符A-Z, a-z, 0-9)");
	
	
	// 中文的验证
	jQuery.validator.addMethod("chinese", function (value, element) {
	    var chinese = /^[\u4e00-\u9fa5]+$/;
	    return this.optional(element) || (chinese.test(value));
	}, " 只能输入中文");
	
	
	// 下拉框验证 
	$.validator.addMethod("selectNone", function(value, element) { 
		return value == "-1"; 
	}, "必须选择一项");
		
	// 字节长度验证
	jQuery.validator.addMethod("byteRangeLength", function (value, element, param) {
	    var length = value.length;
	    for (var i = 0; i < value.length; i++) {
	        if (value.charCodeAt(i) > 127) {
	            length++;
	        }
	    }
	    return this.optional(element) || (length >= param[0] && length <= param[1]);
	}, $.validator.format("请确保输入的值在{0}-{1}个字节之间(一个中文字算2个字节)"));
	

	// 字符验证   
	jQuery.validator.addMethod("stringCheck", function (value, element) {
	    return this.optional(element) || /^[\u0391-\uFFE5\w]+$/.test(value);
	}, " 只能包括中文字、英文字母、数字和下划线");
	
	// 中文字两个字节   
	jQuery.validator.addMethod("byteRangeLength", function (value, element, param) {
	    var length = value.length;
	    for (var i = 0; i < value.length; i++) {
	        if (value.charCodeAt(i) > 127) {
	            length++;
	        }
	    }
	    return this.optional(element) || (length >= param[0] && length <= param[1]);
	}, " 请确保输入的值在3-15个字节之间(一个中文字算2个字节)");
	
	
	// 电话号码验证   
	jQuery.validator.addMethod("isTel", function (value, element) {
	    var tel = /^\d{3,4}-?\d{7,9}$/; //电话号码格式010-12345678   
	    return this.optional(element) || (tel.test(value));
	}, " 请正确填写您的电话号码");
	
	// 联系电话(手机/电话皆可)验证   
	jQuery.validator.addMethod("isPhone", function (value, element) {
	    var length = value.length;
	    var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
	    var tel = /^\d{3,4}-?\d{7,9}$/;
	    return this.optional(element) || (tel.test(value) || mobile.test(value));
	
	}, " 请正确填写您的联系电话");
	
	// 邮政编码验证   
	jQuery.validator.addMethod("isZipCode", function (value, element) {
	    var tel = /^[0-9]{6}$/;
	    return this.optional(element) || (tel.test(value));
	}, " 请正确填写您的邮政编码");
    // 判断整数value是否等于0 
    jQuery.validator.addMethod("isIntEqZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value==0;       
    }, "整数必须为0"); 
      
    // 判断整数value是否大于0
    jQuery.validator.addMethod("isIntGtZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value>0;       
    }, "整数必须大于0"); 
      
    // 判断整数value是否大于或等于0
    jQuery.validator.addMethod("isIntGteZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value>=0;       
    }, "整数必须大于或等于0");   
    
    // 判断整数value是否不等于0 
    jQuery.validator.addMethod("isIntNEqZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value!=0;       
    }, "整数必须不等于0");  
    
    // 判断整数value是否小于0 
    jQuery.validator.addMethod("isIntLtZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value<0;       
    }, "整数必须小于0");  
    
    // 判断整数value是否小于或等于0 
    jQuery.validator.addMethod("isIntLteZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value<=0;       
    }, "整数必须小于或等于0");  
    
    // 判断浮点数value是否等于0 
    jQuery.validator.addMethod("isFloatEqZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value==0;       
    }, "浮点数必须为0"); 
      
    // 判断浮点数value是否大于0
    jQuery.validator.addMethod("isFloatGtZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value>0;       
    }, "浮点数必须大于0"); 
      
    // 判断浮点数value是否大于或等于0
    jQuery.validator.addMethod("isFloatGteZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value>=0;       
    }, "浮点数必须大于或等于0");   
    
    // 判断浮点数value是否不等于0 
    jQuery.validator.addMethod("isFloatNEqZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value!=0;       
    }, "浮点数必须不等于0");  
    
    // 判断浮点数value是否小于0 
    jQuery.validator.addMethod("isFloatLtZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value<0;       
    }, "浮点数必须小于0");  
    
    // 判断浮点数value是否小于或等于0 
    jQuery.validator.addMethod("isFloatLteZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value<=0;       
    }, "浮点数必须小于或等于0");  
    
    // 判断浮点型  
    jQuery.validator.addMethod("isFloat", function(value, element) {       
         return this.optional(element) || /^[-\+]?\d+(\.\d+)?$/.test(value);       
    }, "只能包含数字、小数点等字符"); 
     
    // 匹配integer
    jQuery.validator.addMethod("isInteger", function(value, element) {       
         return this.optional(element) || (/^[-\+]?\d+$/.test(value) && parseInt(value)>=0);       
    }, "匹配integer");  
     
    // 判断数值类型，包括整数和浮点数
    jQuery.validator.addMethod("isNumber", function(value, element) {       
         return this.optional(element) || /^[-\+]?\d+$/.test(value) || /^[-\+]?\d+(\.\d+)?$/.test(value);       
    }, "匹配数值类型，包括整数和浮点数");  
    
    // 只能输入[0-9]数字
    jQuery.validator.addMethod("isDigits", function(value, element) {       
         return this.optional(element) || /^\d+$/.test(value);       
    }, "只能输入0-9数字");  
    
    // 判断中文字符 
    jQuery.validator.addMethod("isChinese", function(value, element) {       
         return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);       
    }, "只能包含中文字符。");   
 
    // 判断英文字符 
    jQuery.validator.addMethod("isEnglish", function(value, element) {       
         return this.optional(element) || /^[A-Za-z]+$/.test(value);       
    }, "只能包含英文字符。");   
 
     // 手机号码验证    
    jQuery.validator.addMethod("isMobile", function(value, element) {    
      var length = value.length;    
      return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));    
    }, "请正确填写您的手机号码。");

    // 电话号码验证    
    jQuery.validator.addMethod("isPhone", function(value, element) {    
      var tel = /^(\d{3,4}-?)?\d{7,9}$/g;    
      return this.optional(element) || (tel.test(value));    
    }, "请正确填写您的电话号码。");

    // 联系电话(手机/电话皆可)验证   
    jQuery.validator.addMethod("isTel", function(value,element) {   
        var length = value.length;   
        var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;   
        var tel = /^(\d{3,4}-?)?\d{7,9}$/g;       
        return this.optional(element) || tel.test(value) || (length==11 && mobile.test(value));   
    }, "请正确填写您的联系方式"); 
 
 
     // 邮政编码验证    
    jQuery.validator.addMethod("isZipCode", function(value, element) {    
      var zip = /^[0-9]{6}$/;    
      return this.optional(element) || (zip.test(value));    
    }, "请正确填写您的邮政编码。");  
    
    // 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。      
    jQuery.validator.addMethod("isPwd", function(value, element) {       
         return this.optional(element) || /^[a-zA-Z]\\w{6,12}$/.test(value);       
    }, "以字母开头，长度在6-12之间，只能包含字符、数字和下划线。");  
    
    // 身份证号码验证
    jQuery.validator.addMethod("isIdCardNo", function(value, element) { 
      //var idCard = /^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/;   
      return this.optional(element) || isIdCardNo(value);    
    }, "请输入正确的身份证号码。"); 
	
	 // 判断是否为合法字符(a-zA-Z0-9-_)
    jQuery.validator.addMethod("isPassword", function(value, element) {       
         return this.optional(element) || /^[A-Za-z0-9_-]{6,12}$/.test(value);       
    }, "长度在6-12之间，只能包含字符、数字和下划线。");
    
    // IP地址验证   
    jQuery.validator.addMethod("ip", function(value, element) {    
      return this.optional(element) || /^(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.)(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.){2}([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))$/.test(value);    
    }, "请填写正确的IP地址。");
    
   
    // 匹配english  
    jQuery.validator.addMethod("isEnglish", function(value, element) {       
         return this.optional(element) || /^[A-Za-z]+$/.test(value);       
    }, "匹配english");   
    
    // 匹配汉字  
    jQuery.validator.addMethod("isChinese", function(value, element) {       
         return this.optional(element) || /^[\u4e00-\u9fa5]+$/.test(value);       
    }, "匹配汉字");   
    
    // 匹配中文(包括汉字和字符) 
    jQuery.validator.addMethod("isChineseChar", function(value, element) {       
         return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);       
    }, "匹配中文(包括汉字和字符) "); 
      
    // 判断是否包含中英文特殊字符，除英文"-_"字符外
    jQuery.validator.addMethod("isContainsSpecialChar", function(value, element) {  
         var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);   
         return this.optional(element) || !reg.test(value);       
    }, "含有中英文特殊字符");

});
//身份证号码的验证规则
function isIdCardNo(num){ 
    　　 var len = num.length,re; 
    　　 if (len == 15) 
    　　 	re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/); 
    　　 else if (len == 18) 
    　　 	re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/); 
    　　 else {
            //alert("输入的数字位数不对。"); 
            return false;
        } 
    　　 var a = num.match(re); 
    　　 if (a != null) 
    　　 { 
    　　 if (len==15) 
    　　 { 
    　　 var D = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]); 
    　　 var B = D.getYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
    　　 } 
    　　 else 
    　　 { 
    　　 var D = new Date(a[3]+"/"+a[4]+"/"+a[5]); 
    　　 var B = D.getFullYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
    　　 } 
    　　 if (!B) {
            //alert("输入的身份证号 "+ a[0] +" 里出生日期不对。"); 
            return false;
        } 
    　　 } 
    　　 if(!re.test(num)){
            //alert("身份证最后一位只能是数字和字母。");
            return false;
        }
    　　 return true; 
    }
//车牌号校验
function isPlateNo(plateNo){
    var re = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/;
    if(re.test(plateNo)){
        return true;
    }
    return false;
}


////开始验证
//$('#submitForm').validate({
//    /* 设置验证规则 */
//    rules: {
//        username: {
//            required: true,
//            stringCheck: true,
//            byteRangeLength: [3, 15]
//        },
//        email: {
//            required: true,
//            email: true
//        },
//        phone: {
//            required: true,
//            isPhone: true
//        },
//        address: {
//            required: true,
//            stringCheck: true,
//            byteRangeLength: [3, 100]
//        }
//    },

//    /* 设置错误信息 */
//    messages: {
//        username: {
//            required: "请填写用户名",
//            stringCheck: "用户名只能包括中文字、英文字母、数字和下划线",
//            byteRangeLength: "用户名必须在3-15个字符之间(一个中文字算2个字符)"
//        },
//        email: {
//            required: "请输入一个Email地址",
//            email: "请输入一个有效的Email地址"
//        },
//        phone: {
//            required: "请输入您的联系电话",
//            isPhone: "请输入一个有效的联系电话"
//        },
//        address: {
//            required: "请输入您的联系地址",
//            stringCheck: "请正确输入您的联系地址",
//            byteRangeLength: "请详实您的联系地址以便于我们联系您"
//        }
//    }
//});