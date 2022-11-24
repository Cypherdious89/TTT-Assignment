import './App.css';
import {
    useState
} from "react";

function App() {
    const [data, setData] = useState("");
    // const [freq, setFreq]=useState({});
    const fetchData = async () => {
        await fetch('https://www.terriblytinytales.com/test.txt')
            .then(response => {return response.text()})
            .then(d => {setData(d)})
            let arr = data.split('\n').filter(e=>e!=="");
            let ans=[];
            // console.log(arr);
            for(let i=0 ; i<arr.length; i++){
                let temp=arr[i].split(' ');
                
                for(let j=0; j<temp.length; j++){
                    if(temp[j].includes('.com') || temp[j].includes('@') || temp[j].includes('http')){
                        temp[j] = "LINK";
                    }
                }

                for(let j=0 ; j<temp.length; j++){
                    temp[j] = temp[j].replace(/[^\w\s\\']|_/g, "").replace(/\s+/g, " ");
                    ans.push(temp[j]);
                    // console.log(temp[j]);
                }

            }
            ans = ans.filter(e=> e !== "");
            console.log(ans);
    }

    return ( 
        <div className = "App" >
            <header className = "App-header" >
                <h1 > Click submit to fetch data! </h1>
                <button className = "submit-btn"onClick = {() => fetchData()} > Submit </button> 
            </header>
        </div>
    );
}

export default App;