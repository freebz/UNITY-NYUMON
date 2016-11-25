#pragma strict

function OnCollisionEnter(collisionInfo : Collision) {
  if (collisionInfo.gameObject.tag == "Box") {
    // 데미지 메세지를 송신한다
    collisionInfo.gameObject.SendMessage("ApplyDamage");
  }
  Destroy(gameObject);
}
