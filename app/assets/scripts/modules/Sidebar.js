class Sidebar {
  constructor() {
    this.sidebarHeading = document.querySelector("#sidebarHeading");
    this.sidebarMenu = document.querySelector("#sidebarMenu");
    this.wrapper = document.querySelector(".wrapper");
    this.events()
  }

  events() {
    this.sidebarHeading.addEventListener("click", () => this.toggleList())
  }

  toggleList() {
    this.sidebarMenu.classList.toggle("show");
  }
}


export default Sidebar