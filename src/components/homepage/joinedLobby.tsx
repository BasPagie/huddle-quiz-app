import Avatar from "@/assets/Avatar.svg";

const JoinedLobby = () => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-7 pt-4">You’re here!</h1>
      <p className="text-1xl font-normal leading-tight">
        Zie je jezelf op het scherm? Niet blij met je avatar? Bewerk hem hier:
      </p>
      <div className="flex flex-col flex-0 justify-center items-center gap-4">
        <img
          src={Avatar}
          alt="Avatar being used in the game"
          className="w-20 h-20"
        />
      </div>
      <form className="flex flex-col gap-4 w-full">
        <input
          type="text"
          placeholder="Gebruikersnaam..."
          className="p-4 rounded-full text-center bg-white text-neutral-900 placeholder-neutral-400 font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </form>
    </>
  );
};

export default JoinedLobby;
