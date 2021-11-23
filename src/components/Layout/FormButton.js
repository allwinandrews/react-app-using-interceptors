import LoadingSpinner from "./LoadingSpinner";

export default function FormButton({ loading, title }) {
  return (
    <div className="form-group">
      <button className="btn btn-primary btn-block" disabled={loading}>
        {loading && <LoadingSpinner />}
        {!loading && <span>{title}</span>}
      </button>
    </div>
  );
}
