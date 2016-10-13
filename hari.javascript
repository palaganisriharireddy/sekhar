*/
body{
background-color: #FFFFFF;
}
.dBackgroundBox{
background-color: #FFFFFF;
}
.dColorBox{
color: #000000;
}
.dSizeBox{
width: 400px;
height: 600px;
}
.dPositionBox{
position: absolute;
left: 15px;
top: 15px;
}
[/CODE]
[CODE]
dynamic_display.js
function ModifyBGColor(id, newColor)
{
 var mElement = document.getElementById(id);
 mElement.style.backgroundColor = newColor;
}
function ModifyTextColor(id, newColor)
{
 var mElement = document.getElementById(id);
 mElement.style.color = newColor;
}
function ModifyBoxSize(id, newWidth, newHeight)
{
 var mElement = document.getElementById(id);
 mElement.style.width = newWidth;
 mElement.style.height = newheight;
}
function ModifyBoxPosition(id, newLeft, newTop)
{
 var mElement = document.getElementById(id);
 mElement.style.left = newLeft;
 mElement.style.top = newTop;
}
[/CODE]
And now to see them in action (remember to properly include the file from the last article!):
[CODE]
ourTestPage.html
<HTML>
<HEAD>
<TITLE>Our Display Test</TITLE>
<script src="modules_control.js" type="text/javascript">
</script>
<script type="text/javascript">
AddModule("dynamic_display.js");
</script>
</HEAD>
<BODY>
<div class="dBackgroundBox" id="bgModBox">
<p><a onclick="ModifyBGColor('bgModBox','#FF0000');">Click here to modify the background color!</a></p>
</div>
<div class="dColorBox" id="cModBox">
<p><a onclick="ModifyTextColor('cModBox','#00FF00');">Click here to modify the text color!</a></p>
</div>
<div class="dSizeBox" id="szModBox">
<p><a onclick="ModifyBoxSize('szModBox','900px', '100px');">Click here to modify the box size!</a></p>
</div>
<div class="dPositionBox" id="pModBox">
<p><a onclick="ModifyBoxPosition('pModBox','100px', '100px');">Click here to modify the box position!</a></p>
</div>
</BODY>
</HTML>
[/CODE]