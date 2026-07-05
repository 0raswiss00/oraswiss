// 1. Konfigurimi - Zëvendëso këto me të dhënat e tua nga Supabase Settings
const supabaseUrl = 'VENDO_URL_KËTU';
const supabaseKey = 'VENDO_PUBLIC_ANON_KEY_KËTU';

// 2. Krijimi i klientit
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

// 3. Testim i shpejtë për të parë nëse funksionon
console.log("Supabase u lidh me sukses!");
