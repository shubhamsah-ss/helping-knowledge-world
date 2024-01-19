import toast from "react-hot-toast";

export async function makePostRequest({
  setLoading,
  endpoint,
  data,
  resourceName,
  reset,
  redirect,
}) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

    const response = await fetch(`${baseUrl}/api/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast.success(`New ${resourceName} created successfully`);
      reset();
      redirect();
    } else {
      setLoading(false);
      toast.error(`Failed to create ${resourceName}`);
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}

export async function makeGetRequest(endpoint) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

    const url = `${baseUrl}/api/${endpoint}`;

    const response = await fetch(url, {
      cache: "no-store",
    });

    const data = response.json();
    return data;
  } catch (error) {
    console.log(`Error in fetching`, error);
  }
}

export async function makePutRequest({
  setLoading,
  endpoint,
  data,
  resourceName,
  reset,
  redirect,
}) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

    const response = await fetch(`${baseUrl}/api/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast.success(`New ${resourceName} updated successfully`);
      if (reset) reset();
      if (redirect) redirect();
    } else {
      setLoading(false);
      toast.error(`Failed to update ${resourceName}`);
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}

export async function makeDeleteRequest({
  setLoading,
  endpoint,
  data,
  resourceName,
  reset,
  redirect,}) {
    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  
      const response = await fetch(`${baseUrl}/api/${endpoint}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        setLoading(false);
        toast.success(`New ${resourceName} deleted successfully`);
        if (reset) reset();
        if (redirect) redirect();
      } else {
        setLoading(false);
        toast.error(`Failed to delete ${resourceName}`);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
}