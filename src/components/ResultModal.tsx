import { IoIosCloseCircle } from "react-icons/io";
import { useModalStore } from "./store/modalStore";
import { useValueStore } from "./store/valueStore";
import { FaFacebook, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ResultModal() {
  const setIsResultModalOpen = useModalStore(
    (state) => state.setIsResultModalOpen
  );

  const isEntryValid = useValueStore((state) => state.isEntryValid);
  const setIsEntryValid = useValueStore((state) => state.setIsEntryValid);

  const result = useValueStore((state) => state.result);
  if (!result.length) {
    console.log("Invalid Entry");
    setIsEntryValid(false);
  }
  console.log("result ", result);
  let i = 1;

  const listItem = result.map((item) => (
    <p className="text-3xl" key={i}>
      y({i++}) = {item}
    </p>
  ));

  return (
    <div className="h-screen w-screen absolute bg-containerColour flex justify-center items-center">
      <div className="bg-white h-[60%] w-[450px] relative flex flex-col p-20 justify-start items-center gap-10 rounded-xl shadow-xl">
        <IoIosCloseCircle
          className="absolute right-1 top-1 text-3xl text-closeResultModalButtonColour cursor-pointer"
          onClick={() => {
            setIsResultModalOpen(false);
            setIsEntryValid(true);
          }}
        />
        <h1 className="text-3xl font-medium border-b-2 w-full text-center">
          Result
        </h1>
        <div className="rounded w-full h-full p-4 flex flex-col justify-start items-center">
          {isEntryValid ? (
            <div className="flex flex-col gap-2">{listItem}</div>
          ) : (
            <div className="flex flex-col gap-2 text-red-600 text-2xl">
              Invalid Entry!!!
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="border-b-2 w-full text-center">Follow my socials</h1>
          <div className="flex justify-between text-4xl gap-10 text-slate-800 hover:text-text-slate-400">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaXTwitter />
            </a>
            <a href="">
              <FaInstagramSquare />
            </a>
            <a href="">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
