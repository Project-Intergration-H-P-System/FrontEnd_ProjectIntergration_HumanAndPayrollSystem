import Modal from 'react-modal';
import './delete.css';

const ModalDelete = ({ isOpen, closeModal, handleDelete }) => {

    // <Modal
    //     isOpen={isOpen}
    //     onRequestClose={closeModal}
    //     className="modal"
    //     overlayClassName="modal-overlay"
    //     appElement={document.getElementById('root')}
    // >
    //     <div>
    //         <div>
    //             <p> Are you sure you want to delete the employee?</p>
    //         </div>

    //         <div className="modal-buttons">
    //             <button
    //                 className="close-button"
    //                 onClick={closeModal}
    //             >
    //                 Cancel
    //             </button>
    //             <button
    //                 className="save-button"
    //                 onClick={handleDelete}
    //             >
    //                 Delete
    //             </button>

    //         </div>
    //     </div>
    // </Modal>

    if (!isOpen) return null;

    return (
        <div className="overlayDELETE">
            <div className="modalDELETE">
                <div className="modal-contentDELETE">
                    <h2>Confirm Delete</h2>
                    <p>Are you sure you want to delete this employee?</p>
                    <div className="modal-buttonsDELETE">
                        <button className="cancel-buttonDELETE" onClick={closeModal}>Cancel</button>
                        <button className="confirm-delete-buttonDELETE" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ModalDelete;
