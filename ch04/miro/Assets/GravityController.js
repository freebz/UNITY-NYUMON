#pragma strict

private var accel : Vector3;

function Start () {
	accel = Vector3(0, 0, -1);
}

function Update () {
	/*
	Physics.gravity =
		Quaternion.AngleAxis(Input.GetAxis("Horizontal") * 60.0, Vector3.forward) *
		Quaternion.AngleAxis(Input.GetAxis("Vertical") * -60.0, Vector3.right) *
		(Vector3.up * -20.0);
	*/
	accel = (accel + Input.acceleration) * 0.5;
	//Physics.gravity = Vector3(-accel.y, accel.z, accel.x) * 50.0;
	Physics.gravity = Vector3(accel.x, accel.z, accel.y) * 50.0;
}