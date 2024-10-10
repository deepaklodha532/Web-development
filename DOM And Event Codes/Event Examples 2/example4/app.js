let x = document.getElementById("mypic");
x.onmouseover = () => {
	//x.setAttribute("src", "../joe_blink.jpg");
	x.src = "../joe_blink.jpg";
	x.width="500";
	x.height="500";
};

x.onmouseout = () => {
	//x.setAttribute("src", "../joe_open.jpg");
	x.src = "../joe_open.jpg";
};
