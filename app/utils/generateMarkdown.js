const generateMarkdown = (projectData) => {
  let markdown = `# ${projectData.title}\n\n`;

  // Añadir información del proyecto
  if (projectData.author) {
    markdown += `**Autor:** ${projectData.author}\n\n`;
  }
  if (projectData.date) {
    markdown += `**Fecha:** ${projectData.date}\n\n`;
  }
  if (projectData.developmentTime) {
    markdown += `**Tiempo de Desarrollo:** ${projectData.developmentTime}\n\n`;
  }

  projectData.sections.forEach((section) => {
    markdown += `## ${section.title}\n\n`;

    // Convertir contenido de listas y enumeraciones
    const contentWithLists = section.content
      .replace(/^\* (.*)$/gm, '- $1') // Listas con asterisco (*)
      .replace(/^\d+\. (.*)$/gm, '1. $1'); // Listas numeradas

    markdown += `${contentWithLists}\n\n`;

    if (section.code) {
      markdown += `\`\`\`javascript\n${section.code}\n\`\`\`\n\n`;
    }

    if (section.imagePath) {
      markdown += `![Alt text](${section.imagePath})\n\n`;
    }

    // Añadir subsecciones
    if (section.subsections && section.subsections.length > 0) {
      section.subsections.forEach((subsection, index) => {
        markdown += `### ${subsection.title}\n\n`;
        if (subsection.content) {
          markdown += `${subsection.content}\n\n`;
        }
        if (subsection.code) {
          markdown += `\`\`\`javascript\n${subsection.code}\n\`\`\`\n\n`;
        }
      });
    }
  });

  return markdown;
};

export default generateMarkdown;
