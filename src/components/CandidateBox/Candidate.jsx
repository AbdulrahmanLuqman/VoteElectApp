import React from "react";
import Card from "./CandidateCard";
import { FaArrowLeft, FaSearch, FaTimesCircle } from "react-icons/fa";

const Candidate = () => {
    const [search, setSearch] = React.useState("");

  const candidates = [
    {
      id: 1,
      logo: "https://via.placeholder.com/150",
      picture: "https://via.placeholder.com/150",
      title: "Aminat Danjuma",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileLink: "/profile1",
      voteLink: "/stepform",
    },
    {
      id: 2,
      logo: "https://via.placeholder.com/150",
      picture: "https://via.placeholder.com/150",
      title: "Ebuka David",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileLink: "/profile2",
      voteLink: "/stepform",
    },
    {
      id: 3,
      logo: "https://via.placeholder.com/150",
      picture: "https://via.placeholder.com/150",
      title: "Oyemade Emmanuel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileLink: "/profile3",
      voteLink: "/stepform",
    },
    {
      id: 4,
      logo: "https://via.placeholder.com/150",
      picture: "https://via.placeholder.com/150",
      title: "Ode Tola",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileLink: "/profile4",
      voteLink: "/stepform",
    },
    {
      id: 5,
      logo: "https://via.placeholder.com/150",
      picture: "https://via.placeholder.com/150",
      title: "oye Wusi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileLink: "/profile5",
      voteLink: "/stepform",
    },
    {
      id: 6,
      logo: "https://via.placeholder.com/150",
      picture: "https://via.placeholder.com/150",
      title: "Abisogun Daniel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      profileLink: "/profile6",
      voteLink: "/stepform",
    },
  ];

  return (
    <div className="mx-4 my-6">
        <FaArrowLeft className="mb-8"/>
      <div className="flex items-center gap-2 w-full py-4 bg-gray-200 rounded-lg border-2 border-solid pl-4 border-gray-300 ">
        <FaSearch className="text-gray-400 text-xl" />
        <input
          type="text"
          placeholder=" Search election or year"
          className="font-semibold text-xl bg-inherit focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="my-4 flex items-center gap-2">
        <div className="bg-green-400 text-white rounded py-2 px-4 flex justify-center items-center gap-2">Presidential <FaTimesCircle/> </div>
        <div className="bg-green-400 text-white rounded py-2 px-4 flex justify-center items-center gap-2">Presidential <FaTimesCircle/> </div>
      </div>
      {candidates.map((candidate) => (
        <Card
          key={candidate.id}
          logo={candidate.logo}
          picture={candidate.picture}
          title={candidate.title}
          description={candidate.description}
          profileLink={candidate.profileLink}
          voteLink={candidate.voteLink}
        />
      ))}
    </div>
  );
};

export default Candidate;
