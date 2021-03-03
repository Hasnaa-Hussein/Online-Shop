var myServer = new XMLHttpRequest();
myServer.open("GET","https://gist.githubusercontent.com/a7med-hussien/7fc3e1cba6abf92460d69c0437ce8460/raw/da46abcedf99a3d2bef93a322641926ff60db3c3/products.json");
myServer.send();

myServer.onreadystatechange=function(){
	//console.log(myServer.readyState);
	if(myServer.readyState == 4){
		var data = JSON.parse(this.responseText);
		for (var i = 0; i < data.ProductCollection.length; i++) {
			var singleProduct = data.ProductCollection[i];
			/*console.log(singleProduct.Name);
			console.log(data.ProductCollection[i]);
*/

		var UlElement = document.createElement("ul");
			UlElement.classList.add('products', 'column-3');

			var LiElement = document.createElement("li");
			LiElement.classList.add('product');

			var DivElement = document.createElement("div");
			DivElement.classList.add('product-outer');

			var DivElem = document.createElement("div");
			DivElem.classList.add('product-inner');

			var AElement = document.createElement("a");
			AElement.url=singleProduct.ProductPicUrl;

			var H3Element = document.createElement("h3");
			var HText = document.createTextNode(singleProduct.Name);

			var ImgElement = document.createElement("img");
			DivElement.classList.add('im');
			ImgElement.src=singleProduct.ProductPicUrl;
			ImgElement.alt=singleProduct.Name;

			var DivEl = document.createElement("div");
			DivEl.classList.add('price-add-to-cart');

			var SpanElement = document.createElement("span");
			SpanElement.classList.add('price');

			var InsElement = document.createElement("ins");
			var InsText = document.createTextNode(singleProduct.UoM);

			InsElement.appendChild(InsText);
			SpanElement.appendChild(InsElement);
			DivEl.appendChild(SpanElement);
			H3Element.appendChild(HText);
			AElement.appendChild(H3Element);
			AElement.appendChild(ImgElement);
			DivElem.appendChild(DivEl);
			DivElem.appendChild(AElement);
			DivElement.appendChild(DivElem);
			LiElement.appendChild(DivElement);
			UlElement.appendChild(LiElement);
			document.body.appendChild(LiElement);
			

		}
	}
};
