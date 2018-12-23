var iterator = document.createNodeIterator(document.body,NodeFilter.SHOW_ELEMENT,null,false);
do{
    var node=iterator.nextNode()
    if(node!=null)
        console.log(node.nodeName)
    else break
}while(true)
