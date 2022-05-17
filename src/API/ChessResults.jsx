import React from "react";
import { useEffect, useState } from "react";

function ChessResults() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      `https://api.chess.com/pub/player/rspencer1220/stats`
    );

    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  return (
    <div className="stats shadow">
      <div className="stat place-items-center">
        <div className="stat-title">Rapid Elo</div>
        <div className="stat-value">{users.chess_rapid.best.rating}</div>
        <div className="stat-desc">Member Since 2014</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Blitz Elo</div>
        <div className="stat-value">{users.chess_blitz.best.rating}</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Tactics Elo</div>
        <div className="stat-value">{users.tactics.highest.rating}</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Total Games</div>
        <div className="stat-value text-secondary">
          {users.chess_blitz.record.draw +
            users.chess_blitz.record.win +
            users.chess_blitz.record.loss}
        </div>
      </div>
    </div>
  );
}
export default ChessResults;
