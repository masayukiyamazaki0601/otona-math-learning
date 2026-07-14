document.addEventListener('DOMContentLoaded', () => {
    // -------------------------
    // ハンバーガーメニューの挙動
    // -------------------------
    const hamburger = document.getElementById('hamburger');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            alert('モバイルメニューを開きます（実装予定）');
        });
    }

    // -------------------------
    // スムーススクロール
    // -------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
