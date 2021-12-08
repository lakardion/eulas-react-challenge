/**
 * Finish the PlayerStatus component so that it follows the current status of the player.
 * - The status can be either "online" or "away".
 * - When the component first renders, the player should be "online".
 * - The toggleStatus function should change the status variable.
 * - The component should count how many times the user changed their status, using the counter.
 * - When the component first renders, the counter should be 1.
 * - The counter should be updated within useEffect when status changes.
 *
 * For example, after the first render, the div element with id root should look like this:
 *
 *   <div>
 *     <h1>Online</h1>
 *     <h3>1</h3>
 *     <button>Toggle status</button>
 *   </div>
 */

import { useState, useEffect } from "react";
import './PlayerStatus.css'

export function PlayerStatus() {
  const [status, setStatus] = useState("Online");
  /**Start at zero considering the first status is set at Online and it will trigger the useEffect sync */
  const [counter, setCounter] = useState(0);

  // Toggle between the two status values - 'Away' and 'Online'
  function onToggleStatus() {
    setStatus((status) => (status === "Online" ? "Away" : "Online"));
  }

  // Implement effect hook below.
  // Update the counter when status changes.
  useEffect(() => {
    if (status) {
      setCounter((c) => c + 1);
    }
  }, [status]);

  return (
    <div className="player-status-container">
      <h1>{status}</h1>
      <h3>{counter}</h3>
      <button onClick={onToggleStatus}>Toggle status</button>
    </div>
  );
}
