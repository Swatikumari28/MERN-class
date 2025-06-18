const parent = document.getElementById("root");

const title = document.createElement("h1");
title.innerText = "Hello from DOM 1";
title.style.textDecoration = "underline";
title.style.textDecorationColor = "magenta";
parent.append(title);

const title2 = document.createElement("h1");
title2.innerText = "Hello from DOM 2";

parent.append(title2);
