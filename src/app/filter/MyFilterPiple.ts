import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter'
})

export class MyFilterPipe implements PipeTransform {
    transform(value: any[], args: string): any {
        let findGroup = (args) => {
            let filteredValues = [];

            for(let i = 0; value.length > i; i++) {
                if(value[i].group == args) {
                    //console.log(value[i]);
                    filteredValues.push(value[i]);
                }
            }
            return filteredValues;
        }

        switch(args) {
            case 'team':
                return findGroup('team');

            case 'online':
                return findGroup('online');

            case 'offline':
                return findGroup('offline');
        }
    }
}