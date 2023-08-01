// - 회원가입을 통해 사용자(user)를 생성하고 관리합니다.
//     - 랜덤 한 문자값 (10자 이상) 을 생성 후 사용자의 Unique ID 값으로 넣어주세요.
//     - 해당 유저의 Unique ID를 확인 후 로그인합니다.
//     - 응답받은 Unique ID는 `localStorage`에 저장해주세요
//     - 다음 번에 로그인 시 Unique ID가 존재한다면 루트 경로로 리디렉션 시켜주세요
//     - 어떤 경우든 Unique ID가 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리디렉션 시켜주세요
//     - 로그아웃은 클라이언트 단에서 `localStorage`에 저장된 Unique ID를 삭제하는 방식으로 구현합니다.
//     데이터 스키마

var userid = document.getElementById("userid");
var userpw = document.getElementById("userpw");
var pwcheck = document.getElementById("pwcheck");
var email = document.getElementById("email");

function OnlyIdCheck() {}

function uniqueId() {
  const alphabet = "energizozo";
}

// 아이디 정규식
function idReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{3,16}$/;
  return re.test(String(text));
}

// 비밀번호 정규식
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/;
  return re.test(String(text).toLowerCase());
}

// 이메일 정규식
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

loginBtn.addEventListener("click", () => {
  // if (useridPass) {
  console.log("로그인");
  // }
});

// 이메일 - /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
//비밀번호 영문자+숫자+특수조합(8~25자리 입력) 정규식
// var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
