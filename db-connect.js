// Konfigurimi i lidhjes
const supabaseUrl = 'https://gnwsrmelmeqduhhmfmoa.supabase.co';
const supabaseKey = 'sb_publishable__AkK_Z7lhtkvukN6Fy1cAQ_KBTXIcY9'; 

// Krijimi i klientit
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Funksioni kryesor për të marrë të dhënat
async function testo() {
    console.log("Po lidhemi me bazën 'oras'...");
    
    try {
        const { data, error } = await supabase.from('oras').select('*');
        
        if (error) {
            console.error("Gabim nga Supabase:", error.message);
        } else {
            console.log("Lidhja sukses! Ja të dhënat:", data);
        }
    } catch (err) {
        console.error("Gabim gjatë ekzekutimit:", err);
    }
}

// Thirrja e funksionit
testo();
