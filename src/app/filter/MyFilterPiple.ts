import { Pipe, PipeTransform } from '@angular/core';  

@Pipe({  
    name: 'myfilter'
})  
  
export class MyFilterPipe implements PipeTransform {  
    transform(value: any[], args: string): any {  
        let findGroup = (args) => {
            for(let i = 0; value.length > i; i++) {
                if(value[i].group == args) {                
                    console.log(value[i]);
                }
            } 
        }
        
        switch(args) {
            case 'team':
                findGroup('team');
                break;

            case 'online':
                findGroup('online');
                break;

            case 'offline':
                findGroup('offline');
                break;            
        }        
    }  
}