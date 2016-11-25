#pragma strict

function Start () {

}

function Update () {
	var angle = Input.acceleration.x * 60;
	transform.rotation = Quaternion.AngleAxis(angle, Vector3(0, 0, 1));
}