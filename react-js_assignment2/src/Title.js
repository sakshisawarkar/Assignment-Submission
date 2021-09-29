import react, { useState } from "react";



/*function Title(props) or*/ 

const Title = (props) => {



    let [title, setTitle] = useState("Javascript");
    let data;        //for data line32

    const select = (data) => {
        console.log("Hello  " + data);
        console.log(props.name);
    };  //or//

    // const select = () =>  console.log("Hello React");           /*const ... = () => {...}; : is a arrow function*/
    

    // const changeTitle=() =>{
    //     title = "PHP";
    //     console.log(title);

    //     setTitle("PHP");
    // }

    const readValue = (value) => {
        // console.log(value);
        // setTitle(value);
        data = value;

    }


    
    return(
        <div>
            <input type ="text" placeholder = "Enter Title" 
            onChange = {(event) => {

                readValue(event.target.value);


            }}
            />
            <h1>{title}</h1>
            <h1>{props.name}</h1>
            <h1>{props.users}</h1>
            <button onClick= {() => {
                select("Sakshi");
            }}>Click</button>

            {/* or */}
            {/* <button onClick={select.bind(this, "sakshi")}>Click</button> */}


            {/* <button onClick = {changeTitle}>Change Title</button> */}


            <button onClick = {() => {
            //   setTitle("PHP");
            setTitle(data);
           } }>Change Title</button>

        </div>
    )
}

export default Title; 