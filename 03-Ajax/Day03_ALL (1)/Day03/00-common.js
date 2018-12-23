/**
 * 根据ID获取页面上的元素
 */
function $(id){
	return document.getElementById(id);
}
/**
 * 创建 AJAX 的核心对象 XMLHttpRequest
 */
function createXhr(){
	var xhr;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}












