/*
* File: app.components.ts
* Author: Madarász Dávid
* Copyright: 2022, Madarász Dávid
* Group: Szoft II/N
* Date: 2022-01-13
* Github: https://github.com/afriyy/
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tomtestin';
  testtomegForm !: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.testtomegForm = this.formBuilder.group({
      tomeg : [''],
      magassag : [''],
      testtomegindex: [{
        value: '',
        disabled: "true"
      }]
    });
  }
  onClickSzamito(){
    console.log("működik");
    let tomeg = Number(this.testtomegForm.value.tomeg);
    let magassag = Number(this.testtomegForm.value.magassag);
    let testtomegindex = tomeg / Math.pow(magassag,2);
    this.testtomegForm.patchValue({testtomegindex: testtomegindex});
  }
}
