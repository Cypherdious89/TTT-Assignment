import './App.css';
import {
    useState
} from "react";
import Histogram from './Histogram';

const links = {
    Youtube: 'youtube.com/terriblytinytalkies',
    Facebook: 'fb.com/terriblytinytales',
    Instagram: '@ttt_official',
    Twitter: '@terriblytiny',
    Contact: 'hello@terriblytinytales.com',
    Collab: 'collab@terriblytinytales.com',
    Events: 'events@terriblytinytales.com',
    Testing: 'http://bit.ly/terribly-tiny-test'
}

const setWordsLowerCase = (ele) => {
    let res = ele;
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i].toLowerCase();
    }
    return res;
}

const getFrequency = (ele) => {
    const hashMap = new Map();
    ele.forEach(word => {
        if (hashMap.has(word)) {
            hashMap.set(word, hashMap.get(word) + 1);
        } else {
            hashMap.set(word, 1);
        }
    });
    return hashMap;
}

const get20MostFrequentWords = (hashMap) => {
    let sortedMap = new Map([...hashMap.entries()].sort((a, b) => b[1] - a[1]));
    let result = [];
    let cnt = 0;
    sortedMap.forEach((frequency, word) => {
        if (cnt < 20) {
            result.push({
                word,
                frequency
            });
        }
        cnt++;
    })
    return result;
}


var result = [];

function App() {
    const [data, setData] = useState("");
    const [graph, setgraph] = useState(false);
    // const [received, setReceived] = useState(false);
    const [freqWord, setFreqWord] = useState([]);
    const fetchData = async () => {
        await fetch('https://www.terriblytinytales.com/test.txt')
            .then(response => {
                return response.text()
            }).then(d => {
                setData(d);
            }).then(() => {
                let arr = data.split('\n').filter(e => e !== "");
                let ans = [];
                for (let i = 0; i < arr.length; i++) {
                    let temp = arr[i].split(' ');

                    for (let j = 0; j < temp.length; j++) {
                        if (temp[j].includes(links.Youtube)) temp[j] = 'Youtube Link';
                        if (temp[j].includes(links.Facebook)) temp[j] = 'Facebook Link';
                        if (temp[j].includes(links.Instagram)) temp[j] = 'Instagram Link';
                        if (temp[j].includes(links.Contact)) temp[j] = 'Contact Mail';
                        if (temp[j].includes(links.Collab)) temp[j] = 'Collab Mail';
                        if (temp[j].includes(links.Events)) temp[j] = 'Events Mail';
                        if (temp[j].includes(links.Testing)) temp[j] = 'Testing Link';
                        if (temp[j].includes(links.Twitter)) temp[j] = 'Twitter Link';
                    }

                    for (let j = 0; j < temp.length; j++) {
                        temp[j] = temp[j].replace(/[^\w\s\\']|_/g, "").replace(/\s+/g, " ");
                        ans.push(temp[j]);
                    }

                }
                ans = ans.filter(e => e !== "");
                // console.log(ans);
                ans = setWordsLowerCase(ans);
                const freqMap = getFrequency(ans);
                result = get20MostFrequentWords(freqMap);
                setFreqWord(result);

            })
        setgraph(graph => "true")
    }

    return ( 
        <div className = "App" >
            <header className = "App-header" >
                <h1 > Click submit to fetch data! </h1> 
                <button className = "submit-btn"onClick = {() => fetchData()} > Submit </button>  
                {graph && ( <Histogram arr = {freqWord} /> )}   
            </header> 
        </div>
    );
}

export default App;