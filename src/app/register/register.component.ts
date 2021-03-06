import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import {MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  indexes: number[] = new Array(11);
  constructor(public snackBar: MdSnackBar) {}
  openSnackBar() {
    var dirtyFormID = 'register';
    var resetForm = <HTMLFormElement>document.getElementById(dirtyFormID);
    resetForm.reset();
    this.snackBar.open("PROXIMAMENTE", "", {
      duration: 1000,
    });
  }
  ngOnInit() {
  }

}