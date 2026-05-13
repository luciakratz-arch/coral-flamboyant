const { useState, useEffect, useRef } = React;

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

// ── CONSTANTES ────────────────────────────────────────────────────────────────
const COR        = "#B41020";
const COR_FUNDO  = "#F5EAEA";
const COR_TEXTO  = "#7B1020";
const LOGO_URL   = "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/unnamed.png";

const MONTHS_PT    = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
const MONTHS_SHORT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

function todayStr() { return new Date().toISOString().split("T")[0]; }
function fmtDate(d) {
    if (!d) return "";
    const [y,m,dd] = d.split("-");
    return `${parseInt(dd)} de ${MONTHS_PT[parseInt(m)-1]} de ${y}`;
}

// ── HOOKS FIREBASE ────────────────────────────────────────────────────────────
function useCollection(col, orderField="createdAt") {
    const [data, setData]       = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsub = db.collection(col).orderBy(orderField,"desc")
            .onSnapshot(snap => {
                setData(snap.docs.map(d => ({ id:d.id, ...d.data() })));
                setLoading(false);
            }, () => setLoading(false));
        return unsub;
    }, [col]);
    return { data, loading };
}

function useConfig() {
    const [config, setConfig] = useState({ nomeApp:"Flamboyant Coral", subtitulo:"Portal de Gestão", logoUrl:LOGO_URL, corPrimaria:COR, corFundo:COR_FUNDO });
    useEffect(() => {
        const unsub = db.collection("config").doc("app").onSnapshot(snap => {
            if (snap.exists) setConfig(c => ({ ...c, ...snap.data() }));
        });
        return unsub;
    }, []);
    const save = (d) => db.collection("config").doc("app").set(d, { merge:true });
    return { config, save };
}

// ── ICON ──────────────────────────────────────────────────────────────────────
const Icon = ({ name, size=16, color }) => {
    useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [name]);
    return <i data-lucide={name} style={{ width:size, height:size, color:color||"inherit", display:"block", flexShrink:0 }} />;
};

// ── SPINNER ───────────────────────────────────────────────────────────────────
function Spinner() {
    return <div style={{ display:"flex", justifyContent:"center", padding:48 }}>
        <div style={{ width:28, height:28, border:`3px solid ${COR}`, borderTopColor:"transparent", borderRadius:"50%", animation:"spin 0.8s linear infinite" }} />
    </div>;
}

