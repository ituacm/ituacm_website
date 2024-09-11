export const boardMembersLoader = async () => {
  const response = await fetch(
    "https://66b9a5b1fa763ff550f8f787.mockapi.io/ituacm-website-ekibi/board_members"
  );
  if (!response.ok) {
    throw new Response("Failed to fetch events", { status: 500 });
  }
  return response.json();
};
