const { useState, useEffect } = React;

// ── FIREBASE ──────────────────────────────────────────────────────────────────
const firebaseConfig = {
    apiKey: "AIzaSyDcLsndRbDPeUru_Di-h3w8RP_Ung-YSUo",
    authDomain: "flamboyant-coral.firebaseapp.com",
    projectId: "flamboyant-coral",
    storageBucket: "flamboyant-coral.firebasestorage.app",
    messagingSenderId: "15022873086",
    appId: "1:15022873086:web:507d97757035ac90d108af"
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ── HELPERS ───────────────────────────────────────────────────────────────────
function todayStr() { return new Date().toISOString().split("T")[0]; }
const MONTHS_PT = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
function fmtDate(d) {
    if (!d) return "";
    const [y, m, dd] = d.split("-");
    return `${parseInt(dd)} de ${MONTHS_PT[parseInt(m)-1]}`;
}

// ── HOOK: coleção Firebase em tempo real ──────────────────────────────────────
function useCollection(col, orderField = "createdAt") {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsub = db.collection(col)
            .orderBy(orderField, "desc")
            .onSnapshot(snap => {
                setData(snap.docs.map(d => ({ id: d.id, ...d.data() })));
                setLoading(false);
            }, () => setLoading(false));
        return unsub;
    }, [col]);
    return { data, loading };
}

// ── ÍCONE (Lucide) ────────────────────────────────────────────────────────────
const Icon = ({ name, size = 20, color }) => {
    useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [name]);
    return <i data-lucide={name} style={{ width: size, height: size, color: color || 'inherit', display: 'block' }} />;
};

// ── SPINNER ───────────────────────────────────────────────────────────────────
function Spinner() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 40 }}>
            <div style={{ width: 32, height: 32, border: '3px solid #B41020', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        </div>
    );
}

