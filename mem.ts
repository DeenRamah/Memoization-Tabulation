//memoize a get accessor or a method with no parameters
import {Memoize} from 'typescript-memoize';

class SimpleFoo{
  @Memoize()
  public getAllTheData(){
    return data;
  }
  @MemoizeExpiring(5000)
  public getDataForSomeTime(){
    return data;
  }
  @Memoize()
  public get someValue(){
    return value;
  }
}
