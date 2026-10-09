import React from 'react';
import useFetch from '../hooks/useFetch.js';

export default function Teams() {
  const { data, loading, error } = useFetch('teams');

  if (loading) return <p className="text-muted">Loading teams…</p>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <>
      <h2 className="mb-3">Teams</h2>
      <div className="row g-3">
        {data?.map((t) => (
          <div className="col-md-4" key={t._id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{t.name}</h5>
                <p className="text-muted mb-1">Total Points: <strong>{t.totalPoints}</strong></p>
                <p className="mb-0">Members: {t.members?.length || 0}</p>
                <ul className="list-unstyled mt-2">
                  {t.members?.map((m) => (
                    <li key={m._id} className="text-muted">• {m.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
