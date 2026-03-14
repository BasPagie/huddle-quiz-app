import { Button } from "@/components";
import qrCode from "@/assets/qr-code.png";

type JoiningLobbyProps = {
  setActiveContent: React.Dispatch<React.SetStateAction<number>>;
};

const JoiningLobby = ({ setActiveContent }: JoiningLobbyProps) => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-7 pt-4">Time to join!</h1>
      <p className="text-1xl font-normal leading-tight">
        Voeg de sessie code en je naam in en het feest kan beginnen joh!
      </p>
      <div className="gap-8 flex flex-row flex- justify-center">
        <form className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Sessie Code..."
            className="p-4 rounded-full text-center bg-white text-neutral-900 placeholder-neutral-400 font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            placeholder="Gebruikersnaam..."
            className="p-4 rounded-full text-center bg-white text-neutral-900 placeholder-neutral-400 font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <Button
            copy="Naar de Quiz!"
            variant="primary"
            onClick={() => setActiveContent(2)}
            fullWidth
          />
        </form>
        <div className="flex flex-col flex-0 justify-center items-center gap-4">
          <p className="text-sm text-white/70 -mt-1.5">
            Of doe mee met je smartphone!
          </p>
          <img src={qrCode} alt="qr code" className="w-20 h-20" />
        </div>
      </div>
    </>
  );
};

export default JoiningLobby;
