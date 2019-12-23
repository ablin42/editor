$(document).ready(function(){
    window.myCodeMirror = CodeMirror.fromTextArea(document.getElementById("editor"), {
        lineNumbers: true,
        indentUnit: 4,
        indentWithTabs: true,
        lineWrapping: true,
        autofocus: true,
        scrollbarStyle: null,
        mode: 'javascript',
        theme: "ayu-mirage",
    });

    window.myCodeMirror.on('change', editor => {
        document.getElementById('viewer').srcdoc = window.myCodeMirror.getValue(); //get value from editor
    });
    //window.myCodeMirror.on('keyup', editor => {   
    //});

    const code=`
    <!DOCTYPE HTML>
    <style>
        #balloon {
            width:200px;
            height:200px;
            border-radius: 100%;
            background-color: rgb(3, 206, 165);
            display: inline-block;
			margin: 100px 50% 0 50%;
			transform: translate(-50%, 0);
			transition: ease-in-out 0.1s;
        }
		html {height: 100%;}
        body {
            //background-color: rgba(31, 31, 31, 1);
			height: 100%;
            text-align: center;
			font-family: "Courier New", Courier;
        }
        h1 {color: rgb(251, 77, 6); font-size: 3.5em;}
		h4 {margin-top: -2.5em}
    </style>
    <body>
        <h1>POP THE BALLOON</h1>
		<h4>this is just a demo</h4>
        <div id="balloon" onclick="changeStyle(this)" onmouseout="revertStyle(this)"></div>
            <!-- 		
            green:[rgb(52,172,224), #FB4D3D] 251, 77, 6
            blue: [rgb(112,111,211), #CA1551] 202, 21, 81
            red: [rgb(255,121,63), #03CEA4] 3, 206, 165
        -->
        <script>
            function changeStyle(obj)
            {
                const style = window.getComputedStyle(obj);
                const h = parseInt(style.height);
                const w = parseInt(style.width);
                if (style.backgroundColor === "rgb(3, 206, 165)") 
                    obj.style.backgroundColor = "rgb(251, 77, 6)";
                else if (style.backgroundColor === "rgb(251, 77, 6)")
                    obj.style.background = "rgb(202, 21, 81)";
                else
                    obj.style.background = "rgb(3, 206, 165)";
                obj.style.width = (w + 10) + "px";
                obj.style.height = (h + 10) + "px";
                if (h >= 420)
                {
                    obj.style.width = 200 + "px";
                    obj.style.height = 200 + "px";
                }
            }
            function revertStyle(obj)
            {
                const style = window.getComputedStyle(obj);
                const h = parseInt(style.height);
                const w = parseInt(style.width);
                if (style.backgroundColor === "rgb(3, 206, 165)")
                    obj.style.backgroundColor = "rgb(202, 21, 81)";
                else if (style.backgroundColor === "rgb(202, 21, 81)")
                    obj.style.background = "rgb(251, 77, 6)";
                else
                    obj.style.background = "rgb(3, 206, 165)";
                if (h > 200)
                {
                    obj.style.width = (w - 5) + "px";
                    obj.style.height = (h - 5) + "px";
                }
            }
        </script>
    </body>
    </html>
    `;
    window.myCodeMirror.setValue(code); 
});