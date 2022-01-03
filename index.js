const _themes = [
   {
      name: "light",
      color1: "rgb(12,16,20)",
      color2: "rgb(27,38,49)",
      color3: "rgb(68,51,97)",
      color4: "rgb(90,53,81)",
      color5: "#f1f1f1",
      line: "rgb(50,200,0)",
      border: "rgb(78, 78, 78)",
   },
   {
      name: "dark",
      color1: "#f1f1f1",
      color2: "rgb(90,53,190)",
      color3: "rgb(255,200,97)",
      color4: "rgb(27,200,49)",
      color5: "rgb(12,16,20)",
   },
];
const theme = _themes[0];
const main = document.querySelector(".main");
/* Code Block */
const code_block = document.createElement("div");
main.appendChild(code_block);

code_block.style.width = "500px";
code_block.style.background = theme.color5;
code_block.style.boxShadow = "2px 2px 2px red";
code_block.style.border = `2px solid ${theme.border}`;

/* Tabs */

const tabs_container = document.createElement("div");
code_block.appendChild(tabs_container);

tabs_container.style.background = theme.color4;
tabs_container.style.height = "20px";
tabs_container.style.borderBottom = `1px solid ${theme.color3}`;
tabs_container.style.display = "flex";
tabs_container.style.overflowX = "scroll";
tabs_container.scroll.length = "2px";
tabs_container.style.boxShadow = `0.1px 2px 2px ${theme.color1}`;
tabs_container.style.paddingLeft = "8px";
const _tabs = [
   {
      name: "index.js",
      content: "Aliquip sunt id sint eiusmod irure sit occaecat nisi.",
   },
   {
      name: "utils.js",
      content:
         "Consectetur voluptate eiusmod sit culpa. Dolor incididunt eu id aliquip irure non amet aliquip elit. Fugiat laboris consequat in et commodo ea exercitation. Consectetur non adipisicing velit voluptate proident.\nDuis veniam esse do qui aute aliquip qui. Adipisicing minim proident culpa culpa duis culpa eiusmod. Dolore consequat velit reprehenderit do et esse labore id fugiat nisi fugiat veniam labore enim. Elit elit cillum aliquip ad pariatur.\nNulla proident est sit esse deserunt deserunt esse veniam et voluptate. Cupidatat voluptate aliquip anim officia aliquip pariatur sint. Nostrud commodo velit velit in. Velit sunt ea excepteur excepteur tempor exercitation irure ea officia nulla laboris sit sit occaecat.\nLaboris velit excepteur dolore enim sint. Tempor laborum laboris ipsum pariatur id sunt nostrud cillum eiusmod labore et. Consequat proident qui ut amet nulla reprehenderit irure veniam culpa culpa anim aute.\nMinim nisi pariatur et consectetur quis. Dolore minim sunt non laboris ad pariatur incididunt. Sit reprehenderit deserunt id nostrud nisi duis cillum ea ullamco aliquip aute enim. Reprehenderit deserunt esse deserunt proident do aute quis excepteur ullamco deserunt proident. Qui nisi officia labore aliquip consequat enim. Adipisicing amet mollit excepteur nulla nostrud consequat dolore. Culpa et incididunt voluptate pariatur incididunt mollit ea incididunt dolore.\nAute ipsum excepteur sit amet in quis occaecat quis aliquip. Elit aliqua culpa aliqua minim minim exercitation. Veniam ea eu eiusmod esse qui nulla mollit quis esse adipisicing culpa. Consequat eu consectetur aute ad mollit ad excepteur laborum id.",
   },
   { name: "auth.ts", content: "Nostrud qui consequat et ut ut." },
];
let selected_id = "tab_0";

_tabs.forEach((_tab, index) => {
   const tab = document.createElement("div");
   tab.style.background = "transparent";
   tab.style.width = "50px";
   tab.style.padding = "3px 6px";
   tab.style.fontSize = "12px";
   tab.textContent = _tab.name;
   tab.style.color = theme.color5;
   tab.style.cursor = "pointer";

   tab.setAttribute("id", `tab_${index}`);

   tab.onclick = function () {
      const previous = document.getElementById(selected_id);
      /* previous.style.background = "transparent";
      previous.style.color = theme.color5;
*/
      selected_id = `tab_${index}`;

      previous.style.background = "transparent";
      console.log(previous);

      tab.style.background = theme.color3;
      tab.style.color = "#f1f1f1";

      content.innerText = _tab.content;
   };

   tabs_container.appendChild(tab);
});
/* Content */
const content_container = document.createElement("div");
code_block.appendChild(content_container);

content_container.style.height = "250px";
content_container.style.padding = "8px 0 ";
content_container.style.display = "flex";
content_container.style.overflowY = "scroll";

content_container.style.scroll = "";

/* Line numbers */
const total_lines = 120;

const lines = document.createElement("div");
content_container.appendChild(lines);
lines.style.textAlign = "right";
for (let i = 0; i < total_lines; i++) {
   const lines_container = document.createElement("div");

   lines_container.style.color = theme.line;
   lines_container.style.fontSize = "inherit";
   lines_container.style.padding = "0 8px";
   // lines_container.style.textAlign = "center";
   lines_container.innerText = i;
   lines.appendChild(lines_container);
}

const content = document.createElement("div");
content_container.appendChild(content);

content.style.color = theme.color1;

document.getElementById("tab_0").click();

/*  */

/* Theme 
const setTheme = (theme) => (document.documentElement.className = theme);

if (!localStorage.getItem("theme")) {
   setTheme("light");
} else {
   setTheme(localStorage.getItem("theme"));
}
const theme_container = document.getElementById("theme");
const _themes = [
   "dark",
   "light",
   "blue",
   "red",
   "purple",
   "gray",
   "yellow",
   "green",
];

const theme_title = document.createElement("h1");
theme_title.classList.add("theme_title");
theme_title.textContent = "Theme   ";
theme_container.appendChild(theme_title);

_themes.forEach(function (theme, index) {
   const div = document.createElement("div");
   div.classList.add("theme");

   if (theme == "light") {
      div.style.backgroundColor = "white";
   } else if (theme == "dark") {
      div.style.backgroundColor = "black";
      div.style.border = "1px solid white";
   } else {
      div.style.backgroundColor = theme;
   }

   div.onclick = function () {
      setTheme(theme);
      localStorage.setItem("theme", theme);
   };
   theme_container.appendChild(div);
});
 */
