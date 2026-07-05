// 1. Konfigurimi - Zëvendëso këto me të dhënat e tua nga Supabase Settings
const supabaseUrl = 'https://gnwsrmelmeqduhhmfmoa.supabase.co';
const supabaseKey = 'sb_publishable__AkK_Z7lhtkvukN6Fy1cAQ_KBTXIcY9';

// 2. Krijimi i klientit
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

// 3. Testim i shpejtë për të parë nëse funksionon
console.log("Supabase u lidh me sukses!");
