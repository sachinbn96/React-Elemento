import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import MainNavigation from "./MainNavigation";

export default function ModalExample() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const navigate = useNavigate();

  function handleOpenContactForm() {
    setContactModalOpen(true);
  }

  function handleCloseContactForm() {
    setContactModalOpen(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd);
    console.log(data);
  }

  console.log(contactModalOpen);

  return (
    <div>
      <MainNavigation />
      <button
        className="rounded-sm border-2 border-solid border-neutral-700 p-1 mx-1"
        onClick={handleOpenContactForm}
      >
        Contact Form
      </button>
      {contactModalOpen && (
        <Modal onClose={handleCloseContactForm}>
          <div className="w-96 h-96">
            <h1 className="m-4">Contact Form</h1>
            <form onSubmit={handleFormSubmit}>
              <div className="">
                <label htmlFor="name">Name</label>
                <input
                  className="border-2 border-solid"
                  type="text"
                  id="name"
                  name="name"
                />
                <br />
                <label htmlFor="email">Email</label>
                <input
                  className="border-2 border-solid"
                  type="teemailxt"
                  id="email"
                  name="email"
                />
                <br />
                <label htmlFor="desc">Description</label>
                <textarea
                  className="border-2 border-solid"
                  id="desc"
                  name="desc"
                />
                <br />
              </div>
              <button
                className="rounded-sm border-2 border-solid border-neutral-700 p-1 m-4"
                type="submit"
              >
                Submit
              </button>
            </form>
            <div className="flex justify-end">
              <button
                className="rounded-sm border-2 border-solid border-neutral-700 p-1 mx-1"
                onClick={handleCloseContactForm}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
