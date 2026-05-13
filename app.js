const { useState, useEffect } = React;

// 1. Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDcLsndRbDPeUru_Di-h3w8RP_Ung-YSUo",
    authDomain: "flamboyant-coral.firebaseapp.com",
    projectId: "flamboyant-coral",
    storageBucket: "flamboyant-coral.firebasestorage.app",
    messagingSenderId: "15022873086",
    appId: "1:15022873086:web:507d97757035ac90d108af"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// 2. Componente de Ícone
const Icon = ({ name }) => {
    useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
    }, [name]);
    return <i data-lucide={name} style={{ width: 20, height: 20 }}></i>;
};

// 3. Componente Login
function Login({ members, onLogin }) {
    const [tela, setTela] = useState(null); // null | 'admin' | 'corista' | 'rh'
    const [senha, setSenha] = useState('');
    const [busca, setBusca] = useState('');
    const [sugestoes, setSugestoes] = useState([]);
    const [erro, setErro] = useState('');

    useEffect(() => {
        if (busca.length < 3) { setSugestoes([]); return; }
        const termo = busca.toLowerCase();
        setSugestoes(members.filter(m => m.active && m.name.toLowerCase().includes(termo)).slice(0, 5));
    }, [busca, members]);

    function entrarAdmin() {
        if (senha === '1234') {
            onLogin({ name: 'Gestor', isAdmin: true, role: 'admin' });
        } else { setErro('Senha incorreta.'); }
    }

    function entrarRH() {
        if (senha === 'flamboyant1234') {
            onLogin({ name: 'RH', isAdmin: false, role: 'rh' });
        } else { setErro('Senha incorreta.'); }
    }

    function entrarCorista(membro) {
        onLogin({ name: membro.name, isAdmin: false, role: 'corista', voice: membro.voice });
    }

    const btnPerfil = {
        display: 'flex', alignItems: 'center', gap: 14,
        background: '#fff', border: '1px solid #EEE',
        borderRadius: 14, padding: '16px 18px',
        width: '100%', marginBottom: 12,
        cursor: 'pointer', textAlign: 'left',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        transition: 'transform 0.15s',
    };
    const iconBox = (bg, color) => ({
        width: 40, height: 40, borderRadius: 10,
        background: bg, color, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontSize: 18, flexShrink: 0,
    });
    const inputStyle = {
        width: '100%', padding: '12px 14px',
        border: '1px solid #DDD', borderRadius: 10,
        fontSize: 14, outline: 'none',
        fontFamily: 'inherit', marginBottom: 8,
    };
    const btnEntrar = {
        width: '100%', padding: '13px',
        background: '#B41020', color: '#fff',
        border: 'none', borderRadius: 10,
        fontSize: 14, fontWeight: 600,
        cursor: 'pointer', fontFamily: 'inherit',
    };
    const btnVoltar = {
        background: 'none', border: 'none',
        color: '#B41020', fontSize: 13,
        cursor: 'pointer', marginBottom: 20,
        display: 'flex', alignItems: 'center', gap: 4,
        fontFamily: 'inherit', padding: 0,
    };

    return (
        <div style={{ minHeight: '100vh', background: '#F8F9FA', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
            <div style={{ width: '100%', maxWidth: 400 }}>

                {/* Logo */}
                <div style={{ textAlign: 'center', marginBottom: 36 }}>
                    <div style={{ width: 72, height: 72, background: '#B41020', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 32 }}>🎼</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#1A1D23' }}>Flamboyant Coral</div>
                    <div style={{ fontSize: 13, color: '#64748B', marginTop: 4 }}>Portal de Gestão</div>
                </div>

                {/* Tela inicial — escolha de perfil */}
                {!tela && (
                    <>
                        <div style={{ fontSize: 13, color: '#64748B', textAlign: 'center', marginBottom: 20 }}>Como deseja entrar?</div>

                        <button style={btnPerfil} onClick={() => { setTela('admin'); setErro(''); setSenha(''); }}>
                            <div style={iconBox('rgba(180,16,32,0.1)', '#B41020')}>🛡️</div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: 14, color: '#1A1D23' }}>Sou Gestor / ADM</div>
                                <div style={{ fontSize: 12, color: '#64748B' }}>Acesso administrativo completo</div>
                            </div>
                            <span style={{ marginLeft: 'auto', color: '#CCC' }}>›</span>
                        </button>

                        <button style={btnPerfil} onClick={() => { setTela('corista'); setErro(''); setBusca(''); setSugestoes([]); }}>
                            <div style={iconBox('rgba(0,122,255,0.08)', '#007AFF')}>🎵</div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: 14, color: '#1A1D23' }}>Sou Corista</div>
                                <div style={{ fontSize: 12, color: '#64748B' }}>Acesso às músicas, agenda e avisos</div>
                            </div>
                            <span style={{ marginLeft: 'auto', color: '#CCC' }}>›</span>
                        </button>

                        <button style={btnPerfil} onClick={() => { setTela('rh'); setErro(''); setSenha(''); }}>
                            <div style={iconBox('rgba(0,180,100,0.1)', '#00A060')}>🏢</div>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: 14, color: '#1A1D23' }}>Sou do RH</div>
                                <div style={{ fontSize: 12, color: '#64748B' }}>Pessoas e Cultura</div>
                            </div>
                            <span style={{ marginLeft: 'auto', color: '#CCC' }}>›</span>
                        </button>
                    </>
                )}

                {/* Tela Gestor */}
                {tela === 'admin' && (
                    <>
                        <button style={btnVoltar} onClick={() => { setTela(null); setErro(''); }}>‹ Voltar</button>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, marginBottom: 20, color: '#1A1D23' }}>Gestor / ADM</div>
                        <input style={inputStyle} type="password" placeholder="Senha de acesso" value={senha}
                            onChange={e => { setSenha(e.target.value); setErro(''); }}
                            onKeyDown={e => e.key === 'Enter' && entrarAdmin()} autoFocus />
                        {erro && <div style={{ fontSize: 12, color: '#B41020', marginBottom: 8 }}>{erro}</div>}
                        <button style={btnEntrar} onClick={entrarAdmin}>Entrar</button>
                    </>
                )}

                {/* Tela RH */}
                {tela === 'rh' && (
                    <>
                        <button style={btnVoltar} onClick={() => { setTela(null); setErro(''); }}>‹ Voltar</button>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, marginBottom: 20, color: '#1A1D23' }}>RH — Pessoas e Cultura</div>
                        <input style={inputStyle} type="password" placeholder="Senha de acesso" value={senha}
                            onChange={e => { setSenha(e.target.value); setErro(''); }}
                            onKeyDown={e => e.key === 'Enter' && entrarRH()} autoFocus />
                        {erro && <div style={{ fontSize: 12, color: '#B41020', marginBottom: 8 }}>{erro}</div>}
                        <button style={btnEntrar} onClick={entrarRH}>Entrar</button>
                    </>
                )}

                {/* Tela Corista */}
                {tela === 'corista' && (
                    <>
                        <button style={btnVoltar} onClick={() => { setTela(null); setErro(''); }}>‹ Voltar</button>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, marginBottom: 20, color: '#1A1D23' }}>Corista</div>
                        <input style={inputStyle} type="text" placeholder="Digite seu nome (mín. 3 letras)"
                            value={busca} onChange={e => { setBusca(e.target.value); setErro(''); }} autoFocus />
                        {sugestoes.length > 0 && (
                            <div style={{ background: '#fff', border: '1px solid #EEE', borderRadius: 10, overflow: 'hidden', marginBottom: 8 }}>
                                {sugestoes.map(m => (
                                    <button key={m.id} onClick={() => entrarCorista(m)}
                                        style={{ display: 'block', width: '100%', padding: '12px 14px', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: 14, borderBottom: '1px solid #F5F5F5', fontFamily: 'inherit' }}>
                                        {m.name}
                                        <span style={{ fontSize: 11, color: '#64748B', marginLeft: 8 }}>{m.voice}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                        {busca.length > 0 && busca.length < 3 && (
                            <div style={{ fontSize: 12, color: '#64748B', marginBottom: 8 }}>Digite mais {3 - busca.length} letra(s)...</div>
                        )}
                        {busca.length >= 3 && sugestoes.length === 0 && (
                            <div style={{ fontSize: 12, color: '#B41020', marginBottom: 8 }}>Nenhum corista encontrado.</div>
                        )}
                    </>
                )}

            </div>
            <div style={{ marginTop: 40, fontSize: 11, color: '#CCC' }}>Flamboyant Coral · Portal de Gestão</div>
        </div>
    );
}

// 4. Componente Principal
function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("cf_user")));
    const [members, setMembers] = useState([]);
    const [tab, setTab] = useState('inicio');

    // Busca membros do Firestore para o autocomplete do login
    useEffect(() => {
        const unsub = db.collection('members').onSnapshot(snap => {
            setMembers(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        });
        return unsub;
    }, []);

    if (!user) {
        return <Login members={members} onLogin={(u) => {
            localStorage.setItem("cf_user", JSON.stringify(u));
            setUser(u);
        }} />;
    }

    return (
        <div className="container">
            <header className="header">
                <div>
                    <h1 className="serif">Coral Flamboyant</h1>
                    <p style={{ fontSize: '12px', color: 'var(--text-sub)' }}>Gestão Artística</p>
                </div>
                <button onClick={() => { localStorage.removeItem("cf_user"); setUser(null); }}
                    style={{ background: 'none', border: '1px solid #ddd', padding: '5px 10px', borderRadius: '4px', fontSize: '10px' }}>
                    Sair
                </button>
            </header>

            {tab === 'inicio' && (
                <div className="grid-dashboard">
                    <div className="card-premium" onClick={() => setTab('musicas')}>
                        <div className="icon-circle bg-red"><Icon name="music" /></div>
                        <span className="card-title">Repertório</span>
                        <span className="card-value">Ver Músicas</span>
                    </div>
                    <div className="card-premium">
                        <div className="icon-circle bg-red" style={{ background: 'rgba(0,122,255,0.1)', color: '#007AFF' }}>
                            <Icon name="calendar" />
                        </div>
                        <span className="card-title">Ensaios</span>
                        <span className="card-value">Agenda</span>
                    </div>
                </div>
            )}

            {tab === 'musicas' && (
                <div>
                    <button onClick={() => setTab('inicio')} style={{ marginBottom: '20px', border: 'none', background: 'none', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Icon name="arrow-left" /> Voltar
                    </button>
                    <h2 className="serif" style={{ marginBottom: '20px' }}>Repertório</h2>
                    <div className="card-premium" style={{ width: '100%', marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontWeight: '600' }}>Agnus Dei</div>
                            <div style={{ fontSize: '11px', color: 'var(--text-sub)' }}>Missa em Sol Maior</div>
                        </div>
                        <Icon name="play-circle" />
                    </div>
                </div>
            )}

            {/* Menu Inferior */}
            <nav className="nav-bottom">
                <a href="#" className={`nav-item ${tab === 'inicio' ? 'active' : ''}`} onClick={() => setTab('inicio')}>
                    <Icon name="layout-dashboard" /><div>Início</div>
                </a>
                <a href="#" className={`nav-item ${tab === 'musicas' ? 'active' : ''}`} onClick={() => setTab('musicas')}>
                    <Icon name="music" /><div>Músicas</div>
                </a>
                <a href="#" className="nav-item">
                    <Icon name="users" /><div>Membros</div>
                </a>
            </nav>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
