//like --->
let heart = document.querySelector("#big-heart");
let img_box = document.querySelectorAll("#feed-img");

img_box.forEach((img) => {
  img.addEventListener("dblclick", () => {
    heart.style.transform = "translate(-50%, -50%) scale(1)";
    setTimeout(() => {
      heart.style.transform = "translate(-50%, -50%) scale(0)";
    }, 700);
  });
});
// -------------------------------stories-------------------------------------->
{
  let dp_story = [
    {
      stories:
        "https://i.pinimg.com/564x/90/cf/44/90cf44b36bda258af8d4daf7afbbd5a8.jpg",
      dp: "https://images.unsplash.com/photo-1441123694162-e54a981ceba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      stories:
        "https://i.pinimg.com/564x/6f/2a/ce/6f2ace2186ff293b6c097e0e02e46115.jpg",
      dp: "https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      stories:
        "https://i.pinimg.com/564x/d2/61/e2/d261e2b23a7c4e00683ddf0c8fe863dd.jpg",
      dp: "https://images.unsplash.com/photo-1495914510314-ba3164b1321f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      stories:
        "https://i.pinimg.com/564x/d9/12/b4/d912b48ae0caaf6ff9851ed1b074a983.jpg",
      dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    },
    {
      stories:
        "https://i.pinimg.com/564x/90/92/a6/9092a6430c3d6b9941e5c5d1c16c7172.jpg",
      dp: "https://images.unsplash.com/photo-1600271772269-c3d903024972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      stories:
        "https://i.pinimg.com/564x/c3/ac/79/c3ac7980c680a146a9c7e6966f680e00.jpg",
      dp: "https://images.unsplash.com/photo-1624223237138-21a37e61dec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      stories:
        "https://i.pinimg.com/564x/57/0f/a5/570fa59a3670b21f89b07ebd4278f2a3.jpg",
      dp: "https://images.unsplash.com/photo-1514846117827-513efb7aa48a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1789&q=80",
    },
    {
      stories:
        "https://i.pinimg.com/564x/3a/f9/ce/3af9ceda4d3ce1e340e1343c2d523bbe.jpg",
      dp: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      stories:
        "https://i.pinimg.com/564x/3e/02/b3/3e02b3459e4fca987ecc055901501420.jpg",
      dp: "https://images.unsplash.com/photo-1541779343-66b948e68da0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
    },
    {
      stories:
        "https://images.unsplash.com/photo-1465080357990-d4bc259ec4a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    },
  ];
  let c = "";
  dp_story.forEach((elem, index) => {
    c += `<div class="stories" id="${index}">
    <img src="${elem.dp}" alt="">
  </div>`;
  });
  let story_box = document.querySelector("#story-box");
  story_box.innerHTML = c;
  //   console.log(c);

  let every_stories = document.querySelectorAll(".stories");
  let full_screen = document.querySelector("#full-screen-stories");
  let box_right = document.querySelector("#box-right");
  let box_left = document.querySelector("#box-left");
  let close = document.querySelector("#close");
  every_stories.forEach((elem) => {
    elem.addEventListener("click", () => {
      full_screen.style.display = "block";
      box_left.style.filter = "blur(7px)";
      box_right.style.filter = "blur(7px)";
      close.style.display = "block";
      full_screen.innerHTML = `<img src="${dp_story[elem.id].dp}}" alt="">`;

      if (close.style.display === "block") {
        close.addEventListener("click", () => {
          full_screen.style.display = "none";
          box_left.style.filter = "blur(0px)";
          box_right.style.filter = "blur(0px)";
          close.style.display = "none";
        });
      } else {
        setTimeout(() => {
          full_screen.style.display = "none";
          box_left.style.filter = "blur(0px)";
          box_right.style.filter = "blur(0px)";
          close.style.display = "none";
        }, 2000);
      }
    });
  });
}
