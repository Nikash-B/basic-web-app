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

  if (lowerQuery.includes("plus") || lowerQuery.includes("minus") || lowerQuery.includes("multiplied")) {
    const tokens = lowerQuery.match(/(\d+(\.\d+)?|plus|minus|multiplied)/g);
    if (tokens) {
      const nums: number[] = [];
      const ops: string[] = [];
      for (const token of tokens) {
        if (token === "plus" || token === "minus" || token === "multiplied") {
          ops.push(token);
        } else {
          nums.push(Number(token));
        }
      }
      if (nums.length >= 2 && ops.length >= 1) {
        // Apply multiplied first (higher precedence)
        const reducedNums: number[] = [nums[0]];
        const reducedOps: string[] = [];
        for (let i = 0; i < ops.length; i++) {
          if (ops[i] === "multiplied") {
            reducedNums[reducedNums.length - 1] *= nums[i + 1];
          } else {
            reducedOps.push(ops[i]);
            reducedNums.push(nums[i + 1]);
          }
        }
        // Then apply plus/minus left to right
        let result = reducedNums[0];
        for (let i = 0; i < reducedOps.length; i++) {
          if (reducedOps[i] === "plus") {
            result += reducedNums[i + 1];
          } else if (reducedOps[i] === "minus") {
            result -= reducedNums[i + 1];
          }
        }
        return result.toString();
      }
    }
  }

  if (lowerQuery.includes("power")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const base = BigInt(numbers[0]);
      const exp = Number(numbers[1]);
      let result = BigInt(1);
      for (let i = 0; i < exp; i++) {
        result = result * base;
      }
      return result.toString();
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

  if (lowerQuery.includes("scrabble")) {
    const scrabbleScores: Record<string, number> = {
      a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8,
      k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1,
      u: 1, v: 4, w: 4, x: 8, y: 4, z: 10,
    };
    const match = lowerQuery.match(/scrabble score of (\w+)/);
    if (match) {
      const word = match[1];
      const score = word.split("").reduce((sum, ch) => sum + (scrabbleScores[ch] || 0), 0);
      return score.toString();
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
