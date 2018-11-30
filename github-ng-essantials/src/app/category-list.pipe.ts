import { Pipe } from '@angular/core';

@Pipe({
  name: 'CategoryList'
  // pure: true
})

export class CategoryListPipe {
  transform(mediaItems) {
    console.log(mediaItems);
    var categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
  }
}