import { Form, useLoaderData } from "react-router-dom";

function ProgramEdit() {
  const loaderData = useLoaderData();

  return (
    <>
      <Form method="put">
        <label htmlFor="title">Title</label>{" "}
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={loaderData.name}
        />
        <label htmlFor="synopsis">Synopsis</label>{" "}
        <input
          type="text"
          id="synopsis"
          name="synopsis"
          defaultValue={loaderData.name}
        />
        <label htmlFor="poster">Poster</label>{" "}
        <input
          type="text"
          id="poster"
          name="poster"
          defaultValue={loaderData.name}
        />
        <label htmlFor="country">Country</label>{" "}
        <input
          type="text"
          id="country"
          name="country"
          defaultValue={loaderData.name}
        />
        <label htmlFor="year">Year</label>{" "}
        <input
          type="text"
          id="year"
          name="year"
          defaultValue={loaderData.name}
        />
        <button type="submit">Modifier</button>
      </Form>

      <Form method="delete">
        <button type="submit">Supprimer</button>
      </Form>
    </>
  );
}

export default ProgramEdit;
