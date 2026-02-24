export default function QueryProcessor(query: string): string {
  const lowerQuery = query.toLowerCase();

  if (lowerQuery.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (lowerQuery.includes("andrew id")) {
    return "My Andrew ID is nikashb.";
  }

  if (lowerQuery.includes("name")) {
    return "My Andrew ID is nikashb.";
  }

  if (lowerQuery.includes("plus")) {
    const numbers = query.match(/-?\d+(\.\d+)?/g);
    if (numbers && numbers.length >= 2) {
      const sum = numbers.map(Number).reduce((a, b) => a + b, 0);
      return sum.toString();
    }
  }

  if (lowerQuery.includes("multiplied")) {
    const numbers = query.match(/-?\d+(\.\d+)?/g);
    if (numbers && numbers.length >= 2) {
      const product = numbers.map(Number).reduce((a, b) => a * b, 1);
      return product.toString();
    }
  }

  if (lowerQuery.includes("square") && lowerQuery.includes("cube")) {
    const numbers = query.match(/-?\d+(\.\d+)?/g);
    if (numbers) {
      const results = numbers.map(Number).filter((n) => {
        const sixthRoot = Math.round(Math.pow(n, 1 / 6));
        return Math.pow(sixthRoot, 6) === n;
      });
      return results.join(", ");
    }
  }

  if (lowerQuery.includes("primes")) {
    const numbers = query.match(/-?\d+(\.\d+)?/g);
    if (numbers) {
      const isPrime = (n: number): boolean => {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
          if (n % i === 0) return false;
        }
        return true;
      };
      const results = numbers.map(Number).filter(isPrime);
      return results.join(", ");
    }
  }

  if (lowerQuery.includes("largest")) {
    const numbers = query.match(/-?\d+(\.\d+)?/g);
    if (numbers) {
      const max = Math.max(...numbers.map(Number));
      return max.toString();
    }
  }

  return "";
}
