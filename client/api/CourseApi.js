import { useQuery } from "react-query";

export const useGetCourse = (institutionType, search) => {
  const getCourse = async () => {
    let url = "http://localhost:3000/api/courses";

    // Constructing query parameters based on provided arguments
    const queryParams = [];
    if (institutionType) {
      queryParams.push(
        `institutionType=${encodeURIComponent(institutionType)}`
      );
    }
    if (search) {
      queryParams.push(`search=${encodeURIComponent(search)}`);
    }

    // Append query parameters to URL if there are any
    if (queryParams.length > 0) {
      url += `?${queryParams.join("&")}`;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw error; // Propagate the error back to the caller
    }
  };

  const { data: courses, isLoading: isCoursesLoading } = useQuery(
    ["courses", institutionType, search],
    getCourse
  );

  return { courses, isCoursesLoading };
};

export const useCreateCourse = () => {
  const createCourse = async (course) => {
    try {
      const res = await fetch("/api/course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error creating course:", error);
      throw error; // Propagate the error back to the caller
    }
  };
  const { mutateAsync: createCourseRequest, isLoading: isCreatingCourses } =
    useMutation(createCourse);

  return { createCourseRequest, isCreatingCourses };
};
