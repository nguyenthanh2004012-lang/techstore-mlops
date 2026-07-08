import React, { useState } from 'react';

export default function AzureAIPrediction() {
    const [tenure, setTenure] = useState('');
    const [monthly, setMonthly] = useState('');
    const [total, setTotal] = useState('');
    const [ketQua, setKetQua] = useState('');
    const [loading, setLoading] = useState(false);

    const goiAzureAI = async () => {
        setLoading(true);
        setKetQua("Đang đồng bộ với Azure ML...");

        // Lấy URL và KEY của Người 3 thả vào đây
        const url = "THAY_BANG_URL_AZURE";
        const apiKey = "THAY_BANG_KEY_AZURE";

        const payload = {
            "data": [{
                "Tenure_Months": parseInt(tenure),
                "Monthly_Charge": parseFloat(monthly),
                "Total_Charges": parseFloat(total)
            }]
        };

        try {
            /* // KHI NÀO CÓ LINK THẬT THÌ BỎ COMMENT ĐOẠN NÀY ĐỂ CHẠY
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            setKetQua(data[0] == 1 || data[0] == "Yes" ? "⚠️ NGUY CƠ RỜI BỎ CAO" : "✅ KHÁCH HÀNG SẼ Ở LẠI");
            */

            // GIẢ LẬP ĐỂ TEST GIAO DIỆN TRƯỚC (Sau 1 giây tự ra kết quả)
            setTimeout(() => {
                const isChurn = Math.random() > 0.5;
                setKetQua(isChurn ? "⚠️ NGUY CƠ RỜI BỎ CAO (Dự đoán từ Azure)" : "✅ KHÁCH HÀNG AN TOÀN (Dự đoán từ Azure)");
                setLoading(false);
            }, 1000);

        } catch (error) {
            setKetQua("Lỗi kết nối đến Endpoint!");
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '30px', background: '#111827', color: 'white', borderRadius: '10px', maxWidth: '500px', margin: '20px auto' }}>
            <h3 style={{ color: '#00f2fe', textAlign: 'center' }}>Dự Đoán AI Tích Hợp</h3>
            
            <div style={{ marginBottom: '15px' }}>
                <label>Số tháng sử dụng (Tenure):</label>
                <input type="number" value={tenure} onChange={(e) => setTenure(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>Cước hàng tháng:</label>
                <input type="number" value={monthly} onChange={(e) => setMonthly(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label>Tổng cước:</label>
                <input type="number" value={total} onChange={(e) => setTotal(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
            </div>

            <button 
                onClick={goiAzureAI} 
                disabled={loading}
                style={{ width: '100%', padding: '10px', background: '#00f2fe', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
            >
                {loading ? "ĐANG PHÂN TÍCH..." : "PHÂN TÍCH VỚI AZURE"}
            </button>

            {ketQua && (
                <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #4facfe', textAlign: 'center', fontSize: '18px' }}>
                    {ketQua}
                </div>
            )}
        </div>
    );
}
