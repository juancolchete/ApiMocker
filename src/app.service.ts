import { Injectable } from '@nestjs/common';
import getfy from 'getfy';

@Injectable()
export class AppService {
  async apiMock(query:any): Promise<string> {
    const queryKeys = Object.keys(query)
    const queryValues = Object.values(query)
    let url = `${query.url}?`
    for(let i =0;i<queryKeys.length;i++){
      if(queryKeys[i] != "url"){
        if(i == queryKeys.length -1){
          url += `${queryKeys[i]}=${queryValues[i]}`  
        }else{
          url += `${queryKeys[i]}=${queryValues[i]}&`
        }
      }
    }
    await getfy(url)   
    return 'ok';
  }
}
