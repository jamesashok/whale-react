// Route handlers - accessible via `<domain_name>/api`

export async function GET(request: Request) {
  return Response.json({
    name: "stardom",
    date: new Date().toLocaleTimeString(),
  });
}
