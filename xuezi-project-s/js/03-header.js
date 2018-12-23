(function(){
    ajax("get","03-header.html","","text").then(
        html=> {
            document.getElementById("header").innerHTML = html;
            (()=>{
                var topInput = document.getElementById("top-input")
                topInput.getElementsByClassName("search-img")[0].onclick = () => {
                var elem = document.getElementById("txtSearch")
                var kw = elem.value
                    console.log(kw)
                if (kw.trim().length !== 0){
                    var url = "http://localhost/xuezi-project-s/04-products.html?kw=" + kw
                    location = url
                }else{
                    var url = "http://localhost/xuezi-project-s/04-products.html"
                    location = url
                }}}
            )()

            window.addEventListener("scroll",function(){
                var sorollTop = document.body.scrollTop||document.documentElement.scrollTop
                document.querySelector("#header-top").className = sorollTop >= 300 ? "clear fixed_nav":"clear"
            })
        })
})();
