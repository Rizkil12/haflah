// ============================================================
// DATA LAGU - HAF LATUL IMTIHAN
// ============================================================

var dataLagu = [
    // ===== RA =====
    { 
        id: 1, 
        jenjang: 'RA', 
        judul: 'Bumblee bee',
        lirik: 'Cahaya hati menerangi jiwa\nBersinar indah di setiap masa\nKita kan selalu bersama\nDalam suka dan duka',
        musik: 'aset/RA/Bumblee bee.mp3'
    },
    { 
        id: 2, 
        jenjang: 'RA', 
        judul: 'Cinta Al Quran',
        lirik: 'Bintang kecil di langit yang biru\nBegitu indah engkau menari\nBawa mimpi setinggi langit\nHiasi malam dengan cahaya',
        musik: 'aset/RA/Cinta Al Quran.mp3'
    },
    { 
        id: 3, 
        jenjang: 'RA', 
        judul: 'Muhammad nabiku',
        lirik: 'Bintang kecil di langit yang biru\nBegitu indah engkau menari\nBawa mimpi setinggi langit\nHiasi malam dengan cahaya',
        musik: 'aset/RA/Muhammad nabiku.mp3'
    },
    { 
        id: 4, 
        jenjang: 'RA', 
        judul: 'Walisongo',
        lirik: 'Bintang kecil di langit yang biru\nBegitu indah engkau menari\nBawa mimpi setinggi langit\nHiasi malam dengan cahaya',
        musik: 'aset/RA/Walisongo.mp3'
    },
    

    // ===== MI =====
    { 
        id: 5, 
        jenjang: 'MI', 
        judul: 'Tarian Aisyah',
        lirik: 'tarian aisyah',
        musik: 'aset/MI/tarian aisyah.mp3'
    },
    { 
        id: 6, 
        jenjang: 'MI', 
        judul: 'assalamualaikum',
        lirik: 'assalamualaikum',
        musik: 'aset/MI/assalamualaikum.mp3'
    },
    { 
        id: 7, 
        jenjang: 'MI', 
        judul: 'Qolbi filmadina',
        lirik: 'qolbi filmadina',
        musik: 'aset/MI/Qolbi filmadina.mp3'
    },
    { 
        id: 8, 
        jenjang: 'MI', 
        judul: 'dinding',
        lirik: 'bandinding',
        musik: 'aset/MI/badinding.mp3'
    },
    // ===== AWAL MULAI =====
    { 
        id: 15, 
        jenjang: 'AWAL MULAI', 
        judul: 'ZAPIN',
        lirik: 'ZAPIN',
        musik: 'aset/AWAL/TARI ZAPIN.mp3'
    },
    { 
        id: 16, 
        jenjang: 'AWAL MULAI', 
        judul: 'Pengirng MC',
        lirik: 'Pengiring MC',
        musik: 'aset/AWAL/pengiring mc.mp3'
    },


    // ===== WISUDA =====
    { 
        id: 9, 
        jenjang: 'WISUDA', 
        judul: 'INDONESIA RAYA',
        lirik: 'INDONESIA RAYA',
        musik: 'aset/WISUDA/Indonesia Raya.mp3'
    },
    { 
        id: 10, 
        jenjang: 'WISUDA', 
        judul: 'Din ding ba din ding',
        lirik: 'Din ding ba din ding',
        musik: 'aset/MI/badinding.mp3'
    },
    { 
        id: 12, 
        jenjang: 'WISUDA', 
        judul: 'Instruemen Wisuda',
        lirik: 'Instruemen Wisuda',
        musik: 'aset/WISUDA/INSTRUMEN_PENGIRING_WISUDA.mp3'
    },
    { 
        id: 14, 
        jenjang: 'WISUDA', 
        judul: 'Terima_Kasih_Guruku_versi_Ena',
        lirik: 'Terima_Kasih_Guruku_versi_Ena',
        musik: 'aset/WISUDA/Terima_Kasih_Guruku_versi_Ena.mp3'
    },
    { 
        id: 13, 
        jenjang: 'WISUDA', 
        judul: 'SELAMAT TINGGAL GURU',
        lirik: 'SELAMAT TINGGAL GURU',
        musik: 'aset/WISUDA/SELAMAT TINGGAL GURU.mp3'
    },
    { 
        id: 11, 
        jenjang: 'WISUDA', 
        judul: 'Sungkeman',
        lirik: 'Sungkeman',
        musik: 'aset/WISUDA/Instrumen sungkeman .mp3'
    }, 
    
    
];

