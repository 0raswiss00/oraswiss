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

async function loadOrders() {
    const ordersBody = document.getElementById('orders-body');
    if (!ordersBody) return;

    // Kërkojmë të dhënat nga tabela 'orders'
    const { data, error } = await supabase
        .from('orders')
        .select('*');

    if (error) {
        console.error("Gabim:", error);
        return;
    }

    // Mbushim tabelën me rreshta
    ordersBody.innerHTML = data.map(order => `
        <tr>
            <td>${order.product_id}</td>
            <td>${order.status}</td>
            <td>${order.tracing_number || 'N/A'}</td>
            <td><button>Detaje</button></td>
        </tr>
    `).join('');
}
