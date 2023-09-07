document.addEventListener("DOMContentLoaded", function () {
   const webDevHeading = document.getElementById("web-development");
   const appsHeading = document.getElementById("apps");
   const webDevProjects = document.getElementById("web-dev-projects");
   const appsProjects = document.getElementById("apps-projects");

   webDevHeading.addEventListener("click", function () {
       webDevProjects.classList.toggle("show");
       appsProjects.classList.remove("show"); // Hide Apps projects
   });

   appsHeading.addEventListener("click", function () {
       appsProjects.classList.toggle("show");
       webDevProjects.classList.remove("show"); // Hide Web Development projects
   });
});
