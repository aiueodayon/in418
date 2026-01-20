/**
 * オープニングアニメーションを開始する
 * @param {Function} onComplete - アニメーション完了後に実行するコールバック関数
 */
function startOpeningSequence(onComplete) {
    // ページロード完了後、少し待ってから開始
    window.addEventListener('load', () => {
        setTimeout(() => {
            const overlay = document.getElementById('opening-overlay');
            if(overlay) {
                // フェードアウト
                overlay.style.opacity = '0';
                
                // 完全に消えた後にDOMから非表示にし、コールバックを実行
                setTimeout(() => {
                    overlay.style.display = 'none';
                    if (typeof onComplete === 'function') {
                        onComplete();
                    }
                }, 1000); // CSSのtransition時間と合わせる
            }
        }, 800); // 待機時間
    });
}
