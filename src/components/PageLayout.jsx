function PageLayout({ title,content,footer,sidebar }) {
  return (
    <div className="layout-wrapper">
      <header className="layout-header">
        <h1>{title}</h1>
      </header>
       <section className="layout-sidebar">
        {sidebar}
      </section>
      <main className="layout-main">
        {content}
      </main>
      <br></br>
      <footer className="layout-footer">
        {footer}
      </footer>
    </div>
  );
}

export default PageLayout;
 