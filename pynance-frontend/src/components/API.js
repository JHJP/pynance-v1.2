import React from 'react'


const userRegister = async (data) => {
    // e.preventDefault();
    try {
        const response = await fetch("http://127.0.0.1:8000/api/users/", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        });
        const jsonData = await response.json();
    } catch(err){
        console.error(err.message);
    }
};

const userLogin = async(data, setToken) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/auth/', {
            'method':'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data)
        });
        const jsonData = await response.json();
        setToken('mytoken', jsonData.token);
    } catch (err) {
        console.error(err.message);
    }
  }

const getToken = async(authCode, setAccesstoken, setRefreshtoken, setUserseqno) => {
    try {
        const response = await fetch('https://testapi.openbanking.or.kr/oauth/2.0/token', {
            method:'POST',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body : new URLSearchParams({
                code : authCode,
                client_id : '850136a0-43c8-415b-9843-98eefef0d14c',
                client_secret : '9d73648b-211b-4c10-990c-ef334190205d',
                redirect_uri : 'http://localhost:3000/',
                grant_type : 'authorization_code'
            })
        });
        const jsonData = await response.json();
        setAccesstoken(jsonData.access_token);
        setRefreshtoken(jsonData.refresh_token);
        setUserseqno(jsonData.user_seq_no)
    } catch (err) {
        console.error(err.message);
    }
}

const userProfileRegister = async (data) => {
    // e.preventDefault();
    try {
        const response = await fetch("http://127.0.0.1:8000/api/profile/", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        });
        const jsonData = await response.json();
    } catch(err){
        console.error(err.message);
    }
};


export {userRegister, userLogin, getToken, userProfileRegister};