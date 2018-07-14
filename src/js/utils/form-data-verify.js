export default {
  email: (text) => text && /.+@.+\..+/.test(text),
  password: (text) => text && /.{8,}/.test(text),
  passwordConfirm: (text, confirm) => confirm && (text === confirm)
}
