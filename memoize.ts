//memoize a method based on its first parameter

class ComplicateFoo{
  @Memoize()
  public getSomeTheData(id: number){
    let allTheData = this.getAllTheData();
    return data;
  }

  @Memoize()
  public getGreeting(name: string, planet: string){
    return `Hello, ${name}! welcome to ${planet}`;
  }
}
