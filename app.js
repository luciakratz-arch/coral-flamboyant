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

// ── DEFAULTS DE CONFIGURAÇÃO ──────────────────────────────────────────────────
const CONFIG_DEFAULT = {
    nomeApp: 'Flamboyant Coral',
    subtitulo: 'Portal de Gestão',
    logoUrl: 'https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/unnamed.png',
    corPrimaria: '#B41020',
    corFundo: '#F5EAEA',
};

// ── HELPERS ───────────────────────────────────────────────────────────────────
function todayStr() { return new Date().toISOString().split("T")[0]; }
const MONTHS_PT = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
const MONTHS_SHORT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
function fmtDate(d) {
    if (!d) return "";
    const [, m, dd] = d.split("-");
    return `${parseInt(dd)} de ${MONTHS_PT[parseInt(m)-1]}`;
}
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `${r},${g},${b}`;
}

// ── HOOKS ─────────────────────────────────────────────────────────────────────
function useCollection(col, orderField = "createdAt") {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsub = db.collection(col).orderBy(orderField, "desc")
            .onSnapshot(snap => {
                setData(snap.docs.map(d => ({ id: d.id, ...d.data() })));
                setLoading(false);
            }, () => setLoading(false));
        return unsub;
    }, [col]);
    return { data, loading };
}

function useConfig() {
    const [config, setConfig] = useState(CONFIG_DEFAULT);
    useEffect(() => {
        const unsub = db.collection('config').doc('app').onSnapshot(snap => {
            if (snap.exists) setConfig({ ...CONFIG_DEFAULT, ...snap.data() });
        });
        return unsub;
    }, []);
    function saveConfig(data) {
        return db.collection('config').doc('app').set(data, { merge: true });
    }
    return { config, saveConfig };
}

// ── ÍCONE ─────────────────────────────────────────────────────────────────────
const Icon = ({ name, size = 16, color }) => {
    useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [name]);
    return <i data-lucide={name} style={{ width: size, height: size, color: color || 'inherit', display: 'block', flexShrink: 0 }} />;
};

