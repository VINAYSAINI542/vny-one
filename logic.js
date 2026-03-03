// Firebase Init yahan rahega... (wahi same code)
function tab(id, el) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-icon').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
}

auth.onAuthStateChanged(user => {
    if (user) {
        db.collection("users").doc(user.uid).onSnapshot(d => {
            if(d.exists){
                document.getElementById('my-st').src = d.data().dp || 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
                document.getElementById('p-name').innerText = d.data().name;
            }
        });
        db.collection("users").doc(user.uid).collection("following").onSnapshot(fSnap => {
            const followingIds = fSnap.docs.map(doc => doc.id);
            renderUsers(user.uid, followingIds);
        });
    } else { window.location.href = "index.html"; }
});

function renderUsers(myUid, followingIds) {
    db.collection("users").onSnapshot(snap => {
        const list = document.getElementById('user-list');
        if(!list) return;
        list.innerHTML = "";
        snap.forEach(doc => {
            if (doc.id !== myUid) {
                const isF = followingIds.includes(doc.id);
                list.innerHTML += `
                <div class="user-row">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <img src="${doc.data().dp || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}" class="u-dp">
                        <b>${doc.data().name}</b>
                    </div>
                    <button class="f-btn" onclick="toggleFollow('${doc.id}', ${isF})">${isF ? 'Following' : 'Follow'}</button>
                </div>`;
            }
        });
    });
}