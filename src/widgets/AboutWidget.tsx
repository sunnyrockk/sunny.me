const STACK = ["Java", "Python", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"];

export function AboutWidget() {
  return (
    <article className="widget about-widget">
      <p className="widget-kicker">About me</p>
      <h2>
        Hey, I&apos;m Sunny <span className="wave" aria-hidden="true">👋</span>
      </h2>
      <p className="about-lede">
        A full-stack developer building responsive web applications and REST APIs with React.js, Node.js, Express.js, and MongoDB. I enjoy strengthening my problem-solving skills through Data Structures & Algorithms, OOP, and real-world software projects.
      </p>
      <div className="about-cards">
        <div className="about-card">
          <span className="about-emoji" aria-hidden="true">
            🔭
          </span>
          <h3>Exploring</h3>
          <p>Full-stack applications, API integration, and building practical software projects.</p>
        </div>
        <div className="about-card">
          <span className="about-emoji" aria-hidden="true">
            🛠
          </span>
          <h3>Stack</h3>
          <p>{STACK.join(" · ")}</p>
        </div>
      </div>
    </article>
  );
}
