import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';

import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemService } from './media-item.service';
import { lookupListToken, lookupLists } from './providers'

// const lookupLists = {
//   mediums: ['Movies', 'Series']
// };

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, 
    HelloComponent, 
    MediaItemComponent, 
    MediaItemListComponent, 
    FavoriteDirective, 
    CategoryListPipe, MediaItemFormComponent 
  ],
  providers: [ 
    MediaItemService,
    { provide: lookupListToken, useValue: lookupLists }
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
