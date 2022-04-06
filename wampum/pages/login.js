function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-600 ">
      <h1 className="text-lg font-semibold text-black">Login</h1>
      <form className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
        <input
          className="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="username"
          type="text"
        ></input>
        <input
          className="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="password"
          type="password"
        ></input>
      </form>
    </div>
  )
}

export default Login
