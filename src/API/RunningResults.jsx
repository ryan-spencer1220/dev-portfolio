import React from "react";
import { useEffect, useState } from "react";

function RunningResults() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      `https://api.github.com/users/ryan-spencer1220`
    );

    const data = await response.json();

    setUsers(data);
  };

  return (
    <div className="stats shadow-2xl">
      <div className="stat place-items-center">
        <div className="stat-title">Total Miles</div>
        <div className="stat-value" data-target="2586">
          0
        </div>
        <div className="stat-desc">Since 2014</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Average Pace</div>
        <div className="stat-value2 text-primary">8:36</div>
        <div className="stat-desc">Minutes / Mile</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Total Hours</div>
        <div className="stat-value text-secondary" data-target="448">
          0
        </div>
        <div className="stat-desc">Since 2014</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Average Distance</div>
        <div className="stat-value" data-target="2586">
          0
        </div>
        <div className="stat-desc">Average Distance / Week</div>
      </div>
    </div>
  );
}
export default RunningResults;
