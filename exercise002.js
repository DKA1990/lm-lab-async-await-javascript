import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";
const catFacts = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1";
const pirateTranslate = 'https://api.funtranslations.com/translate/pirate.json';

/*const fetchData = (apiEndPoint) => {
  fetch(apiEndPoint)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
};

fetchData(jsonTypicode);*/

const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
}

fetchData(jsonTypicode);

// This seemed good in theory. The amount of actual facts vs random gibberish is depressingly small!
const fetchCatFacts = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const jsonData = await response.json();
    console.log(jsonData.text);
  } catch (error) {
    console.log(error);
  }
}

fetchCatFacts(catFacts);

const translateToPirate = async (apiEndPoint, textToConvert) => {
  const data = { text: textToConvert };
  try {
    const response = await fetch(apiEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    console.log(jsonData.contents.translated);
  } catch (error) {
    console.log(error);
  }
}

translateToPirate(pirateTranslate, 'She sells sea shells on the sea shore');