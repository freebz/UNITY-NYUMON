#pragma strict

var bulletPrefab : GameObject;	// 탄환의 프리팹
var initialVelocity : float;	// 탄환의 초속

function Update () {
  if (Input.GetButtonDown("Fire1")) {
    // 탄환 프리팹의 인스턴스화
    var bullet : GameObject =
      Instantiate(bulletPrefab, transform.position, transform.rotation);
    // 클릭한 곳을 월드 좌표계에 변환
    var screenPoint = Input.mousePosition;
    screenPoint.z = 10.0;
    var worldPoint = GetComponent.<Camera>().ScreenToWorldPoint(screenPoint);
    // 클릭한 점으로 향하는 벡터를 속도벡터로 설정
    var direction = (worldPoint - transform.position).normalized;
    bullet.GetComponent.<Rigidbody>().velocity = direction * initialVelocity;
  }
}

function TimeUp() {
    enabled = false;
}