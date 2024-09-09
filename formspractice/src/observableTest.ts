import { Observable } from "rxjs";

let observable = new Observable<{index:number,data:string}>((obs)=>{
  let index = 0;
  setInterval(()=>{
    obs.next({
        index:index,
        data:"hello"
      }
    )
    index++;
  },1000)
})


export default observable;