import React from 'react';
import useFetch from '../hooks/useFetch.js';

export default function Leaderboard() {
  const { data, loading, error } = useFetch('leaderboard');

  if (loading) return <p className="text-muted">Loading leaderboard…</p>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  const medals = ['🥇', '🥈', '🥉'];

  return (
    <>
      <h2 className="mb-3">Leaderboard</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((entry, i) => (
              <tr key={entry._id}>
                <td className="fs-5">{medals[i] || `#${i + 1}`}</td>
                <td>{entry.userId?.name || '—'}</td>
                <td>{entry.userId?.team?.name || '—'}</td>
                <td><strong>{entry.points}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
