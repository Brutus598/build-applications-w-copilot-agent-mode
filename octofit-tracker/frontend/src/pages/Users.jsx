import React from 'react';
import useFetch from '../hooks/useFetch.js';

export default function Users() {
  const { data, loading, error } = useFetch('users');

  if (loading) return <p className="text-muted">Loading users…</p>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <>
      <h2 className="mb-3">Users</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Team</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((u) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.team?.name || '—'}</td>
                <td>{u.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
