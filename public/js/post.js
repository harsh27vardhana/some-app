"use strict";
const postProblem = async (form) => {
  //   console.log(form.getAll("discription"));
  //   console.log(form.getAll("address"));
  //   console.log(form.getAll("coordinate"));
  //   console.log(form.getAll("images"));
  const url = `http://127.0.0.1:3000/api/v1/post/`;
  const promise = await fetch(url, {
    method: "POST",
    body: form,
  });
  const res = await promise.json();
  AlertBoxAppend(res.message);
};

const post_Button = document.querySelector("#up-new-post");
post_Button.addEventListener("click", (e) => {
  const form = new FormData();

  const images = document.querySelector("#new_post_imgs");
  form.append("discription", document.querySelector("#new_post_text1").value);
  form.append("address", document.querySelector("#new_post_text2").value);
  form.append("coordinate_lng", cordinate[0]);
  form.append("coordinate_lat", cordinate[1]);
  for (let i = 0; i < images.files.length; i++) {
    form.append(`images`, images.files[i]);
  }

  postProblem(form);
});
