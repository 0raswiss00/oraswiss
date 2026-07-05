console.log("Duke u lidhur me Supabase...");

// Sigurohu që URL dhe KEY janë të sakta
const supabaseUrl = 'https://gnwsrmelmeqduhhmfmoa.supabase.co';
const supabaseKey = 'sb_publishable__AkK_Z7lhtkvukN6Fy1cAQ_KBTXIcY9'; 
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function fetchOrders() {
    const tbody = document.getElementById('orders-body');
    const { data, error } = await supabase.from('orders').select('*');

    if (error) {
        console.error("Gabim:", error.message);
        return;
    }

    tbody.innerHTML = ""; // Pastro tabelën
    data.forEach(order => {
        tbody.innerHTML += `
            <tr>
                <td>${order.watch_name}</td>
                <td>${order.status}</td>
                <td>${order.tracking_number || 'Në proces'}</td>
                <td>
                    <select onchange="handleCancel(${order.id}, this.value)">
                        <option value="">Anulo</option>
                        <option value="Ndryshova mendje">Ndryshova mendje</option>
                        <option value="Kaloi afati">Kaloi afati</option>
                        <option value="Nuk përputhet">Nuk përputhet me përshkrimin</option>
                    </select>
                </td>
            </tr>
        `;
    });
}

async function handleCancel(orderId, reason) {
    if (!reason) return;
    const { error } = await supabase
        .from('orders')
        .update({ status: 'Anuluar', cancel_reason: reason })
        .eq('id', orderId);
        
    if (error) {
        alert("Gabim gjatë anulimit: " + error.message);
    } else {
        alert("Kërkesa për anulim u dërgua!");
        location.reload(); // Rifresko faqen për të parë ndryshimin
    }
}

testo();
