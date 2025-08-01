export async function getBackend(endpoint: string){
    let backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    let apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const response = await fetch(`${backendURL}/${endpoint}`, {
      headers: {
        'x-api-key': apiKey ?? '',
      },
      cache: 'no-store',
    });
    
    const output = await response.text();
    console.log("Response:", output);
}