// ── LOGIN ─────────────────────────────────────────────────────────────────────
function Login({ members, onLogin }) {
    const [tela, setTela] = useState(null);
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
        if (senha === '1234') onLogin({ name: 'Gestor', isAdmin: true, role: 'admin' });
        else setErro('Senha incorreta.');
    }
    function entrarRH() {
        if (senha === 'flamboyant1234') onLogin({ name: 'RH', isAdmin: false, role: 'rh' });
        else setErro('Senha incorreta.');
    }
    function entrarCorista(membro) {
        onLogin({ name: membro.name, isAdmin: false, role: 'corista', voice: membro.voice });
    }

    const s = {
        wrap: { minHeight: '100vh', background: '#F8F9FA', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 },
        box: { width: '100%', maxWidth: 400 },
        btnPerfil: { display: 'flex', alignItems: 'center', gap: 14, background: '#fff', border: '1px solid #EEE', borderRadius: 14, padding: '16px 18px', width: '100%', marginBottom: 12, cursor: 'pointer', textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' },
        iconBox: (bg, color) => ({ width: 40, height: 40, borderRadius: 10, background: bg, color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }),
        input: { width: '100%', padding: '12px 14px', border: '1px solid #DDD', borderRadius: 10, fontSize: 14, outline: 'none', fontFamily: 'inherit', marginBottom: 8 },
        btnEntrar: { width: '100%', padding: '13px', background: '#B41020', color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' },
        btnVoltar: { background: 'none', border: 'none', color: '#B41020', fontSize: 13, cursor: 'pointer', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'inherit', padding: 0 },
        titulo: { fontFamily: "'Playfair Display', serif", fontSize: 18, marginBottom: 20, color: '#1A1D23' },
    };

    return (
        <div style={s.wrap}>
            <div style={s.box}>
                <div style={{ textAlign: 'center', marginBottom: 36 }}>
                    <div style={{ width: 72, height: 72, background: '#B41020', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                        <Icon name="music-2" size={32} color="#fff" />
                    </div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: '#1A1D23' }}>Coral Flamboyant</div>
                    <div style={{ fontSize: 13, color: '#64748B', marginTop: 4 }}>Portal de Gestão</div>
                </div>

                {!tela && (
                    <>
                        <div style={{ fontSize: 13, color: '#64748B', textAlign: 'center', marginBottom: 20 }}>Como deseja entrar?</div>
                        <button style={s.btnPerfil} onClick={() => { setTela('admin'); setErro(''); setSenha(''); }}>
                            <div style={s.iconBox('rgba(180,16,32,0.1)', '#B41020')}>🛡️</div>
                            <div><div style={{ fontWeight: 600, fontSize: 14 }}>Sou Gestor / ADM</div><div style={{ fontSize: 12, color: '#64748B' }}>Acesso administrativo completo</div></div>
                            <span style={{ marginLeft: 'auto', color: '#CCC' }}>›</span>
                        </button>
                        <button style={s.btnPerfil} onClick={() => { setTela('corista'); setErro(''); setBusca(''); setSugestoes([]); }}>
                            <div style={s.iconBox('rgba(0,122,255,0.08)', '#007AFF')}>🎵</div>
                            <div><div style={{ fontWeight: 600, fontSize: 14 }}>Sou Corista</div><div style={{ fontSize: 12, color: '#64748B' }}>Acesso às músicas, agenda e avisos</div></div>
                            <span style={{ marginLeft: 'auto', color: '#CCC' }}>›</span>
                        </button>
                        <button style={s.btnPerfil} onClick={() => { setTela('rh'); setErro(''); setSenha(''); }}>
                            <div style={s.iconBox('rgba(0,180,100,0.1)', '#00A060')}>🏢</div>
                            <div><div style={{ fontWeight: 600, fontSize: 14 }}>Sou do RH</div><div style={{ fontSize: 12, color: '#64748B' }}>Pessoas e Cultura</div></div>
                            <span style={{ marginLeft: 'auto', color: '#CCC' }}>›</span>
                        </button>
                    </>
                )}

                {tela === 'admin' && (
                    <>
                        <button style={s.btnVoltar} onClick={() => { setTela(null); setErro(''); }}>‹ Voltar</button>
                        <div style={s.titulo}>Gestor / ADM</div>
                        <input style={s.input} type="password" placeholder="Senha de acesso" value={senha}
                            onChange={e => { setSenha(e.target.value); setErro(''); }}
                            onKeyDown={e => e.key === 'Enter' && entrarAdmin()} autoFocus />
                        {erro && <div style={{ fontSize: 12, color: '#B41020', marginBottom: 8 }}>{erro}</div>}
                        <button style={s.btnEntrar} onClick={entrarAdmin}>Entrar</button>
                    </>
                )}

                {tela === 'rh' && (
                    <>
                        <button style={s.btnVoltar} onClick={() => { setTela(null); setErro(''); }}>‹ Voltar</button>
                        <div style={s.titulo}>RH — Pessoas e Cultura</div>
                        <input style={s.input} type="password" placeholder="Senha de acesso" value={senha}
                            onChange={e => { setSenha(e.target.value); setErro(''); }}
                            onKeyDown={e => e.key === 'Enter' && entrarRH()} autoFocus />
                        {erro && <div style={{ fontSize: 12, color: '#B41020', marginBottom: 8 }}>{erro}</div>}
                        <button style={s.btnEntrar} onClick={entrarRH}>Entrar</button>
                    </>
                )}

                {tela === 'corista' && (
                    <>
                        <button style={s.btnVoltar} onClick={() => { setTela(null); setErro(''); }}>‹ Voltar</button>
                        <div style={s.titulo}>Corista</div>
                        <input style={s.input} type="text" placeholder="Digite seu nome (mín. 3 letras)"
                            value={busca} onChange={e => { setBusca(e.target.value); setErro(''); }} autoFocus />
                        {sugestoes.length > 0 && (
                            <div style={{ background: '#fff', border: '1px solid #EEE', borderRadius: 10, overflow: 'hidden', marginBottom: 8 }}>
                                {sugestoes.map(m => (
                                    <button key={m.id} onClick={() => entrarCorista(m)}
                                        style={{ display: 'block', width: '100%', padding: '12px 14px', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: 14, borderBottom: '1px solid #F5F5F5', fontFamily: 'inherit' }}>
                                        {m.name} <span style={{ fontSize: 11, color: '#64748B', marginLeft: 8 }}>{m.voice}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                        {busca.length > 0 && busca.length < 3 && <div style={{ fontSize: 12, color: '#64748B', marginBottom: 8 }}>Digite mais {3 - busca.length} letra(s)...</div>}
                        {busca.length >= 3 && sugestoes.length === 0 && <div style={{ fontSize: 12, color: '#B41020', marginBottom: 8 }}>Nenhum corista encontrado.</div>}
                    </>
                )}
            </div>
            <div style={{ marginTop: 40, fontSize: 11, color: '#CCC' }}>Coral Flamboyant · Portal de Gestão</div>
        </div>
    );
}

// ── PAINEL ────────────────────────────────────────────────────────────────────
function Painel({ user }) {
    const { data: members, loading: lM } = useCollection("members");
    const { data: events, loading: lE } = useCollection("events", "date");
    const { data: songs, loading: lS } = useCollection("songs");
    const { data: avisos, loading: lA } = useCollection("avisos");

    if (lM || lE || lS || lA) return <Spinner />;

    const today = todayStr();
    const ativos = members.filter(m => m.active);
    const inativos = members.filter(m => !m.active);
    const proxEventos = events.filter(e => e.date >= today).sort((a, b) => a.date > b.date ? 1 : -1).slice(0, 3);
    const currentMonth = new Date().getMonth() + 1;
    const aniversarios = ativos.filter(m => m.birthday && parseInt(m.birthday.split("-")[1]) === currentMonth)
        .sort((a, b) => parseInt(a.birthday.split("-")[2]) - parseInt(b.birthday.split("-")[2]));

    // Naipes
    const naipes = { soprano: 0, contralto: 0, alto: 0, tenor: 0, baixo: 0 };
    ativos.forEach(m => { if (naipes[m.voice] !== undefined) naipes[m.voice]++; });

    const naipeColors = { soprano: '#B41020', contralto: '#7B1FA2', alto: '#E65100', tenor: '#1565C0', baixo: '#1B5E20' };
    const naipeLabels = { soprano: 'Soprano', contralto: 'Contralto', alto: 'Alto', tenor: 'Tenor', baixo: 'Baixo' };

    const cardStyle = {
        background: '#fff',
        borderRadius: 12,
        padding: 16,
        border: '1px solid #F0EDED',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
        marginBottom: 12,
    };

    const metricCard = (icon, label, value, sub, accent = '#B41020') => (
        <div style={{ ...cardStyle, marginBottom: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
            <div style={{ width: 36, height: 36, borderRadius: 9, background: accent + '18', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={icon} size={17} color={accent} />
            </div>
            <div>
                <div style={{ fontSize: 26, fontWeight: 700, color: '#1A1D23', lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: 11, color: '#64748B', marginTop: 3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.8 }}>{sub}</div>
            </div>
            <div style={{ fontSize: 12, color: '#94A3B8' }}>{label}</div>
        </div>
    );

    return (
        <div style={{ padding: '16px 16px 0' }}>
            {/* Saudação */}
            <div style={{ marginBottom: 20 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#1A1D23' }}>
                    Bom dia, {user.name.split(' ')[0]} 👋
                </div>
                <div style={{ fontSize: 13, color: '#64748B', marginTop: 3 }}>
                    {new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
                </div>
            </div>

            {/* Cards de métricas — grid 2x2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
                {metricCard('users', 'Integrantes', ativos.length, 'ativos', '#B41020')}
                {metricCard('music', 'Músicas', songs.length, 'no repertório', '#1565C0')}
                {metricCard('calendar', 'Próximos', proxEventos.length, 'eventos', '#1B5E20')}
                {metricCard('bell', 'Avisos', avisos.length, 'publicados', '#E65100')}
            </div>

            {/* Distribuição por naipe */}
            <div style={cardStyle}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#1A1D23', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>
                    Distribuição por naipe
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {Object.entries(naipes).filter(([, v]) => v > 0).map(([naipe, count]) => {
                        const pct = ativos.length > 0 ? Math.round((count / ativos.length) * 100) : 0;
                        return (
                            <div key={naipe}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                                    <span style={{ fontSize: 12, color: '#1A1D23', fontWeight: 600 }}>{naipeLabels[naipe]}</span>
                                    <span style={{ fontSize: 12, color: '#64748B' }}>{count} · {pct}%</span>
                                </div>
                                <div style={{ height: 6, background: '#F0EDED', borderRadius: 3, overflow: 'hidden' }}>
                                    <div style={{ width: pct + '%', height: '100%', background: naipeColors[naipe], borderRadius: 3, transition: 'width 0.6s ease' }} />
                                </div>
                            </div>
                        );
                    })}
                    {Object.values(naipes).every(v => v === 0) && (
                        <div style={{ fontSize: 13, color: '#94A3B8', textAlign: 'center', padding: '8px 0' }}>Nenhum integrante cadastrado ainda.</div>
                    )}
                </div>
                {inativos.length > 0 && (
                    <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid #F0EDED', fontSize: 12, color: '#94A3B8' }}>
                        {inativos.length} integrante{inativos.length > 1 ? 's' : ''} inativo{inativos.length > 1 ? 's' : ''}
                    </div>
                )}
            </div>

            {/* Aniversariantes do mês */}
            {aniversarios.length > 0 && (
                <div style={{ ...cardStyle, background: '#FFF8F8', borderColor: '#F5DEDE' }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#B41020', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>
                        🎂 Aniversariantes de {MONTHS_PT[currentMonth - 1]}
                    </div>
                    {aniversarios.map(m => {
                        const [, , dd] = m.birthday.split('-');
                        const isToday = m.birthday.slice(5) === today.slice(5);
                        return (
                            <div key={m.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid #F5DEDE' }}>
                                <div style={{ fontSize: 13, color: '#1A1D23', fontWeight: isToday ? 700 : 400 }}>
                                    {isToday ? '🎉 ' : ''}{m.name}
                                </div>
                                <div style={{ fontSize: 12, color: isToday ? '#B41020' : '#64748B', fontWeight: isToday ? 700 : 400 }}>
                                    dia {parseInt(dd)}{isToday ? ' · hoje!' : ''}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Próximos eventos */}
            <div style={{ fontSize: 13, fontWeight: 700, color: '#1A1D23', marginBottom: 10, marginTop: 4, textTransform: 'uppercase', letterSpacing: 0.8, fontSize: 11 }}>
                Próximos eventos
            </div>
            {proxEventos.length === 0 ? (
                <div style={{ ...cardStyle, textAlign: 'center', color: '#94A3B8', fontSize: 13, padding: 20 }}>
                    <Icon name="calendar" size={28} color="#DDD" />
                    <div style={{ marginTop: 8 }}>Nenhum evento próximo cadastrado.</div>
                </div>
            ) : (
                proxEventos.map(e => (
                    <div key={e.id} style={{ ...cardStyle, padding: 12, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <div style={{ minWidth: 44, height: 44, background: '#B4102010', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ fontSize: 16, fontWeight: 700, color: '#B41020', lineHeight: 1 }}>
                                {e.date ? e.date.split('-')[2].replace(/^0/, '') : '—'}
                            </div>
                            <div style={{ fontSize: 9, color: '#B41020', fontWeight: 700, textTransform: 'uppercase' }}>
                                {e.date ? ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'][parseInt(e.date.split('-')[1]) - 1] : ''}
                            </div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 700, fontSize: 13, color: '#1A1D23' }}>{e.title || 'Evento'}</div>
                            <div style={{ fontSize: 12, color: '#64748B', marginTop: 2 }}>
                                {fmtDate(e.date)}{e.timeChegada ? ` · ${e.timeChegada}` : ''}{e.local ? ` · ${e.local}` : ''}
                            </div>
                        </div>
                    </div>
                ))
            )}

            {/* Avisos recentes */}
            {avisos.length > 0 && (
                <>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#1A1D23', marginBottom: 10, marginTop: 4, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                        Avisos recentes
                    </div>
                    {avisos.slice(0, 3).map(a => (
                        <div key={a.id} style={{ ...cardStyle, borderLeft: '3px solid #B41020', padding: '12px 14px' }}>
                            {a.title && <div style={{ fontSize: 12, fontWeight: 700, color: '#B41020', marginBottom: 4 }}>{a.title}</div>}
                            <div style={{ fontSize: 13, color: '#1A1D23' }}>{a.text}</div>
                            {a.createdAt?.seconds && (
                                <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 6 }}>
                                    {new Date(a.createdAt.seconds * 1000).toLocaleDateString('pt-BR')}
                                </div>
                            )}
                        </div>
                    ))}
                </>
            )}

        </div>
    );
}

// ── PLACEHOLDER para módulos futuros ──────────────────────────────────────────
function EmBreve({ label, icon }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 60, gap: 12, color: '#94A3B8' }}>
            <Icon name={icon} size={40} color="#DDD" />
            <div style={{ fontSize: 16, fontWeight: 600, color: '#CCC' }}>{label}</div>
            <div style={{ fontSize: 13 }}>Em construção</div>
        </div>
    );
}

// ── APP PRINCIPAL ─────────────────────────────────────────────────────────────
function App() {
    const [user, setUser] = useState(() => {
        try { return JSON.parse(localStorage.getItem("cf_user")); } catch { return null; }
    });
    const [members, setMembers] = useState([]);
    const [tab, setTab] = useState(0);

    useEffect(() => {
        const unsub = db.collection('members').onSnapshot(snap => {
            setMembers(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        });
        return unsub;
    }, []);

    function handleLogin(u) {
        localStorage.setItem("cf_user", JSON.stringify(u));
        setUser(u);
        setTab(0);
    }
    function handleLogout() {
        localStorage.removeItem("cf_user");
        setUser(null);
        setTab(0);
    }

    if (!user) return <Login members={members} onLogin={handleLogin} />;

    const isAdmin = user.isAdmin;

    // Abas: Admin vê tudo, Corista vê menos
    const tabs = isAdmin
        ? [
            { label: 'Painel',     icon: 'layout-dashboard' },
            { label: 'Agenda',     icon: 'calendar' },
            { label: 'Músicas',    icon: 'music' },
            { label: 'Estudos',    icon: 'book-open' },
            { label: 'Avisos',     icon: 'bell' },
            { label: 'Equipe',     icon: 'users' },
          ]
        : [
            { label: 'Agenda',     icon: 'calendar' },
            { label: 'Músicas',    icon: 'music' },
            { label: 'Estudos',    icon: 'book-open' },
            { label: 'Avisos',     icon: 'bell' },
          ];

    const pages = isAdmin
        ? [
            <Painel user={user} />,
            <EmBreve label="Agenda" icon="calendar" />,
            <EmBreve label="Músicas" icon="music" />,
            <EmBreve label="Estudos" icon="book-open" />,
            <EmBreve label="Avisos" icon="bell" />,
            <EmBreve label="Equipe" icon="users" />,
          ]
        : [
            <EmBreve label="Agenda" icon="calendar" />,
            <EmBreve label="Músicas" icon="music" />,
            <EmBreve label="Estudos" icon="book-open" />,
            <EmBreve label="Avisos" icon="bell" />,
          ];

    return (
        <div style={{ minHeight: '100vh', background: '#F8F9FA', display: 'flex', flexDirection: 'column', maxWidth: 480, margin: '0 auto', boxShadow: '0 0 30px rgba(0,0,0,0.08)' }}>
            {/* Header */}
            <div style={{ background: '#B41020', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
                <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 17, fontWeight: 700 }}>Coral Flamboyant</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>
                        {user.name.split(' ')[0]}{isAdmin ? ' · Admin' : user.role === 'rh' ? ' · RH' : ''}
                    </div>
                </div>
                <button onClick={handleLogout} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', borderRadius: 6, padding: '5px 12px', fontSize: 11, cursor: 'pointer', fontFamily: 'inherit', textTransform: 'uppercase', letterSpacing: 0.8 }}>
                    Sair
                </button>
            </div>

            {/* Conteúdo */}
            <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 80 }}>
                {pages[tab]}
            </div>

            {/* Nav inferior */}
            <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 480, background: '#fff', borderTop: '1px solid #F0EDED', display: 'flex', zIndex: 100 }}>
                {tabs.map((t, i) => (
                    <button key={i} onClick={() => setTab(i)} style={{ flex: 1, padding: '10px 0 8px', border: 'none', background: 'none', cursor: 'pointer', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, fontFamily: 'inherit', color: tab === i ? '#B41020' : '#94A3B8', borderTop: `2px solid ${tab === i ? '#B41020' : 'transparent'}`, transition: 'color 0.2s' }}>
                        <Icon name={t.icon} size={18} color={tab === i ? '#B41020' : '#94A3B8'} />
                        {t.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

// ── RENDER ────────────────────────────────────────────────────────────────────
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
