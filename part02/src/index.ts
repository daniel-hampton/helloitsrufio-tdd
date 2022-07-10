/**
 * Add two numbers
 */
export function addTwo(x: number, y: number): number {
  return x + y;
}

/* main function to run */
function main(): void {
  const result = addTwo(10, 5);
  console.log("result:", result);
}

main();
