const Contries = () => {


    // const list =["India", "USA", "UAE", "UK", "Austrelia", "Japan"];  //or

    const list = [
        {
            name : "India",
            capital: "New Delhi"
        },
        {
            name : "USA",
            capital: "Washington DC"
        },
        {
            name : "Austrelia",
            capital: "Canberra"
        },
        {
            name : "UK",
            capital: "London "
        },
        {
            name : "Japan",
            capital: "Tokyo"
        },
        {
            name : "UAE",
            capital: "Abu Dhabi "
        },
    ];



    return(
        <div>
            <h1>Contries</h1>

            {/* <h1>{list[0]}</h1> */}
{/* 
                {
                    list.map((contry, index) => (
                            <h1 key = {index}>{contry}</h1>
                        )
                    )
                } */}


                
              {
                    list.map((contry, index) => (
                        <div  key = {index}>
                            <h1>{contry.name}</h1>
                            <p>{contry.capital}</p>
                        </div>
                        )
                    )
                }


        </div>
    )
}


export default Contries;          // /*or*/   export const Contries;