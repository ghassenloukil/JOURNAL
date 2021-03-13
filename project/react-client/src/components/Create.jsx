import React from 'react'

const Create =({handleChange,onSubmit})=>{
    return (
<div className="create">
  <div className="create-editor">
    <h2>AUTHOR</h2>
    <form>
      <input className="create-input" type="text"  placeholder="Post Title" name="title" onChange={(e)=>(handleChange(e))}></input>
      <input className="create-input" type="text"  placeholder="Author" name="author" onChange={(e)=>(handleChange(e))}></input>
      <input className="create-input" type="text"  placeholder="Image URL" name="Image URL" onChange={(e)=>(handleChange(e))}></input>
      <textarea className="create-body-textarea"  placeholder="Post Body" name="Post Body" onChange={(e)=>(handleChange(e))}></textarea>
      <button className="create-submit-button" type="submit" onClick={() =>{onSubmit()}}>Posted</button>
    </form>
  </div>

   
  </div>

    )}
export default Create;