import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        color: "black",
    },
};
function MyModal({ open, anime, closeModal }) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    console.log(anime.title)
    function afterOpenModal() {
        subtitle.style.color = "#0060F0";
    }
    return (
        <div>
            <Modal
                isOpen={open}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                    {anime.title && anime.title}
                </h2>
                {/* <img src={`https://node-exe.vercel.app/public/${car.Image}`} alt="" /> */}
                {/* <p>Model : {car.year && car.year}</p>
                <p>Brand : {car.brand && car.brand}</p>
                <p>Price : {car.price && car.price}</p>
                <p>Mileage : {car.kilometers && car.kilometers}</p> */}
                <button onClick={closeModal}>Watch Now</button>
            </Modal>
        </div>
    );
}
export default MyModal







