export default function QueryProcessor(query: string): string {
  const lowerQuery = query.toLowerCase();

  if (lowerQuery.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (
    // lowerQuery.includes("andrew id") ||
    lowerQuery.includes("name")
  ) {
    return "My Andrew ID is nikashb.";
  }

  return "";
}
