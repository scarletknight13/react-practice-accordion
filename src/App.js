import './App.css';
import Layer from './Layer';

function App() {
  let sectionText = [{'title' : 'Cops', 'paragraph' : `I've been driving for a couple of years now, and I've never had a run in with a cop.
In fact, I don't even know how they work, and I've never been pulled over.
So I was thrilled when I heard about an app that can detect a cop in your area and alert you if you are going to be pulled over.
It's now available for iOS and Android.
It's called Copwatch and is a crowdsourced app which`}, {'title' : 'Engineer', 'paragraph' : `To become a software engineer, all you need to know is a little bit of math and some computer science.
The more you know, the more you will benefit, but if you have a basic understanding of programming and know how to solve simple problems, you will be able to learn more as you go.
There's a lot you can do to “learn” as you go through your career.
You can learn online, through blogs, and through books and tutorials`}, {'title' : 'Google Glass', 'paragraph' : `The Google Glass is an augmented reality headset that allows you to see what you are looking at on your phone without having to look at it.
The Glass is like a Google Glass, but it is a lot more useful.
The Google Glass has a screen which is always on, but it only has a resolution of 1280 x 720. It's not very high resolution, but it's still better than the iPhone's 640 x 1136 screen and the iPhone X's.
The Glass`}, {'title' : 'Car', 'paragraph' : `Are you looking for a new set of wheels? You can now get a high-quality car at a great price.
Keywords to include: 
The car market is booming, according to the National Association of Automobile Dealers.
There is a shortage of qualified car salespeople, and it is expected to be a buyer's market for the next few years.
Do you want to know more about the car market?`}]
  function generateTabs(n){
    const tabs = [];
    for(let i = 0; i < n; ++i){
      tabs.push(<Layer id={i} title={sectionText[i]['title']} paragraph={sectionText[i]['paragraph'] }/>)
    }
    return tabs;
  }
  return (
    <div className="App">
      {generateTabs(4)}
    </div>
  );
}

export default App;