// ============================================================
// DAFTAR FOLDER
// ============================================================

var folders = [
    { name: 'RA', icon: 'bi-folder-fill', count: 4 },
    { name: 'MI', icon: 'bi-folder-fill', count: 4 },
    { name: 'AWAL MULAI', icon: 'bi-folder-fill', count: 2 },
    { name: 'WISUDA', icon: 'bi-folder-fill', count: 6 }
];

// ============================================================
// STATE
// ============================================================

var currentPath = '';
var currentSearch = '';
var currentPlayingId = null;
var currentAudio = null;
var scrollInterval = null;
var currentLyricsData = null;
var isDark = false;
var isFullscreen = false;
var isPresenter = false;
var isAudioPlaying = false;
var isAudioEnded = false;

// ============================================================
// DOM REFS
// ============================================================

var grid = document.getElementById('contentGrid');
var searchInput = document.getElementById('searchInput');
var searchBtn = document.getElementById('searchBtn');
var breadcrumb = document.getElementById('breadcrumb');
var btnBack = document.getElementById('btnBack');
var progressBar = document.getElementById('progressBar');
var progressText = document.getElementById('progressText');
var darkToggle = document.getElementById('darkModeToggle');
var fullscreenToggle = document.getElementById('fullscreenToggle');
var presenterToggle = document.getElementById('presenterToggle');
var stopAllBtn = document.getElementById('stopAllBtn');

var lyricsOffcanvas = new bootstrap.Offcanvas(document.getElementById('lyricsOffcanvas'));
var lyricsTitle = document.getElementById('lyricsTitle');
var lyricsJenjang = document.getElementById('lyricsJenjang');
var lyricsContent = document.getElementById('lyricsContent');
var scrollLyricsBtn = document.getElementById('scrollLyricsBtn');
var stopScrollBtn = document.getElementById('stopScrollBtn');
var offcanvasAudio = document.getElementById('offcanvasAudio');

// ============================================================
// FUNGSI UTAMA
// ============================================================

function showToast(message) {
    var existing = document.querySelector('.alert-toast');
    if (existing) existing.remove();
    
    var toast = document.createElement('div');
    toast.className = 'alert-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(function() {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 3000);
}

function updatePlayButtonIcon(activeId) {
    var buttons = document.querySelectorAll('.play-music');
    for (var i = 0; i < buttons.length; i++) {
        var btn = buttons[i];
        var id = parseInt(btn.dataset.id);
        if (activeId === id && isAudioPlaying) {
            btn.innerHTML = '<i class="bi bi-pause-fill"></i>';
            btn.classList.remove('btn-neo-success');
            btn.classList.add('btn-neo-danger');
            btn.title = 'Pause';
        } else {
            btn.innerHTML = '<i class="bi bi-play-fill"></i>';
            btn.classList.remove('btn-neo-danger');
            btn.classList.add('btn-neo-success');
            btn.title = 'Putar';
        }
    }
}

function stopAllMusic() {
    console.log('🛑 Menghentikan semua musik...');
    
    if (currentAudio) {
        try {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            // Hapus semua event listener
            currentAudio.onended = null;
            currentAudio.onerror = null;
            currentAudio = null;
        } catch(e) {
            console.error('Error stopping audio:', e);
        }
    }
    
    currentPlayingId = null;
    isAudioPlaying = false;
    isAudioEnded = false;
    updatePlayButtonIcon(null);
    
    try {
        offcanvasAudio.pause();
        offcanvasAudio.currentTime = 0;
        offcanvasAudio.onended = null;
    } catch(e) {
        console.error('Error stopping offcanvas audio:', e);
    }
    
    showToast('⏹️ Semua musik dihentikan');
}

