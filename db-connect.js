// Krijimi i klientit
const supabase = supabase.createClient('https://gnwsrmelmeqduhhmfmoa.supabase.co', 'sb_publishable__AkK_Z7lhtkvukN6Fy1cAQ_KBTXIcY9');

async function testoLidhjen() {
  console.log("Duke kërkuar orët në tabelën 'oras'...");
  
  const { data, error } = await supabase
    .from('oras')
    .select('*');

  if (error) {
    console.error("Gabim në lidhje:", error.message);
  } else {
    console.log("Sukses! Ja çfarë gjetëm në tabelë:", data);
  }
}

testoLidhjen();
