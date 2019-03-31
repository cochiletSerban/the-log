import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from './objects/entry';

@Pipe({
  name: 'entryFilter'
})
export class EntryFilterPipe implements PipeTransform {

  transform(entrys: Entry[], searchText: string): Entry[] {

    if (!entrys) {
      return [];
    }

    if (!searchText) {
      return entrys;
    }

    const uniq = (value, index, self) => self.indexOf(value) === index;

    searchText = searchText.toLowerCase();

    return entrys.filter(entry => entry.title.concat(entry.tags).concat(entry.owner.username).includes(searchText))
      .filter(uniq);

  }

}
