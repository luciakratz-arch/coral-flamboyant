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
const MONTHS_SHORT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
function fmtDate(d) {
    if (!d) return "";
    const [y, m, dd] = d.split("-");
    return `${parseInt(dd)} de ${MONTHS_PT[parseInt(m)-1]}`;
}

// ── HOOK COLEÇÃO ──────────────────────────────────────────────────────────────
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

// ── HOOK CONFIGURAÇÕES ────────────────────────────────────────────────────────
function useConfig() {
    const [config, setConfig] = useState({});
    useEffect(() => {
        const unsub = db.collection('config').doc('app').onSnapshot(snap => {
            if (snap.exists) setConfig(snap.data());
        });
        return unsub;
    }, []);
    function saveConfig(data) {
        return db.collection('config').doc('app').set(data, { merge: true });
    }
    return { config, saveConfig };
}

// ── ÍCONE LUCIDE ──────────────────────────────────────────────────────────────
const Icon = ({ name, size = 16, color }) => {
    useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [name]);
    return <i data-lucide={name} style={{ width: size, height: size, color: color || 'inherit', display: 'block', flexShrink: 0 }} />;
};

// ── SPINNER ───────────────────────────────────────────────────────────────────
function Spinner() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 48 }}>
            <div style={{ width: 28, height: 28, border: '2.5px solid #B41020', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        </div>
    );
}

