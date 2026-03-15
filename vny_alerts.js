// VNYone Custom Stylish Alerts System
const vnyAlertStyle = `
<style>
    .vny-overlay {
        display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(12px);
        z-index: 9999; justify-content: center; align-items: center;
        font-family: 'Segoe UI', sans-serif;
    }
    .vny-alert-card {
        background: rgba(22, 27, 34, 0.9); border: 2px solid #ff85a2;
        border-radius: 30px; width: 85%; max-width: 320px; padding: 30px;
        text-align: center; box-shadow: 0 0 40px rgba(255, 133, 162, 0.4);
        animation: vnyPop 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
    @keyframes vnyPop { from { transform: scale(0.7); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .vny-alert-card i { font-size: 50px; color: #ff85a2; margin-bottom: 15px; display: block; }
    .vny-alert-card p { font-size: 18px; color: white; font-weight: 600; margin-bottom: 25px; line-height: 1.4; }
    .vny-btn-box { display: flex; gap: 12px; }
    .vny-btn {
        flex: 1; padding: 12px; border-radius: 18px; border: none;
        font-weight: bold; cursor: pointer; transition: 0.3s; font-size: 15px;
    }
    .vny-btn-cancel { background: rgba(255,255,255,0.1); color: white; }
    .vny-btn-confirm { background: #ff85a2; color: #000; box-shadow: 0 4px 15px rgba(255, 133, 162, 0.3); }
</style>
`;

// Injecting the Alert HTML into Body
const vnyAlertHTML = `
<div id="vnyGlobalModal" class="vny-overlay">
    <div class="vny-alert-card">
        <i class="fa-solid fa-bell"></i>
        <p id="vnyGlobalText">Kya aap sure hain?</p>
        <div class="vny-btn-box">
            <button class="vny-btn vny-btn-cancel" onclick="closeVnyGlobal()">Cancel</button>
            <button class="vny-btn vny-btn-confirm" id="vnyGlobalConfirm">Confirm</button>
        </div>
    </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', vnyAlertStyle + vnyAlertHTML);

function vnyShowAlert(text, callback, icon = "fa-bell") {
    const modal = document.getElementById('vnyGlobalModal');
    document.getElementById('vnyGlobalText').innerText = text;
    document.querySelector('.vny-alert-card i').className = `fa-solid ${icon}`;
    modal.style.display = 'flex';
    
    document.getElementById('vnyGlobalConfirm').onclick = () => {
        callback();
        closeVnyGlobal();
    };
}

function closeVnyGlobal() {
    document.getElementById('vnyGlobalModal').style.display = 'none';
}
