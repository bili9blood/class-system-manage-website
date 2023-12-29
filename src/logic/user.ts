import toast from "solid-toast";

let loginErrToastId: string = "";

export function login(username: string, password: string) {
  if (loginErrToastId.length) {
    toast.remove(loginErrToastId);
    loginErrToastId = "";
  }

  if (!username.length || !password.length) {
    loginErrToastId = toast.error("用户名或密码不能为空！");
    return;
  }

  // TODO: 具体登录逻辑
}