// ── LOGIN ─────────────────────────────────────────────────────────────────────
function Login({ members, onLogin, config }) {
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

    const inp = { width: '100%', padding: '11px 14px', border: '1px solid #E2E8F0', borderRadius: 8, fontSize: 14, outline: 'none', fontFamily: 'inherit', marginBottom: 8, color: '#1A1D23' };
    const btnVoltar = { background: 'none', border: 'none', color: '#B41020', fontSize: 13, cursor: 'pointer', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'inherit', padding: 0 };
    const btnEntrar = { width: '100%', padding: '12px', background: '#B41020', color: '#fff', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' };
    const perfil = { display: 'flex', alignItems: 'center', gap: 12, background: '#fff', border: '1px solid #E8ECF0', borderRadius: 12, padding: '14px 16px', width: '100%', marginBottom: 10, cursor: 'pointer', textAlign: 'left', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' };

    return (
        <div style={{ minHeight: '100vh', background: '#F6F7F9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
            <div style={{ width: '100%', maxWidth: 380 }}>
                <div style={{ textAlign: 'center', marginBottom: 32 }}>
                    {config.logoUrl
                        ? <img src={config.logoUrl} alt="Logo" style={{ height: 70, objectFit: 'contain', margin: '0 auto 14px', display: 'block' }} />
                        : <div style={{ width: 62, height: 62, background: '#B41020', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                            <Icon name="music-2" size={26} color="#fff" />
                          </div>
                    }
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#1A1D23' }}>
                        {config.nomeApp || 'Coral Flamboyant'}
                    </div>
                    <div style={{ fontSize: 12, color: '#94A3B8', marginTop: 3 }}>Portal de Gestão</div>
                </div>

                {!tela && (
                    <>
                        <div style={{ fontSize: 12, color: '#94A3B8', textAlign: 'center', marginBottom: 16 }}>Como deseja entrar?</div>
                        {[
                            { id: 'admin',   icon: 'shield',    label: 'Gestor / ADM',         sub: 'Acesso administrativo completo', bg: 'rgba(180,16,32,0.08)',   c: '#B41020' },
                            { id: 'corista', icon: 'music',     label: 'Sou Corista',           sub: 'Músicas, agenda e avisos',       bg: 'rgba(21,101,192,0.08)',  c: '#1565C0' },
                            { id: 'rh',      icon: 'briefcase', label: 'RH — Pessoas e Cultura',sub: 'Gestão de equipe',               bg: 'rgba(27,94,32,0.08)',    c: '#1B5E20' },
                        ].map(item => (
                            <button key={item.id} style={perfil} onClick={() => { setTela(item.id); setErro(''); setSenha(''); setBusca(''); setSugestoes([]); }}>
                                <div style={{ width: 36, height: 36, borderRadius: 9, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Icon name={item.icon} size={15} color={item.c} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 600, fontSize: 13, color: '#1A1D23' }}>{item.label}</div>
                                    <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 1 }}>{item.sub}</div>
                                </div>
                                <Icon name="chevron-right" size={14} color="#CBD5E1" />
                            </button>
                        ))}
                    </>
                )}

                {(tela === 'admin' || tela === 'rh') && (
                    <>
                        <button style={btnVoltar} onClick={() => { setTela(null); setErro(''); }}>
                            <Icon name="arrow-left" size={13} color="#B41020" /> Voltar
                        </button>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, marginBottom: 18, color: '#1A1D23' }}>
                            {tela === 'admin' ? 'Gestor / ADM' : 'RH — Pessoas e Cultura'}
                        </div>
                        <input style={inp} type="password" placeholder="Senha de acesso" value={senha}
                            onChange={e => { setSenha(e.target.value); setErro(''); }}
                            onKeyDown={e => e.key === 'Enter' && (tela === 'admin' ? entrarAdmin() : entrarRH())} autoFocus />
                        {erro && <div style={{ fontSize: 12, color: '#B41020', marginBottom: 8 }}>{erro}</div>}
                        <button style={btnEntrar} onClick={tela === 'admin' ? entrarAdmin : entrarRH}>Entrar</button>
                    </>
                )}

                {tela === 'corista' && (
                    <>
                        <button style={btnVoltar} onClick={() => { setTela(null); setErro(''); }}>
                            <Icon name="arrow-left" size={13} color="#B41020" /> Voltar
                        </button>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, marginBottom: 18, color: '#1A1D23' }}>Corista</div>
                        <input style={inp} type="text" placeholder="Digite seu nome (mín. 3 letras)"
                            value={busca} onChange={e => { setBusca(e.target.value); setErro(''); }} autoFocus />
                        {sugestoes.length > 0 && (
                            <div style={{ background: '#fff', border: '1px solid #E8ECF0', borderRadius: 8, overflow: 'hidden', marginBottom: 8 }}>
                                {sugestoes.map(m => (
                                    <button key={m.id} onClick={() => entrarCorista(m)}
                                        style={{ display: 'block', width: '100%', padding: '11px 14px', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: 13, borderBottom: '1px solid #F1F5F9', fontFamily: 'inherit', color: '#1A1D23' }}>
                                        {m.name} <span style={{ fontSize: 11, color: '#94A3B8', marginLeft: 8 }}>{m.voice}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                        {busca.length > 0 && busca.length < 3 && <div style={{ fontSize: 12, color: '#94A3B8', marginBottom: 8 }}>Digite mais {3 - busca.length} letra(s)...</div>}
                        {busca.length >= 3 && sugestoes.length === 0 && <div style={{ fontSize: 12, color: '#B41020', marginBottom: 8 }}>Nenhum corista encontrado.</div>}
                    </>
                )}
            </div>
            <div style={{ marginTop: 36, fontSize: 11, color: '#CBD5E1' }}>Coral Flamboyant · Portal de Gestão</div>
        </div>
    );
}

// ── MODAL CONFIGURAÇÕES ───────────────────────────────────────────────────────
function ModalConfig({ config, saveConfig, onClose }) {
    const [nomeApp, setNomeApp] = useState(config.nomeApp || 'Coral Flamboyant');
    const [logoUrl, setLogoUrl] = useState(config.logoUrl || '');
    const [salvando, setSalvando] = useState(false);

    async function salvar() {
        setSalvando(true);
        await saveConfig({ nomeApp, logoUrl });
        setSalvando(false);
        onClose();
    }

    const inp = { width: '100%', padding: '10px 12px', border: '1px solid #E2E8F0', borderRadius: 8, fontSize: 13, outline: 'none', fontFamily: 'inherit', marginBottom: 4, color: '#1A1D23' };
    const lbl = { display: 'block', fontSize: 11, fontWeight: 700, color: '#64748B', marginBottom: 5, textTransform: 'uppercase', letterSpacing: 1 };

    return (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 300, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
            onClick={e => e.target === e.currentTarget && onClose()}>
            <div style={{ background: '#fff', borderRadius: '16px 16px 0 0', padding: 24, width: '100%', maxWidth: 480 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: '#1A1D23' }}>Configurações</div>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><Icon name="x" size={18} color="#94A3B8" /></button>
                </div>

                <div style={{ marginBottom: 16 }}>
                    <label style={lbl}>Nome do Coral</label>
                    <input style={inp} value={nomeApp} onChange={e => setNomeApp(e.target.value)} placeholder="Ex: Coral Flamboyant" />
                </div>

                <div style={{ marginBottom: 20 }}>
                    <label style={lbl}>Logo — URL da imagem</label>
                    <input style={inp} value={logoUrl} onChange={e => setLogoUrl(e.target.value)} placeholder="https://... (PNG ou JPG)" />
                    <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 4 }}>
                        Hospede a imagem no Google Drive (link direto), Imgur ou similar e cole o link aqui.
                    </div>
                    {logoUrl && (
                        <div style={{ marginTop: 10, padding: 12, background: '#F6F7F9', borderRadius: 8, textAlign: 'center' }}>
                            <img src={logoUrl} alt="Preview" style={{ maxHeight: 56, objectFit: 'contain' }}
                                onError={e => { e.target.style.display = 'none'; }} />
                        </div>
                    )}
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                    <button onClick={onClose} style={{ flex: 1, padding: '11px', background: '#F1F5F9', color: '#64748B', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Cancelar</button>
                    <button onClick={salvar} disabled={salvando} style={{ flex: 1, padding: '11px', background: '#B41020', color: '#fff', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', opacity: salvando ? 0.7 : 1 }}>
                        {salvando ? 'Salvando...' : 'Salvar'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// ── PAINEL ────────────────────────────────────────────────────────────────────
function Painel({ user, config, saveConfig }) {
    const { data: members, loading: lM } = useCollection("members");
    const { data: events,  loading: lE } = useCollection("events", "date");
    const { data: songs,   loading: lS } = useCollection("songs");
    const { data: avisos,  loading: lA } = useCollection("avisos");
    const [showConfig, setShowConfig] = useState(false);

    if (lM || lE || lS || lA) return <Spinner />;

    const today = todayStr();
    const ativos   = members.filter(m => m.active);
    const inativos = members.filter(m => !m.active);
    const proxEventos = events.filter(e => e.date >= today).sort((a,b) => a.date > b.date ? 1 : -1).slice(0, 3);
    const currentMonth = new Date().getMonth() + 1;
    const aniversarios = ativos
        .filter(m => m.birthday && parseInt(m.birthday.split("-")[1]) === currentMonth)
        .sort((a,b) => parseInt(a.birthday.split("-")[2]) - parseInt(b.birthday.split("-")[2]));

    const naipes = { soprano:0, contralto:0, alto:0, tenor:0, baixo:0 };
    ativos.forEach(m => { if (naipes[m.voice] !== undefined) naipes[m.voice]++; });
    const naipeColors = { soprano:'#B41020', contralto:'#7B1FA2', alto:'#E65100', tenor:'#1565C0', baixo:'#1B5E20' };
    const naipeLabels = { soprano:'Soprano', contralto:'Contralto', alto:'Alto', tenor:'Tenor', baixo:'Baixo' };

    const card = { background:'#fff', borderRadius:10, padding:'14px 16px', border:'1px solid #EEF0F3', boxShadow:'0 1px 3px rgba(0,0,0,0.04)', marginBottom:10 };

    const metrics = [
        { icon:'users',    label:'Integrantes', value:ativos.length,       sub:'ativos',     color:'#B41020' },
        { icon:'music',    label:'Músicas',      value:songs.length,        sub:'repertório', color:'#1565C0' },
        { icon:'calendar', label:'Eventos',      value:proxEventos.length,  sub:'próximos',   color:'#1B5E20' },
        { icon:'bell',     label:'Avisos',       value:avisos.length,       sub:'publicados', color:'#E65100' },
    ];

    return (
        <div style={{ padding:'16px 14px 0' }}>

            {/* Cabeçalho */}
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:18 }}>
                <div>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:'#1A1D23' }}>
                        Olá, {user.name.split(' ')[0]} 👋
                    </div>
                    <div style={{ fontSize:12, color:'#94A3B8', marginTop:2 }}>
                        {new Date().toLocaleDateString('pt-BR', { weekday:'long', day:'numeric', month:'long' })}
                    </div>
                </div>
                <button onClick={() => setShowConfig(true)} title="Configurações do app"
                    style={{ background:'#F1F5F9', border:'none', borderRadius:8, width:34, height:34, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', flexShrink:0 }}>
                    <Icon name="settings" size={15} color="#64748B" />
                </button>
            </div>

            {/* Métricas 2x2 */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:10 }}>
                {metrics.map(m => (
                    <div key={m.label} style={{ ...card, marginBottom:0, padding:'13px 14px' }}>
                        <div style={{ display:'flex', alignItems:'center', gap:7, marginBottom:9 }}>
                            <div style={{ width:26, height:26, borderRadius:6, background:m.color+'15', display:'flex', alignItems:'center', justifyContent:'center' }}>
                                <Icon name={m.icon} size={13} color={m.color} />
                            </div>
                            <span style={{ fontSize:10, color:'#94A3B8', fontWeight:700, textTransform:'uppercase', letterSpacing:0.7 }}>{m.label}</span>
                        </div>
                        <div style={{ fontSize:26, fontWeight:700, color:'#1A1D23', lineHeight:1 }}>{m.value}</div>
                        <div style={{ fontSize:11, color:'#94A3B8', marginTop:3 }}>{m.sub}</div>
                    </div>
                ))}
            </div>

            {/* Naipes */}
            <div style={card}>
                <div style={{ fontSize:11, fontWeight:700, color:'#94A3B8', marginBottom:12, textTransform:'uppercase', letterSpacing:1 }}>Distribuição por naipe</div>
                {Object.entries(naipes).filter(([,v]) => v > 0).length === 0
                    ? <div style={{ fontSize:12, color:'#CBD5E1', textAlign:'center', padding:'8px 0' }}>Nenhum integrante cadastrado</div>
                    : Object.entries(naipes).map(([naipe, count]) => {
                        const pct = ativos.length > 0 ? Math.round((count / ativos.length) * 100) : 0;
                        return (
                            <div key={naipe} style={{ marginBottom:9 }}>
                                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:4 }}>
                                    <span style={{ fontSize:12, color:'#1A1D23', fontWeight:600 }}>{naipeLabels[naipe]}</span>
                                    <span style={{ fontSize:11, color:'#94A3B8' }}>{count} · {pct}%</span>
                                </div>
                                <div style={{ height:4, background:'#F1F5F9', borderRadius:2, overflow:'hidden' }}>
                                    <div style={{ width:pct+'%', height:'100%', background:naipeColors[naipe], borderRadius:2 }} />
                                </div>
                            </div>
                        );
                    })
                }
                {inativos.length > 0 && (
                    <div style={{ marginTop:8, fontSize:11, color:'#CBD5E1', paddingTop:8, borderTop:'1px solid #F1F5F9' }}>
                        {inativos.length} inativo{inativos.length > 1 ? 's' : ''}
                    </div>
                )}
            </div>

            {/* Aniversariantes */}
            {aniversarios.length > 0 && (
                <div style={{ ...card, borderLeft:'3px solid #B41020', background:'#FFFBFB' }}>
                    <div style={{ fontSize:11, fontWeight:700, color:'#B41020', marginBottom:10, textTransform:'uppercase', letterSpacing:1 }}>
                        🎂 Aniversariantes — {MONTHS_PT[currentMonth-1]}
                    </div>
                    {aniversarios.map(m => {
                        const dd = parseInt(m.birthday.split('-')[2]);
                        const isToday = m.birthday.slice(5) === today.slice(5);
                        return (
                            <div key={m.id} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'6px 0', borderBottom:'1px solid #F5ECEC' }}>
                                <span style={{ fontSize:13, color:'#1A1D23', fontWeight: isToday ? 700 : 400 }}>
                                    {isToday ? '🎉 ' : ''}{m.name}
                                </span>
                                <span style={{ fontSize:12, color: isToday ? '#B41020' : '#94A3B8', fontWeight: isToday ? 700 : 400 }}>
                                    dia {dd}{isToday ? ' · hoje' : ''}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Próximos eventos */}
            <div style={{ fontSize:11, fontWeight:700, color:'#94A3B8', marginBottom:8, marginTop:4, textTransform:'uppercase', letterSpacing:1 }}>Próximos eventos</div>
            {proxEventos.length === 0
                ? <div style={{ ...card, textAlign:'center', color:'#CBD5E1', fontSize:13, padding:'20px 16px' }}>
                    <Icon name="calendar" size={24} color="#E2E8F0" />
                    <div style={{ marginTop:8 }}>Nenhum evento cadastrado</div>
                  </div>
                : proxEventos.map(e => (
                    <div key={e.id} style={{ ...card, display:'flex', gap:12, alignItems:'center' }}>
                        <div style={{ minWidth:40, height:40, background:'#FEF2F2', borderRadius:8, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                            <div style={{ fontSize:15, fontWeight:700, color:'#B41020', lineHeight:1 }}>
                                {e.date ? parseInt(e.date.split('-')[2]) : '—'}
                            </div>
                            <div style={{ fontSize:9, color:'#B41020', fontWeight:700, textTransform:'uppercase' }}>
                                {e.date ? MONTHS_SHORT[parseInt(e.date.split('-')[1])-1] : ''}
                            </div>
                        </div>
                        <div>
                            <div style={{ fontSize:13, fontWeight:600, color:'#1A1D23' }}>{e.title || 'Evento'}</div>
                            <div style={{ fontSize:12, color:'#94A3B8', marginTop:2 }}>
                                {fmtDate(e.date)}{e.timeChegada ? ` · ${e.timeChegada}` : ''}{e.local ? ` · ${e.local}` : ''}
                            </div>
                        </div>
                    </div>
                ))
            }

            {/* Avisos recentes */}
            {avisos.length > 0 && (
                <>
                    <div style={{ fontSize:11, fontWeight:700, color:'#94A3B8', marginBottom:8, marginTop:4, textTransform:'uppercase', letterSpacing:1 }}>Avisos recentes</div>
                    {avisos.slice(0,3).map(a => (
                        <div key={a.id} style={{ ...card, borderLeft:'3px solid #E65100' }}>
                            {a.title && <div style={{ fontSize:12, fontWeight:700, color:'#E65100', marginBottom:4 }}>{a.title}</div>}
                            <div style={{ fontSize:13, color:'#1A1D23' }}>{a.text}</div>
                            {a.createdAt?.seconds && (
                                <div style={{ fontSize:11, color:'#CBD5E1', marginTop:5 }}>
                                    {new Date(a.createdAt.seconds * 1000).toLocaleDateString('pt-BR')}
                                </div>
                            )}
                        </div>
                    ))}
                </>
            )}

            {showConfig && <ModalConfig config={config} saveConfig={saveConfig} onClose={() => setShowConfig(false)} />}
        </div>
    );
}

// ── PLACEHOLDER ───────────────────────────────────────────────────────────────
function EmBreve({ label, icon }) {
    return (
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:60, gap:10 }}>
            <Icon name={icon} size={36} color="#E2E8F0" />
            <div style={{ fontSize:15, fontWeight:600, color:'#CBD5E1' }}>{label}</div>
            <div style={{ fontSize:12, color:'#E2E8F0' }}>Em construção</div>
        </div>
    );
}

// ── APP ───────────────────────────────────────────────────────────────────────
function App() {
    const [user, setUser] = useState(() => {
        try { return JSON.parse(localStorage.getItem("cf_user")); } catch { return null; }
    });
    const [members, setMembers] = useState([]);
    const [tab, setTab] = useState(0);
    const { config, saveConfig } = useConfig();

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

    if (!user) return <Login members={members} onLogin={handleLogin} config={config} />;

    const isAdmin = user.isAdmin;

    const tabs = isAdmin
        ? [
            { label:'Painel',  icon:'layout-dashboard' },
            { label:'Agenda',  icon:'calendar' },
            { label:'Músicas', icon:'music' },
            { label:'Estudos', icon:'book-open' },
            { label:'Avisos',  icon:'bell' },
            { label:'Equipe',  icon:'users' },
          ]
        : [
            { label:'Agenda',  icon:'calendar' },
            { label:'Músicas', icon:'music' },
            { label:'Estudos', icon:'book-open' },
            { label:'Avisos',  icon:'bell' },
          ];

    const pages = isAdmin
        ? [
            <Painel user={user} config={config} saveConfig={saveConfig} />,
            <EmBreve label="Agenda"  icon="calendar" />,
            <EmBreve label="Músicas" icon="music" />,
            <EmBreve label="Estudos" icon="book-open" />,
            <EmBreve label="Avisos"  icon="bell" />,
            <EmBreve label="Equipe"  icon="users" />,
          ]
        : [
            <EmBreve label="Agenda"  icon="calendar" />,
            <EmBreve label="Músicas" icon="music" />,
            <EmBreve label="Estudos" icon="book-open" />,
            <EmBreve label="Avisos"  icon="bell" />,
          ];

    return (
        <div style={{ minHeight:'100vh', background:'#F6F7F9', display:'flex', flexDirection:'column', maxWidth:480, margin:'0 auto', boxShadow:'0 0 30px rgba(0,0,0,0.07)' }}>

            {/* Header */}
            <div style={{ background:'#B41020', padding:'11px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:100 }}>
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    {config.logoUrl
                        ? <img src={config.logoUrl} alt="Logo" style={{ height:30, objectFit:'contain' }} onError={e => e.target.style.display='none'} />
                        : <Icon name="music-2" size={18} color="rgba(255,255,255,0.8)" />
                    }
                    <div>
                        <div style={{ fontFamily:"'Playfair Display',serif", color:'#fff', fontSize:15, fontWeight:700, lineHeight:1.2 }}>
                            {config.nomeApp || 'Coral Flamboyant'}
                        </div>
                        <div style={{ color:'rgba(255,255,255,0.65)', fontSize:10, letterSpacing:0.8, textTransform:'uppercase' }}>
                            {user.name.split(' ')[0]}{isAdmin ? ' · Admin' : user.role === 'rh' ? ' · RH' : ''}
                        </div>
                    </div>
                </div>
                <button onClick={handleLogout} style={{ background:'rgba(255,255,255,0.15)', border:'1px solid rgba(255,255,255,0.25)', color:'#fff', borderRadius:6, padding:'5px 11px', fontSize:10, cursor:'pointer', fontFamily:'inherit', textTransform:'uppercase', letterSpacing:0.8 }}>
                    Sair
                </button>
            </div>

            {/* Conteúdo */}
            <div style={{ flex:1, overflowY:'auto', paddingBottom:72 }}>
                {pages[tab]}
            </div>

            {/* Nav inferior */}
            <div style={{ position:'fixed', bottom:0, left:'50%', transform:'translateX(-50%)', width:'100%', maxWidth:480, background:'#fff', borderTop:'1px solid #EEF0F3', display:'flex', zIndex:100 }}>
                {tabs.map((t,i) => (
                    <button key={i} onClick={() => setTab(i)} style={{ flex:1, padding:'9px 0 7px', border:'none', background:'none', cursor:'pointer', fontSize:9, fontWeight:700, textTransform:'uppercase', letterSpacing:0.4, display:'flex', flexDirection:'column', alignItems:'center', gap:3, fontFamily:'inherit', color: tab===i ? '#B41020' : '#94A3B8', borderTop:`2px solid ${tab===i ? '#B41020' : 'transparent'}`, transition:'color 0.15s' }}>
                        <Icon name={t.icon} size={16} color={tab===i ? '#B41020' : '#94A3B8'} />
                        {t.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
