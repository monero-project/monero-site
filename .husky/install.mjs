// Skip Husky install in production and CI
// https://typicode.github.io/husky/how-to.html
if (process.env.NODE_ENV === "production" || process.env.CI === "true") {
  process.exit(0);
}

try {
  const husky = (await import("husky")).default;
  console.log(husky());
} catch (e) {
  if (e.code === "ERR_MODULE_NOT_FOUND") {
    console.log("Husky not installed, skipping git hooks setup");
  } else {
    throw e;
  }
}