/**
 * Reset state audio setelah selesai
 */
function resetAudioState() {
    console.log('🔄 Reset state audio...');
    currentPlayingId = null;
    currentAudio = null;
    isAudioPlaying = false;
    isAudioEnded = true;
    updatePlayButtonIcon(null);
    
    // Reset offcanvas
    try {
        offcanvasAudio.pause();
        offcanvasAudio.currentTime = 0;
        offcanvasAudio.onended = null;
    } catch(e) {
        console.error('Error resetting offcanvas:', e);
    }
    
    showToast('✅ Lagu selesai');
}

function toggleMusic(data) {
    if (!data.musik) {
        showToast('⚠️ File musik tidak tersedia.');
        return;
    }

    console.log('🎵 Toggle:', data.judul);

    // RESET: Jika audio sudah selesai dan user klik lagi, mulai dari awal
    if (isAudioEnded && currentPlayingId === data.id) {
        isAudioEnded = false;
        // Lanjut ke play baru
    }

    // Jika lagu yang sama sedang diputar, PAUSE
    if (currentPlayingId === data.id && currentAudio && !currentAudio.paused) {
        try {
            currentAudio.pause();
        } catch(e) {
            console.error('Error pausing:', e);
        }
        currentPlayingId = null;
        isAudioPlaying = false;
        updatePlayButtonIcon(null);
        showToast('⏸️ ' + data.judul + ' dijeda');
        return;
    }

    // Jika lagu yang sama sedang PAUSE, LANJUTKAN
    if (currentPlayingId === data.id && currentAudio && currentAudio.paused) {
        currentAudio.play().then(function() {
            isAudioPlaying = true;
            isAudioEnded = false;
            updatePlayButtonIcon(data.id);
            showToast('▶️ ' + data.judul + ' dilanjutkan');
        }).catch(function(err) {
            console.error('Error resuming:', err);
        });
        return;
    }

    // ===== PLAY LAGU BARU =====
    // Hentikan semua audio sebelumnya
    if (currentAudio) {
        try {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio.onended = null;
            currentAudio.onerror = null;
            currentAudio = null;
        } catch(e) {
            console.error('Error stopping previous:', e);
        }
    }
    
    // Reset state
    currentPlayingId = null;
    isAudioPlaying = false;
    isAudioEnded = false;
    updatePlayButtonIcon(null);
    
    // Buat audio baru
    var audio = new Audio();
    audio.src = data.musik;
    audio.loop = false; // PASTIKAN TIDAK LOOPING
    audio.preload = 'auto';
    
    // === EVENT ERROR ===
    audio.onerror = function() {
        console.error('❌ Error loading:', data.musik);
        showToast('⚠️ File tidak ditemukan: ' + data.judul);
        currentPlayingId = null;
        currentAudio = null;
        isAudioPlaying = false;
        isAudioEnded = true;
        updatePlayButtonIcon(null);
    };

    // === EVENT SELESAI ===
    audio.onended = function() {
        console.log('✅ Lagu selesai:', data.judul);
        // Reset semua state
        currentPlayingId = null;
        currentAudio = null;
        isAudioPlaying = false;
        isAudioEnded = true;
        updatePlayButtonIcon(null);
        
        // Hentikan offcanvas
        try {
            offcanvasAudio.pause();
            offcanvasAudio.currentTime = 0;
        } catch(e) {}
        
        showToast('✅ ' + data.judul + ' selesai');
    };

    // === EVENT PAUSE (dari user) ===
    audio.onpause = function() {
        if (currentPlayingId === data.id && !isAudioEnded) {
            isAudioPlaying = false;
            updatePlayButtonIcon(null);
        }
    };

    // === EVENT PLAY ===
    audio.onplay = function() {
        if (currentPlayingId === data.id) {
            isAudioPlaying = true;
            isAudioEnded = false;
            updatePlayButtonIcon(data.id);
        }
    };

    // Simpan referensi
    currentAudio = audio;
    currentPlayingId = data.id;
    isAudioPlaying = true;
    isAudioEnded = false;
    updatePlayButtonIcon(data.id);

    // Putar audio
    audio.play().then(function() {
        console.log('🎵 Memutar:', data.judul);
        showToast('▶️ Memutar: ' + data.judul);
    }).catch(function(err) {
        console.error('❌ Error play:', err);
        showToast('❌ Gagal memutar audio');
        currentPlayingId = null;
        currentAudio = null;
        isAudioPlaying = false;
        isAudioEnded = true;
        updatePlayButtonIcon(null);
    });
}

