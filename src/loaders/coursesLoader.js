export const coursesLoader = async () => {
  const response = await fetch("/courses.json");
  if (!response.ok) {
    throw new Response("Failed to fetch events", { status: 500 });
  }
  const data = await response.json();
  const formattedData = data.map((course) => ({
    ...course,
    lectures: course.lectures.map((lecture) => ({
      ...lecture,
      start: new Date(lecture.start),
      end: new Date(lecture.end),
    })),
    start: new Date(course.lectures[0].start),
  }));
  return formattedData;
};
