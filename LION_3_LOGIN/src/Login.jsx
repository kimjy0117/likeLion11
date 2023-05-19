import react from 'react';
import {useState, useEffect} from 'react'

const User={
    email: "test@naver.com",
    password: "1234"
};


export default function Login() {
    const [email, setEmail]  = useState("");
    const [PW, setPW] = useState("");
    const [notAllow, setNotAllow] = useState(true);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPW(e.target.value);  
    };

    const compareBt = (e) => {
        if(email == User.email && PW == User.password){
            setNotAllow(false);
            alert("로그인이 되었습니다.");

        }
        else{
            alert("등록되지 않은 회원입니다.");
            setEmail("");
            setPW("");
        }
    }


  return (
    
    <div class="main">
      <div class="A">
        <div class='a'>
          <div class="title">
            <p>Login</p>
          </div>

          <div class="log">
            <div class="t">
              <input 
                type="text" 
                placeholder="email"
                value = {email}
                onChange={handleEmail}
              />
              <input
                type="text"
                placeholder="패스워드"
                value = {PW}
                onChange={handlePassword}
              />
            </div>
            <div>
              <button class="bb" onClick={compareBt}>로그인</button>
            </div>
          </div>

          <div>
            <button class="b">아이디 찾기</button>
            <button class="b">비밀번호 찾기</button>
            <button class="b">회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
}
