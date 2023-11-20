import "./Login.css";
import react from 'react';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const User = {
  email: "test@naver.com",
  password: "1234",
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

    //기존의 데이터에서 email과 PW가 일치하는지 비교한다.
    const compareBt = (e) => {
        if(email == User.email && PW == User.password){
            alert("로그인이 되었습니다.");
            //setNotAllow(true);
        }

        else{
            alert("등록되지 않은 회원입니다.");
            setEmail("");
            setPW("");
        }
    };

    useEffect(() => {
      console.log("렌더링!!!");
    }, [email]);

    //userArr배열에서 가입된 회원인지 체크한 후 가입이 안되어 있다면 userArr에 email과 패스워드 정보를 push해준다.
    const signUp = (e) => {
      //  for (let user of userArr){
      //   if (email == user.email)
      //     exist = true;
      // }

      // if (exist == false){
      //   User['email'] = email;
      //   User['password'] = PW;
      //   userArr.push(User);
      //   alert("회원등록 되었습니다.");
      //   setEmail("");
      //   setPW("");
      // }
      
      // else{
      //   alert ("이미 가입된 회원입니다.");
      //   setEmail("");
      //   setPW("");
      // }
    }


  return (
    
    <div className="main">
      <div className="A">
        <div className='a'>
          <div className="title">
            <p>Login</p>
          </div>

          <div className="log">
            <div className="t">
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
              <button className="bb" onClick={compareBt} /*disabled={notAllow}*/ >로그인</button>
            </div>
          </div>

          <div>
            <button className="b">아이디 찾기</button>
            <button className="b">비밀번호 찾기</button>
            <Link to="/signup">
            <button className="b" onClick={signUp}>회원가입</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
