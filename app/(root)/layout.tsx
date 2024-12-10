import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen">
      Sidebar
      <section className="flex h-full flex-1 flex-col">
        sidebar
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};

export default layout;
