import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toast from "../../components/Toast";
import { BgCont, Bear, SplashModal, BtnSocialLogin, LoginRegister, LogoCont, Logo } from "./splash.style.js"

export default function Splash() {
    const modalRef = useRef();
    const toastRef = useRef(null);
    const navigate = useNavigate();

    if (localStorage.getItem("Authorization")){
        setTimeout(function(){
            navigate("/post");
        }, 7000)
    }
    else {
        // 처음 실행 시 5초 뒤에 로그인 모달창이 뜨도록 함
        setTimeout(function(){
            modalRef.current.style.transform = "translate3d(0, 0, 0)";
        }, 5000)
    }
    // 모달창 바깥 영역을 클릭했을 때 모달창을 토글할 수 있도록 처리
    function handleModal(e){
        if (e.target.id === "back" || e.target.id === "bear"){
            if (modalRef.current.style.transform === "translate3d(0px, 0px, 0px)"){
                modalRef.current.style.transform = "translate3d(0, 100%, 0)";
            }
            else {
                modalRef.current.style.transform = "translate3d(0px, 0px, 0px)";
            }
        }
        else {
            return;
        }
    }
    const handleShowToast = () => {
        toastRef.current.style.transform = "scale(1)";
        setTimeout(function(){
            toastRef.current.style.transform = "scale(0)";
        }, 3000)
        return;
    }
    return (
        <BgCont onClick={handleModal} id="back">
            <Toast ref={toastRef} msg="준비중입니다!"  />
            <LogoCont>
                <Bear id="bear"/>
                <Logo />
            </LogoCont>
            <SplashModal ref={modalRef}>
                <BtnSocialLogin className="kakao" onClick={handleShowToast}>
                    카카오톡 계정으로 로그인
                </BtnSocialLogin>
                <BtnSocialLogin className="google" onClick={handleShowToast}>
                    구글 아이디로 로그인
                </BtnSocialLogin>
                <BtnSocialLogin className="facebook" onClick={handleShowToast}>
                    페이스북 계정으로 로그인
                </BtnSocialLogin>
                <LoginRegister>
                    <Link to="/account/login">이메일로 로그인</Link>
                    |
                    <Link to="/account/register">회원가입</Link>
                </LoginRegister>
            </SplashModal>
        </BgCont>

    )
}
