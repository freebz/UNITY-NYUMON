#pragma strict

private var ballCount : int;	// 볼의 총 개수
private var counter : int;		// 골에 닿은 볼 카운터
private var cleared : boolean;	// 클리어

var labelStyle : GUIStyle;

// 시작 시의 처리
function Start () {
	// 볼의 총 개수를 정한다.
	ballCount = GameObject.FindGameObjectsWithTag("Ball").length;
}

// 트리거에 게임 오브젝트가 진입했을 때의 처리
function OnTriggerEnter (other: Collider) {
	// 태그로부터 볼을 판별하고 카운트한다
	if (other.gameObject.tag == "Ball") {
		counter++;
		if (cleared == false && counter == ballCount) {
			// 클리어 판정 성립
			cleared = true;
			yield WaitForSeconds(2.0);
			Application.LoadLevel("Title");
		}
	}
}

// 트리거에서 게임 오브젝트를 퇴출했을 때의 처리
function OnTriggerExit(other : Collider) {
	// 태그로부터 볼을 판별하고 카운트를 줄인다
	if (other.gameObject.tag == "Ball") {
		counter--;
	}
}

function OnGUI () {
	if (cleared == true) {
		var sw : int = Screen.width;
		var sh : int = Screen.height;
		GUI.Label(Rect(sw / 6, sh / 3, sw * 2 / 3, sh / 30), "CLEARED!!",
		labelStyle);
	}
}
