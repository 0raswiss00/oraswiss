// Kjo kontrollon nëse klienti është krijuar që më parë për të shmangur gabimin
if (!window.supabaseClient) {
    const supabaseUrl = 'https://gnwsrmelmeqduhhmfmoa.supabase.co';
    const supabaseKey = 'sb_publishable__AkK_Z7lhtkvukN6Fy1cAQ_KBTXIcY9'; 
    window.supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
}

async function testo() {
    const { data, error } = await window.supabaseClient.from('orders').select('*');
    if (error) {
        console.error("Gabim:", error.message);
    } else {
        console.log("Të dhënat e porosive:", data);
    }
}