// ============================================================
// RENDER
// ============================================================

function render() {
    console.log('🔄 Rendering...');
    
    try {
        var searchTerm = currentSearch.toLowerCase().trim();
        var items = [];

        if (currentPath === '') {
            var filteredFolders = [];
            for (var i = 0; i < folders.length; i++) {
                if (folders[i].name.toLowerCase().includes(searchTerm)) {
                    filteredFolders.push(folders[i]);
                }
            }
            for (var j = 0; j < filteredFolders.length; j++) {
                items.push({ type: 'folder', name: filteredFolders[j].name, icon: filteredFolders[j].icon, count: filteredFolders[j].count });
            }
            
            btnBack.classList.remove('show');
            btnBack.style.display = 'none';
        } else {
            var files = [];
            for (var k = 0; k < dataLagu.length; k++) {
                if (dataLagu[k].jenjang === currentPath) {
                    files.push(dataLagu[k]);
                }
            }
            if (searchTerm) {
                var filteredFiles = [];
                for (var l = 0; l < files.length; l++) {
                    if (files[l].judul.toLowerCase().includes(searchTerm) || 
                        files[l].lirik.toLowerCase().includes(searchTerm)) {
                        filteredFiles.push(files[l]);
                    }
                }
                files = filteredFiles;
            }
            for (var m = 0; m < files.length; m++) {
                items.push({ type: 'file', id: files[m].id, jenjang: files[m].jenjang, 
                            judul: files[m].judul, lirik: files[m].lirik, musik: files[m].musik });
            }
            
            btnBack.classList.add('show');
            btnBack.style.display = 'inline-block';
        }

        // Update Progress
        var total = dataLagu.length;
        var filteredCount = items.length;
        var percent = total ? Math.round((filteredCount / total) * 100) : 0;
        progressBar.style.width = percent + '%';
        progressBar.textContent = percent + '%';
        progressText.textContent = filteredCount + ' / ' + total;

        // Update Breadcrumb
        if (currentPath === '') {
            breadcrumb.innerHTML = '<i class="bi bi-house-fill"></i> / <span class="fw-bold">Semua Folder</span>';
        } else {
            var count = 0;
            for (var n = 0; n < dataLagu.length; n++) {
                if (dataLagu[n].jenjang === currentPath) count++;
            }
            breadcrumb.innerHTML = '<span class="breadcrumb-clickable" onclick="goHome()"><i class="bi bi-house-fill"></i></span><span class="breadcrumb-sep">/</span><span class="fw-bold">' + currentPath + '</span><span class="badge bg-dark ms-2">' + count + ' lagu</span>';
        }

        if (items.length === 0) {
            grid.innerHTML = '<div class="col-12"><div class="empty-state"><div class="empty-icon"><i class="bi bi-folder-x"></i></div><h4 class="fw-bold">' + (currentPath === '' ? 'Tidak ada folder' : 'Tidak ada lagu') + '</h4><p class="text-muted">' + (currentPath === '' ? 'Folder tidak ditemukan' : 'Coba kata kunci lain') + '</p>' + (currentPath !== '' ? '<button class="btn btn-neo mt-3" onclick="goHome()"><i class="bi bi-arrow-left"></i> Kembali ke Semua Folder</button>' : '') + '</div></div>';
            return;
        }

        var html = '';
        for (var o = 0; o < items.length; o++) {
            var item = items[o];
            if (item.type === 'folder') {
                html += '<div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3"><div class="folder-card" onclick="openFolder(\'' + item.name + '\')"><div class="folder-icon"><i class="bi ' + item.icon + '"></i></div><div class="folder-name">' + item.name + '</div><div class="folder-count">' + item.count + ' lagu</div></div></div>';
            } else {
                var isPlaying = currentPlayingId === item.id && isAudioPlaying && !isAudioEnded;
                html += '<div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-3"><div class="file-card"><div class="d-flex align-items-center gap-2"><div class="file-icon"><i class="bi bi-music-note-beamed"></i></div><span class="file-jenjang">' + item.jenjang + '</span></div><div class="file-name">' + item.judul + '</div><div class="file-actions mt-2"><button class="btn btn-neo btn-neo-sm lihat-lirik flex-grow-1" data-id="' + item.id + '"><i class="bi bi-eye"></i> Lirik</button><button class="btn ' + (isPlaying ? 'btn-neo-danger' : 'btn-neo-success') + ' btn-neo-sm play-music" data-id="' + item.id + '" title="' + (isPlaying ? 'Pause' : 'Putar') + '"><i class="bi ' + (isPlaying ? 'bi-pause-fill' : 'bi-play-fill') + '"></i></button></div></div></div>';
            }
        }
        grid.innerHTML = html;

        // Attach event listeners
        var lirikButtons = document.querySelectorAll('.lihat-lirik');
        for (var p = 0; p < lirikButtons.length; p++) {
            lirikButtons[p].addEventListener('click', function(e) {
                e.stopPropagation();
                var id = parseInt(this.dataset.id);
                var data = null;
                for (var q = 0; q < dataLagu.length; q++) {
                    if (dataLagu[q].id === id) {
                        data = dataLagu[q];
                        break;
                    }
                }
                if (data) openLyrics(data);
            });
        }

        var playButtons = document.querySelectorAll('.play-music');
        for (var r = 0; r < playButtons.length; r++) {
            playButtons[r].addEventListener('click', function(e) {
                e.stopPropagation();
                var id = parseInt(this.dataset.id);
                var data = null;
                for (var s = 0; s < dataLagu.length; s++) {
                    if (dataLagu[s].id === id) {
                        data = dataLagu[s];
                        break;
                    }
                }
                if (data) toggleMusic(data);
            });
        }
        
        console.log('✅ Render selesai,', items.length, 'item ditampilkan');
        
    } catch(e) {
        console.error('❌ Error rendering:', e);
        grid.innerHTML = '<div class="col-12"><div class="empty-state"><div class="empty-icon"><i class="bi bi-exclamation-triangle"></i></div><h4 class="fw-bold">Terjadi Error</h4><p class="text-muted">' + e.message + '</p></div></div>';
    }
}

