import React from 'react';
import useFetch from '../hooks/useFetch.js';

export default function Activities() {
  const { data, loading, error } = useFetch('activities');

  if (loading) return <p className="text-muted">Loading activities…</p>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <>
      <h2 className="mb-3">Activities</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>User</th>
              <th>Type</th>
              <th>Duration (min)</th>
              <th>Distance (km)</th>
              <th>Calories</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((a) => (
              <tr key={a._id}>
                <td>{a.userId?.name || '—'}</td>
                <td><span className="badge bg-primary text-capitalize">{a.activityType}</span></td>
                <td>{a.duration}</td>
                <td>{a.distance || '—'}</td>
                <td>{a.calories || '—'}</td>
                <td>{new Date(a.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
