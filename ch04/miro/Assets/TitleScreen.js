#pragma strict

var labelStyle : GUIStyle;

function Update () {
	if (Input.touches.length > 0) {
		Application.LoadLevel("Main");
	}
}

function OnGUI () {
	var sw = Screen.width;
	var sh = Screen.height;
	GUI.Label(Rect(0, sh / 4, sw, sh / 4), "BALL MAZE", labelStyle);
	GUI.Label(Rect(0, sh / 2, sw, sh / 4), "Tap to Start", labelStyle);
}
