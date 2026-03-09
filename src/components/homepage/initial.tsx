import { Link } from "react-router-dom";
import { Button } from "@/components";

type InitialContentProps = {
  setActiveContent: React.Dispatch<React.SetStateAction<number>>;
};

const InitialContent = ({ setActiveContent }: InitialContentProps) => {
  return (
    <>
      <h1 className="text-5xl font-bold leading-7 pt-4">Let’s Huddle!</h1>
      <p className="text-1xl font-normal leading-tight">
        Dagelijkse vragen en de wekelijkse vrijdagquiz, <br /> je vindt ze hier!
      </p>
      <div className="px-3 gap-4 flex flex-col justify-center">
        <div className="flex justify-center gap-4 ">
          <Button
            copy="Deel mee met een Quiz!"
            variant="primary"
            fullWidth
            onClick={() => setActiveContent(1)}
          />
        </div>
        <div className="flex justify-center gap-4">
          <Link to="/join-quiz" className="flex-1">
            <Button copy="Vraag van de dag!" variant="secondary" fullWidth />
          </Link>
          <Link to="/create-quiz" className="flex-1">
            <Button
              copy="Quiz Database"
              variant="tertiary"
              fullWidth
              disabled
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default InitialContent;
