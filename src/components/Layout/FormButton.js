export default function FormButton({ loading, title }) {
  return (
    <div className="form-group">
      <button className="btn btn-primary btn-block" disabled={loading}>
        {loading && <span className="spinner-border spinner-border-sm"></span>}
        {!loading && <span>{title}</span>}
      </button>
    </div>
  );
}
