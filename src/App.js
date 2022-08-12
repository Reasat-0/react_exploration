
import Clock from './components/Clock'
import Form from './components/Controlled_uncontrolled/Form'
import TempCalculator from './components/LiftingStateUp/TempCalculator'



import Inheritence from './components/Composition_Or_Inheritence/Inheritence/text'


import EmojiC from './components/Composition_Or_Inheritence/Composition/Emoji'
import TextC from './components/Composition_Or_Inheritence/Composition/Text'
import BracketC from './components/Composition_Or_Inheritence/Composition/Bracket'


// Higher Order Component
import ClickCounterBefore from './components/HOC/BeforeHOC/ClickCounter'


import ClickCounterAfter from './components/HOC/AfterHOC/ClickCounter'
import HoverCounterAfter from './components/HOC/AfterHOC/HoverCounter'



// Render Props
import RenderProps from './components/RenderProps'
import Bulb from './components/RenderProps/UniqueComponents/Bulb'
import Fan from './components/RenderProps/UniqueComponents/Fan'


// Custom Context
import BuildingContext from './CustomContexts/buildingContext'

// Context API -
import ContextAPI from './components/Ctxt_API_Hands_On';
import Cabin from './components/Ctxt_API_Hands_On/Building_to_work/Shopping/Floor/Cabin/Cabin.js';
import Room from './components/Ctxt_API_Hands_On/Building_to_work/Shopping/Floor/Cabin/Room/Room.js';




// ============= Again ==============

// lifting state up...
import TemperatureCalculator from "./components/LiftingStateUp_again/TemperatureCalculator"










const App = props => {
  return (
    // <NavMenu/>
    // <Clock/>
    <>
      {/* <TempCalculator/> */}


      {/* ============= Composition or Inheritence ================= */}

      {/* Demerits of Inheritence 
      
        1. Components get tiedly connected.
        2. Gets no idea about the parent component & relation with child
        3. Nested components making will get complicated.
        4.
      
      */}



      {/* <Inheritence/> */}

      {/* Compositio means passing using a parent component's content with a props in child component.
          Parent will send that content by a parameter and will be received in child as props.
      */}

      {/* <EmojiC>
        { 
          ({addEmo}) => 
              (

              <BracketC> 
                { 
                
                  ({addBra}) => <TextC addEmoji={addEmo} addBracket={addBra} />
                    
                } 
              </BracketC> 
              )
          
          }

      </EmojiC> */}

      {/* ============= end of Composition or Inheritence ================= */}




      {/* ============= Higher Order Component HOC =============== */}
      {/* Lets say i have two counter having almost same functionality. 
      
        Like we have one click and one mouse over counter...we needed to create two components with almost
        same code. So, we had code duplicacy.

        So we can make a component whcih will receive an original component as parameter and return
        a new component with some changes data. That can be valid for the original component
      */}


      {/* 
      
        <ClickCounterBefore/>

        <ClickCounterAfter/>
        <HoverCounterAfter/> 
      
      */}

      {/* ============= end of Higher Order Component HOC =============== */}


      
      {/* ================ Render Props ==================== */}


      {/* <RenderProps render={(bill, turnedOn , turnOnOff) => ( 
          <Bulb bill={bill} turnedOn={turnedOn} turnOnOff={turnOnOff}/>
        )}
      /> */}

      
      {/* ============= end of Render Props =============== */}


      {/* ================ Custom Context ============ */}

      {/* ================ Custom Context ============ */}

      {/* ================ Context API ==================== */}

        <ContextAPI>
          { (test_value) => ( 
            <Room test_value={test_value}/> 
          )}
        </ContextAPI>
      {/* ============= end of Context API =============== */}












      {/* ################ ================== AGain ================== ################## */}


      <TemperatureCalculator/>

    </>
  );
}

export default App;
