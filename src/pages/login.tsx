import PeopleSvg from "../assets/people.svg";

export default function () {
  return (
    <div class="min-h-[20rem] h-[50vh] w-[50vw] flex items-center">
      <img
        src={PeopleSvg}
        alt="people"
        class="w-[40%] h-full p-5 bg-sky-200 rounded-l-lg pointer-events-none select-none"
      />
    </div>
  );
}