// ── LOGIN ─────────────────────────────────────────────────────────────────────
function Login({ members, onLogin, config }) {
    const [tela, setTela]         = useState(null);
    const [senha, setSenha]       = useState("");
    const [mostrar, setMostrar]   = useState(false);
    const [busca, setBusca]       = useState("");
    const [sugestoes, setSugestoes] = useState([]);
    const [erro, setErro]         = useState("");
    const cor = config.corPrimaria || COR;

    useEffect(() => {
        if (busca.length < 3) { setSugestoes([]); return; }
        const t = busca.toLowerCase();
        setSugestoes(members.filter(m => m.active && m.name.toLowerCase().includes(t)).slice(0,6));
    }, [busca, members]);

    function entrarAdmin() {
        if (senha === "1234") onLogin({ name:"Gestor", isAdmin:true, role:"admin" });
        else setErro("Senha incorreta.");
    }
    function entrarCorista(m) { onLogin({ name:m.name, isAdmin:false, role:"corista", voice:m.voice }); }

    const s = {
        wrap:    { minHeight:"100vh", background:config.corFundo||COR_FUNDO, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"32px 20px" },
        card:    { background:"#fff", borderRadius:16, border:`1px solid #EEE0E0`, padding:"24px 20px", width:"100%", maxWidth:420, boxShadow:"0 4px 24px rgba(0,0,0,0.07)" },
        inp:     { width:"100%", padding:"12px 16px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:15, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#fff" },
        btnSec:  { flex:1, padding:"13px", background:"#F5EAEA", color:cor, border:"none", borderRadius:10, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit" },
        btnPri:  { flex:1, padding:"13px", background:cor, color:"#fff", border:"none", borderRadius:10, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit" },
    };

    return (
        <div style={s.wrap}>
            <div style={{ textAlign:"center", marginBottom:28 }}>
                <div style={{ width:90, height:90, background:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", boxShadow:"0 4px 20px rgba(0,0,0,0.1)" }}>
                    <img src={config.logoUrl||LOGO_URL} alt="Logo" style={{ width:64, height:64, objectFit:"contain" }} onError={e=>e.target.style.display="none"} />
                </div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:26, fontWeight:700, color:cor }}>{config.nomeApp||"Flamboyant Coral"}</div>
                <div style={{ fontSize:14, color:"#AAA", marginTop:4 }}>{config.subtitulo||"Portal de Gestão"}</div>
            </div>

            {/* Tela inicial */}
            {!tela && (
                <div style={s.card}>
                    {[
                        { id:"admin",   icon:"shield",  label:"Acesso Administrativo", sub:"Gestão completa do coral",       cor:COR,      bg:"rgba(180,16,32,0.08)" },
                        { id:"corista", icon:"users",   label:"Sou Corista",            sub:"Acesso às músicas e agenda",     cor:"#2E7D32", bg:"rgba(46,125,50,0.08)" },
                    ].map(p => (
                        <button key={p.id} onClick={() => { setTela(p.id); setErro(""); setSenha(""); setBusca(""); setSugestoes([]); }}
                            style={{ display:"flex", alignItems:"center", gap:14, background:p.bg, border:`1px solid ${p.cor}22`, borderRadius:12, padding:"16px", width:"100%", marginBottom:10, cursor:"pointer", textAlign:"left", fontFamily:"inherit" }}>
                            <div style={{ width:40, height:40, borderRadius:10, background:"#fff", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 1px 4px rgba(0,0,0,0.08)" }}>
                                <Icon name={p.icon} size={18} color={p.cor} />
                            </div>
                            <div style={{ flex:1 }}>
                                <div style={{ fontWeight:700, fontSize:15, color:"#1A1D23" }}>{p.label}</div>
                                <div style={{ fontSize:12, color:"#AAA", marginTop:2 }}>{p.sub}</div>
                            </div>
                            <Icon name="chevron-right" size={16} color="#CCC" />
                        </button>
                    ))}
                </div>
            )}

            {/* Admin */}
            {tela === "admin" && (
                <div style={s.card}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
                        <div style={{ width:36, height:36, background:"rgba(180,16,32,0.08)", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
                            <Icon name="shield" size={17} color={cor} />
                        </div>
                        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:"#1A1D23" }}>Acesso Administrativo</div>
                    </div>
                    <div style={{ position:"relative", marginBottom:12 }}>
                        <input style={{ ...s.inp, paddingRight:44 }} type={mostrar?"text":"password"} placeholder="Senha de gestor" value={senha}
                            onChange={e => { setSenha(e.target.value); setErro(""); }}
                            onKeyDown={e => e.key==="Enter" && entrarAdmin()} autoFocus />
                        <button onClick={() => setMostrar(v=>!v)} style={{ position:"absolute", right:12, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer" }}>
                            <Icon name={mostrar?"eye-off":"eye"} size={16} color="#AAA" />
                        </button>
                    </div>
                    {erro && <div style={{ fontSize:13, color:cor, marginBottom:10 }}>{erro}</div>}
                    <div style={{ display:"flex", gap:10 }}>
                        <button style={s.btnSec} onClick={() => { setTela(null); setErro(""); }}>Voltar</button>
                        <button style={s.btnPri} onClick={entrarAdmin}>Entrar</button>
                    </div>
                </div>
            )}

            {/* Corista */}
            {tela === "corista" && (
                <div style={s.card}>
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
                        <div style={{ width:36, height:36, background:"rgba(46,125,50,0.08)", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
                            <Icon name="users" size={17} color="#2E7D32" />
                        </div>
                        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:"#1A1D23" }}>Sou Corista</div>
                    </div>
                    <input style={{ ...s.inp, marginBottom:8 }} type="text" placeholder="Digite seu nome (mín. 3 letras)"
                        value={busca} onChange={e => { setBusca(e.target.value); setErro(""); }} autoFocus />
                    {sugestoes.length > 0 && (
                        <div style={{ background:"#fff", border:"1px solid #EEE", borderRadius:10, overflow:"hidden", marginBottom:10 }}>
                            {sugestoes.map(m => (
                                <button key={m.id} onClick={() => entrarCorista(m)}
                                    style={{ display:"block", width:"100%", padding:"12px 16px", background:"none", border:"none", textAlign:"left", cursor:"pointer", fontSize:14, borderBottom:"1px solid #F5F5F5", fontFamily:"inherit", color:"#1A1D23" }}>
                                    {m.name} <span style={{ fontSize:12, color:"#AAA", marginLeft:8 }}>{m.voice}</span>
                                </button>
                            ))}
                        </div>
                    )}
                    {busca.length > 0 && busca.length < 3 && <div style={{ fontSize:12, color:"#AAA", marginBottom:8 }}>Digite mais {3-busca.length} letra(s)...</div>}
                    {busca.length >= 3 && sugestoes.length === 0 && <div style={{ fontSize:13, color:cor, marginBottom:8 }}>Nenhum corista encontrado.</div>}
                    <button style={{ ...s.btnSec, width:"100%", marginTop:4 }} onClick={() => { setTela(null); setErro(""); }}>Voltar</button>
                </div>
            )}

            <div style={{ marginTop:32, fontSize:11, color:"#CCC" }}>{config.nomeApp||"Flamboyant Coral"} · Portal de Gestão</div>
        </div>
    );
}

// ── PAINEL ────────────────────────────────────────────────────────────────────
function Painel({ user, config }) {
    const { data:members, loading:lM } = useCollection("members");
    const { data:events,  loading:lE } = useCollection("events","date");
    const { data:songs,   loading:lS } = useCollection("songs");
    const { data:avisos,  loading:lA } = useCollection("avisos");

    if (lM||lE||lS||lA) return <Spinner />;

    const cor = config.corPrimaria || COR;
    const today = todayStr();
    const ativos       = members.filter(m => m.active);
    const proxEventos  = events.filter(e => e.date >= today).sort((a,b) => a.date>b.date?1:-1).slice(0,3);
    const currentMonth = new Date().getMonth()+1;
    const aniversarios = ativos
        .filter(m => m.birthday && parseInt(m.birthday.split("-")[1]) === currentMonth)
        .sort((a,b) => parseInt(a.birthday.split("-")[2]) - parseInt(b.birthday.split("-")[2]));

    const card = (borderColor) => ({
        background:"#fff", borderRadius:12, padding:"16px 20px",
        border:"1px solid #EEE8E8", borderLeft:`3px solid ${borderColor||"#EEE8E8"}`,
        marginBottom:12, boxShadow:"0 1px 4px rgba(0,0,0,0.04)"
    });

    const MetricCard = ({ label, value, sub, icon, borderColor }) => (
        <div style={card(borderColor)}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                <div>
                    <div style={{ fontSize:13, color:"#666", fontWeight:600, marginBottom:8 }}>{label}</div>
                    <div style={{ fontSize:32, fontWeight:700, color:"#1A1D23", lineHeight:1 }}>{value}</div>
                    <div style={{ fontSize:13, color:"#AAA", marginTop:4 }}>{sub}</div>
                </div>
                <Icon name={icon} size={20} color={borderColor||cor} />
            </div>
        </div>
    );

    return (
        <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:cor, marginBottom:24 }}>Painel</div>

            {/* Métricas */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:4 }}>
                <MetricCard label="Integrantes" value={ativos.length}       sub={`de ${members.length} no total`}  icon="users"    borderColor={cor} />
                <MetricCard label="Repertório"  value={songs.length}        sub="músicas no total"                  icon="music"    borderColor="#2E7D32" />
                <MetricCard label="Eventos"     value={events.length}       sub="na agenda"                         icon="calendar" borderColor={cor} />
                <MetricCard label="Aniversários" value={aniversarios.length} sub="este mês"                         icon="cake"     borderColor="#E65100" />
            </div>

            {/* Próximos Eventos */}
            <div style={{ display:"flex", alignItems:"center", gap:8, margin:"20px 0 12px" }}>
                <Icon name="calendar" size={18} color={cor} />
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:"#1A1D23" }}>Próximos Eventos</div>
            </div>
            {proxEventos.length === 0
                ? <div style={{ ...card(), textAlign:"center", color:"#CCC", padding:"24px 16px" }}>Nenhum evento cadastrado</div>
                : proxEventos.map(e => (
                    <div key={e.id} style={card()}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                            <div>
                                <div style={{ fontSize:15, fontWeight:700, color:"#1A1D23" }}>{e.title}</div>
                                <div style={{ fontSize:13, color:"#AAA", marginTop:3 }}>
                                    {fmtDate(e.date)}{e.tipo ? ` — ${e.tipo}` : ""}
                                </div>
                            </div>
                            {e.timeChegada && (
                                <div style={{ fontSize:13, color:"#AAA", whiteSpace:"nowrap" }}>Chegada: {e.timeChegada}</div>
                            )}
                        </div>
                    </div>
                ))
            }

            {/* Aniversariantes */}
            {aniversarios.length > 0 && <>
                <div style={{ display:"flex", alignItems:"center", gap:8, margin:"20px 0 12px" }}>
                    <Icon name="cake" size={18} color={cor} />
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:"#1A1D23" }}>Aniversariantes do Mês</div>
                </div>
                {aniversarios.map(m => {
                    const [,mm,dd] = m.birthday.split("-");
                    const isToday = m.birthday.slice(5) === today.slice(5);
                    return (
                        <div key={m.id} style={{ ...card(isToday?cor:""), display:"flex", alignItems:"center", gap:12, padding:"12px 16px" }}>
                            <div style={{ width:38, height:38, background:`rgba(180,16,32,0.08)`, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center" }}>
                                <Icon name="cake" size={16} color={cor} />
                            </div>
                            <div>
                                <div style={{ fontSize:14, fontWeight:isToday?700:600, color:"#1A1D23" }}>{isToday?"🎉 ":""}{m.name}</div>
                                <div style={{ fontSize:12, color:"#AAA", marginTop:2 }}>dia {parseInt(dd)} de {MONTHS_SHORT[parseInt(mm)-1]}{isToday?" · hoje!":""}</div>
                            </div>
                        </div>
                    );
                })}
            </>}

            {/* Avisos Recentes */}
            {avisos.length > 0 && <>
                <div style={{ display:"flex", alignItems:"center", gap:8, margin:"20px 0 12px" }}>
                    <Icon name="megaphone" size={18} color={cor} />
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:"#1A1D23" }}>Avisos Recentes</div>
                </div>
                {avisos.slice(0,3).map(a => (
                    <div key={a.id} style={{ ...card(a.urgente?cor:""), background: a.urgente?"#FFF5F5":"#fff" }}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:6 }}>
                            <div style={{ fontSize:15, fontWeight:700, color:"#1A1D23" }}>{a.title||a.titulo}</div>
                            {a.createdAt?.seconds && (
                                <div style={{ fontSize:12, color:"#AAA", whiteSpace:"nowrap", marginLeft:12 }}>
                                    {new Date(a.createdAt.seconds*1000).toLocaleDateString("pt-BR",{day:"numeric",month:"short"})}
                                </div>
                            )}
                        </div>
                        <div style={{ fontSize:14, color:"#555", lineHeight:1.5 }}>{a.text||a.texto}</div>
                    </div>
                ))}
            </>}
        </div>
    );
}

