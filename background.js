import "./supabase.js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNob3J1bWNjY3pkdWxmZm1hbml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2NDYyMjQsImV4cCI6MTk4NTIyMjIyNH0.30Vfv-1bIxthJlmFjVFtUWXVAa98sb9ZPv4urC6jUDk";
const SUPABASE_URL = "https://shorumccczdulffmaniy.supabase.co";
const options = {
  db: {
    schema: "public",
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  global: {
    headers: { "x-my-custom-header": "my-app-name" },
    fetch: fetch.bind(globalThis),
  },
};
const { createClient } = supabase;

supabase = createClient(SUPABASE_URL, SUPABASE_KEY, options);

console.log("supabase?", supabase);


async function searchData(searchText) {
  // Communicating with content scripts
  let { data: Meters, error } = await supabase // Basically stating 'let Reading_Stats = supabase.Reading_Stats...(etc) but more complicated
    .from("Meters") // Declaring what table to select
    .select() // Select all but kinda redundant by '.limit('1')'
    .textSearch('Address', searchText, {
      type: 'websearch',
      config: 'english'
    }) 
  
  // Issue Token
  if (error) {
    console.log("There was an Error:", error);
  }
  // Receive Token
  if (Meters) {
    console.log("Supabase Data Returned:", Meters);
  }
  return Meters
};

function handleMessage(request, sender, sendResponse) {
  console.log(`A content script sent a message: ${request.greeting}`);
  const searchTextValue = request.greeting
  console.log(searchTextValue)
  var accData = searchData(searchText)
  accData.then(value => {
    value;
    if (value.length !== 0) {
      const accountData = [accNo, CID, Max, Mean, Median, Min, Name, STD, Service, VAR, Count]
      console.log(accountData)
      sendResponse({ response: accountData });
    }
    if (value.length === 0) {
      console.log("Address not found")
    }
  });

  return true;

}


chrome.runtime.onMessage.addListener(handleMessage);