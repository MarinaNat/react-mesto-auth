export const BASE_URL = "https://auth.nomoreparties.co";

function checkResponse(promise) {
  // console.log('function checkResponse ()', promise)
  return promise.then((res) => {
    // return res.status === 200
    return res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`);
  });
}

export const register = (email, password) => {
  console.log("in auth-register:", email, password);
  const promise = fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  // .then(cheeckResponse(promise) )
  return checkResponse(promise);
};

export const authorize = (email, password) => {
  const promise = fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return checkResponse(promise);
};
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
  console.log("in auth-checkToken", token);
  const promise = fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return checkResponse(promise);
};

// function checkResponse(res) {
//   if (res.ok) {
//       return res.json();
//   }
//   return Promise.reject(`Ошибка: ${res.status}`);
// }

// export const register = (password, email) => {
//   return fetch(`${BASE_URL}/signup`, {
//       method: 'POST',
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify({password, email})
//   })
//       .then(checkResponse)
// };

// export const authorize = (password, email) => {
//   return fetch(`${BASE_URL}/signin`, {
//       method: 'POST',
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify({password, email})
//   })
//       .then(checkResponse)
//       .then((data) => {
//           if (data.token) {
//               localStorage.setItem('token', data.token);
//               return data.token;
//           }
//       })
// };

// export const checkToken = (token) => {
//   return fetch(`${BASE_URL}/users/me`, {
//       method: 'GET',
//       headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//       }
//   })
//       .then(checkResponse)
// };
