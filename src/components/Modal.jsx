export default function Modal({ id, title, onClose, children }) {
  return (
    <div
      id={id}
      className="modal"
      style={{ display: 'flex' }}
      onClick={(e) => { if (e.target.classList.contains('modal')) onClose() }}
    >
      <div className="modal-content">
        <h2>{title}</h2>
        {children}
        <button className="close-btn" onClick={onClose} style={{ marginTop: 15 }}>
          Close
        </button>
      </div>
    </div>
  )
}