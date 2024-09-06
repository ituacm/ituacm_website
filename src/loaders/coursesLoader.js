export const coursesLoader = async () => {
  const response = await fetch("/courses.json");
  if (!response.ok) {
    throw new Response("Failed to fetch events", { status: 500 });
  }
  return response.json();
};
