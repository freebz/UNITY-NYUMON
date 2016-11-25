#pragma strict

private var accel : Vector3;

function Start () {
	accel = Vector3(0, 0, -1);
}

function Update () {
	/*
	transform.rotation =
		Quaternion.AngleAxis(Input.GetAxis("Horizontal") * 10.0, Vector3.forward) *
		Quaternion.AngleAxis(Input.GetAxis("Vertical") * -10.0, Vector3.right);
	*/
	accel = (accel + Input.acceleration) * 0.5;
	var gravity : Vector3 = Vector3(accel.x, accel.z, accel.y);
	transform.rotation = Quaternion.FromToRotation(-Vector3.up, gravity);
}