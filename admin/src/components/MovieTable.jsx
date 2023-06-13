import Table from "react-bootstrap/Table";

export default function MovieTable({ movies }) {
  return (
    <Table responsive bordered>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Synopsis</th>
          <th>Genre</th>
          <th>Author</th>
          <th>Image</th>
          <th style={{width:50}}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.synopsis}</td>
            <td>{movie.genreId}</td>
            <td>{movie.authorId}</td>
            <td>
              <img className="img-fluid" src={movie.imgUrl} />
            </td>
            <td>
              <div className="d-flex flex-column justify-content-between">
                <button className="btn btn-outline-warning" style={{width:100}} type="button">Edit</button>
                <button className="btn btn-outline-danger mt-5" style={{width:100}} type="button">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
