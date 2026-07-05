const supabaseUrl = 'https://gnwsrmelmeqduhhmfmoa.supabase.co';
const supabaseKey = 'sb_publishable__AkK_Z7lhtkvukN6Fy1cAQ_KBTXIcY9';

// krijo klientin vetëm një herë
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function testo() {
    console.log("Duke marrë të dhëna...");

    const { data, error } = await supabase
        .from('oras')
        .select('*');

    const tbody = document.getElementById("orders-body");

    if (error) {
        console.error("Gabim:", error.message);
        tbody.innerHTML = <tr><td colspan="4">Gabim në ngarkim</td></tr>;
        return;
    }

    if (!data || data.length === 0) {
        tbody.innerHTML = <tr><td colspan="4">Nuk ka porosi</td></tr>;
        return;
    }

    tbody.innerHTML = "";

    data.forEach(row => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${row.ora || '-'}</td>
            <td>${row.statusi || '-'}</td>
            <td>${row.nr_dergimi || '-'}</td>
            <td><button onclick="alert('ID: ${row.id}')">Shiko</button></td>
        `;

        tbody.appendChild(tr);
    });
}

// ekzekuto automatikisht kur ngarkohet faqja
document.addEventListener('DOMContentLoaded', testo);
