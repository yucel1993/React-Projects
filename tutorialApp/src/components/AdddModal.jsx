import { useState, useEffect } from "react";
import axios from "axios";

function AdddModal({ editItem, getTutorials }) {
  console.log(editItem);

  const { id, description: oldDescription, title: oldTitle } = editItem;
  console.log("old", oldTitle);
  console.log("old", oldDescription);
  //? https://react.dev/reference/react/useState#usestate
  //! State degiskeninin degeri, 1.render ile initialState
  //! parametresinin ilk degerini alir. Dolayisiyle bu durumda
  //! prop'tan gelen ilk deger state'e aktarilir.
  //! Sonradan degisen props degerleri useState'e aktarilmaz.
  //! Eger props'tan gelen degerleri her degisimde useState'e
  //! aktarmak istersek useEffect hook'unu componentDidUpdate
  //! gibi kullanabiriz.
  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);

  //? componentDidUpdate
  useEffect(() => {
    setTitle(oldTitle);
    setDescription(oldDescription);
    //? oldTitle veya oldDescriptiion her degistiginde local title ve description state'lerimizi guncelliyoruz.
  }, [oldTitle, oldDescription]);

  console.log(title); //ilk render da undefined
  console.log(description);

  const editTutor = async tutor => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";

    try {
      await axios.put(`${BASE_URL}/${id}/`, tutor);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  const handleSubmit = e => {
    e.preventDefault();
    editTutor({ title, description });
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Tutorial
              </h5>
            </div>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              
            />
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter your title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    placeholder="Enter your Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-danger mb-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdddModal;
