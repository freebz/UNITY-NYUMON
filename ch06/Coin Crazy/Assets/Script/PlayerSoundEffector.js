#pragma strict

var coinSE : AudioClip;     // 코인 획득음
var damageSE : AudioClip;   // 데미지 효과음

// 코인 획득 수신
function CatchCoin(amount : int) {
    GetComponent.<AudioSource>().PlayOneShot(coinSE);
}

// 데미지 수신
function ApplyDamage(amount : int) {
    GetComponent.<AudioSource>().PlayOneShot(damageSE);
}