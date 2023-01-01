import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters: [],
    characterEdit: null
  };  
  
  removeCharacter = (index) => {
     const {characters} = this.state

     this.setState({
        characters: characters.filter((character) => {
           return character.id !== index
        }),
     })
  };  
  
  editCharacter = (index) => {
     const {characters} = this.state
     let character = characters.find(item => item.id === index);
     this.setState({characterEdit: character});
  };  
  
  handleSubmit = (character) => {
      if (character.id === -1){
         let id = this.state.characters.length ? this.state.characters[this.state.characters.length-1].id + 1 : 0;
         character.id = id;
         this.setState({characters: [...this.state.characters, character]});
         return;
      }
      
      let characters = this.state.characters;
      let idx = characters.findIndex(item => item.id === character.id);
      characters[idx] = character;
      this.setState({characters: characters, characterEdit: null});
  }; 
  
  render() {
    const { characters, characterEdit } = this.state;
    let headTitle = 'Add New';
    let descriptionTitle = 'Add a character with a name and a job to the table.';
    if (characterEdit){
       headTitle = 'Update Record';
       descriptionTitle = "Update the selected character's record";
    }
    
    return (
      <div className="container">
        <h1>React App Demo</h1>
        <h5 className="text-right">
           React Native Expo Publish: <a href="https://expo.dev/@jglchen/react-app-demo" target="_blank"  rel="noreferrer">https://expo.dev/@jglchen/react-app-demo</a>
        </h5>
        <p>{descriptionTitle}</p>        
        <div style={{width: '100%'}}>
           <div className="horizontal-scroll">
             <Table 
                characterData={characters} 
                removeCharacter={this.removeCharacter} 
                editCharacter={this.editCharacter} 
                characterEdit={characterEdit}
             />
           </div>
        </div>
        <h3>{headTitle}</h3>
        <Form characterEdit={characterEdit} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App;
