console.log("Duke u lidhur me Supabase...");

// Sigurohu që URL dhe KEY janë të sakta
const supabaseUrl = 'https://gnwsrmelmeqduhhmfmoa.supabase.co';
const supabaseKey = 'sb_publishable__AkK_Z7lhtkvukN6Fy1cAQ_KBTXIcY9'; 

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function testo() {
  const { data, error } = await supabase.from('oras').select('*');
  if (error) {
    console.error("Gabim:", error.message);
  } else {
    console.log("Sukses! Këtu janë të dhënat nga baza:", data);
  }
}

testo();
