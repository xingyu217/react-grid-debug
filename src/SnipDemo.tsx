import React from 'react';
interface SnipDemoState{
    t:number;
}
export class SnipDemo extends React.Component<any,SnipDemoState>{
    count:number=0;
    render(){
        // const date=new Date();
        // date.setSeconds(date.getSeconds()+3);
        // let otherDate;
        // do{
        //     otherDate=new Date();
        // }
        // while(otherDate<date)
        if(this.state){
            console.log(`====render t is ${this.state.t}`);
        }
        return(
            <>
                <h2>test</h2>
                <button onClick={this.snycTest}>synctest</button>
                <button onClick={this.asyncTest}>asynctest</button>
                <button onClick={this.asyncTest2}>asynctest2</button>
                <button onClick={this.setStateTest}>set state test</button>
            </>
        )
    }
    snycTest=()=>{
        console.log("=======start===");
        const date=new Date();
        date.setSeconds(date.getSeconds()+3);
        let otherDate;
        do{
            otherDate=new Date();
        }
        while(otherDate<date)
        console.log("==========end=========");
    }
    asyncTest=async ()=>{
        console.log("=======start===");
        const date=new Date();
        date.setSeconds(date.getSeconds()+3);
        let otherDate;
        do{
            otherDate=new Date();
        }
        while(otherDate<date)
        console.log("=========fecht")
        await fetch("https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js");
        console.log("==========end=========");
    }
    asyncTest2=async ()=>{
        console.log("=======start===");
        console.log(`=============count===:${this.count}`);
        await fetch("https://www.google.com/search?q=sss&oq=sss&aqs=chrome..69i57.1487j0j15&sourceid=chrome&ie=UTF-8");
        console.log("=========loop")
        console.log(`=============count===:${this.count}`);
        this.count+=1;

        // const date=new Date();
        // date.setSeconds(date.getSeconds()+3);
        // let otherDate;
        // do{
        //     otherDate=new Date();
        // }
        // while(otherDate<date)
        
        console.log("==========end=========");
    }
     setStateTest=async ()=>{
         console.log(`===========sss ${this.state?.t}`);
        
    try{
        await fetch("https://www.google.com/search?q=sss&oq=sss&aqs=chrome..69i57.1487j0j15&sourceid=chrome&ie=UTF-8");
    }
    catch(err){

    }
    for(let i=0;i<3;i++){

        this.setState({t:i});
        // this.setState((state)=>{
        //     console.log(`pre state ${state}`)
        //     return{
        //         t:i
        //     }
        // });
    }
    console.log("========fetchend");
    }
}