import React from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Gender</th>
        <th>Education</th>
        <th>Action</th>
      </tr>
    </thead>
  )
};

const TableBody = (props) => {
  const id = props.characterEdit ? props.characterEdit.id: -1;
  const rows = props.characterData.map((row) => {
    let editBtn;
    if (row.id !== id){
       editBtn = <button onClick={() => props.editCharacter(row.id)}>Edit</button>;
    }
    const rowElm = (
       <>
         <td>{row.name}</td>
         <td>{row.job}</td>
         <td>{row.gender}</td>
         <td>{row.education}</td>
         <td>
            <button onClick={() => props.removeCharacter(row.id)}>Delete</button>
            {editBtn}
         </td>
       </>
    );
    if (row.id === id){
       return (
          <tr key={row.id} style={{ backgroundColor: '#ffffed' }}>
           {rowElm}
          </tr>      
       );
    }
    return (
       <tr key={row.id}>
        {rowElm}
       </tr>      
    );
  })

  return <tbody>{rows}</tbody>;
};


const Table = (props) => {
  const {characterData, removeCharacter, editCharacter, characterEdit} = props

  return (
    <table>
      <TableHeader />
      <TableBody 
          characterData={characterData} 
          removeCharacter={removeCharacter}
          editCharacter={editCharacter}
          characterEdit={characterEdit} 
      />
    </table>
  )
}

export default Table;
