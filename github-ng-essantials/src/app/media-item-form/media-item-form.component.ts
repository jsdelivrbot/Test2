import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { MediaItemService } from './../media-item.service';
import { lookupListToken } from './../providers';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {

  form;

  constructor(private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists) {}

  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem);
  }

  // constructor() { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator),
    });
  }

  yearValidator(control) {
    if(control.value.trim().lengh === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1800;
    let maxYear = 2500;
    if(year >= minYear && year <= maxYear) {
      return null;
    }
    else {
      return {'year' : {
        'min' : minYear,
        'max' : maxYear
      }};
    }
  }

}