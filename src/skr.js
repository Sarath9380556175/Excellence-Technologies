import React from 'react';
import '../src/skr.css'
import axios from 'axios';
import Bounce from 'react-reveal/Bounce'
import Zoom from 'react-reveal/Zoom'
import HeadShake from 'react-reveal/HeadShake'
import Rotate from 'react-reveal/Rotate'

class Skr extends React.Component{
    
    constructor()
    {
        super();
        this.state=
        {
            skr:[1,2,6,10,12,16,18,20,24,28],
            firstanswer:[],
            arr:[1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
            secondanswer:undefined,
            numbers:[9, 5, 8, 6, 7, 18, 9, 10, 2, 11],
            thirdanswer:undefined,
            samplecode:[],
            todolist:undefined,
            todolists:undefined,
            fifthanswer1:{},
            fifthanswer2:{},
            fifthanswer3:{},
            fifthanswer4:{},
            bujala:[

                {id :4,name:"abc"},
                {id : 10,name:"ab2"},
                {id : 5,name:"abc3"},
                {id : 6,name:"abc5"}
                
                ]
            

        }
    }

    componentDidMount()
    {
        axios({
            url:'https://my-json-server.typicode.com/typicode/demo/posts',
            method:'GET',
            headers:{'content-Type':'application/json'}
        })

        .then(res=>this.setState({samplecode:res.data}))

        .catch()
    }

    add=(event)=>{
        
        const value=event.target.value;
        console.log(value)
        this.setState({todolist:value})



    }

    adds=()=>{
        
      const {todolist}=this.state;
        this.setState({todolists:todolist})



    }

    onequestion=()=>{
        const {skr}=this.state;
        this.setState({firstanswer:skr.filter((item)=>item%2===0)})
    }

    
    secondquestion=()=>{
        const {arr}=this.state;

    const rmr = (arr = []) => {
        let left = 0;
        let right = 0;
        let max = 0;
        while (right < arr.length) {
           if (arr[right] === 0) {
              if (right - left > max) {
                 max = right - left
              };
              right++;
              left = right;
           } else {
              right++
           };
        };
        return right - left > max ? right - left : max;
     }
   

     this.setState({secondanswer:rmr(arr)})
    

    }

    thirdquestion=()=>{

        const {numbers}=this.state;
        var duplicate = null;
for (var i = 0; i < numbers.length; i++) {
  if (numbers.indexOf(numbers[i]) !== i) {
    duplicate = numbers[i];
    break; 
  }
}
this.setState({thirdanswer:duplicate})

    }

    fifthquestion=()=>{
        const {bujala}=this.state;

        const lakshmi=[]

lakshmi.push(bujala.sort((a,b)=>a.id-b.id));



const allFruits = Object.assign({}, ...lakshmi);

this.setState({fifthanswer1:allFruits[0]});

this.setState({fifthanswer2:allFruits[1]});

this.setState({fifthanswer3:allFruits[2]});

this.setState({fifthanswer4:allFruits[3]});

    }
    render()
    {
        const {samplecode,todolists,firstanswer,secondanswer,thirdanswer,fifthanswer1,fifthanswer2,fifthanswer3,fifthanswer4}=this.state;
        return(
            <div className="skr">

<div className="header">
    <Bounce bottom cascade><div className="pt-3 pl-2 srh " style={{fontSize:'20px'}}>Excellence Technologies</div></Bounce>
    </div>
  {firstanswer.length!==0?
     <Bounce right cascade><div style={{display:'inline-block'}} className="ml-3 kkr">{`Even numbers in the array are ${firstanswer}`}</div></Bounce>:null}

    <br/>
    <br/>
    <button onClick={this.onequestion} className="btn btn-secondary btn-sm ml-3">first question</button>
    <br/>
    <br/>
{secondanswer===undefined?null:
    <Zoom top cascade><div style={{display:'inline-block'}} className="ml-3 kkr">{`maximum consecutive 1's in an array are ${secondanswer}`}</div></Zoom>}

<br/>
<br/>
  <button onClick={this.secondquestion} className="btn btn-secondary btn-sm ml-3">second question</button>
  <br/>
  <br/>
  {thirdanswer===undefined?null:
    <HeadShake top cascade><div style={{display:'inline-block'}} className="ml-3 kkr">{` number which occurred twice in the array is ${thirdanswer}`}</div></HeadShake>}

<br/>
<br/>
  <button onClick={this.thirdquestion} className="btn btn-secondary btn-sm ml-3">3rd question</button>
  <br/>
  <br/>
  {fifthanswer1!==0?
<table border="2" className="ml-3">
      <tr>
          <th>Id</th>
          <th>Name</th>

      </tr>

      <tr>
          <td>{fifthanswer1.id}</td>
          <td>{fifthanswer1.name}</td>
      </tr>
      <tr>
          <td>{fifthanswer2.id}</td>
          <td>{fifthanswer2.name}</td>
      </tr>
      <tr>
          <td>{fifthanswer3.id}</td>
          <td>{fifthanswer3.name}</td>
      </tr>

      <tr>
          <td>{fifthanswer4.id}</td>
          <td>{fifthanswer4.name}</td>
      </tr>
  </table>:null}

<br/>
<br/>
  <button onClick={this.fifthquestion} className="btn btn-secondary btn-sm ml-3">fifth question</button>
    <table className="table-striped table-bordered table-hover table-dark mt-3 ml-3">
    
        <tr>
            <th className="table-secondary pt-1 pb-1 pl-2 pr-3">Id</th>
            <th className="table-secondary  pt-1 pb-1 pl-2 pr-3" >Title</th>
        </tr>
{samplecode.map((item)=>{
return   <tr>
            <td className="text-success pl-2 pt-2 pb-2 pr-2">{item.id}</td>
            <td className="text-danger pl-2 pt-2 pb-2 pr-2">{item.title}</td>
        </tr>
})}
      

    </table>
    <br/>
    <br/>

  <input type="text" onChange={this.add} required className="ml-3 rounded"/>
  <button className="btn btn-secondary ml-1" onClick = {this.adds} >add</button>

  
<table className="table-striped table-hover table-bordered ml-3 mt-3">
    <tr>
        <th className="bg-secondary pt-2  pl-2 pr-2 text-white">Name</th>
    </tr>
{todolists===undefined? null:<tr>
        <Rotate right cascade><td className="text-white table-dark pl-2">{todolists}</td></Rotate>
    </tr>}
</table>
            </div>
        )
    }
}

export default Skr;