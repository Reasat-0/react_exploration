
import Clock from './components/Clock'
import Form from './components/Controlled_uncontrolled/Form'
import TempCalculator from './components/LiftingStateUp/TempCalculator'



import Inheritence from './components/Composition_Or_Inheritence/Inheritence/text'


import EmojiC from './components/Composition_Or_Inheritence/Composition/Emoji'
import TextC from './components/Composition_Or_Inheritence/Composition/Text'
import BracketC from './components/Composition_Or_Inheritence/Composition/Bracket'

const App = props => {
  return (
    // <NavMenu/>
    // <Clock/>
    <>
      {/* <TempCalculator/> */}


      {/* Composition or Inheritence */}

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

      <EmojiC>
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

      </EmojiC>


    </>
  );
}

export default App;
