import "./style.css"
import pixel_1943 from "./assets/colours_pixel/pixel_1943.jpg"
import pixel_1945 from "./assets/colours_pixel/pixel_1945.jpg"
import pixel_1953 from "./assets/colours_pixel/pixel_1953.jpg"
import pixel_1985 from "./assets/colours_pixel/pixel_1985.jpg"
import pixel_2000 from "./assets/colours_pixel/pixel_2000.jpg"
import pixel_2002 from "./assets/colours_pixel/pixel_2002.jpg"
import pixel_2005 from "./assets/colours_pixel/pixel_2005.jpg"
import pixel_2006 from "./assets/colours_pixel/pixel_2006.jpg"
import pixel_2009 from "./assets/colours_pixel/pixel_2009.jpg"
import pixel_2010 from "./assets/colours_pixel/pixel_2010.jpg"
import pixel_2012 from "./assets/colours_pixel/pixel_2012.jpg"
import pixel_2014 from "./assets/colours_pixel/pixel_2014.jpg"
import pixel_2015 from "./assets/colours_pixel/pixel_2015.jpg"
import pixel_2016 from "./assets/colours_pixel/pixel_2016.jpg"
import pixel_2017 from "./assets/colours_pixel/pixel_2017.jpg"
import pixel_2018 from "./assets/colours_pixel/pixel_2018.jpg"
import pixel_2019 from "./assets/colours_pixel/pixel_2019.jpg"
import pixel_2020 from "./assets/colours_pixel/pixel_2020.jpg"
import pixel_2021 from "./assets/colours_pixel/pixel_2021.jpg"

import waterfall_2021 from "./assets/sounds/waterfall_2021.mp3"
import bourne_supremacy_movie_2004_1 from "./assets/sounds/bourne_supremacy_movie_2004_1.mp3"
import rosa_luxemburg_movie_1986 from "./assets/sounds/rosa_luxemburg_movie_1986.mp3"
import spring_2012 from "./assets/sounds/spring_2012.mp3"
import wings_of_desire_movie_1987 from "./assets/sounds/wings_of_desire_movie_1987.mp3"
import zoo_2021 from "./assets/sounds/zoo_2021.mp3"


import {
  useState, useEffect  
} from "react"

function App() {
  const [ index, setIndex ] = useState(0)
  const [ nextIndex, setNextIndex ] = useState(0)

  const images = [
    pixel_1943,
    pixel_1945,
    pixel_1953,
    pixel_1985,
    pixel_2000,
    pixel_2002,
    pixel_2005,
    pixel_2006,
    pixel_2009,
    pixel_2010,
    pixel_2012,
    pixel_2014,
    pixel_2015,
    pixel_2016,
    pixel_2017,
    pixel_2018,
    pixel_2019,
    pixel_2020,
    pixel_2021
  ]

  const sounds = [
    waterfall_2021,
    bourne_supremacy_movie_2004_1,
    rosa_luxemburg_movie_1986,
    spring_2012,
    wings_of_desire_movie_1987,
    zoo_2021,
    waterfall_2021,
    bourne_supremacy_movie_2004_1,
    rosa_luxemburg_movie_1986,
    spring_2012,
    wings_of_desire_movie_1987,
    zoo_2021,
    waterfall_2021,
    bourne_supremacy_movie_2004_1,
    rosa_luxemburg_movie_1986,
    spring_2012,
    wings_of_desire_movie_1987,
    zoo_2021,
    spring_2012
  ]

  function updatePrev(prev){
    if(prev===images.length-1){
      return 0
    } else{
      return prev + 1
    }   
  }

  function changeIndex(fn){
      fn(updatePrev)
  }

  function effect(){
    setInterval(()=>changeIndex(setIndex), 3000)
    setTimeout(()=>setInterval(()=>changeIndex(setNextIndex), 3000), 100)
  }

  useEffect(effect, [])
  
  function getNextImage(){
    if(nextIndex===images.length-1){
      return 0
    } else{
      return nextIndex + 1
    }   
  }

  return (<>
    <img src={images[getNextImage()]}></img>
    <img src={images[index]} className="front-image"></img>
    <audio autoPlay src={sounds[index]} preload></audio>
  </>);
}

export default App;
