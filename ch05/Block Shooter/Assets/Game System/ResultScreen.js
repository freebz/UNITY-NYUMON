#pragma strict

@script RequireComponent(Scorekeeper)   // 같은 모브젝트 내에 Scorekeeper가 필요

var skin : GUISkin;                     // 표시에 사용하는 스킨

private var scorekeeper : Scorekeeper;   // Scorekeeper 컴포넌트 참조
private var state : String;             // 현재 상태를 나타내는 문자열

function Start () {
    // Scorekeeper 컴포넌트 참조를 획득
    scorekeeper = GetComponent(Scorekeeper) as Scorekeeper;
}

// 타임업 메시지의 처리
function TimeUp() {
    // "Time Up"텍스트의 표시
    state = "Time Up";
    yield WaitForSeconds(3.0);
    // 약간의 비표시 기간을 둔다
    state = "";
    yield WaitForSeconds(0.5);
    // 스코어를 표시하고 버튼 입력을 기다린다
    state = "Show Score";
    while (!Input.GetButtonDown("Fire1")) yield;
    // 타이틀 씬으로 바뀐다.
    Application.LoadLevel("Title");
}

function OnGUI() {
    var sw : int = Screen.width;
    var sh : int = Screen.height;
    GUI.skin = skin;
    // 현재 상태에 의해서 표시를 바꾼다
    if (state == "Time Up") {
        // "Time Up"텍스트의 표시
        GUI.Label(Rect(0, 0, sw, sh), "Time Up!!", "message");
    } else if (state == "Show Score") {
        // 스코어 표시
        var scoreText : String = "Your score is " + scorekeeper.score.ToString();
        GUI.Label(Rect(0, sh / 4, sw, sh / 4), scoreText, "message");
        GUI.Label(Rect(0, sh / 2, sw, sh / 4), "Click to Exit", "message");
    }
}