// ── PLACEHOLDER ───────────────────────────────────────────────────────────────
function EmBreve({ label, icon }) {
    return (
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:80, gap:12 }}>
            <Icon name={icon} size={40} color="#DDD" />
            <div style={{ fontSize:18, fontWeight:600, color:"#CCC" }}>{label}</div>
            <div style={{ fontSize:13, color:"#DDD" }}>Em construção</div>
        </div>
    );
}

// ── CONFIGURAÇÕES ─────────────────────────────────────────────────────────────
function Configuracoes({ config, save }) {
    const [form, setForm] = useState({ ...config });
    const [salvando, setSalvando] = useState(false);
    const [ok, setOk] = useState(false);

    useEffect(() => { setForm({ ...config }); }, [config]);

    async function salvar() {
        setSalvando(true);
        await save(form);
        setSalvando(false);
        setOk(true);
        setTimeout(() => setOk(false), 2500);
    }

    const inp  = { width:"100%", padding:"11px 14px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:14, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#fff" };
    const lbl  = { display:"block", fontSize:11, fontWeight:700, color:"#888", marginBottom:6, textTransform:"uppercase", letterSpacing:1 };
    const grp  = { marginBottom:18 };

    return (
        <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:config.corPrimaria||COR, marginBottom:24 }}>Configurações</div>

            <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"20px", marginBottom:16, boxShadow:"0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize:13, fontWeight:700, color:"#888", textTransform:"uppercase", letterSpacing:1, marginBottom:16 }}>Identidade do Coral</div>

                <div style={grp}>
                    <label style={lbl}>Nome do Coral</label>
                    <input style={inp} value={form.nomeApp||""} onChange={e => setForm(f=>({...f,nomeApp:e.target.value}))} />
                </div>
                <div style={grp}>
                    <label style={lbl}>Subtítulo</label>
                    <input style={inp} value={form.subtitulo||""} onChange={e => setForm(f=>({...f,subtitulo:e.target.value}))} />
                </div>
                <div style={grp}>
                    <label style={lbl}>URL da Logo</label>
                    <input style={inp} value={form.logoUrl||""} onChange={e => setForm(f=>({...f,logoUrl:e.target.value}))} placeholder="https://..." />
                    <div style={{ fontSize:11, color:"#AAA", marginTop:5 }}>Cole o link direto para PNG com fundo transparente</div>
                    {form.logoUrl && (
                        <div style={{ marginTop:12, background:"#F5F0F0", borderRadius:10, padding:12, textAlign:"center" }}>
                            <img src={form.logoUrl} alt="Preview" style={{ maxHeight:64, objectFit:"contain" }} onError={e=>e.target.style.display="none"} />
                        </div>
                    )}
                </div>
            </div>

            <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"20px", marginBottom:20, boxShadow:"0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ fontSize:13, fontWeight:700, color:"#888", textTransform:"uppercase", letterSpacing:1, marginBottom:16 }}>Cores</div>
                <div style={{ display:"flex", gap:16 }}>
                    <div style={{ flex:1 }}>
                        <label style={lbl}>Cor principal</label>
                        <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                            <input type="color" value={form.corPrimaria||COR} onChange={e=>setForm(f=>({...f,corPrimaria:e.target.value}))}
                                style={{ width:44, height:40, border:"none", borderRadius:8, cursor:"pointer", padding:2, background:"none" }} />
                            <input style={{ ...inp, flex:1 }} value={form.corPrimaria||""} onChange={e=>setForm(f=>({...f,corPrimaria:e.target.value}))} />
                        </div>
                    </div>
                    <div style={{ flex:1 }}>
                        <label style={lbl}>Fundo</label>
                        <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                            <input type="color" value={form.corFundo||COR_FUNDO} onChange={e=>setForm(f=>({...f,corFundo:e.target.value}))}
                                style={{ width:44, height:40, border:"none", borderRadius:8, cursor:"pointer", padding:2, background:"none" }} />
                            <input style={{ ...inp, flex:1 }} value={form.corFundo||""} onChange={e=>setForm(f=>({...f,corFundo:e.target.value}))} />
                        </div>
                    </div>
                </div>

                {/* Preview */}
                <div style={{ marginTop:16, background:form.corFundo||COR_FUNDO, borderRadius:10, padding:16, textAlign:"center" }}>
                    <div style={{ fontSize:11, color:"#AAA", marginBottom:8 }}>PREVIEW</div>
                    <div style={{ width:52, height:52, background:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 10px", boxShadow:"0 2px 8px rgba(0,0,0,0.1)" }}>
                        <img src={form.logoUrl||LOGO_URL} style={{ width:36, height:36, objectFit:"contain" }} onError={e=>e.target.style.display="none"} />
                    </div>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:form.corPrimaria||COR }}>{form.nomeApp||"Flamboyant Coral"}</div>
                    <div style={{ fontSize:13, color:"#AAA", marginTop:4 }}>{form.subtitulo||"Portal de Gestão"}</div>
                </div>
            </div>

            <button onClick={salvar} disabled={salvando} style={{ width:"100%", padding:"14px", background:config.corPrimaria||COR, color:"#fff", border:"none", borderRadius:12, fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:"inherit", opacity:salvando?0.7:1 }}>
                {ok ? "✓ Salvo!" : salvando ? "Salvando..." : "Salvar Configurações"}
            </button>
        </div>
    );
}

