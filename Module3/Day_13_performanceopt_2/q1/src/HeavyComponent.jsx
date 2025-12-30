import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered");

  // Simulate heavy computation
  let total = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    total += i;
  }

  return (
    <div style={{ padding: "20px", background: "#eee" }}>
      <h3>Heavy UI Component</h3>
      <p>This component is expensive to render.</p>
    </div>
  );
}

// ✅ Prevent re-render if props do not change
export default React.memo(HeavyComponent);
