import Spinner from "../Spinner";

function SaveQuizModal({ isDone }: { isDone: boolean }) {
  return (
    <div className="fixed flex justify-center items-center top-0 bg-neutral-900/[0.8] w-full h-full">
      {isDone ? (
        <div className="text-2xl font-bold text-green-200">
          Quiz saved successfully!
        </div>
      ) : (
        <Spinner size="16" />
      )}
    </div>
  );
}

export default SaveQuizModal;
