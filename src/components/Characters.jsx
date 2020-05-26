import React, { useState, useEffect } from "react";
import AddCharacter from "../components/AddCharacter";
import EditCharacter from "../components/EditCharacter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions } from "../features/characters";
import { actions as actionsEdit } from "../features/editCharacter";
import "../popup.css";
import "../form.css";

const Characters = () => {
  const dispatch = useDispatch();
  const charactersData = useSelector((state) => state.characters);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  //---------------
  const [searchTerm, setSearchTerm] = useState("");
  const [resultList, setResultList] = useState(charactersData);

  useEffect(() => {
    setResultList(charactersData);
  }, [charactersData]);

  const handleChange = (e) => {
    console.log(charactersData);
    setSearchTerm(e.target.value);
    setResultList(
      charactersData.filter(
        (person) =>
          person.name.toLowerCase().includes(e.target.value) ||
          person.name.toUpperCase().includes(e.target.value)
      )
    );
  };
  //-------------------

  let maybeAdd = null;
  if (showAdd) {
    maybeAdd = <AddCharacter setShowAddChild={setShowAdd} />;
  }
  let maybeEdit = null;
  if (showEdit) {
    maybeEdit = <EditCharacter setShowAddChild={setShowEdit} />;
  }

  const handleEdit = (char) => {
    dispatch(actionsEdit.addToEditForm(char));

    setShowEdit(!showEdit);
  };

  const SearchBar = (
    <div className="SearchBar" style={{ marginBottom: "30px" }}>
      <input
        className="character-input"
        type="text"
        placeholder="Sök efter karaktärer ..."
        name="sök karktärer"
        value={searchTerm}
        onChange={handleChange}
      ></input>
    </div>
  );

  const outputCharacters = resultList.map((charItem) => (
    <div className="character-item" key={charItem.name}>
      <div className="card-content">
        <div className="name-box">
          <div className="name"> {charItem.name} </div>
          <div className="btm-box">
            <div className="btm-edit-box">
              <button
                className="btm-edit"
                onClick={() => handleEdit(charItem)}
              ></button>
            </div>
            <div className="btm-delete-box">
              <button
                className="btm-delete"
                onClick={() => dispatch(actions.removeCharacter(charItem.name))}
              ></button>
            </div>
          </div>
        </div>
        <div className="world">
          <div className="world-text"> VÄRLD: {charItem.world} </div>
          <div className="world-pic"> {charItem.pic} </div>
        </div>
        <div className="backstory"> BACKSTORY: {charItem.backstory} </div>
        <div className="iq">INTELLIGENS:</div>
        <input
          readOnly
          type="range"
          max="10"
          value={charItem.intelligence}
        ></input>
        <div className="power"> STYRKA: </div>
        <input readOnly type="range" max="10" value={charItem.strength}></input>
        <div className="id"> ID: {charItem.id} </div>
      </div>
    </div>
  ));
  return (
    <div className="border">
      {SearchBar}
      <button
        className="btm-add-character"
        onClick={() => setShowAdd(!showAdd)}
      >
        Add character
      </button>
      <div className="container">
        <div className="persons">{outputCharacters}</div>
      </div>
      {maybeAdd}
      {maybeEdit}
    </div>
  );
};

export default Characters;