// ============================================================
// NAVIGASI
// ============================================================

function openFolder(folderName) {
    currentPath = folderName;
    currentSearch = '';
    searchInput.value = '';
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
    currentPath = '';
    currentSearch = '';
    searchInput.value = '';
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// OPEN LYRICS
// ============================================================

function openLyrics(data) {
    currentLyricsData = data;
    lyricsTitle.textContent = data.judul;
    lyricsJenjang.textContent = data.jenjang;
    lyricsContent.innerHTML = data.lirik.split('\n').map(function(line) {
        return '<p>' + line + '</p>';
    }).join('');

    if (data.musik) {
        offcanvasAudio.src = data.musik;
        offcanvasAudio.load();
        offcanvasAudio.onended = function() {
            // Sinkronkan dengan main player
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentAudio = null;
            }
            currentPlayingId = null;
            isAudioPlaying = false;
            isAudioEnded = true;
            updatePlayButtonIcon(null);
        };
    } else {
        offcanvasAudio.src = '';
    }

    lyricsOffcanvas.show();

    if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
    }
    lyricsContent.scrollTop = 0;
}

// ============================================================
// EVENT LISTENERS
// ============================================================

searchBtn.addEventListener('click', function() {
    currentSearch = searchInput.value.trim();
    render();
});

searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        currentSearch = this.value.trim();
        render();
    }
});

if (stopAllBtn) {
    stopAllBtn.addEventListener('click', function(e) {
        e.preventDefault();
        stopAllMusic();
        this.style.transform = 'scale(0.85)';
        setTimeout(function() {
            if (stopAllBtn) {
                stopAllBtn.style.transform = 'scale(1)';
            }
        }, 200);
    });
}

