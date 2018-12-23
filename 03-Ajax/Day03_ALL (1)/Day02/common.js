function $(id){
	return document.getElementById(id);
}

/**
 * 封装 创建 xhr 的过程
 * 返回值 ：创建好的 xhr 对象
 */
function createXhr(){
	var xhr;
	//判断浏览器是否支持XMLHttpRequest
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}