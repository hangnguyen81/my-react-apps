import {useReducer} from 'react';
import friendlyWords from 'friendly-words';

let backgrounds = [
  'Noble',
  'Urchin',
  'Folk Hero',
  'Acolyte',
  'Criminal',
  'Hermit',
  'Guild Artisan',
  'Sage',
];

function randomBackground() {
    return backgrounds[Math.floor(Math.random() * backgrounds.length)]
  }
  
function randomName() {
  let array = friendlyWords.predicates
  let string = array[Math.floor(Math.random() * array.length)]
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function App() {  
  let [state, dispatch] = useReducer((state, action) =>{
    switch (action.type){
      case 'SET_BG':{
        return {...state, background: action.value, error:null}
      }
      case 'NONEEXISTING_BG':{
        return {...state, error:'This background does NOT exist.'}
      }
      case 'CHANGE_MODE':{
        return {...state, darkMode: !state.darkMode}
      }
      case 'SET_NAME':{
        if (action.value.length > 15)
          return {...state, name: action.value, error: 'Name is WAY too long'}
        return {...state, name: action.value}
      }
      case 'RANDOM_VALUES':{
        return {...state, name:randomName(), background: randomBackground() }
      }
      case 'DISMISS_ERROR_MESSAGE':{
        return {...state, error: null}
      }
      default: return state;
    }

  },{
    darkMode: false,
    name: '',
    background:'',
    error: null
  })

  let {darkMode, name, background, error} = state

  function handleBackgroundSelect(event) {
    let value = event.target.value
    dispatch({type:'SET_BG', value})
    if (!backgrounds.includes(value)) {
      dispatch({type:'NONEEXISTING_BG'})
    } 
  }

  return (
    <>
      <div className={`App ${darkMode ? 'darkmode' : ''}`}>
        <button
          onClick={() => {
            dispatch({type:'CHANGE_MODE'})
          }}
        >
          Dark Mode {darkMode ? 'ON' : 'OFF'}
        </button>{' '}
        <br />
        <input
          type="text"
          placeholder="Type your name"
          value={name}
          onChange={(event) => {
            dispatch({type:'SET_NAME', value: event.target.value})
            if (event.target.value.length > 15) {
              dispatch({type:'NAME_TOO_LONG'})
            }
          }}
        />
        <select value={background} onChange={handleBackgroundSelect}>
          {backgrounds.map((b) => {
            return <option key={`bg-${b}`}>{b}</option>
          })}
        </select>
        <button
          onClick={() => {
            dispatch({type: 'RANDOM_VALUES'})
          }}
        >
          Do it all for me instead
        </button>
        {error && (
          <div className="error">
            {error}
            <button
              onClick={() => {
                dispatch({type:'DISMISS_ERROR_MESSAGE'})
              }}
            >
              Dismiss
            </button>
          </div>
        )}
        <div className="sheet">
          <h3>Name: {name}</h3>
          <h3>Background: {background}</h3>
        </div>

      </div>
    </>
  )
}

export default App;
