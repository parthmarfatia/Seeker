import axios from "axios";

const BASE_URL = "https://api.crackeddevs.com/api";

const getJobs = async (
  limit = 30,
  page = 1,
  min_salary,
  max_salary,
  job_types,
  degree_required,
  technologies,
  skill_levels
) => {
  let params = { limit, page };

  // Add only defined parameters to the params object
  if (min_salary !== undefined) params.min_salary = min_salary;
  if (max_salary !== undefined) params.max_salary = max_salary;
  if (job_types !== undefined) params.job_types = job_types;
  if (degree_required !== undefined) params.degree_required = degree_required;
  if (technologies !== undefined) params.technologies = technologies;
  try {
    const response = await axios.get(`${BASE_URL}/get-jobs`, {
      params: params,
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