darkToggle.addEventListener('click', function() {
    isDark = !isDark;
    document.body.classList.toggle('dark-mode', isDark);
    this.innerHTML = isDark ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-fill"></i>';
    showToast(isDark ? '🌙 Dark mode aktif' : '☀️ Light mode aktif');
});

fullscreenToggle.addEventListener('click', function() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(function() {
            isFullscreen = true;
            document.body.classList.add('fullscreen-mode');
            fullscreenToggle.innerHTML = '<i class="bi bi-fullscreen-exit"></i>';
            showToast('⛶ Mode layar penuh');
        }).catch(function() {});
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            isFullscreen = false;
            document.body.classList.remove('fullscreen-mode');
            fullscreenToggle.innerHTML = '<i class="bi bi-arrows-fullscreen"></i>';
            showToast('⛶ Keluar layar penuh');
        }
    }
});

document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement) {
        isFullscreen = false;
        document.body.classList.remove('fullscreen-mode');
        fullscreenToggle.innerHTML = '<i class="bi bi-arrows-fullscreen"></i>';
    }
});

presenterToggle.addEventListener('click', function() {
    isPresenter = !isPresenter;
    document.body.classList.toggle('presenter-mode', isPresenter);
    this.innerHTML = isPresenter ? '<i class="bi bi-display-fill"></i>' : '<i class="bi bi-display"></i>';
    showToast(isPresenter ? '🎤 Mode Presenter aktif' : '🎤 Mode Presenter nonaktif');
});

scrollLyricsBtn.addEventListener('click', function() {
    if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
    }
    scrollInterval = setInterval(function() {
        if (lyricsContent) {
            lyricsContent.scrollTop += 2;
            if (lyricsContent.scrollTop >= lyricsContent.scrollHeight - lyricsContent.clientHeight) {
                lyricsContent.scrollTop = 0;
            }
        }
    }, 80);
    showToast('📜 Auto scroll diaktifkan');
});

stopScrollBtn.addEventListener('click', function() {
    if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
        showToast('⏹️ Auto scroll dihentikan');
    }
});

// ============================================================
// SINKRONISASI OFF CANVAS
// ============================================================

offcanvasAudio.addEventListener('play', function() {
    if (currentLyricsData && currentLyricsData.musik) {
        if (!currentAudio || currentAudio.src !== offcanvasAudio.src) {
            if (currentAudio) {
                try {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                    currentAudio.onended = null;
                } catch(e) {}
            }
            
            var audio = new Audio(offcanvasAudio.src);
            audio.currentTime = offcanvasAudio.currentTime;
            audio.loop = false;
            
            audio.onended = function() {
                console.log('✅ Offcanvas selesai');
                currentPlayingId = null;
                currentAudio = null;
                isAudioPlaying = false;
                isAudioEnded = true;
                updatePlayButtonIcon(null);
                offcanvasAudio.pause();
                offcanvasAudio.currentTime = 0;
            };
            
            audio.onerror = function() {
                currentPlayingId = null;
                currentAudio = null;
                isAudioPlaying = false;
                isAudioEnded = true;
                updatePlayButtonIcon(null);
            };
            
            currentAudio = audio;
            currentPlayingId = currentLyricsData.id;
            isAudioPlaying = true;
            isAudioEnded = false;
            updatePlayButtonIcon(currentLyricsData.id);
            
            setTimeout(function() {
                audio.play().catch(function() {});
            }, 200);
        }
    }
});

// ============================================================
// INIT
// ============================================================

console.log('🚀 Memulai aplikasi...');
console.log('📊 Data lagu:', dataLagu.length, 'lagu');
console.log('📁 Folder:', folders.length, 'folder');
console.log('🎵 Audio tidak akan looping!');

render();

console.log('✅ Haflatul Imtihan siap!');
console.log('💡 Klik folder untuk melihat lagu');
console.log('🎵 Klik play untuk memutar musik (sekali putar)');
