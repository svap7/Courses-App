export const getAllCourses = async () => {
  try {
    const response = await fetch("/courses/getAllCourses");
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getCourse = async courseId => {
  try {
    const response = await fetch(
      "/courses/getCourse/${courseId}".replace(
        "${courseId}",
        courseId.toString()
      )
    );
    return console.log(response.json());
  } catch (err) {
    throw err;
  }
};

export const getAllAuthors = async () => {
  try {
    const response = await fetch("/authors/getAll");
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const saveCourse = course =>
  fetch("/courses/save", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(course)
  });
