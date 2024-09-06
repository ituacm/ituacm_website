export const calendarLoader = async () => {
  let response = await fetch(
    "https://66b9a5b1fa763ff550f8f787.mockapi.io/ituacm-website-ekibi/Posts"
  );
  if (!response.ok) {
    throw new Response("Failed to fetch events", { status: 500 });
  }
  const eventsData = await response.json();
  const formattedEventsData = eventsData.map((event) => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end),
  }));

  response = await fetch("/courses.json");
  if (!response.ok) {
    throw new Response("Failed to fetch events", { status: 500 });
  }
  const coursesData = await response.json();
  const formattedCoursesData = coursesData.map((course) => ({
    ...course,
    lectures: course.lectures.map((lecture) => ({
      ...lecture,
      title: lecture.subject,
      image: course.image,
      start: new Date(lecture.start),
      end: new Date(lecture.end),
    })),
  }));
  const calendarData = {
    events: formattedEventsData,
    courses: formattedCoursesData,
  };

  return calendarData;
};
