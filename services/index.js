import axios from "axios";

const BASE_URL = "https://api.crackeddevs.com/api";

const getJobs = async (
  limit = 3,
  page = 1,
  min_salary,
  max_salary,
  job_types,
  degree_required,
  technologies,
  skill_levels
) => {
  try {
    const response = await axios.get(`${BASE_URL}/get-jobs`, {
      params: {
        limit,
        page,
        min_salary,
        max_salary,
        job_types,
        degree_required,
        technologies,
        skill_levels,
      },
      headers: {
        "api-key": "8ec6057a-49a6-4aba-8db2-7fdc7e6123f6",
      },
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

export default getJobs;
