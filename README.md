# TTT-Assignment
* This repository contains the code of Assignment task provided by Terribly Tiny Tales for the Internship role.
* We are fetching text data from the provided site link and then we are counting the 20 most frequent words in the data and plotting its Histogram based on the result.
* The webpage is deployed on netlify and can be accessed from here : https://frequency-checker-api.netlify.app/


## Working
* The react code mainly consists of two files here : App.js for the working code and Histogram.js for the chart.
* The bar chart used here is created using __Chart.js__ (4.0.1).
* No other additional plugins are used.
### App.js Working
App.js consists of the following functions which is created for code implementation.

  1. __fetchData__ : Here we are feteching the data from 'https://www.terriblytinytales.com/test.txt', parsed the text data and created a *useState* to store all the words in an array. This function is then assigned to the submit button and on clicking the button, *onClick* event is called which triggers the *useEffect* Component.
  2. __displayData__ : First we split the sentence on basis of white space. We store all the words in that sentence in a temporary array. We create an object for links present in text to preserve their state. If we encounter the links, they are changed to Normal Text in array while processing. Then we use the *Regex* to remove all punctuation marks for the splitted words. Finally we add the the proceesed word in the final ans array.
  3. __setWordsLowerCase__ : Here we set all the words to lower case to have consistent data for the mixed cased words.
  4. __getFrequency__ : Here we create a hashmap and store the key value pairs of word and their frequency.
  5. __get20MostFrequentWords__ : Here we are sorting the map and storing top 20 most frequent words in the result array. The top 20 words from the fetched data are :
        1: {word: 'i', frequency: 27}

        2: {word: 'a', frequency: 23}

        3: {word: 'to', frequency: 22}

        4: {word: 'you', frequency: 18}

        5: {word: 'can', frequency: 16}

        6: {word: 'the', frequency: 15}

        7: {word: 'and', frequency: 14}

        8: {word: 'of', frequency: 13}

        9: {word: 'do', frequency: 12}

        10: {word: 'on', frequency: 11}

        11: {word: 'us', frequency: 11}

        12: {word: 'it', frequency: 11}

        13: {word: 'we', frequency: 10}

        14: {word: 'at', frequency: 10}

        15: {word: 'where', frequency: 9}

        16: {word: 'your', frequency: 9}

        17: {word: 'in', frequency: 9}

        18: {word: 'for', frequency: 8}

        19: {word: 'ttt', frequency: 8}

        20: {word: 'our', frequency: 8}

### Histogram.js Working
* From the above data, we store its frequency and word as a state using *useState* and pass it to Histogram.js as a *prop*.
* The words are then mapped as labels on x-axis and frequency is labelled on y-axis.
* The Histogram is finally rendered. We use another state in App.js to fix its visbility, so that it remanins in DOM once it is rendered by *setting setGraph state to true after first call*.