// ── SPINNER ───────────────────────────────────────────────────────────────────
function Spinner({ cor }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 48 }}>
            <div style={{ width: 28, height: 28, border: `2.5px solid ${cor || '#B41020'}`, borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
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

    const COR = config.corPrimaria || CONFIG_DEFAULT.corPrimaria;
    const RGB = hexToRgb(COR);

    useEffect(() => {
        if (busca.length < 3) { setSugestoes([]); return; }
        const termo = busca.toLowerCase();
        setSugestoes(members.filter(m => m.active && m.name.toLowerCase().includes(termo)).slice(0, 5));
    }, [busca, members]);

    function entrarAdmin() {
        if (senha === '1234') onLogin({ name: 'Gestor', isAdmin: true, role: 'admin' });
        else setErro('Senha incorreta.');
    }
    function entrarCorista(membro) {
        onLogin({ name: membro.name, isAdmin: false, role: 'corista', voice: membro.voice });
    }

    const inp = { width: '100%', padding: '12px 16px', border: '1px solid #E8E0E0', borderRadius: 12, fontSize: 15, outline: 'none', fontFamily: 'inherit', marginBottom: 10, color: '#1A1D23', background: '#fff' };
    const btnVoltar = { background: 'none', border: 'none', color: COR, fontSize: 13, cursor: 'pointer', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'inherit', padding: 0, fontWeight: 600 };
    const btnEntrar = { width: '100%', padding: '14px', background: COR, color: '#fff', border: 'none', borderRadius: 14, fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: 0.3, marginTop: 4 };

    const perfilBtn = (item) => (
        <button key={item.id} style={{
            display: 'flex', alignItems: 'center', gap: 16,
            background: '#fff', border: '1px solid #EEE8E8',
            borderRadius: 16, padding: '16px 18px',
            width: '100%', marginBottom: 12,
            cursor: 'pointer', textAlign: 'left',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            fontFamily: 'inherit',
        }} onClick={() => { setTela(item.id); setErro(''); setSenha(''); setBusca(''); setSugestoes([]); }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: `rgba(${hexToRgb(item.cor)},0.1)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name={item.icon} size={18} color={item.cor} />
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#1A1D23' }}>{item.label}</div>
                <div style={{ fontSize: 12, color: '#999', marginTop: 2 }}>{item.sub}</div>
            </div>
            <Icon name="chevron-right" size={16} color="#CCC" />
        </button>
    );

    const perfis = [
        { id: 'admin',   icon: 'shield',    label: 'Sou Gestor / ADM',        sub: 'Acesso administrativo completo',  cor: COR },
        { id: 'corista', icon: 'users',     label: 'Sou Corista',              sub: 'Acesso às músicas, agenda e avisos', cor: '#2E7D32' },
    ];

    return (
        <div style={{ minHeight: '100vh', background: config.corFundo || CONFIG_DEFAULT.corFundo, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px 24px' }}>
            <div style={{ width: '100%', maxWidth: 400 }}>

                {/* Logo + título */}
                {!tela && (
                    <div style={{ textAlign: 'center', marginBottom: 40 }}>
                        <div style={{ width: 88, height: 88, background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
                            {config.logoUrl
                                ? <img src={config.logoUrl} alt="Logo" style={{ width: 60, height: 60, objectFit: 'contain' }} />
                                : <Icon name="music-2" size={32} color={COR} />
                            }
                        </div>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: COR, lineHeight: 1.2 }}>
                            {config.nomeApp || CONFIG_DEFAULT.nomeApp}
                        </div>
                        <div style={{ fontSize: 14, color: '#999', marginTop: 6 }}>{config.subtitulo || CONFIG_DEFAULT.subtitulo}</div>
                        <div style={{ fontSize: 13, color: '#AAA', marginTop: 20, marginBottom: 4 }}>Como deseja entrar?</div>
                    </div>
                )}

                {/* Tela inicial */}
                {!tela && perfis.map(perfilBtn)}

                {/* Tela Admin */}
                {tela === 'admin' && (
                    <>
                        <button style={btnVoltar} onClick={() => { setTela(null); setErro(''); }}>
                            <Icon name="arrow-left" size={15} color={COR} /> Voltar
                        </button>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#1A1D23', marginBottom: 24 }}>Gestor / ADM</div>
                        <input style={inp} type="password" placeholder="Senha de acesso" value={senha}
                            onChange={e => { setSenha(e.target.value); setErro(''); }}
                            onKeyDown={e => e.key === 'Enter' && entrarAdmin()} autoFocus />
                        {erro && <div style={{ fontSize: 13, color: COR, marginBottom: 10 }}>{erro}</div>}
                        <button style={btnEntrar} onClick={entrarAdmin}>Entrar</button>
                    </>
                )}

                {/* Tela Corista */}
                {tela === 'corista' && (
                    <>
                        <button style={btnVoltar} onClick={() => { setTela(null); setErro(''); }}>
                            <Icon name="arrow-left" size={15} color={COR} /> Voltar
                        </button>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: '#1A1D23', marginBottom: 24 }}>Corista</div>
                        <input style={inp} type="text" placeholder="Digite seu nome (mín. 3 letras)"
                            value={busca} onChange={e => { setBusca(e.target.value); setErro(''); }} autoFocus />
                        {sugestoes.length > 0 && (
                            <div style={{ background: '#fff', border: '1px solid #EEE', borderRadius: 12, overflow: 'hidden', marginBottom: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                                {sugestoes.map(m => (
                                    <button key={m.id} onClick={() => entrarCorista(m)}
                                        style={{ display: 'block', width: '100%', padding: '13px 16px', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', fontSize: 14, borderBottom: '1px solid #F5F5F5', fontFamily: 'inherit', color: '#1A1D23' }}>
                                        {m.name} <span style={{ fontSize: 12, color: '#999', marginLeft: 8 }}>{m.voice}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                        {busca.length > 0 && busca.length < 3 && <div style={{ fontSize: 12, color: '#999', marginBottom: 8 }}>Digite mais {3 - busca.length} letra(s)...</div>}
                        {busca.length >= 3 && sugestoes.length === 0 && <div style={{ fontSize: 13, color: COR, marginBottom: 8 }}>Nenhum corista encontrado.</div>}
                    </>
                )}

            </div>
            <div style={{ marginTop: 40, fontSize: 11, color: '#CCC' }}>{config.nomeApp || CONFIG_DEFAULT.nomeApp} · Portal de Gestão</div>
        </div>
    );
}

// ── MODAL CONFIGURAÇÕES ───────────────────────────────────────────────────────
function ModalConfig({ config, saveConfig, onClose }) {
    const [form, setForm] = useState({
        nomeApp:    config.nomeApp    || CONFIG_DEFAULT.nomeApp,
        subtitulo:  config.subtitulo  || CONFIG_DEFAULT.subtitulo,
        logoUrl:    config.logoUrl    || CONFIG_DEFAULT.logoUrl,
        corPrimaria:config.corPrimaria|| CONFIG_DEFAULT.corPrimaria,
        corFundo:   config.corFundo   || CONFIG_DEFAULT.corFundo,
    });
    const [salvando, setSalvando] = useState(false);

    async function salvar() {
        setSalvando(true);
        await saveConfig(form);
        setSalvando(false);
        onClose();
    }

    const inp = { width: '100%', padding: '11px 14px', border: '1px solid #E8E0E0', borderRadius: 10, fontSize: 13, outline: 'none', fontFamily: 'inherit', color: '#1A1D23', background: '#fff', marginBottom: 4 };
    const lbl = { display: 'block', fontSize: 11, fontWeight: 700, color: '#888', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 };
    const grupo = { marginBottom: 18 };

    return (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 300, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
            onClick={e => e.target === e.currentTarget && onClose()}>
            <div style={{ background: '#FAFAFA', borderRadius: '20px 20px 0 0', padding: '24px 20px', width: '100%', maxWidth: 480, maxHeight: '90vh', overflowY: 'auto' }}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#1A1D23', fontWeight: 700 }}>Configurações</div>
                    <button onClick={onClose} style={{ background: '#EEE', border: 'none', borderRadius: 8, width: 32, height: 32, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name="x" size={16} color="#666" />
                    </button>
                </div>

                <div style={grupo}>
                    <label style={lbl}>Nome do Coral</label>
                    <input style={inp} value={form.nomeApp} onChange={e => setForm(f => ({ ...f, nomeApp: e.target.value }))} />
                </div>

                <div style={grupo}>
                    <label style={lbl}>Subtítulo</label>
                    <input style={inp} value={form.subtitulo} onChange={e => setForm(f => ({ ...f, subtitulo: e.target.value }))} />
                </div>

                <div style={grupo}>
                    <label style={lbl}>URL da Logo</label>
                    <input style={inp} value={form.logoUrl} onChange={e => setForm(f => ({ ...f, logoUrl: e.target.value }))} placeholder="https://..." />
                    <div style={{ fontSize: 11, color: '#AAA', marginTop: 4 }}>Link direto para PNG com fundo transparente</div>
                    {form.logoUrl && (
                        <div style={{ marginTop: 10, background: '#F0F0F0', borderRadius: 10, padding: 12, textAlign: 'center' }}>
                            <img src={form.logoUrl} alt="Preview" style={{ maxHeight: 60, objectFit: 'contain' }} onError={e => e.target.style.display = 'none'} />
                        </div>
                    )}
                </div>

                <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
                    <div style={{ flex: 1 }}>
                        <label style={lbl}>Cor principal</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <input type="color" value={form.corPrimaria} onChange={e => setForm(f => ({ ...f, corPrimaria: e.target.value }))}
                                style={{ width: 44, height: 40, border: 'none', borderRadius: 8, cursor: 'pointer', padding: 2 }} />
                            <input style={{ ...inp, marginBottom: 0, flex: 1 }} value={form.corPrimaria} onChange={e => setForm(f => ({ ...f, corPrimaria: e.target.value }))} />
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={lbl}>Cor do fundo</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <input type="color" value={form.corFundo} onChange={e => setForm(f => ({ ...f, corFundo: e.target.value }))}
                                style={{ width: 44, height: 40, border: 'none', borderRadius: 8, cursor: 'pointer', padding: 2 }} />
                            <input style={{ ...inp, marginBottom: 0, flex: 1 }} value={form.corFundo} onChange={e => setForm(f => ({ ...f, corFundo: e.target.value }))} />
                        </div>
                    </div>
                </div>

                {/* Preview */}
                <div style={{ background: form.corFundo, borderRadius: 12, padding: 16, textAlign: 'center', marginBottom: 20, border: '1px solid #EEE' }}>
                    <div style={{ fontSize: 11, color: '#AAA', marginBottom: 8 }}>PREVIEW</div>
                    <div style={{ width: 48, height: 48, background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        {form.logoUrl ? <img src={form.logoUrl} style={{ width: 32, height: 32, objectFit: 'contain' }} onError={e => e.target.style.display='none'} /> : <Icon name="music-2" size={20} color={form.corPrimaria} />}
                    </div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: form.corPrimaria }}>{form.nomeApp}</div>
                    <div style={{ fontSize: 12, color: '#AAA', marginTop: 4 }}>{form.subtitulo}</div>
                </div>

                <div style={{ display: 'flex', gap: 10 }}>
                    <button onClick={onClose} style={{ flex: 1, padding: '13px', background: '#EEE', color: '#666', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Cancelar</button>
                    <button onClick={salvar} disabled={salvando} style={{ flex: 1, padding: '13px', background: form.corPrimaria, color: '#fff', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', opacity: salvando ? 0.7 : 1 }}>
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

    const COR = config.corPrimaria || CONFIG_DEFAULT.corPrimaria;

    if (lM || lE || lS || lA) return <Spinner cor={COR} />;

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
    const naipeColors = { soprano: COR, contralto:'#7B1FA2', alto:'#E65100', tenor:'#1565C0', baixo:'#1B5E20' };
    const naipeLabels = { soprano:'Soprano', contralto:'Contralto', alto:'Alto', tenor:'Tenor', baixo:'Baixo' };

    const card = { background:'#fff', borderRadius:14, padding:'16px', border:'1px solid #F0EAEA', boxShadow:'0 2px 8px rgba(0,0,0,0.04)', marginBottom:12 };

    const metrics = [
        { icon:'users',    label:'Integrantes', value:ativos.length,      sub:'ativos',     color: COR },
        { icon:'music',    label:'Músicas',      value:songs.length,       sub:'repertório', color:'#1565C0' },
        { icon:'calendar', label:'Eventos',      value:proxEventos.length, sub:'próximos',   color:'#1B5E20' },
        { icon:'bell',     label:'Avisos',       value:avisos.length,      sub:'publicados', color:'#E65100' },
    ];

    return (
        <div style={{ padding:'20px 16px 0', background: config.corFundo || CONFIG_DEFAULT.corFundo, minHeight:'100%' }}>

            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:20 }}>
                <div>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:700, color:'#1A1D23' }}>
                        Olá, {user.name.split(' ')[0]} 👋
                    </div>
                    <div style={{ fontSize:13, color:'#AAA', marginTop:3 }}>
                        {new Date().toLocaleDateString('pt-BR', { weekday:'long', day:'numeric', month:'long' })}
                    </div>
                </div>
                <button onClick={() => setShowConfig(true)}
                    style={{ background:'#fff', border:'1px solid #EEE', borderRadius:10, width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', boxShadow:'0 1px 4px rgba(0,0,0,0.06)' }}>
                    <Icon name="settings" size={15} color="#888" />
                </button>
            </div>

            {/* Métricas */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:12 }}>
                {metrics.map(m => (
                    <div key={m.label} style={{ ...card, marginBottom:0, padding:'14px' }}>
                        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:10 }}>
                            <div style={{ width:28, height:28, borderRadius:8, background:`rgba(${hexToRgb(m.color)},0.1)`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                                <Icon name={m.icon} size={14} color={m.color} />
                            </div>
                            <span style={{ fontSize:10, color:'#AAA', fontWeight:700, textTransform:'uppercase', letterSpacing:0.8 }}>{m.label}</span>
                        </div>
                        <div style={{ fontSize:30, fontWeight:700, color:'#1A1D23', lineHeight:1 }}>{m.value}</div>
                        <div style={{ fontSize:12, color:'#AAA', marginTop:4 }}>{m.sub}</div>
                    </div>
                ))}
            </div>

            {/* Naipes */}
            <div style={card}>
                <div style={{ fontSize:11, fontWeight:700, color:'#AAA', marginBottom:14, textTransform:'uppercase', letterSpacing:1 }}>Distribuição por naipe</div>
                {Object.entries(naipes).filter(([,v]) => v > 0).length === 0
                    ? <div style={{ fontSize:13, color:'#CCC', textAlign:'center', padding:'8px 0' }}>Nenhum integrante cadastrado</div>
                    : Object.entries(naipes).map(([naipe, count]) => {
                        const pct = ativos.length > 0 ? Math.round((count / ativos.length) * 100) : 0;
                        return (
                            <div key={naipe} style={{ marginBottom:10 }}>
                                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
                                    <span style={{ fontSize:13, color:'#1A1D23', fontWeight:600 }}>{naipeLabels[naipe]}</span>
                                    <span style={{ fontSize:12, color:'#AAA' }}>{count} · {pct}%</span>
                                </div>
                                <div style={{ height:5, background:'#F5F0F0', borderRadius:3, overflow:'hidden' }}>
                                    <div style={{ width:pct+'%', height:'100%', background:naipeColors[naipe], borderRadius:3 }} />
                                </div>
                            </div>
                        );
                    })
                }
                {inativos.length > 0 && (
                    <div style={{ marginTop:10, fontSize:11, color:'#CCC', paddingTop:10, borderTop:'1px solid #F5F0F0' }}>
                        {inativos.length} inativo{inativos.length > 1 ? 's' : ''}
                    </div>
                )}
            </div>

            {/* Aniversariantes */}
            {aniversarios.length > 0 && (
                <div style={{ ...card, borderLeft:`3px solid ${COR}`, background:'#FFFBFB' }}>
                    <div style={{ fontSize:11, fontWeight:700, color:COR, marginBottom:12, textTransform:'uppercase', letterSpacing:1 }}>
                        🎂 Aniversariantes — {MONTHS_PT[currentMonth-1]}
                    </div>
                    {aniversarios.map(m => {
                        const dd = parseInt(m.birthday.split('-')[2]);
                        const isToday = m.birthday.slice(5) === today.slice(5);
                        return (
                            <div key={m.id} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'7px 0', borderBottom:'1px solid #F5EAEA' }}>
                                <span style={{ fontSize:14, color:'#1A1D23', fontWeight: isToday ? 700 : 400 }}>
                                    {isToday ? '🎉 ' : ''}{m.name}
                                </span>
                                <span style={{ fontSize:13, color: isToday ? COR : '#AAA', fontWeight: isToday ? 700 : 400 }}>
                                    dia {dd}{isToday ? ' · hoje' : ''}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Próximos eventos */}
            <div style={{ fontSize:11, fontWeight:700, color:'#AAA', marginBottom:10, textTransform:'uppercase', letterSpacing:1 }}>Próximos eventos</div>
            {proxEventos.length === 0
                ? <div style={{ ...card, textAlign:'center', color:'#CCC', fontSize:13, padding:'24px 16px' }}>
                    <Icon name="calendar" size={28} color="#EEE" />
                    <div style={{ marginTop:8 }}>Nenhum evento cadastrado</div>
                  </div>
                : proxEventos.map(e => (
                    <div key={e.id} style={{ ...card, display:'flex', gap:14, alignItems:'center' }}>
                        <div style={{ minWidth:44, height:44, background:`rgba(${hexToRgb(COR)},0.08)`, borderRadius:10, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                            <div style={{ fontSize:16, fontWeight:700, color:COR, lineHeight:1 }}>
                                {e.date ? parseInt(e.date.split('-')[2]) : '—'}
                            </div>
                            <div style={{ fontSize:9, color:COR, fontWeight:700, textTransform:'uppercase' }}>
                                {e.date ? MONTHS_SHORT[parseInt(e.date.split('-')[1])-1] : ''}
                            </div>
                        </div>
                        <div>
                            <div style={{ fontSize:14, fontWeight:600, color:'#1A1D23' }}>{e.title || 'Evento'}</div>
                            <div style={{ fontSize:12, color:'#AAA', marginTop:3 }}>
                                {fmtDate(e.date)}{e.timeChegada ? ` · ${e.timeChegada}` : ''}{e.local ? ` · ${e.local}` : ''}
                            </div>
                        </div>
                    </div>
                ))
            }

            {/* Avisos recentes */}
            {avisos.length > 0 && (
                <>
                    <div style={{ fontSize:11, fontWeight:700, color:'#AAA', marginBottom:10, marginTop:4, textTransform:'uppercase', letterSpacing:1 }}>Avisos recentes</div>
                    {avisos.slice(0,3).map(a => (
                        <div key={a.id} style={{ ...card, borderLeft:'3px solid #E65100' }}>
                            {a.title && <div style={{ fontSize:12, fontWeight:700, color:'#E65100', marginBottom:5 }}>{a.title}</div>}
                            <div style={{ fontSize:14, color:'#1A1D23' }}>{a.text}</div>
                            {a.createdAt?.seconds && (
                                <div style={{ fontSize:11, color:'#CCC', marginTop:6 }}>
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
function EmBreve({ label, icon, config }) {
    const COR = config?.corPrimaria || CONFIG_DEFAULT.corPrimaria;
    return (
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:60, gap:12, background: config?.corFundo || CONFIG_DEFAULT.corFundo, minHeight:'100%' }}>
            <Icon name={icon} size={40} color="#DDD" />
            <div style={{ fontSize:16, fontWeight:600, color:'#CCC' }}>{label}</div>
            <div style={{ fontSize:13, color:'#DDD' }}>Em construção</div>
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
    const COR = config.corPrimaria || CONFIG_DEFAULT.corPrimaria;

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
            <EmBreve label="Agenda"  icon="calendar"  config={config} />,
            <EmBreve label="Músicas" icon="music"     config={config} />,
            <EmBreve label="Estudos" icon="book-open" config={config} />,
            <EmBreve label="Avisos"  icon="bell"      config={config} />,
            <EmBreve label="Equipe"  icon="users"     config={config} />,
          ]
        : [
            <EmBreve label="Agenda"  icon="calendar"  config={config} />,
            <EmBreve label="Músicas" icon="music"     config={config} />,
            <EmBreve label="Estudos" icon="book-open" config={config} />,
            <EmBreve label="Avisos"  icon="bell"      config={config} />,
          ];

    return (
        <div style={{ minHeight:'100vh', background: config.corFundo || CONFIG_DEFAULT.corFundo, display:'flex', flexDirection:'column', maxWidth:480, margin:'0 auto', boxShadow:'0 0 40px rgba(0,0,0,0.08)' }}>

            {/* Header */}
            <div style={{ background: COR, padding:'12px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:100 }}>
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <div style={{ width:32, height:32, background:'rgba(255,255,255,0.15)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
                        {config.logoUrl
                            ? <img src={config.logoUrl} alt="Logo" style={{ width:24, height:24, objectFit:'contain' }} onError={e => e.target.style.display='none'} />
                            : <Icon name="music-2" size={16} color="#fff" />
                        }
                    </div>
                    <div>
                        <div style={{ fontFamily:"'Playfair Display',serif", color:'#fff', fontSize:15, fontWeight:700, lineHeight:1.2 }}>
                            {config.nomeApp || CONFIG_DEFAULT.nomeApp}
                        </div>
                        <div style={{ color:'rgba(255,255,255,0.65)', fontSize:10, letterSpacing:0.8, textTransform:'uppercase' }}>
                            {user.name.split(' ')[0]}{isAdmin ? ' · Admin' : ''}
                        </div>
                    </div>
                </div>
                <button onClick={handleLogout} style={{ background:'rgba(255,255,255,0.15)', border:'1px solid rgba(255,255,255,0.25)', color:'#fff', borderRadius:8, padding:'5px 12px', fontSize:10, cursor:'pointer', fontFamily:'inherit', textTransform:'uppercase', letterSpacing:0.8 }}>
                    Sair
                </button>
            </div>

            {/* Conteúdo */}
            <div style={{ flex:1, overflowY:'auto', paddingBottom:72 }}>
                {pages[tab]}
            </div>

            {/* Nav inferior */}
            <div style={{ position:'fixed', bottom:0, left:'50%', transform:'translateX(-50%)', width:'100%', maxWidth:480, background:'#fff', borderTop:'1px solid #F0EAEA', display:'flex', zIndex:100 }}>
                {tabs.map((t,i) => (
                    <button key={i} onClick={() => setTab(i)} style={{ flex:1, padding:'9px 0 7px', border:'none', background:'none', cursor:'pointer', fontSize:9, fontWeight:700, textTransform:'uppercase', letterSpacing:0.4, display:'flex', flexDirection:'column', alignItems:'center', gap:3, fontFamily:'inherit', color: tab===i ? COR : '#CCC', borderTop:`2px solid ${tab===i ? COR : 'transparent'}`, transition:'color 0.15s' }}>
                        <Icon name={t.icon} size={17} color={tab===i ? COR : '#CCC'} />
                        {t.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
