const parseClaims = claims => {
  const sections = claims.split(",");
  const parsedClaims = sections.map(section => {
    const [header, description] = section
      .split(";")
      .map(section => section.trim());
    return {
      header,
      description
    };
  });
  return parsedClaims;
};

const parseVitamins = vitamins => {
  const sections = vitamins.split(",");
  const parsedVitamins = sections.map(section => {
    const [header, description] = section
      .split(";")
      .map(section => section.trim());

    return { header, description };
  });
};

export { parseClaims, parseVitamins };
