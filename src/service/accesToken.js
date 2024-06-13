

const refreshToken = localStorage.getItem('refreshToken');


  console.log(user)

// let result = await baseQuery(args, api, extraOptions);

// if (result?.error?.status === 404) {
//   toast.error(result.error.data.message);
// }
// if (result?.error?.status === 401) {
//   //* Send Refresh
//   console.log("Sending refresh token");

  const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
    method: "POST",
    credentials: "include",
  });

  const data = await res.json();

  if (data?.data?.accessToken) {
    const user = api.getState().auth.user;

    api.dispatch(
      setUser({
        user,
        token: data.data.accessToken,
      })
    );

    result = await baseQuery(args, api, extraOptions);
  } else {
    api.dispatch(logout());
  }
// }
