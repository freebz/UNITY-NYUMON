#pragma strict

private var originalColor : Color;

function Start () {
	originalColor = GetComponent.<Renderer>().material.color;
}

function Update () {
	var level : float = Mathf.Abs(Mathf.Sin(Time.time * 20));
	GetComponent.<Renderer>().material.color = originalColor * level;
}