// ── NAVEGAÇÃO (itens) ─────────────────────────────────────────────────────────
const NAV_ADMIN = [
    { key:"painel",      label:"Painel",             icon:"layout-dashboard" },
    { key:"integrantes", label:"Integrantes",         icon:"users" },
    { key:"musicas",     label:"Músicas",             icon:"music" },
    { key:"estudos",     label:"Sala de Estudos",     icon:"graduation-cap" },
    { key:"agenda",      label:"Agenda",              icon:"calendar" },
    { key:"avisos",      label:"Avisos",              icon:"megaphone" },
    { key:"frequencia",  label:"Frequência",          icon:"bar-chart-2" },
    { key:"apresentacao",label:"Apresentação",        icon:"mic" },
    { key:"declaracao",  label:"Declaração Digital",  icon:"file-text" },
    { key:"relatorios",  label:"Relatórios",          icon:"chart-bar" },
    { key:"config",      label:"Configurações",       icon:"settings" },
];
const NAV_CORISTA = [
    { key:"agenda",   label:"Agenda",    icon:"calendar" },
    { key:"musicas",  label:"Músicas",   icon:"music" },
    { key:"estudos",  label:"Estudos",   icon:"graduation-cap" },
    { key:"avisos",   label:"Avisos",    icon:"megaphone" },
];

