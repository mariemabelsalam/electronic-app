import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../../fetures/components/navbar/navbar.component";
import { FooterComponent } from "../../../fetures/components/footer/footer.component";

@Component({
  selector: 'app-mainlayout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.scss'
})
export class MainlayoutComponent {

}
