// 1. Konfigurimi
const supabaseUrl = 'https://gnwsrmelmeqduhhmfmoa.supabase.co';
const supabaseKey = 'sb_publishable__AkK_Z7lhtkvukN6Fy1cAQ_KBTXIcY9'; // DHE RINOVONI ATË NË PANEL!

// 2. Krijimi i klientit
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// 3. Testimi real: Provojmë të marrim diçka nga baza
async function testLidhjen() {
  console.log("Duke u lidhur me Supabase...");
  try {
    const { data, error } = await supabase.from('test_table').select('*').limit(1);
    if (error) {
      console.error("Gabim gjatë lidhjes:", error.message);
    } else {
      console.log("Supabase u lidh me sukses! Të dhënat:", data);
    }
  } catch (err) {
    console.error("Gabim fatal:", err);
  }
}

testLidhjen();

