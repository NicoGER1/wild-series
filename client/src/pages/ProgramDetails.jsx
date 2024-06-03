import { Link, useLoaderData } from "react-router-dom";

import ProgramList from "../components/ProgramList";

function ProgramsDetails() {
  const program = useLoaderData();

  return (
    <>
      <Link to={`/programs/${program.id}/edit`}>Modifier</Link>
      <ProgramList programs={program.programs} />
      <h1>{program.title}</h1>
      <img src={program.poster} alt={program.title} />
      <p>
        {program.country} {program.year}
      </p>
      <p>{program.synopsis}</p>
    </>
  );
}

export default ProgramsDetails;
