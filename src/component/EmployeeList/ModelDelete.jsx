import './delete.css';

const ModalDelete = ({ isOpen, closeModal, handleDelete }) => {


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
