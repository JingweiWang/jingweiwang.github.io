// 加载留言信息
var loadMsg = function()
{
	var tb = document.getElementById("show");
	// 清空原来显示的内容。
    tb.innerHTML = "";
	// 遍历所有留言信息
	for(var i = 0 ; i < localStorage.length ; i++)
	{
		var key = localStorage.key(i);
		var date = new Date();
		date.setTime(key);
		// 获取留言时间
		var datestr = date.toLocaleDateString()
			+ "&nbsp;" + date.toLocaleTimeString();
		// 获取留言字符串
		var msgStr = localStorage.getItem(key);
		// 把留言字符串转换成JavaScript对象
		var msg = JSON.parse(msgStr);
		var row = tb.insertRow(i);
		// 添加第一个单元格，并显示留言内容
		row.insertCell(0).innerHTML = msg.title;
		// 添加第二个单元格，并显示留言内容
		row.insertCell(1).innerHTML = msg.content;
		// 添加第三个单元格，并显示留言内容
		row.insertCell(2).innerHTML = msg.like;
		// 添加第四个单元格，并显示留言内容
		row.insertCell(3).innerHTML = msg.user;
		// 添加第五个单元格，并显示留言内容。
		row.insertCell(4).innerHTML = datestr;
	}
}
var addMsgFunc = function()
{
	var titleElement = document.getElementById("title");
	var contentElement = document.getElementById("content");
	var userElement = document.getElementById("user");
	var likeElement = document.getElementById("msg").like;
	// 将留言标题、留言内容、留言用户封装成对象
	var msg = {
		title: titleElement.value,
		content: contentElement.value,
		like: likeElement.value,
		user: userElement.value
	};
	var time = new Date().getTime();
	// 以当前时间为key来保存留言信息
	localStorage.setItem(time , JSON.stringify(msg));
	titleElement.value = "";
	contentElement.value = "";
	alert("数据已保存。");
	loadMsg();
}
function clearMsg()
{
	// 清空Local Storage里保存的数据。
	localStorage.clear();
	alert("全部留言信息已被清除。");
	loadMsg();
}