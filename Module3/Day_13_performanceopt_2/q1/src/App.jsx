import React, { useState, lazy, Suspense } from "react";

// ✅ Lazy load the heavy component
const HeavyComponent = lazy(() => import("./HeavyComponent"));

export default function App() {
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <hr />

      {/* ✅ Suspense required for lazy loading */}
      <Suspense fallback={<p>Loading heavy component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
