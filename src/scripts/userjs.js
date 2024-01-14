const btnDeleteAccount = document.querySelector(".btnDelete");
btnDeleteAccount.addEventListener("click", btnDeleteEvent);
function btnDeleteEvent(e){
    // const isDelete = confirm("탈퇴 시 작성한 일기는 복구할 수 없습니다.\n진행하시겠습니까?");
    // const isSure = confirm("이대로 탈퇴하시겠습니까?");
    // prompt("프롬프트창");
    if(confirm("탈퇴 시 작성한 일기는 복구할 수 없습니다.\n진행하시겠습니까?")){
        if(confirm("이대로 탈퇴하시겠습니까?")){
            const pr = prompt("\"그래도 야구가 좋아.\" 를 그대로 입력해주세요.");
            if(pr==="그래도 야구가 좋아."){
                alert("그동안 감사했습니다!");
                return true;
            }
            else{
                alert("문장이 일치하지 않습니다.");
                e.preventDefault();
            }
        }
        else
            e.preventDefault();
    }
    else
        e.preventDefault();
        // return false;
}