// ── APP ───────────────────────────────────────────────────────────────────────
function App() {
    const [user, setUser] = useState(() => { try { return JSON.parse(localStorage.getItem("cf_user")); } catch { return null; } });
    const [members, setMembers] = useState([]);
    const [tab, setTab]   = useState("painel");
    const [menuOpen, setMenuOpen] = useState(false);
    const { config, save } = useConfig();

    useEffect(() => {
        const unsub = db.collection("members").onSnapshot(snap => setMembers(snap.docs.map(d=>({id:d.id,...d.data()}))));
        return unsub;
    }, []);

    function handleLogin(u) { localStorage.setItem("cf_user",JSON.stringify(u)); setUser(u); setTab(u.isAdmin?"painel":"agenda"); }
    function handleLogout() { localStorage.removeItem("cf_user"); setUser(null); }

    if (!user) return <Login members={members} onLogin={handleLogin} config={config} />;

    const isAdmin = user.isAdmin;
    const cor     = config.corPrimaria || COR;
    const fundo   = config.corFundo    || COR_FUNDO;
    const navItems = isAdmin ? NAV_ADMIN : NAV_CORISTA;

    // Páginas
    const pages = {
        painel:       <Painel user={user} config={config} />,
        integrantes:  <EmBreve label="Integrantes"        icon="users" />,
        musicas:      <EmBreve label="Músicas"            icon="music" />,
        estudos:      <EmBreve label="Sala de Estudos"    icon="graduation-cap" />,
        agenda:       <EmBreve label="Agenda"             icon="calendar" />,
        avisos:       <EmBreve label="Avisos"             icon="megaphone" />,
        frequencia:   <EmBreve label="Frequência"         icon="bar-chart-2" />,
        apresentacao: <EmBreve label="Apresentação"       icon="mic" />,
        declaracao:   <EmBreve label="Declaração Digital" icon="file-text" />,
        relatorios:   <EmBreve label="Relatórios"         icon="chart-bar" />,
        config:       <Configuracoes config={config} save={save} />,
    };

    // Nav mobile (máx 4 itens)
    const mobileNav = isAdmin
        ? [NAV_ADMIN[0], NAV_ADMIN[1], NAV_ADMIN[4], NAV_ADMIN[5]]
        : NAV_CORISTA;

    return (
        <div style={{ display:"flex", minHeight:"100vh", background:fundo, fontFamily:"'Inter',sans-serif" }}>

            {/* ── SIDEBAR DESKTOP ── */}
            <aside style={{ width:260, background:"#fff", borderRight:"1px solid #EEE0E0", display:"flex", flexDirection:"column", position:"fixed", top:0, left:0, height:"100vh", zIndex:200, boxShadow:"2px 0 12px rgba(0,0,0,0.04)" }}
                className="sidebar-desktop">
                {/* Logo */}
                <div style={{ padding:"20px 20px 16px", borderBottom:"1px solid #F5EAEA" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                        <div style={{ width:40, height:40, background:fundo, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center" }}>
                            <img src={config.logoUrl||LOGO_URL} alt="Logo" style={{ width:28, height:28, objectFit:"contain" }} onError={e=>e.target.style.display="none"} />
                        </div>
                        <div>
                            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:15, fontWeight:700, color:cor, lineHeight:1.2 }}>{config.nomeApp||"Flamboyant Coral"}</div>
                            <div style={{ fontSize:11, color:"#AAA" }}>{config.subtitulo||"Portal de Gestão"}</div>
                        </div>
                    </div>
                </div>

                {/* Itens */}
                <nav style={{ flex:1, padding:"12px 10px", overflowY:"auto" }}>
                    {navItems.map(item => (
                        <button key={item.key} onClick={() => setTab(item.key)}
                            style={{ display:"flex", alignItems:"center", gap:12, width:"100%", padding:"10px 12px", borderRadius:10, border:"none", background: tab===item.key ? cor : "none", color: tab===item.key ? "#fff" : "#444", cursor:"pointer", fontFamily:"inherit", fontSize:14, fontWeight: tab===item.key ? 700 : 500, marginBottom:2, textAlign:"left", transition:"background 0.15s" }}>
                            <Icon name={item.icon} size={16} color={tab===item.key?"#fff":"#888"} />
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Usuário + Sair */}
                <div style={{ padding:"12px 16px", borderTop:"1px solid #F5EAEA" }}>
                    <div style={{ fontSize:13, color:"#AAA", marginBottom:2 }}>{isAdmin?"Administrador":"Corista"}</div>
                    <div style={{ fontSize:14, fontWeight:600, color:"#1A1D23", marginBottom:10 }}>{user.name}</div>
                    <button onClick={handleLogout} style={{ width:"100%", padding:"9px", background:fundo, color:cor, border:`1px solid ${cor}33`, borderRadius:8, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                        Sair
                    </button>
                </div>
            </aside>

            {/* ── CONTEÚDO PRINCIPAL ── */}
            <main style={{ flex:1, marginLeft:0, paddingBottom:72, minHeight:"100vh" }} className="main-content">

                {/* Header mobile */}
                <div style={{ background:cor, padding:"12px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", position:"sticky", top:0, zIndex:100 }} className="header-mobile">
                    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                        <div style={{ width:32, height:32, background:"rgba(255,255,255,0.15)", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
                            <img src={config.logoUrl||LOGO_URL} alt="" style={{ width:22, height:22, objectFit:"contain" }} onError={e=>e.target.style.display="none"} />
                        </div>
                        <div style={{ fontFamily:"'Playfair Display',serif", color:"#fff", fontSize:15, fontWeight:700 }}>{config.nomeApp||"Flamboyant Coral"}</div>
                    </div>
                    <button onClick={handleLogout} style={{ background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.3)", color:"#fff", borderRadius:6, padding:"5px 12px", fontSize:10, cursor:"pointer", fontFamily:"inherit", textTransform:"uppercase", letterSpacing:0.8 }}>
                        Sair
                    </button>
                </div>

                {/* Página */}
                <div style={{ padding:"24px 20px", maxWidth:800 }}>
                    {pages[tab] || <EmBreve label={tab} icon="layout-dashboard" />}
                </div>
            </main>

            {/* ── NAV INFERIOR MOBILE ── */}
            <nav style={{ position:"fixed", bottom:0, left:0, right:0, background:"#fff", borderTop:"1px solid #EEE0E0", display:"flex", zIndex:150 }} className="nav-mobile">
                {mobileNav.map(item => (
                    <button key={item.key} onClick={() => setTab(item.key)}
                        style={{ flex:1, padding:"9px 0 7px", border:"none", background:"none", cursor:"pointer", fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:0.4, display:"flex", flexDirection:"column", alignItems:"center", gap:3, fontFamily:"inherit", color: tab===item.key ? cor : "#CCC", borderTop:`2px solid ${tab===item.key ? cor : "transparent"}`, transition:"color 0.15s" }}>
                        <Icon name={item.icon} size={18} color={tab===item.key ? cor : "#CCC"} />
                        {item.label}
                    </button>
                ))}
                {isAdmin && (
                    <button onClick={() => setTab("config")}
                        style={{ flex:1, padding:"9px 0 7px", border:"none", background:"none", cursor:"pointer", fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:0.4, display:"flex", flexDirection:"column", alignItems:"center", gap:3, fontFamily:"inherit", color: tab==="config" ? cor : "#CCC", borderTop:`2px solid ${tab==="config" ? cor : "transparent"}`, transition:"color 0.15s" }}>
                        <Icon name="settings" size={18} color={tab==="config" ? cor : "#CCC"} />
                        Config
                    </button>
                )}
            </nav>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
