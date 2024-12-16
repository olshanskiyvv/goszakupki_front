import client from "./client";

export const isAuthed = async () => {
//   return true;
  const user = JSON.parse(localStorage.getItem('user'));
  // console.log(token)
  if (user === null) {
    localStorage.setItem('isAdmin', false)
    return false;
  }
//   const res =
//       await client
//           .get('/auth/profile', {headers: {Authorization: 'Bearer ' + user}})
//           .catch((e) => console.log(e));
  // console.log(res)
  // console.log(res?.data.role === 'ADMIN')
  if (user.role === "ADMIN") {
    localStorage.setItem("isAdmin", true)
  } else {
    localStorage.setItem("isAdmin", false)
  }
  return true;
//   return res?.status === 200 || false;
}