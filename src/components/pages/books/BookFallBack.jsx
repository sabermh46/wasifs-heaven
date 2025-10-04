import BookList from ".";
import ModalContainer from "../../common/ModalContainer";
import BookModal from "./BookModal";




export default function FallbackBooksWithModal() {
  return (
    <>
      <div className="pointer-events-none">
        <BookList />
      </div>
      <ModalContainer>
        <BookModal />
      </ModalContainer>
    </>
  )
}
