// Mos krijo variabël të ri, përdor atë që jep biblioteka
const supabaseUrl = 'https://gnwsrmelmeqduhhmfmoa.supabase.co';
const supabaseKey = 'sb_publishable__AkK_Z7lhtkvukN6Fy1cAQ_KBTXIcY9'; 

// Kjo e krijon klientin vetëm nëse nuk ekziston
if (!window.mySupabase) {
    window.mySupabase = supabase.createClient(supabaseUrl, supabaseKey);
}

async function testo() {
    console.log("Duke kërkuar të dhëna...");
    const { data, error } = await window.mySupabase.from('oras').select('*');
    if (error) {
        console.error("Gabim:", error.message);
    } else {
        console.log("Të dhënat janë këtu:", data);
    }
}

// Thirre funksionin
testo();
