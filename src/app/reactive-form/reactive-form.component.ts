import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  title = 'form-app';
  userName: String = "";
  formdata: FormGroup = new FormGroup({
    userName: new FormControl("")
  });
  onClickSubmit(data: {userName: String}){
    this.userName = data.userName;
  }
}
