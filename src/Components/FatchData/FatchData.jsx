// import { useEffect } from "react";
// import { useState } from "react";
import { useEffect } from 'react';
import { useState } from 'react';

// const FatchData = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res) => {
//             if(!res.ok){
//                 throw Error('Fetching is not successful')
//             }else{
//                 return res.json();
//             }
//         })
//         .then((data) => {
//           setData(data);
//           setIsLoading(false);
//         })
//         .catch((error)=>{
//            setError(error.message)
//             setIsLoading(false)
//         })
//       console.log(data);
//     }, 2000);
//   }, []);

//   return <div>
//     {isLoading && <h4>data is loading........</h4>}
//     {error && <p>{error}</p>}
//     </div>;
// };

// export default FatchData;


const FatchData = () => {
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [iserror,setIsError] = useState(null)
    
    useEffect(()=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            if(!res.ok){
                throw Error('data is not fetching succfuly')
            }
            return res.json()
        })
        .then((data)=>{
            setData(data)
            setIsLoading(false)
            setIsError(null)
        })
        .catch((error)=>{
            setIsError(error.message)
             
        })
        console.log(data);
        },2000);
    },[])
    return (
        <div>
            {isLoading && <h2>data is loading</h2>}
            {iserror && <h3>{iserror}</h3>}
        </div>
    );
};

export default FatchData;
