const BASE_URL = "https://auth.nomoreparties.co";

function cheeckResponse(promise) {
  // console.log('response', res.json())
  return promise.then((res) => {
    return (res.status === 200) ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  })
  }

export const register = (email, password) => {
  console.log('in auth-register:', email, password)
  const promise = fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, password})
  });
  // .then(cheeckResponse(promise) )
  return cheeckResponse(promise);
}

export const authorize = (email, password) => {
  const promise = fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
  return cheeckResponse(promise);
}
//   .then((response) => {
//     if(response.status === 400) {
//       return "не передано одно из полей"
//     } else if(response.status === 401) {
//       return "пользователь с email не найден"
//     } else {
//       return response.json();
//     }
//   })
//   .then((data) => {
//     console.log(data);
//     return data;
//     localStorage.setItem('jwt', data.jwt);
//     console.log(`user id: ${data.id}`)
//   })

  
// }

export const checkToken = (token) => {
  console.log('in auth-checkToken', token)
  const promise = fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      // 'Accept': 'application/json',
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
  });
  return cheeckResponse(promise);
};

