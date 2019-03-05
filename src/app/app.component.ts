import {Component, NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule]})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Audmin';
}
