export default {
  email: (text) => text && /.+@.+\..+/.test(text),
  password: (text) => text && /.{8,}/.test(text),
  passwordConfirm: (text, confirm) => confirm && (text === confirm),
  phone: (text) => text && /^\d{10}$/.test(text.replace(/\s+/g, '')),
  address: (text) => text && text.trim().length > 10,
}
