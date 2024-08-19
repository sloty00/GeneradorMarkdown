import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

export default function Projects() {
  const files = fs.readdirSync(path.join('projects'));

  const projects = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('projects', filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug: filename.replace('.md', ''),
      frontMatter,
    };
  });

  return (
    <div>
      <h1>Proyectos</h1>
      <ul>
        {projects.map(({ slug, frontMatter }) => (
          <li key={slug}>
            <Link href={`/projects/${slug}`}>
              {frontMatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
