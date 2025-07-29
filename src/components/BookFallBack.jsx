import BookList from "./BookList";
import BookModal from "./BookModal";
import ModalContainer from "./common/ModalContainer";


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
