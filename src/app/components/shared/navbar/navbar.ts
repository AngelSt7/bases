import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})

export class Navbar {
  routes = [
    { label: "Counter", path: "/" },
    { label: "Hero", path: "/hero" },
    { label: "Dragon Ball", path: "/dragonball" }
  ]
}
