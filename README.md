# No.6 Validation

---

## [DEMO](dist/)

## [spec](https://hexschool.github.io/THE_F2E_Design/week6-validation)


## Note

### Input file

檔案上傳的標籤是：

```pug
input(type="file", name="photo", accept="image/*", multiple)
```

accept:
  是指接受選取的檔案類型，但只是預設檔案選取，使用者還是可以選其他類型，此外，拖拉時只直無視，應該再用其他方式避免。
  格式：
    - 個別副檔名： .gif, .jpg, .png, .doc
    - 類型： audio/*, video/*, image/*
    - [media_type](https://www.iana.org/assignments/media-types/media-types.xhtml)
multiple: 可複選。

References:

- [\<input type="file">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)
- [HTML <input> accept Attribute](https://www.w3schools.com/tags/att_input_accept.asp)
- []()

排版方面，可利用 opacity: 0 來隱藏檔案選取的按鈕。
