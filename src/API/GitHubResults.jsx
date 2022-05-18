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

  const counters = document.querySelectorAll(".stat-value");
  const speed = 200; // The lower the slower

  function delayCounter() {
    setTimeout(
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;

          const inc = target / speed;

          if (count < target) {
            counter.innerText = Number((count + inc).toFixed(0));
            setTimeout(updateCount, 50);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      }),
      5000
    );
  }

  delayCounter();

  return (
    <div className="stats shadow-2xl">
      <div className="stat place-items-center">
        <div className="stat-title">Username</div>
        <div className="stat-value">{users.login}</div>
        <div className="stat-desc">Member Since 2020</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Repos</div>
        <div
          className="stat-value text-secondary"
          // data-target={users.public_repos}
          data-target="97"
        >
          0
        </div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Commits</div>
        <div className="stat-value text-primary" data-target="992">
          0
        </div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Followers</div>
        <div
          className="stat-value text-secondary"
          data-target="21"
          // data-target={users.followers}
        >
          0
        </div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Following</div>
        <div className="stat-value" data-target="19">
          0
        </div>
      </div>
    </div>
  );
}
export default GitHubResults;
