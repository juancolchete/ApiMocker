import { Injectable } from '@nestjs/common';
import getfy from 'getfy';
import axios from "axios";

@Injectable()
export class AppService {
  async apiMock(query:any): Promise<any> {
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
    const response = await getfy(url)   
    return response;
  }
  async apiMockEnv(){
    const response = await axios.get(process.env.MOCK_URL)
    return response.data 
  }
}
