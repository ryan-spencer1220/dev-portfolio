import React from "react";
import { useEffect, useState } from "react";

function GitHubResults() {
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
        <div className="stat-title">Username</div>
        <div className="stat-value">{users.login}</div>
        <div className="stat-desc">Member Since 2020</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Repos</div>
        <div className="stat-value text-secondary">{users.public_repos}</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Commits</div>
        <div className="stat-value text-primary">772</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Followers</div>
        <div className="stat-value text-secondary">{users.followers}</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Following</div>
        <div className="stat-value">{users.following}</div>
      </div>
    </div>
  );
}
export default GitHubResults;
