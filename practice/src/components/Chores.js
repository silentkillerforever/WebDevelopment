import React,{Component} from "react";

class Chores extends Component{
    constructor(props){
        super(props);
        this.state = {
            chores:[
                {
                    id:1,
                    name:"Make a call to first Wife",
                    reason:"To cook food for lunch",
                    completed:true
                },
                {
                    id:2,
                    name:"Prepare presentation for Syscloud",
                    reason:"Presentation regarding share markets explaination to Employees",
                    completed:true
                },
                {
                    id:3,
                    name:"Call Dad",
                    reason:"Ask about the returns this year",
                    completed:true
                },
                {
                    id:4,
                    name:"Make a prank call to my Chutiya Frnd",
                    reason:"Bht late hua isse bath kare, Pakka usko mazaak karna hai.",
                    completed:true
                }
            ]
        };
    }
    render(){
        const {chores} = this.state;
        return(
            <chores>{JSON.stringify(chores)}</chores>
            
        )
    }
}

export default Chores