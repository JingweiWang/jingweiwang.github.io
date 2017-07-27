var jiance = function(){
	if(login_check()){
		alert("用户名密码验证通过，可以登录" + "\n" 
		+ "用户名：" + document.getElementById("username").value + "\n" 
		+ "密码：" + document.getElementById("password").value);
	}
}

var login_check = function(){
	if(document.getElementById('username').value == "")
	{	
		alert("username为空,请重新输入。");
		return false; 
	}//空学号保护
	if(/[\^@\,&\=\*\'\"]+/g.test(document.getElementById('username').value))
	{	
		alert("username包含 ^ @ , & = * ' \"等非法字符,请重新输入。");
		return false; 
	}//非法字符保护
	if(!/^(Y|y)?\d{8}$/g.test(document.getElementById('username').value))
	{	
		alert("学号格式有误,请重新输入。");
		return false; 
	}//学号匹配
	if(!/^\d{5,10}$/g.test(document.getElementById('password').value))
	{	
		alert("密码格式有误,请重新输入。");
		return false; 
	}//密码匹配
	
	name = document.getElementById('username').value;
	return true;
}

var login = function(){
	if(login_check()){
		removeElement(document.getElementById('login'));
		document.getElementById('login_ok').innerHTML = '登录成功,可以留言。';
		document.getElementById('user').value = name;
		var b = document.getElementById('addMsg');
		b.disabled = !b.disabled;
	}
}

var removeElement = function(_element){
	var _parentElement = _element.parentNode;
	if(_parentElement){
		_parentElement.removeChild(_element);
	}
}
