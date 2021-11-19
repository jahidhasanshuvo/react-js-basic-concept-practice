import React, { useCallback, useEffect, useRef, useState } from "react";
// import Modal from "styled-react-modal";
import { Button, Modal } from "react-bootstrap";

const FancyModal = (props) => {
  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            props.onClose();
          }}
        >
          Close
        </Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default function FancyModalButton() {
  const [Data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(Data);
  const [hasFocus, setFocus] = useState(false);
  const ref = useRef(null);
  const closeModal = () => {
    setFocus(false);
  };
  return (
    <>
      <form action="">
        <FancyModal show={hasFocus} onClose={closeModal} />
        <input
          onFocus={() => {
            ref.current.focus();
            setFocus(true);
          }}
          type="text"
          name="guest"
          placeholder="text"
          style={{ border: "1px solid yellow" }}
        />

        <input ref={ref} type="number" name="location" placeholder="number" />
        <button>Search</button>
      </form>
    </>
  );
}
