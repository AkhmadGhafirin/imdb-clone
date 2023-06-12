import Table from "react-bootstrap/Table";

export default function MovieTable({ movies }) {
  return (
    <Table responsive bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Synopsis</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.synopsis}</td>
            <td>
              <img className="img-fluid" src={movie.imgUrl} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
