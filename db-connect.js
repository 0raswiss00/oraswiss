// Konfigurimi i lidhjes
const supabaseUrl = 'https://gnwsrmelmeqduhhmfmoa.supabase.co';
const supabaseKey = 'sb_publishable__AkK_Z7lhtkvukN6Fy1cAQ_KBTXIcY9'; 

// Krijimi i klientit
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Testim lidhjeje
async function testoLidhjen() {
    const { data, error } = await supabase.from('oras').select('*');
    if (error) {
        console.error("Gabim në lidhje:", error.message);
    } else {
        console.log("Lidhja me Supabase është OK! Të dhënat:", data);
    }
}
testoLidhjen();
