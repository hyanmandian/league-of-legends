function defaultTemplate(
  { template },
  _,
  { imports, componentName, jsx, exports }
) {
  const tpl = template.smart({ plugins: ['jsx', 'typescript'] });

  return tpl.ast`${imports}

type Props = React.SVGProps<SVGSVGElement> & { title?: string };
function ${componentName}({ title, ...rest }: Props) {
  const props = {
    ...rest,
    width: 24,
    height: 24,
    ...(title ? { role: 'img' } : { 'aria-hidden': true })
  };

  const titleId = title ? '${componentName.name}' + '-title' : undefined;

  return ${jsx};
}
${exports}
  `;
}

module.exports = defaultTemplate;
