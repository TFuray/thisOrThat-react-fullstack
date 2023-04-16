const BtnModal = ({openModal}) => {
  return (
    <button
      type="button"
      onClick={openModal}
      className="btn btn-primary"
    >
      Log In
    </button>
  )
}
export default BtnModal