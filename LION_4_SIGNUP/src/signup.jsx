import { buildQueries } from "@testing-library/react";
import "./signup.css"
import react from 'react';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Signup(){
  const [email, setEmail]  = useState("");
  const [FPW, setFPW] = useState("");
  const [SPW, setSPW] = useState("");


  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleFPassword = (e) => {
    setFPW(e.target.value);  
  };

  const handleSPassword = (e) => {
    setSPW(e.target.value);  
  };

  useEffect(() => {
    if(FPW.length == SPW.length && FPW.length >= 8){
      if(FPW == SPW){
        alert("비밀번호가 일치합니다.");
      }
      else{
        alert("비밀번호가 일치하지 않습니다.");
      }
    }
  },[SPW]);

    const onSignup = () => {
        const storedEmail = localStorage.setItem('email', email);
        const storedPw = localStorage.setItem('pw', SPW);

        alert("회원가입 되었습니다!");
        setEmail("");
        setFPW("");
        setSPW("");
    };

    return (
        <div className="main">
          <div className="title">
            <p>회원가입</p>
          </div>
            <div className="text">
              <div className="email">
                <p>이메일: </p>
                <input 
                type="text"
                placeholder="email"
                value = {email}
                onChange={handleEmail}
                ></input>
                <button className="check">중복확인</button>
                
              </div>
              
              <div className="fpw">
                <p>비밀번호: </p>
                <input 
                type="text"
                placeholder="비밀번호"
                value = {FPW}
                onChange={handleFPassword}
                ></input>
                <p className="FPWins">8자리 이상 입력해주세요.</p>
              </div>

              <div className="spw">
                <p>비밀번호 확인: </p>
                <input 
                type="text"
                placeholder="비밀번호 확인"
                value = {SPW}
                onChange={handleSPassword}
                ></input>
              </div>
            </div>
            
          <button className="agree" onClick={onSignup}>가입하기</button>
          <Link to="/">
          <button>로그인 화면으로</button>
          </Link>
        </div>
        
      );
      
}