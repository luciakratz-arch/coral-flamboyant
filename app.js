const { useState, useEffect } = React;

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

const COR       = "#B41020";
const COR_FUNDO = "#F5EAEA";
const LOGO_URL  = "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/unnamed.png";
const MONTHS_PT    = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
const MONTHS_SHORT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
const NAIPES  = ["Soprano","Contralto","Mezzo-soprano","Alto","Tenor","Barítono","Baixo"];
const FUNCOES = ["Corista","Solista","Regente","Pianista","Produtora","Auxiliar"];

function todayStr() { return new Date().toISOString().split("T")[0]; }
function fmtDate(d) { if (!d) return ""; const [y,m,dd]=d.split("-"); return `${parseInt(dd)} de ${MONTHS_PT[parseInt(m)-1]} de ${y}`; }
function fmtMonthYear(d) { if (!d) return "—"; const [y,m]=d.split("-"); return `${MONTHS_SHORT[parseInt(m)-1]} ${y}`; }

function useCollection(col, orderField="createdAt") {
    const [data, setData]       = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsub = db.collection(col).onSnapshot(snap => {
            const docs = snap.docs.map(d=>({id:d.id,...d.data()}));
            docs.sort((a,b) => {
                const av = a[orderField]?.seconds || a[orderField] || "";
                const bv = b[orderField]?.seconds || b[orderField] || "";
                return bv > av ? 1 : -1;
            });
            setData(docs); setLoading(false);
        }, ()=>setLoading(false));
        return unsub;
    }, [col]);
    return { data, loading };
}

function useConfig() {
    const [config, setConfig] = useState({ nomeApp:"Flamboyant Coral", subtitulo:"Portal de Gestão", logoUrl:LOGO_URL, corPrimaria:COR, corFundo:COR_FUNDO });
    useEffect(() => {
        const unsub = db.collection("config").doc("app").onSnapshot(snap => { if (snap.exists) setConfig(c=>({...c,...snap.data()})); });
        return unsub;
    }, []);
    return { config, save:(d)=>db.collection("config").doc("app").set(d,{merge:true}) };
}

const Icon = ({ name, size=16, color }) => {
    useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [name]);
    return <i data-lucide={name} style={{ width:size, height:size, color:color||"inherit", display:"block", flexShrink:0 }} />;
};

function Spinner() {
    return <div style={{ display:"flex", justifyContent:"center", padding:48 }}>
        <div style={{ width:28, height:28, border:`3px solid ${COR}`, borderTopColor:"transparent", borderRadius:"50%", animation:"spin 0.8s linear infinite" }} />
    </div>;
}

// ── CADASTRO PÚBLICO ──────────────────────────────────────────────────────────
function CadastroPublico({ config }) {
    const cor   = config.corPrimaria || COR;
    const fundo = config.corFundo    || COR_FUNDO;
    const [form, setForm]         = useState({ name:"", funcao:"Corista", voice:"Soprano", email:"", phone:"", birthday:"", notes:"" });
    const [salvando, setSalvando] = useState(false);
    const [ok, setOk]             = useState(false);
    const [erro, setErro]         = useState("");

    async function salvar() {
        if (!form.name.trim())  { setErro("Nome é obrigatório.");     return; }
        if (!form.phone.trim()) { setErro("Telefone é obrigatório."); return; }
        setSalvando(true);
        await db.collection("members").add({
            ...form,
            active:    true,
            startDate: todayStr(),
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        setSalvando(false);
        setOk(true);
    }

    const inp = { width:"100%", padding:"12px 14px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:14, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#fff" };
    const lbl = { display:"block", fontSize:12, fontWeight:600, color:"#888", marginBottom:5 };
    const g2  = { display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 };

    if (ok) return (
        <div style={{ minHeight:"100vh", background:fundo, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:24 }}>
            <div style={{ width:80, height:80, background:"#E8F5E9", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px" }}>
                <Icon name="check" size={36} color="#2E7D32" />
            </div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:24, fontWeight:700, color:"#1A1D23", marginBottom:8, textAlign:"center" }}>Cadastro realizado!</div>
            <div style={{ fontSize:15, color:"#888", textAlign:"center", maxWidth:320 }}>Obrigado, {form.name.split(" ")[0]}! Seu cadastro foi enviado e será revisado pela gestão.</div>
        </div>
    );

    return (
        <div style={{ minHeight:"100vh", background:fundo, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"32px 20px" }}>
            <div style={{ textAlign:"center", marginBottom:24 }}>
                <div style={{ width:80, height:80, background:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px", boxShadow:"0 4px 20px rgba(0,0,0,0.1)" }}>
                    <img src={config.logoUrl||LOGO_URL} alt="" style={{ width:56, height:56, objectFit:"contain" }} onError={e=>e.target.style.display="none"} />
                </div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:700, color:cor }}>{config.nomeApp||"Flamboyant Coral"}</div>
                <div style={{ fontSize:13, color:"#AAA", marginTop:4 }}>Cadastro de Corista</div>
            </div>

            <div style={{ background:"#fff", borderRadius:16, border:"1px solid #EEE0E0", padding:"24px 20px", width:"100%", maxWidth:480, boxShadow:"0 4px 24px rgba(0,0,0,0.07)" }}>
                <div style={{ marginBottom:16 }}>
                    <label style={lbl}>Nome Completo *</label>
                    <input style={inp} value={form.name} onChange={e=>{setForm(f=>({...f,name:e.target.value}));setErro("");}} autoFocus />
                </div>
                <div style={g2}>
                    <div><label style={lbl}>Função</label>
                        <select style={inp} value={form.funcao} onChange={e=>setForm(f=>({...f,funcao:e.target.value}))}>
                            {FUNCOES.map(f=><option key={f}>{f}</option>)}
                        </select>
                    </div>
                    <div><label style={lbl}>Naipe</label>
                        <select style={inp} value={form.voice} onChange={e=>setForm(f=>({...f,voice:e.target.value}))}>
                            {NAIPES.map(n=><option key={n}>{n}</option>)}
                        </select>
                    </div>
                </div>
                <div style={g2}>
                    <div><label style={lbl}>Telefone *</label><input style={inp} value={form.phone||""} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} placeholder="(00) 9 0000-0000" /></div>
                    <div><label style={lbl}>E-mail</label><input style={inp} type="email" value={form.email||""} onChange={e=>setForm(f=>({...f,email:e.target.value}))} /></div>
                </div>
                <div style={{ marginBottom:16 }}>
                    <label style={lbl}>Data de Nascimento</label>
                    <input type="date" style={inp} value={form.birthday||""} onChange={e=>setForm(f=>({...f,birthday:e.target.value}))} />
                </div>
                <div style={{ marginBottom:20 }}>
                    <label style={lbl}>Observações</label>
                    <textarea style={{ ...inp, minHeight:70, resize:"vertical" }} value={form.notes||""} onChange={e=>setForm(f=>({...f,notes:e.target.value}))} />
                </div>
                {erro && <div style={{ fontSize:13, color:cor, marginBottom:12 }}>{erro}</div>}
                <button onClick={salvar} disabled={salvando} style={{ width:"100%", padding:"14px", background:cor, color:"#fff", border:"none", borderRadius:10, fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:"inherit", opacity:salvando?0.7:1 }}>
                    {salvando ? "Enviando..." : "Enviar Cadastro"}
                </button>
            </div>
            <div style={{ marginTop:24, fontSize:11, color:"#CCC" }}>{config.nomeApp||"Flamboyant Coral"} · Portal de Gestão</div>
        </div>
    );
}


// ── PLAYER MODAL UNIVERSAL ────────────────────────────────────────────────────
function PlayerModal({ url, title, onClose, letra, naipes }) {
    if (!url) return null;

    function getEmbedUrl(url) {
        // YouTube
        const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
        if (ytMatch) return { type:"youtube", embed:`https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1` };

        // Google Drive — vídeo/áudio/pdf
        const driveMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (driveMatch) {
            const id = driveMatch[1];
            if (url.includes("export=view") || url.match(/\.(jpg|jpeg|png|gif|webp)/i))
                return { type:"image", embed:`https://drive.google.com/uc?export=view&id=${id}` };
            if (url.match(/\.(mp3|wav|ogg|m4a)/i))
                return { type:"audio", embed:`https://drive.google.com/file/d/${id}/preview` };
            // PDF ou vídeo do Drive
            return { type:"iframe", embed:`https://drive.google.com/file/d/${id}/preview` };
        }

        // Link direto de áudio
        if (url.match(/\.(mp3|wav|ogg|m4a)/i)) return { type:"audio", embed:url };

        // Link direto de PDF
        if (url.match(/\.pdf/i)) return { type:"pdf", embed:url };

        // Link direto de imagem
        if (url.match(/\.(jpg|jpeg|png|gif|webp)/i)) return { type:"image", embed:url };

        // Qualquer outro link — iframe genérico
        return { type:"iframe", embed:url };
    }

    const { type, embed } = getEmbedUrl(url);

    return (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.85)", zIndex:500, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:16 }}
            onClick={e=>e.target===e.currentTarget&&onClose()}>
            <div style={{ width:"100%", maxWidth:800, background:"#1A1D23", borderRadius:16, overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.5)" }}>
                {/* Header */}
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"14px 18px", borderBottom:"1px solid #333" }}>
                    <div style={{ fontSize:14, fontWeight:600, color:"#fff", flex:1, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", paddingRight:12 }}>{title||"Reproduzindo"}</div>
                    <button onClick={onClose} style={{ background:"rgba(255,255,255,0.1)", border:"none", borderRadius:8, width:32, height:32, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                        <Icon name="x" size={16} color="#fff" />
                    </button>
                </div>

                {/* Player */}
                <div style={{ background:"#000" }}>
                    {(type==="youtube"||type==="iframe") && url !== "letra" && (
                        <iframe src={embed} style={{ width:"100%", height: window.innerWidth < 600 ? 220 : 450, border:"none", display:"block" }}
                            allow="autoplay; fullscreen" allowFullScreen title={title} />
                    )}
                    {type==="audio" && (
                        <div style={{ padding:"32px 24px", textAlign:"center", background:"#1A1D23" }}>
                            <Icon name="music" size={48} color="#555" />
                            <div style={{ marginTop:16 }}>
                                <iframe src={embed} style={{ width:"100%", height:80, border:"none" }} allow="autoplay" title={title} />
                            </div>
                        </div>
                    )}
                    {type==="image" && (
                        <div style={{ padding:16, textAlign:"center", background:"#111" }}>
                            <img src={embed} alt={title} style={{ maxWidth:"100%", maxHeight:500, objectFit:"contain", borderRadius:8 }} />
                        </div>
                    )}
                    {type==="pdf" && (
                        <iframe src={embed} style={{ width:"100%", height: window.innerWidth < 600 ? 400 : 600, border:"none", display:"block" }} title={title} />
                    )}
                </div>

                {/* Letra */}
                {letra && (
                    <div style={{ padding:"20px 24px", background:"#1A1D23", maxHeight:400, overflowY:"auto" }}>
                        <pre style={{ fontSize:14, color:"#EEE", lineHeight:1.8, fontFamily:"inherit", whiteSpace:"pre-wrap", margin:0 }}>{letra}</pre>
                    </div>
                )}
                {/* Naipes */}
                {naipes && (
                    <div style={{ padding:"16px 18px", background:"#1A1D23" }}>
                        <div style={{ fontSize:12, color:"#AAA", marginBottom:12, textTransform:"uppercase", letterSpacing:1 }}>Áudios por naipe</div>
                        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                            {[["soprano","Soprano"],["mezzoSoprano","Mezzo-soprano"],["contralto","Contralto"],["tenor","Tenor"],["baritono","Barítono"],["baixo","Baixo"]].map(([key,label])=>
                                naipes[key] ? (
                                    <button key={key} onClick={()=>window.open(naipes[key],"_blank")}
                                        style={{ padding:"8px 12px", background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:8, color:"#EEE", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"inherit", textAlign:"left", display:"flex", alignItems:"center", gap:6 }}>
                                        <Icon name="play-circle" size={14} color="#AAA" /> {label}
                                    </button>
                                ) : null
                            )}
                        </div>
                    </div>
                )}
                {/* Abrir externo */}
                {url && url !== "letra" && (
                    <div style={{ padding:"10px 18px", textAlign:"right", borderTop:"1px solid #333" }}>
                        <a href={url} target="_blank" rel="noreferrer"
                            style={{ fontSize:12, color:"#AAA", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:5 }}>
                            <Icon name="external-link" size={12} color="#AAA" /> Abrir em nova aba
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}


// ── MESA DE SOM (página pública para sonoplasta) ──────────────────────────────
function MesaSom({ eventoId, config }) {
    const [evento, setEvento] = useState(null);
    const [tocando, setTocando] = useState(null);
    const [loading, setLoading] = useState(true);
    const cor = config.corPrimaria || COR;

    useEffect(() => {
        db.collection("events").doc(eventoId).get().then(doc => {
            if (doc.exists) setEvento({ id: doc.id, ...doc.data() });
            setLoading(false);
        });
    }, [eventoId]);

    if (loading) return <div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"100vh", background:"#111" }}><div style={{ width:32, height:32, border:`3px solid ${cor}`, borderTopColor:"transparent", borderRadius:"50%", animation:"spin 0.8s linear infinite" }} /></div>;

    if (!evento) return <div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"100vh", background:"#111", color:"#AAA", fontSize:16 }}>Evento não encontrado.</div>;

    const setlist = evento.setlist || [];

    function getEmbed(url) {
        if (!url) return null;
        const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1`;
        const dr = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (dr) return `https://drive.google.com/file/d/${dr[1]}/preview`;
        return url;
    }

    return (
        <div style={{ minHeight:"100vh", background:"#111", color:"#fff", fontFamily:"'Inter',sans-serif" }}>
            {/* Header */}
            <div style={{ background:"#1A1D23", padding:"16px 24px", borderBottom:"1px solid #333", display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:36, height:36, background:cor, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <img src={config.logoUrl||LOGO_URL} alt="" style={{ width:24, height:24, objectFit:"contain" }} onError={e=>e.target.style.display="none"} />
                </div>
                <div>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:16, fontWeight:700, color:"#fff" }}>{config.nomeApp||"Coral Flamboyant"}</div>
                    <div style={{ fontSize:12, color:"#AAA" }}>Mesa de Som — {evento.title} · {evento.date}</div>
                </div>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"300px 1fr", minHeight:"calc(100vh - 68px)" }}>
                {/* Setlist lateral */}
                <div style={{ background:"#1A1D23", borderRight:"1px solid #333", overflowY:"auto" }}>
                    <div style={{ padding:"14px 16px", borderBottom:"1px solid #333", fontSize:11, fontWeight:700, color:"#AAA", textTransform:"uppercase", letterSpacing:1 }}>
                        Setlist — {setlist.length} música{setlist.length!==1?"s":""}
                    </div>
                    {setlist.length === 0 && (
                        <div style={{ padding:"24px 16px", textAlign:"center", color:"#555", fontSize:13 }}>Nenhuma música no setlist.</div>
                    )}
                    {setlist.map((s, i) => (
                        <div key={i} onClick={() => setTocando(s)}
                            style={{ padding:"12px 16px", borderBottom:"1px solid #222", cursor:"pointer", background: tocando?.id===s.id ? cor+"30" : "transparent", borderLeft: tocando?.id===s.id ? `3px solid ${cor}` : "3px solid transparent", transition:"background 0.15s" }}>
                            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                                <span style={{ fontSize:13, color: tocando?.id===s.id ? cor : "#555", fontWeight:700, minWidth:22 }}>{i+1}</span>
                                <div style={{ flex:1 }}>
                                    <div style={{ fontSize:13, fontWeight:600, color: tocando?.id===s.id ? "#fff" : "#CCC" }}>{s.title}</div>
                                    {s.compositor && <div style={{ fontSize:11, color:"#555" }}>{s.compositor}</div>}
                                </div>
                                {(s.playback||s.audioOriginal) && <Icon name="play-circle" size={14} color={tocando?.id===s.id ? cor : "#444"} />}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Player principal */}
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:32 }}>
                    {!tocando ? (
                        <div style={{ textAlign:"center", color:"#444" }}>
                            <Icon name="music" size={64} color="#333" />
                            <div style={{ marginTop:16, fontSize:18, fontWeight:600, color:"#555" }}>Clique em uma música para reproduzir</div>
                        </div>
                    ) : (
                        <div style={{ width:"100%", maxWidth:700 }}>
                            <div style={{ marginBottom:16, textAlign:"center" }}>
                                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:24, fontWeight:700, color:"#fff" }}>{tocando.title}</div>
                                {tocando.compositor && <div style={{ fontSize:14, color:"#AAA", marginTop:4 }}>{tocando.compositor}</div>}
                            </div>
                            {(tocando.playback||tocando.audioOriginal) ? (
                                <iframe src={getEmbed(tocando.playback||tocando.audioOriginal)}
                                    style={{ width:"100%", height:400, border:"none", borderRadius:12 }}
                                    allow="autoplay; fullscreen" allowFullScreen title={tocando.title} />
                            ) : (
                                <div style={{ padding:"48px 24px", background:"#1A1D23", borderRadius:12, textAlign:"center", color:"#555", fontSize:14 }}>
                                    Sem playback cadastrado para esta música.
                                </div>
                            )}
                            {/* Próxima */}
                            {setlist[setlist.findIndex(s=>s.id===tocando.id)+1] && (
                                <div style={{ marginTop:16, padding:"12px 16px", background:"#1A1D23", borderRadius:10, display:"flex", alignItems:"center", gap:10 }}>
                                    <Icon name="skip-forward" size={16} color="#AAA" />
                                    <div style={{ flex:1 }}>
                                        <div style={{ fontSize:11, color:"#555" }}>A seguir</div>
                                        <div style={{ fontSize:14, color:"#CCC", fontWeight:600 }}>{setlist[setlist.findIndex(s=>s.id===tocando.id)+1].title}</div>
                                    </div>
                                    <button onClick={()=>setTocando(setlist[setlist.findIndex(s=>s.id===tocando.id)+1])}
                                        style={{ padding:"8px 16px", background:cor, color:"#fff", border:"none", borderRadius:8, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                                        Próxima →
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

// ── LOGIN ─────────────────────────────────────────────────────────────────────
function Login({ members, onLogin, config }) {
    const [tela, setTela]       = useState(null);
    const [senha, setSenha]     = useState("");
    const [mostrar, setMostrar] = useState(false);
    const [busca, setBusca]     = useState("");
    const [sugestoes, setSugestoes] = useState([]);
    const [erro, setErro]       = useState("");
    const cor = config.corPrimaria || COR;

    useEffect(() => {
        if (busca.length < 3) { setSugestoes([]); return; }
        const t = busca.toLowerCase();
        setSugestoes(members.filter(m=>m.active&&m.name.toLowerCase().includes(t)).slice(0,6));
    }, [busca, members]);

    function entrarAdmin() { if (senha==="1234") onLogin({name:"Gestor",isAdmin:true,role:"admin"}); else setErro("Senha incorreta."); }
    function entrarCorista(m) { onLogin({name:m.name,isAdmin:false,role:"corista",voice:m.voice}); }

    const s = {
        wrap:   { minHeight:"100vh", background:config.corFundo||COR_FUNDO, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"32px 20px" },
        card:   { background:"#fff", borderRadius:16, border:"1px solid #EEE0E0", padding:"24px 20px", width:"100%", maxWidth:420, boxShadow:"0 4px 24px rgba(0,0,0,0.07)" },
        inp:    { width:"100%", padding:"12px 16px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:15, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#fff" },
        btnSec: { flex:1, padding:"13px", background:"#F5EAEA", color:cor, border:"none", borderRadius:10, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit" },
        btnPri: { flex:1, padding:"13px", background:cor, color:"#fff", border:"none", borderRadius:10, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit" },
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

            {!tela && <div style={s.card}>
                {[
                    { id:"admin",   icon:"shield", label:"Acesso Administrativo", sub:"Gestão completa do coral",   cor:COR,      bg:"rgba(180,16,32,0.08)" },
                    { id:"corista", icon:"users",  label:"Sou Corista",            sub:"Acesso às músicas e agenda", cor:"#2E7D32", bg:"rgba(46,125,50,0.08)" },
                ].map(p=>(
                    <button key={p.id} onClick={()=>{setTela(p.id);setErro("");setSenha("");setBusca("");setSugestoes([]);}}
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
            </div>}

            {tela==="admin" && <div style={s.card}>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
                    <div style={{ width:36, height:36, background:"rgba(180,16,32,0.08)", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <Icon name="shield" size={17} color={cor} />
                    </div>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:"#1A1D23" }}>Acesso Administrativo</div>
                </div>
                <div style={{ position:"relative", marginBottom:12 }}>
                    <input style={{ ...s.inp, paddingRight:44 }} type={mostrar?"text":"password"} placeholder="Senha de gestor" value={senha}
                        onChange={e=>{setSenha(e.target.value);setErro("");}} onKeyDown={e=>e.key==="Enter"&&entrarAdmin()} autoFocus />
                    <button onClick={()=>setMostrar(v=>!v)} style={{ position:"absolute", right:12, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", cursor:"pointer" }}>
                        <Icon name={mostrar?"eye-off":"eye"} size={16} color="#AAA" />
                    </button>
                </div>
                {erro && <div style={{ fontSize:13, color:cor, marginBottom:10 }}>{erro}</div>}
                <div style={{ display:"flex", gap:10 }}>
                    <button style={s.btnSec} onClick={()=>{setTela(null);setErro("");}}>Voltar</button>
                    <button style={s.btnPri} onClick={entrarAdmin}>Entrar</button>
                </div>
            </div>}

            {tela==="corista" && <div style={s.card}>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
                    <div style={{ width:36, height:36, background:"rgba(46,125,50,0.08)", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <Icon name="users" size={17} color="#2E7D32" />
                    </div>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:"#1A1D23" }}>Sou Corista</div>
                </div>
                <input style={{ ...s.inp, marginBottom:8 }} type="text" placeholder="Digite seu nome (mín. 3 letras)"
                    value={busca} onChange={e=>{setBusca(e.target.value);setErro("");}} autoFocus />
                {sugestoes.length>0 && <div style={{ background:"#fff", border:"1px solid #EEE", borderRadius:10, overflow:"hidden", marginBottom:10 }}>
                    {sugestoes.map(m=>(
                        <button key={m.id} onClick={()=>entrarCorista(m)}
                            style={{ display:"block", width:"100%", padding:"12px 16px", background:"none", border:"none", textAlign:"left", cursor:"pointer", fontSize:14, borderBottom:"1px solid #F5F5F5", fontFamily:"inherit", color:"#1A1D23" }}>
                            {m.name} <span style={{ fontSize:12, color:"#AAA", marginLeft:8 }}>{m.voice}</span>
                        </button>
                    ))}
                </div>}
                {busca.length>0&&busca.length<3 && <div style={{ fontSize:12, color:"#AAA", marginBottom:8 }}>Digite mais {3-busca.length} letra(s)...</div>}
                {busca.length>=3&&sugestoes.length===0 && <div style={{ fontSize:13, color:cor, marginBottom:8 }}>Nenhum corista encontrado.</div>}
                <button style={{ ...s.btnSec, width:"100%", marginTop:4 }} onClick={()=>{setTela(null);setErro("");}}>Voltar</button>
            </div>}

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

    const cor = config.corPrimaria||COR;
    const today = todayStr();
    const ativos      = members.filter(m=>m.active);
    const proxEventos = events.filter(e=>e.date>=today).sort((a,b)=>a.date>b.date?1:-1).slice(0,3);
    const currentMonth = new Date().getMonth()+1;
    const aniversarios = ativos.filter(m=>m.birthday&&parseInt(m.birthday.split("-")[1])===currentMonth)
        .sort((a,b)=>parseInt(a.birthday.split("-")[2])-parseInt(b.birthday.split("-")[2]));

    const card = (bc) => ({ background:"#fff", borderRadius:12, padding:"16px 20px", border:"1px solid #EEE8E8", borderLeft:`3px solid ${bc||"#EEE8E8"}`, marginBottom:12, boxShadow:"0 1px 4px rgba(0,0,0,0.04)" });

    return (
        <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:cor, marginBottom:24 }}>Painel</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:4 }}>
                {[
                    { label:"Integrantes",  value:ativos.length,       sub:`de ${members.length} no total`, icon:"users",    bc:cor },
                    { label:"Repertório",   value:songs.length,        sub:"músicas no total",               icon:"music",    bc:"#2E7D32" },
                    { label:"Eventos",      value:events.length,       sub:"na agenda",                      icon:"calendar", bc:cor },
                    { label:"Aniversários", value:aniversarios.length, sub:"este mês",                       icon:"cake",     bc:"#E65100" },
                ].map(m=>(
                    <div key={m.label} style={card(m.bc)}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                            <div>
                                <div style={{ fontSize:13, color:"#666", fontWeight:600, marginBottom:8 }}>{m.label}</div>
                                <div style={{ fontSize:32, fontWeight:700, color:"#1A1D23", lineHeight:1 }}>{m.value}</div>
                                <div style={{ fontSize:13, color:"#AAA", marginTop:4 }}>{m.sub}</div>
                            </div>
                            <Icon name={m.icon} size={20} color={m.bc} />
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display:"flex", alignItems:"center", gap:8, margin:"20px 0 12px" }}>
                <Icon name="calendar" size={18} color={cor} />
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:"#1A1D23" }}>Próximos Eventos</div>
            </div>
            {proxEventos.length===0
                ? <div style={{ ...card(), textAlign:"center", color:"#CCC", padding:"24px" }}>Nenhum evento cadastrado</div>
                : proxEventos.map(e=>(
                    <div key={e.id} style={card()}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                            <div>
                                <div style={{ fontSize:15, fontWeight:700, color:"#1A1D23" }}>{e.title}</div>
                                <div style={{ fontSize:13, color:"#AAA", marginTop:3 }}>{fmtDate(e.date)}{e.tipo?` — ${e.tipo}`:""}</div>
                            </div>
                            {e.timeChegada && <div style={{ fontSize:13, color:"#AAA" }}>Chegada: {e.timeChegada}</div>}
                        </div>
                    </div>
                ))
            }

            {aniversarios.length>0 && <>
                <div style={{ display:"flex", alignItems:"center", gap:8, margin:"20px 0 12px" }}>
                    <Icon name="cake" size={18} color={cor} />
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:"#1A1D23" }}>Aniversariantes do Mês</div>
                </div>
                {aniversarios.map(m=>{
                    const [,mm,dd]=m.birthday.split("-");
                    const isToday=m.birthday.slice(5)===today.slice(5);
                    return <div key={m.id} style={{ ...card(isToday?cor:""), display:"flex", alignItems:"center", gap:12, padding:"12px 16px" }}>
                        <div style={{ width:38, height:38, background:"rgba(180,16,32,0.08)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center" }}>
                            <Icon name="cake" size={16} color={cor} />
                        </div>
                        <div>
                            <div style={{ fontSize:14, fontWeight:isToday?700:600, color:"#1A1D23" }}>{isToday?"🎉 ":""}{m.name}</div>
                            <div style={{ fontSize:12, color:"#AAA", marginTop:2 }}>dia {parseInt(dd)} de {MONTHS_SHORT[parseInt(mm)-1]}{isToday?" · hoje!":""}</div>
                        </div>
                    </div>;
                })}
            </>}

            {avisos.length>0 && <>
                <div style={{ display:"flex", alignItems:"center", gap:8, margin:"20px 0 12px" }}>
                    <Icon name="megaphone" size={18} color={cor} />
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:"#1A1D23" }}>Avisos Recentes</div>
                </div>
                {avisos.slice(0,3).map(a=>(
                    <div key={a.id} style={{ ...card(a.urgente?cor:""), background:a.urgente?"#FFF5F5":"#fff" }}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:6 }}>
                            <div style={{ fontSize:15, fontWeight:700, color:"#1A1D23" }}>{a.title||a.titulo}</div>
                            {a.createdAt?.seconds && <div style={{ fontSize:12, color:"#AAA", marginLeft:12 }}>{new Date(a.createdAt.seconds*1000).toLocaleDateString("pt-BR",{day:"numeric",month:"short"})}</div>}
                        </div>
                        <div style={{ fontSize:14, color:"#555", lineHeight:1.5 }}>{a.text||a.texto}</div>
                    </div>
                ))}
            </>}
        </div>
    );
}

// ── MODAL INTEGRANTE ──────────────────────────────────────────────────────────
function ModalIntegrante({ membro, onClose, config }) {
    const cor = config.corPrimaria||COR;
    const vazio = { name:"", funcao:"Corista", voice:"Soprano", email:"", phone:"", cpf:"", rg:"", birthday:"", startDate:todayStr(), notes:"", active:true };
    const [form, setForm]         = useState(membro?{...vazio,...membro}:vazio);
    const [salvando, setSalvando] = useState(false);
    const [erro, setErro]         = useState("");

    async function salvar() {
        if (!form.name.trim()) { setErro("Nome é obrigatório."); return; }
        setSalvando(true);
        const d = { name:form.name, funcao:form.funcao, voice:form.voice, email:form.email||"", phone:form.phone||"", cpf:form.cpf||"", rg:form.rg||"", birthday:form.birthday||"", startDate:form.startDate||"", notes:form.notes||"", active:form.active };
        if (membro) await db.collection("members").doc(membro.id).update({...d, updatedAt:firebase.firestore.FieldValue.serverTimestamp()});
        else await db.collection("members").add({...d, createdAt:firebase.firestore.FieldValue.serverTimestamp()});
        setSalvando(false);
        onClose();
    }

    async function excluir() {
        if (!window.confirm("Excluir este integrante permanentemente?")) return;
        await db.collection("members").doc(membro.id).delete();
        onClose();
    }

    const inp = { width:"100%", padding:"11px 14px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:14, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#FAFAFA" };
    const lbl = { display:"block", fontSize:12, fontWeight:600, color:"#888", marginBottom:5 };
    const g2  = { display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 };

    return (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:300, display:"flex", alignItems:"flex-end", justifyContent:"center" }}
            onClick={e=>e.target===e.currentTarget&&onClose()}>
            <div style={{ background:"#FAFAFA", borderRadius:"20px 20px 0 0", padding:"24px 20px", width:"100%", maxWidth:640, maxHeight:"92vh", overflowY:"auto" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:"#1A1D23" }}>
                        {membro?"Editar Integrante":"Adicionar Integrante"}
                    </div>
                    <button onClick={onClose} style={{ background:"#EEE", border:"none", borderRadius:8, width:32, height:32, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <Icon name="x" size={16} color="#666" />
                    </button>
                </div>

                <div style={{ marginBottom:16 }}>
                    <label style={lbl}>Nome Completo *</label>
                    <input style={inp} value={form.name} onChange={e=>{setForm(f=>({...f,name:e.target.value}));setErro("");}} autoFocus />
                    {erro && <div style={{ fontSize:12, color:cor, marginTop:4 }}>{erro}</div>}
                </div>
                <div style={g2}>
                    <div><label style={lbl}>Função</label>
                        <select style={inp} value={form.funcao} onChange={e=>setForm(f=>({...f,funcao:e.target.value}))}>
                            {FUNCOES.map(f=><option key={f}>{f}</option>)}
                        </select>
                    </div>
                    <div><label style={lbl}>Naipe</label>
                        <select style={inp} value={form.voice} onChange={e=>setForm(f=>({...f,voice:e.target.value}))}>
                            {NAIPES.map(n=><option key={n}>{n}</option>)}
                        </select>
                    </div>
                </div>
                <div style={g2}>
                    <div><label style={lbl}>E-mail</label><input style={inp} type="email" value={form.email||""} onChange={e=>setForm(f=>({...f,email:e.target.value}))} /></div>
                    <div><label style={lbl}>Telefone</label><input style={inp} value={form.phone||""} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} placeholder="(00) 9 0000-0000" /></div>
                </div>
                <div style={g2}>
                    <div><label style={lbl}>CPF</label><input style={inp} value={form.cpf||""} onChange={e=>setForm(f=>({...f,cpf:e.target.value}))} placeholder="000.000.000-00" /></div>
                    <div><label style={lbl}>RG (CI)</label><input style={inp} value={form.rg||""} onChange={e=>setForm(f=>({...f,rg:e.target.value}))} /></div>
                </div>
                <div style={g2}>
                    <div><label style={lbl}>Nascimento</label><input type="date" style={inp} value={form.birthday||""} onChange={e=>setForm(f=>({...f,birthday:e.target.value}))} /></div>
                    <div><label style={lbl}>Data de Admissão</label><input type="date" style={inp} value={form.startDate||""} onChange={e=>setForm(f=>({...f,startDate:e.target.value}))} /></div>
                </div>
                <div style={{ marginBottom:16 }}>
                    <label style={lbl}>Status</label>
                    <select style={inp} value={form.active?"ativo":"inativo"} onChange={e=>setForm(f=>({...f,active:e.target.value==="ativo"}))}>
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                    </select>
                </div>
                <div style={{ marginBottom:20 }}>
                    <label style={lbl}>Observações</label>
                    <textarea style={{ ...inp, minHeight:80, resize:"vertical" }} value={form.notes||""} onChange={e=>setForm(f=>({...f,notes:e.target.value}))} />
                </div>
                <div style={{ display:"flex", gap:10 }}>
                    {membro && <button onClick={excluir} style={{ padding:"12px 16px", background:"#FFF0F0", color:"#B41020", border:"1px solid #F5DADA", borderRadius:10, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>Excluir</button>}
                    <button onClick={onClose} style={{ flex:1, padding:"13px", background:"#F0EAE8", color:"#666", border:"none", borderRadius:10, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>Cancelar</button>
                    <button onClick={salvar} disabled={salvando} style={{ flex:1, padding:"13px", background:cor, color:"#fff", border:"none", borderRadius:10, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", opacity:salvando?0.7:1 }}>
                        {salvando?"Salvando...":(membro?"Salvar":"Adicionar")}
                    </button>
                </div>
            </div>
        </div>
    );
}

// ── INTEGRANTES ───────────────────────────────────────────────────────────────
function Integrantes({ config }) {
    const { data:members, loading } = useCollection("members");
    const [busca, setBusca]   = useState("");
    const [filtro, setFiltro] = useState("Todos");
    const [modal, setModal]   = useState(null);
    const cor = config.corPrimaria||COR;

    if (loading) return <Spinner />;

    const filtrados = members.filter(m => {
        const q  = busca.toLowerCase();
        const ok = !busca || m.name.toLowerCase().includes(q) || (m.voice||"").toLowerCase().includes(q) || (m.funcao||"").toLowerCase().includes(q);
        const of = filtro==="Todos" || (filtro==="Ativos"?m.active:filtro==="Inativos"?!m.active:m.voice===filtro);
        return ok && of;
    });

    const naipeColor = { Soprano:COR, Contralto:"#7B1FA2", "Mezzo-soprano":"#C2185B", Alto:"#E65100", Tenor:"#1565C0", Barítono:"#4527A0", Baixo:"#1B5E20" };

    function copiarLink() {
        const url = `${window.location.origin}${window.location.pathname}?cadastro=1`;
        navigator.clipboard.writeText(url).then(()=>alert("Link copiado!"));
    }

    return (
        <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24, flexWrap:"wrap", gap:12 }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:cor }}>Integrantes</div>
                <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                    <button onClick={copiarLink}
                        style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 16px", background:"#fff", border:`1px solid ${cor}`, borderRadius:10, fontSize:13, fontWeight:600, color:cor, cursor:"pointer", fontFamily:"inherit" }}>
                        <Icon name="link" size={14} color={cor} /> Copiar link de cadastro
                    </button>
                    <button onClick={()=>setModal("novo")}
                        style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 16px", background:cor, border:"none", borderRadius:10, fontSize:13, fontWeight:700, color:"#fff", cursor:"pointer", fontFamily:"inherit" }}>
                        <Icon name="plus" size={14} color="#fff" /> Adicionar Integrante
                    </button>
                </div>
            </div>

            <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"12px 16px", marginBottom:16, display:"flex", gap:12, alignItems:"center", boxShadow:"0 1px 4px rgba(0,0,0,0.04)" }}>
                <Icon name="search" size={16} color="#AAA" />
                <input value={busca} onChange={e=>setBusca(e.target.value)} placeholder="Buscar por nome, naipe ou função..."
                    style={{ flex:1, border:"none", outline:"none", fontSize:14, fontFamily:"inherit", color:"#1A1D23", background:"none" }} />
                <select value={filtro} onChange={e=>setFiltro(e.target.value)}
                    style={{ border:"1px solid #EEE8E8", borderRadius:8, padding:"7px 12px", fontSize:13, fontFamily:"inherit", color:"#1A1D23", outline:"none", background:"#fff", cursor:"pointer" }}>
                    {["Todos","Ativos","Inativos",...NAIPES].map(f=><option key={f}>{f}</option>)}
                </select>
            </div>

            <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", overflow:"hidden", boxShadow:"0 1px 4px rgba(0,0,0,0.04)" }}>
                <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 90px 90px 80px", padding:"10px 16px", borderBottom:"1px solid #F5EAEA", background:"#FAFAFA" }}>
                    {["Nome","Função","Naipe","Status","Entrada","Ações"].map(h=>(
                        <div key={h} style={{ fontSize:12, fontWeight:700, color:cor, letterSpacing:0.5 }}>{h}</div>
                    ))}
                </div>
                {filtrados.length===0 && <div style={{ textAlign:"center", padding:"32px", color:"#CCC", fontSize:14 }}>Nenhum integrante encontrado.</div>}
                {filtrados.map((m,i)=>(
                    <div key={m.id} style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 90px 90px 80px", padding:"13px 16px", borderBottom:i<filtrados.length-1?"1px solid #F9F5F5":"none", alignItems:"center", background:i%2===0?"#fff":"#FDFBFB" }}>
                        <div style={{ fontSize:14, fontWeight:600, color:"#1A1D23" }}>{m.name}</div>
                        <div style={{ fontSize:13, color:"#888" }}>{m.funcao||"Corista"}</div>
                        <div style={{ fontSize:13, color:naipeColor[m.voice]||"#888", fontWeight:500 }}>{m.voice||"—"}</div>
                        <div><span style={{ display:"inline-block", padding:"3px 10px", borderRadius:20, fontSize:11, fontWeight:700, background:m.active?"#E8F5E9":"#FFF3E0", color:m.active?"#2E7D32":"#E65100" }}>{m.active?"Ativo":"Inativo"}</span></div>
                        <div style={{ fontSize:13, color:"#AAA" }}>{fmtMonthYear(m.startDate)}</div>
                        <div><button onClick={()=>setModal(m)} style={{ background:"none", border:"none", color:cor, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", padding:0 }}>Ver / Editar</button></div>
                    </div>
                ))}
            </div>
            <div style={{ fontSize:12, color:"#AAA", marginTop:10, textAlign:"right" }}>
                {filtrados.length} integrante{filtrados.length!==1?"s":""} · {members.filter(m=>m.active).length} ativo{members.filter(m=>m.active).length!==1?"s":""}
            </div>
            {modal && <ModalIntegrante membro={modal==="novo"?null:modal} onClose={()=>setModal(null)} config={config} />}
        </div>
    );
}

// ── CONFIGURAÇÕES ─────────────────────────────────────────────────────────────
function Configuracoes({ config, save }) {
    const [form, setForm]         = useState({...config});
    const [salvando, setSalvando] = useState(false);
    const [ok, setOk]             = useState(false);
    useEffect(()=>{ setForm({...config}); },[config]);

    async function salvar() { setSalvando(true); await save(form); setSalvando(false); setOk(true); setTimeout(()=>setOk(false),2500); }

    const cor = config.corPrimaria||COR;
    const inp = { width:"100%", padding:"11px 14px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:14, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#fff" };
    const lbl = { display:"block", fontSize:11, fontWeight:700, color:"#888", marginBottom:6, textTransform:"uppercase", letterSpacing:1 };
    const box = { background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"20px", marginBottom:16, boxShadow:"0 1px 4px rgba(0,0,0,0.04)" };

    return (
        <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:cor, marginBottom:24 }}>Configurações</div>
            <div style={box}>
                <div style={{ fontSize:13, fontWeight:700, color:"#888", textTransform:"uppercase", letterSpacing:1, marginBottom:16 }}>Identidade do Coral</div>
                <div style={{ marginBottom:16 }}><label style={lbl}>Nome do Coral</label><input style={inp} value={form.nomeApp||""} onChange={e=>setForm(f=>({...f,nomeApp:e.target.value}))} /></div>
                <div style={{ marginBottom:16 }}><label style={lbl}>Subtítulo</label><input style={inp} value={form.subtitulo||""} onChange={e=>setForm(f=>({...f,subtitulo:e.target.value}))} /></div>
                <div style={{ marginBottom:4 }}>
                    <label style={lbl}>URL da Logo</label>
                    <input style={inp} value={form.logoUrl||""} onChange={e=>setForm(f=>({...f,logoUrl:e.target.value}))} placeholder="https://..." />
                    <div style={{ fontSize:11, color:"#AAA", marginTop:5 }}>Link direto para PNG com fundo transparente</div>
                    {form.logoUrl && <div style={{ marginTop:12, background:"#F5F0F0", borderRadius:10, padding:12, textAlign:"center" }}>
                        <img src={form.logoUrl} alt="" style={{ maxHeight:64, objectFit:"contain" }} onError={e=>e.target.style.display="none"} />
                    </div>}
                </div>
            </div>
            <div style={box}>
                <div style={{ fontSize:13, fontWeight:700, color:"#888", textTransform:"uppercase", letterSpacing:1, marginBottom:16 }}>Cores</div>
                <div style={{ display:"flex", gap:16 }}>
                    <div style={{ flex:1 }}>
                        <label style={lbl}>Cor principal</label>
                        <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                            <input type="color" value={form.corPrimaria||COR} onChange={e=>setForm(f=>({...f,corPrimaria:e.target.value}))} style={{ width:44, height:40, border:"none", borderRadius:8, cursor:"pointer", padding:2 }} />
                            <input style={{ ...inp, flex:1 }} value={form.corPrimaria||""} onChange={e=>setForm(f=>({...f,corPrimaria:e.target.value}))} />
                        </div>
                    </div>
                    <div style={{ flex:1 }}>
                        <label style={lbl}>Fundo</label>
                        <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                            <input type="color" value={form.corFundo||COR_FUNDO} onChange={e=>setForm(f=>({...f,corFundo:e.target.value}))} style={{ width:44, height:40, border:"none", borderRadius:8, cursor:"pointer", padding:2 }} />
                            <input style={{ ...inp, flex:1 }} value={form.corFundo||""} onChange={e=>setForm(f=>({...f,corFundo:e.target.value}))} />
                        </div>
                    </div>
                </div>
                <div style={{ marginTop:16, background:form.corFundo||COR_FUNDO, borderRadius:10, padding:16, textAlign:"center" }}>
                    <div style={{ fontSize:11, color:"#AAA", marginBottom:8 }}>PREVIEW</div>
                    <div style={{ width:52, height:52, background:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 10px", boxShadow:"0 2px 8px rgba(0,0,0,0.1)" }}>
                        <img src={form.logoUrl||LOGO_URL} style={{ width:36, height:36, objectFit:"contain" }} onError={e=>e.target.style.display="none"} />
                    </div>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:form.corPrimaria||COR }}>{form.nomeApp||"Flamboyant Coral"}</div>
                    <div style={{ fontSize:13, color:"#AAA", marginTop:4 }}>{form.subtitulo||"Portal de Gestão"}</div>
                </div>
            </div>
            <button onClick={salvar} disabled={salvando} style={{ width:"100%", padding:"14px", background:cor, color:"#fff", border:"none", borderRadius:12, fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:"inherit", opacity:salvando?0.7:1 }}>
                {ok?"✓ Salvo!":salvando?"Salvando...":"Salvar Configurações"}
            </button>
        </div>
    );
}


// ── AGENDA ────────────────────────────────────────────────────────────────────
const TIPOS_EVENTO   = ["Ensaio","Apresentação","Reunião","Gravação","Feriado Nacional","Feriado Local","Outro"];
const STATUS_EVENTO  = ["Planejada","Confirmado","Cancelado","Reagendado","Suspenso"];
const RECORRENCIAS   = ["Sem recorrência","Semanal","Quinzenal","Mensal","Indeterminada"];
const WEEKDAYS_PT    = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
const STATUS_COLORS  = { Planejada:"#1565C0", Confirmado:"#2E7D32", Cancelado:"#B41020", Reagendado:"#E65100", Suspenso:"#7B1FA2" };

function ModalEvento({ evento, onClose, config }) {
    const cor = config.corPrimaria||COR;
    const { data:songs } = useCollection("songs");
    const vazio = { title:"", date:todayStr(), tipo:"Ensaio", status:"Planejada", timeChegada:"", timeApresentacao:"", local:"", mapsUrl:"", notes:"", recorrencia:"Sem recorrência", setlist:[] };
    const [form, setForm]         = useState(evento?{...vazio,...evento, setlist:evento.setlist||[]}:vazio);
    const [salvando, setSalvando] = useState(false);
    const [erro, setErro]         = useState("");

    async function salvar() {
        if (!form.title.trim()) { setErro("Título é obrigatório."); return; }
        if (!form.date)         { setErro("Data é obrigatória.");   return; }
        setSalvando(true);
        const grupoId = Date.now().toString(36) + Math.random().toString(36).substr(2);
        const d = { title:form.title, date:form.date, tipo:form.tipo, status:form.status, timeChegada:form.timeChegada||"", timeApresentacao:form.timeApresentacao||"", local:form.local||"", mapsUrl:form.mapsUrl||"", notes:form.notes||"", recorrencia:form.recorrencia, setlist:form.setlist||[] };
        if (evento) {
            await db.collection("events").doc(evento.id).update({...d, updatedAt:firebase.firestore.FieldValue.serverTimestamp()});
        } else {
            const datas = [form.date];
            if (form.recorrencia !== "Sem recorrência" && form.date) {
                const base = new Date(form.date + "T12:00:00");
                const dias = form.recorrencia==="Semanal"?7:form.recorrencia==="Quinzenal"?14:30;
                const total = form.recorrencia==="Indeterminada"?52:11;
                const intervalo = form.recorrencia==="Indeterminada"?7:dias;
                for (let i=1; i<=total; i++) {
                    const nova = new Date(base);
                    nova.setDate(nova.getDate() + intervalo*i);
                    datas.push(nova.toISOString().split("T")[0]);
                }
            }
            const temGrupo = datas.length > 1;
            for (const dt of datas) {
                await db.collection("events").add({...d, date:dt, ...(temGrupo?{grupoId}:{}), createdAt:firebase.firestore.FieldValue.serverTimestamp()});
            }
            // Aviso automático para o primeiro evento
            await db.collection("avisos").add({
                title: `📅 Novo evento: ${form.title}`,
                text: `Um novo evento foi adicionado à agenda: "${form.title}" em ${fmtDate(form.date)}${form.local?" — "+form.local:""}.`,
                tipo: "auto_evento",
                prioridade: "Informativo",
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        }
        setSalvando(false);
        onClose();
    }

    async function excluir() {
        if (!evento.grupoId) {
            if (!window.confirm("Excluir este evento?")) return;
            await db.collection("events").doc(evento.id).delete();
        } else {
            const opcao = window.confirm("Clique OK para excluir ESTE E OS FUTUROS eventos da série.\nClique Cancelar para excluir SÓ ESTE evento.");
            if (opcao === null) return;
            if (opcao) {
                // Excluir este e futuros do mesmo grupo
                const snap = await db.collection("events").where("grupoId","==",evento.grupoId).get();
                const batch = db.batch();
                snap.docs.forEach(doc => { if (doc.data().date >= evento.date) batch.delete(doc.ref); });
                await batch.commit();
            } else {
                await db.collection("events").doc(evento.id).delete();
            }
        }
        onClose();
    }

    const inp = { width:"100%", padding:"11px 14px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:14, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#FAFAFA" };
    const lbl = { display:"block", fontSize:12, fontWeight:600, color:"#888", marginBottom:5 };
    const g2  = { display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 };

    return (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:300, display:"flex", alignItems:"flex-end", justifyContent:"center" }}
            onClick={e=>e.target===e.currentTarget&&onClose()}>
            <div style={{ background:"#FAFAFA", borderRadius:"20px 20px 0 0", padding:"24px 20px", width:"100%", maxWidth:640, maxHeight:"92vh", overflowY:"auto" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:"#1A1D23" }}>{evento?"Editar Evento":"Adicionar Evento"}</div>
                    <button onClick={onClose} style={{ background:"#EEE", border:"none", borderRadius:8, width:32, height:32, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <Icon name="x" size={16} color="#666" />
                    </button>
                </div>

                <div style={{ marginBottom:16 }}>
                    <label style={lbl}>Título *</label>
                    <input style={{ ...inp, borderColor: erro&&!form.title?cor:"#E8E0E0" }} value={form.title} onChange={e=>{setForm(f=>({...f,title:e.target.value}));setErro("");}} autoFocus />
                    {erro && <div style={{ fontSize:12, color:cor, marginTop:4 }}>{erro}</div>}
                </div>

                <div style={g2}>
                    <div><label style={lbl}>Data *</label><input type="date" style={inp} value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))} /></div>
                    <div><label style={lbl}>Tipo</label>
                        <select style={inp} value={form.tipo} onChange={e=>setForm(f=>({...f,tipo:e.target.value}))}>
                            {TIPOS_EVENTO.map(t=><option key={t}>{t}</option>)}
                        </select>
                    </div>
                </div>

                <div style={{ marginBottom:16 }}>
                    <label style={lbl}>Status de Planejamento</label>
                    <select style={inp} value={form.status} onChange={e=>setForm(f=>({...f,status:e.target.value}))}>
                        {STATUS_EVENTO.map(s=><option key={s}>{s}</option>)}
                    </select>
                </div>

                <div style={g2}>
                    <div><label style={lbl}>Horário de Chegada</label><input type="time" style={inp} value={form.timeChegada||""} onChange={e=>setForm(f=>({...f,timeChegada:e.target.value}))} /></div>
                    <div><label style={lbl}>Horário Apresentação</label><input type="time" style={inp} value={form.timeApresentacao||""} onChange={e=>setForm(f=>({...f,timeApresentacao:e.target.value}))} /></div>
                </div>

                <div style={{ marginBottom:16 }}>
                    <label style={lbl}>Local</label>
                    <input style={inp} value={form.local||""} onChange={e=>setForm(f=>({...f,local:e.target.value}))} />
                </div>

                <div style={{ marginBottom:16 }}>
                    <label style={lbl}>Link Google Maps</label>
                    <input style={inp} value={form.mapsUrl||""} onChange={e=>setForm(f=>({...f,mapsUrl:e.target.value}))} placeholder="https://maps.google.com/..." />
                </div>

                <div style={{ marginBottom:16 }}>
                    <label style={lbl}>Observações</label>
                    <textarea style={{ ...inp, minHeight:80, resize:"vertical" }} value={form.notes||""} onChange={e=>setForm(f=>({...f,notes:e.target.value}))} placeholder="Informações adicionais..." />
                </div>

                {/* Repertório do evento */}
                <div style={{ marginBottom:16, paddingTop:16, borderTop:"1px solid #EEE" }}>
                    <div style={{ fontSize:11, fontWeight:700, color:cor, textTransform:"uppercase", letterSpacing:1, marginBottom:10 }}>Repertório do Evento</div>
                    {(form.setlist||[]).length > 0 && (
                        <div style={{ marginBottom:10 }}>
                            {form.setlist.map((s,i)=>(
                                <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px 12px", background:"#F9F5F5", borderRadius:8, marginBottom:6 }}>
                                    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                                        <span style={{ fontSize:12, color:cor, fontWeight:700, minWidth:20 }}>{i+1}</span>
                                        <div>
                                            <div style={{ fontSize:13, fontWeight:600, color:"#1A1D23" }}>{s.title}</div>
                                            {s.compositor && <div style={{ fontSize:11, color:"#AAA" }}>{s.compositor}</div>}
                                        </div>
                                    </div>
                                    <button onClick={()=>setForm(f=>({...f,setlist:f.setlist.filter((_,j)=>j!==i)}))}
                                        style={{ background:"none", border:"none", cursor:"pointer", color:"#CCC", padding:4 }}>
                                        <Icon name="x" size={14} color="#CCC" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    <select style={{ ...inp, color: "#888" }}
                        onChange={e=>{
                            const song = songs.find(s=>s.id===e.target.value);
                            if (song && !(form.setlist||[]).find(s=>s.id===song.id)) {
                                setForm(f=>({...f, setlist:[...(f.setlist||[]), {id:song.id, title:song.title, compositor:song.compositor||"", playback:song.playback||"", audioOriginal:song.audioOriginal||""}]}));
                            }
                            e.target.value = "";
                        }}>
                        <option value="">+ Adicionar música ao repertório...</option>
                        {songs.filter(s=>!(form.setlist||[]).find(sl=>sl.id===s.id)).map(s=>(
                            <option key={s.id} value={s.id}>{s.title}{s.compositor?" — "+s.compositor:""}</option>
                        ))}
                    </select>
                </div>

                {!evento && <div style={{ marginBottom:20, paddingTop:16, borderTop:"1px solid #EEE" }}>
                    <div style={{ fontSize:11, fontWeight:700, color:cor, textTransform:"uppercase", letterSpacing:1, marginBottom:12 }}>Recorrência</div>
                    <div><label style={lbl}>Repetir evento</label>
                        <select style={inp} value={form.recorrencia} onChange={e=>setForm(f=>({...f,recorrencia:e.target.value}))}>
                            {RECORRENCIAS.map(r=><option key={r}>{r}</option>)}
                        </select>
                    </div>
                    {form.recorrencia!=="Sem recorrência" && <div style={{ fontSize:12, color:"#AAA", marginTop:6 }}>{form.recorrencia==="Indeterminada"?"Serão criados eventos semanais por 1 ano (editável depois).":"Serão criados 12 eventos a partir desta data."}</div>}
                </div>}

                <div style={{ display:"flex", gap:10 }}>
                    {evento && <button onClick={excluir} style={{ padding:"12px 16px", background:"#FFF0F0", color:"#B41020", border:"1px solid #F5DADA", borderRadius:10, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>Excluir</button>}
                    <button onClick={onClose} style={{ flex:1, padding:"13px", background:"#F0EAE8", color:"#666", border:"none", borderRadius:10, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>Cancelar</button>
                    <button onClick={salvar} disabled={salvando} style={{ flex:1, padding:"13px", background:cor, color:"#fff", border:"none", borderRadius:10, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", opacity:salvando?0.7:1 }}>
                        {salvando?"Salvando...":(evento?"Salvar":"Adicionar")}
                    </button>
                </div>
            </div>
        </div>
    );
}

function ModalExcluirEvento({ evento, onClose }) {
    const [excluindo, setExcluindo] = useState(false);

    async function excluirSoEste() {
        setExcluindo(true);
        await db.collection("events").doc(evento.id).delete();
        onClose();
    }
    async function excluirFuturos() {
        setExcluindo(true);
        const snap = await db.collection("events").where("grupoId","==",evento.grupoId).get();
        const batch = db.batch();
        snap.docs.forEach(doc => { if (doc.data().date >= evento.date) batch.delete(doc.ref); });
        await batch.commit();
        onClose();
    }
    async function excluirTodos() {
        setExcluindo(true);
        const snap = await db.collection("events").where("grupoId","==",evento.grupoId).get();
        const batch = db.batch();
        snap.docs.forEach(doc => batch.delete(doc.ref));
        await batch.commit();
        onClose();
    }

    const btnBase = { width:"100%", padding:"13px", border:"none", borderRadius:10, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit", marginBottom:8, opacity: excluindo?0.6:1 };

    return (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:400, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}
            onClick={e=>e.target===e.currentTarget&&onClose()}>
            <div style={{ background:"#fff", borderRadius:16, padding:"24px 20px", width:"100%", maxWidth:360, boxShadow:"0 8px 32px rgba(0,0,0,0.15)" }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:"#1A1D23", marginBottom:8 }}>Excluir evento</div>
                <div style={{ fontSize:13, color:"#888", marginBottom:20 }}>"{evento.title}" faz parte de uma série. O que deseja excluir?</div>
                <button onClick={excluirSoEste} disabled={excluindo} style={{ ...btnBase, background:"#F5EAEA", color:"#B41020" }}>Só este evento</button>
                <button onClick={excluirFuturos} disabled={excluindo} style={{ ...btnBase, background:"#FFF3E0", color:"#E65100" }}>Este e os futuros</button>
                <button onClick={excluirTodos} disabled={excluindo} style={{ ...btnBase, background:"#B41020", color:"#fff" }}>Excluir toda a série</button>
                <button onClick={onClose} disabled={excluindo} style={{ ...btnBase, background:"#F0F0F0", color:"#666", marginBottom:0 }}>Cancelar</button>
            </div>
        </div>
    );
}

function Agenda({ config, isAdmin }) {
    const { data:events, loading } = useCollection("events","date");
    const [mes, setMes]         = useState(new Date().getMonth());
    const [ano, setAno]         = useState(new Date().getFullYear());
    const [modal, setModal]     = useState(null);
    const [detalhe, setDetalhe] = useState(null);
    const [excluirEvento, setExcluirEvento] = useState(null);
    const cor = config.corPrimaria||COR;

    if (loading) return <Spinner />;

    function navMes(dir) {
        let nm=mes+dir, na=ano;
        if (nm>11){nm=0;na++;}
        if (nm<0){nm=11;na--;}
        setMes(nm); setAno(na);
    }

    const eventosMes = events
        .filter(e => { if (!e.date) return false; const [y,m]=e.date.split("-"); return parseInt(m)-1===mes && parseInt(y)===ano; })
        .sort((a,b)=>a.date>b.date?1:-1);

    const isFeriado = (e) => e.tipo==="Feriado Nacional"||e.tipo==="Feriado Local";

    return (
        <div>
            {/* Header */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:cor }}>Agenda</div>
                {isAdmin && <button onClick={()=>setModal("novo")}
                    style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 20px", background:cor, border:"none", borderRadius:10, fontSize:13, fontWeight:700, color:"#fff", cursor:"pointer", fontFamily:"inherit" }}>
                    <Icon name="plus" size={14} color="#fff" /> Adicionar Evento
                </button>}
            </div>

            {/* Navegação mês */}
            <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"14px 20px", marginBottom:16, display:"flex", alignItems:"center", justifyContent:"space-between", boxShadow:"0 1px 4px rgba(0,0,0,0.04)" }}>
                <button onClick={()=>navMes(-1)} style={{ width:36, height:36, border:"1px solid #EEE", borderRadius:8, background:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <Icon name="chevron-left" size={16} color="#666" />
                </button>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:700, color:"#1A1D23" }}>
                    {MONTHS_PT[mes].charAt(0).toUpperCase()+MONTHS_PT[mes].slice(1)} {ano}
                </div>
                <button onClick={()=>navMes(1)} style={{ width:36, height:36, border:"1px solid #EEE", borderRadius:8, background:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <Icon name="chevron-right" size={16} color="#666" />
                </button>
            </div>

            {/* Lista de eventos */}
            {eventosMes.length===0
                ? <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"32px", textAlign:"center", color:"#CCC", fontSize:14, boxShadow:"0 1px 4px rgba(0,0,0,0.04)" }}>
                    Nenhum evento em {MONTHS_PT[mes]}.
                  </div>
                : eventosMes.map(e => {
                    const dt     = new Date(e.date+"T12:00:00");
                    const dia    = dt.getDate();
                    const semana = WEEKDAYS_PT[dt.getDay()];
                    const feriado= isFeriado(e);
                    const stColor= STATUS_COLORS[e.status]||"#888";

                    return (
                        <div key={e.id} style={{ background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"16px", marginBottom:10, boxShadow:"0 1px 4px rgba(0,0,0,0.04)", display:"flex", gap:16, alignItems:"flex-start" }}>
                            {/* Data */}
                            <div style={{ minWidth:52, textAlign:"center", borderRight:"1px solid #F0EAEA", paddingRight:16 }}>
                                <div style={{ fontSize:11, fontWeight:700, color:feriado?"#1565C0":cor, textTransform:"uppercase", letterSpacing:0.8 }}>
                                    {MONTHS_SHORT[mes]}
                                </div>
                                <div style={{ fontSize:28, fontWeight:700, color:feriado?"#1565C0":cor, lineHeight:1.1 }}>{dia}</div>
                                <div style={{ fontSize:11, color:"#AAA", marginTop:2 }}>{semana}</div>
                            </div>

                            {/* Conteúdo */}
                            <div style={{ flex:1 }}>
                                <div style={{ display:"flex", alignItems:"center", gap:8, flexWrap:"wrap", marginBottom: feriado?0:8 }}>
                                    {feriado && <span style={{ fontSize:16 }}>🎉</span>}
                                    <div style={{ fontSize:15, fontWeight:700, color:"#1A1D23" }}>{e.title}</div>
                                    {e.tipo && <span style={{ fontSize:11, padding:"2px 8px", borderRadius:10, background:"#F0EAE8", color:"#888", fontWeight:600 }}>{e.tipo}</span>}
                                    {!feriado && e.status && <span style={{ fontSize:11, padding:"2px 8px", borderRadius:10, background:stColor+"18", color:stColor, fontWeight:700 }}>{e.status}</span>}
                                </div>
                                {!feriado && <>
                                    {e.timeChegada && <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:13, color:"#666", marginBottom:4 }}>
                                        <Icon name="clock" size={13} color="#AAA" /> Chegada: {e.timeChegada}
                                        {e.timeApresentacao && ` · Apresentação: ${e.timeApresentacao}`}
                                    </div>}
                                    {e.local && <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:13, color:"#666", marginBottom:4 }}>
                                        <Icon name="map-pin" size={13} color="#AAA" />
                                        {e.mapsUrl ? <a href={e.mapsUrl} target="_blank" rel="noreferrer" style={{ color:cor, textDecoration:"none" }}>{e.local}</a> : e.local}
                                    </div>}
                                    {e.notes && <div style={{ fontSize:12, color:"#AAA", marginTop:4, fontStyle:"italic" }}>{e.notes}</div>}
                                </>}
                            </div>

                            {/* Ações admin */}
                            {isAdmin && !feriado && (
                                <div style={{ display:"flex", gap:8, alignItems:"center", flexShrink:0 }}>
                                    <button onClick={()=>setModal(e)}
                                        style={{ padding:"7px 14px", background:cor, color:"#fff", border:"none", borderRadius:8, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                                        Detalhes
                                    </button>
                                    <button onClick={()=>{ e.grupoId ? setExcluirEvento(e) : (window.confirm("Excluir este evento?") && db.collection("events").doc(e.id).delete()); }}
                                        style={{ width:32, height:32, background:"#FFF0F0", border:"1px solid #F5DADA", borderRadius:8, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                                        <Icon name="trash-2" size={14} color="#B41020" />
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })
            }

            {modal && <ModalEvento evento={modal==="novo"?null:modal} onClose={()=>setModal(null)} config={config} />}
            {excluirEvento && <ModalExcluirEvento evento={excluirEvento} onClose={()=>setExcluirEvento(null)} />}
        </div>
    );
}



// ── AVISOS ────────────────────────────────────────────────────────────────────
function ModalAviso({ aviso, onClose, config }) {
    const cor = config.corPrimaria||COR;
    const [form, setForm]         = useState(aviso ? { title:aviso.title, prioridade:aviso.prioridade||"Normal", text:aviso.text } : { title:"", prioridade:"Normal", text:"" });
    const [salvando, setSalvando] = useState(false);
    const [erro, setErro]         = useState("");

    async function publicar() {
        if (!form.title.trim()) { setErro("Título é obrigatório."); return; }
        if (!form.text.trim())  { setErro("Mensagem é obrigatória."); return; }
        setSalvando(true);
        if (aviso) {
            await db.collection("avisos").doc(aviso.id).update({ title:form.title, prioridade:form.prioridade, text:form.text, updatedAt:firebase.firestore.FieldValue.serverTimestamp() });
        } else {
            await db.collection("avisos").add({ title:form.title, prioridade:form.prioridade, text:form.text, tipo:"manual", createdAt:firebase.firestore.FieldValue.serverTimestamp() });
        }
        setSalvando(false);
        onClose();
    }

    const inp = { width:"100%", padding:"11px 14px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:14, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#FAFAFA" };
    const lbl = { display:"block", fontSize:12, fontWeight:600, color:"#888", marginBottom:5 };

    return (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:300, display:"flex", alignItems:"flex-end", justifyContent:"center" }}
            onClick={e=>e.target===e.currentTarget&&onClose()}>
            <div style={{ background:"#fff", borderRadius:"20px 20px 0 0", padding:"24px 20px", width:"100%", maxWidth:640, maxHeight:"90vh", overflowY:"auto" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:"#1A1D23" }}>{aviso?"Editar Aviso":"Novo Aviso"}</div>
                    <button onClick={onClose} style={{ background:"#EEE", border:"none", borderRadius:8, width:32, height:32, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <Icon name="x" size={16} color="#666" />
                    </button>
                </div>

                <div style={{ marginBottom:16 }}>
                    <label style={lbl}>Título</label>
                    <input style={{ ...inp, borderColor: erro&&!form.title?cor:"#E8E0E0" }} value={form.title}
                        onChange={e=>{setForm(f=>({...f,title:e.target.value}));setErro("");}} autoFocus />
                </div>
                <div style={{ marginBottom:16 }}>
                    <label style={lbl}>Prioridade</label>
                    <select style={inp} value={form.prioridade} onChange={e=>setForm(f=>({...f,prioridade:e.target.value}))}>
                        <option>Normal</option>
                        <option>Alta</option>
                        <option>Urgente</option>
                    </select>
                </div>
                <div style={{ marginBottom:20 }}>
                    <label style={lbl}>Mensagem</label>
                    <textarea style={{ ...inp, minHeight:120, resize:"vertical" }} value={form.text}
                        onChange={e=>{setForm(f=>({...f,text:e.target.value}));setErro("");}} />
                </div>
                {erro && <div style={{ fontSize:13, color:cor, marginBottom:12 }}>{erro}</div>}
                <div style={{ display:"flex", gap:10 }}>
                    <button onClick={onClose} style={{ flex:1, padding:"13px", background:"#F0EAE8", color:"#666", border:"none", borderRadius:10, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>Cancelar</button>
                    <button onClick={publicar} disabled={salvando} style={{ flex:1, padding:"13px", background:cor, color:"#fff", border:"none", borderRadius:10, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", opacity:salvando?0.7:1 }}>
                        {salvando?"Salvando...":(aviso?"Salvar":"Publicar")}
                    </button>
                </div>
            </div>
        </div>
    );
}

function Avisos({ config, isAdmin }) {
    const { data:avisos, loading:lA } = useCollection("avisos");
    const { data:members }            = useCollection("members");
    const [showModal, setShowModal]   = useState(false);
    const [editAviso, setEditAviso]   = useState(null);
    const cor = config.corPrimaria||COR;

    if (lA) return <Spinner />;

    // Aniversariantes do mês atual
    const currentMonth = new Date().getMonth()+1;
    const today = todayStr();
    const aniversarios = members.filter(m =>
        m.active && m.birthday && parseInt(m.birthday.split("-")[1]) === currentMonth
    ).sort((a,b) => parseInt(a.birthday.split("-")[2]) - parseInt(b.birthday.split("-")[2]));

    // Cores por prioridade
    const prioColor = { Urgente:cor, Alta:"#1565C0", Normal:"#E65100" };
    const prioBg    = { Urgente:"#FFF5F5", Alta:"#EFF6FF", Normal:"#fff" };
    const prioIcon  = { Urgente:"alert-circle", Alta:"alert-circle", Normal:"megaphone" };

    function fmtDataAviso(seconds) {
        if (!seconds) return "";
        return new Date(seconds*1000).toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric"});
    }

    async function excluir(id) {
        if (!window.confirm("Excluir este aviso?")) return;
        await db.collection("avisos").doc(id).delete();
    }

    return (
        <div>
            {/* Header */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:cor }}>Avisos</div>
                {isAdmin && <button onClick={()=>setShowModal(true)}
                    style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 20px", background:cor, border:"none", borderRadius:10, fontSize:13, fontWeight:700, color:"#fff", cursor:"pointer", fontFamily:"inherit" }}>
                    <Icon name="plus" size={14} color="#fff" /> Novo Aviso
                </button>}
            </div>

            {/* Card aniversariantes do mês — fixo, automático */}
            {aniversarios.length > 0 && (
                <div style={{ background:"#FFFBEB", border:"1px solid #FDE68A", borderLeft:"3px solid #F59E0B", borderRadius:12, padding:"16px 20px", marginBottom:12, boxShadow:"0 1px 4px rgba(0,0,0,0.04)" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                        <span style={{ fontSize:16 }}>🎂</span>
                        <div style={{ fontSize:15, fontWeight:700, color:"#92400E" }}>
                            Aniversariantes do mês — {MONTHS_PT[currentMonth-1].charAt(0).toUpperCase()+MONTHS_PT[currentMonth-1].slice(1)}
                        </div>
                    </div>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                        {aniversarios.map(m => {
                            const dd = parseInt(m.birthday.split("-")[2]);
                            const isToday = m.birthday.slice(5) === today.slice(5);
                            return (
                                <span key={m.id} style={{ display:"inline-flex", alignItems:"center", gap:5, padding:"4px 10px", background:"#FEF3C7", borderRadius:20, fontSize:12, color:"#92400E", fontWeight:600, border: isToday?"2px solid #F59E0B":"1px solid #FDE68A" }}>
                                    🎂 {m.name} (dia {dd}){isToday?" 🎉":""}
                                </span>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Lista de avisos */}
            {avisos.length === 0 && aniversarios.length === 0 && (
                <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"32px", textAlign:"center", color:"#CCC", fontSize:14 }}>
                    Nenhum aviso publicado.
                </div>
            )}

            {avisos.map(a => {
                const isAuto      = a.tipo && a.tipo !== "manual";
                const borderColor = isAuto ? "#F59E0B" : (prioColor[a.prioridade] || cor);
                const bgColor     = isAuto ? "#FFFBEB" : (prioBg[a.prioridade]    || "#fff");
                const iconName    = isAuto ? "zap"     : (prioIcon[a.prioridade]  || "megaphone");
                return (
                    <div key={a.id} style={{ background:bgColor, borderRadius:12, border:"1px solid #EEE8E8", borderLeft:`3px solid ${borderColor}`, padding:"16px 20px", marginBottom:10, boxShadow:"0 1px 4px rgba(0,0,0,0.04)" }}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                            <div style={{ display:"flex", alignItems:"center", gap:8, flex:1 }}>
                                <Icon name={iconName} size={16} color={borderColor} />
                                <div style={{ fontSize:15, fontWeight:700, color:"#1A1D23" }}>{a.title}</div>
                                {!isAuto && a.prioridade && a.prioridade !== "Normal" && (
                                    <span style={{ fontSize:10, padding:"2px 7px", borderRadius:10, background:borderColor+"20", color:borderColor, fontWeight:700, textTransform:"uppercase" }}>{a.prioridade}</span>
                                )}
                            </div>
                            <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0, marginLeft:12 }}>
                                <div style={{ fontSize:12, color:"#AAA" }}>{fmtDataAviso(a.createdAt?.seconds)}</div>
                                {isAdmin && !isAuto && <button onClick={()=>setEditAviso(a)}
                                    style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", padding:2 }}>
                                    <Icon name="pencil" size={14} color="#AAA" />
                                </button>}
                                {isAdmin && <button onClick={()=>excluir(a.id)}
                                    style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", padding:2 }}>
                                    <Icon name="trash-2" size={14} color="#CCC" />
                                </button>}
                            </div>
                        </div>
                        <div style={{ fontSize:14, color:"#555", lineHeight:1.6 }}>{a.text}</div>
                        {isAuto && <div style={{ marginTop:6, fontSize:11, color:"#B45309", fontStyle:"italic" }}>⚡ Aviso automático</div>}
                    </div>
                );
            })}

            {showModal && <ModalAviso onClose={()=>setShowModal(false)} config={config} />}
            {editAviso && <ModalAviso aviso={editAviso} onClose={()=>setEditAviso(null)} config={config} />}
        </div>
    );
}



// ── MÚSICAS ───────────────────────────────────────────────────────────────────
const CATEGORIAS_MUSICA = ["MPB","Natal","Regionais","Sacro","Clássico","Popular","Infantil","Internacional","Outro"];
const CAT_COLORS = { MPB:"#2E7D32", Natal:"#1565C0", Regionais:"#E65100", Sacro:"#7B1FA2", Clássico:"#4527A0", Popular:"#00838F", Infantil:"#F57C00", Internacional:"#1B5E20", Outro:"#616161" };

function ModalMusica({ musica, onClose, config }) {
    const cor = config.corPrimaria||COR;
    const vazio = { title:"", categoria:"MPB", compositor:"", partitura:"", audioOriginal:"", audioArranjo:"", playback:"", soprano:"", mezzoSoprano:"", contralto:"", tenor:"", baritono:"", baixo:"", letra:"", notes:"" };
    const [form, setForm]         = useState(musica?{...vazio,...musica}:vazio);
    const [salvando, setSalvando] = useState(false);
    const [erro, setErro]         = useState("");
    const [novaCategoria, setNovaCategoria] = useState("");
    const [showNovaCateg, setShowNovaCateg] = useState(false);
    const [categorias, setCategorias]       = useState(CATEGORIAS_MUSICA);

    async function salvar() {
        if (!form.title.trim()) { setErro("Título é obrigatório."); return; }
        setSalvando(true);
        const d = { title:form.title, categoria:form.categoria, compositor:form.compositor||"", partitura:form.partitura||"", audioOriginal:form.audioOriginal||"", audioArranjo:form.audioArranjo||"", playback:form.playback||"", soprano:form.soprano||"", mezzoSoprano:form.mezzoSoprano||"", contralto:form.contralto||"", tenor:form.tenor||"", baritono:form.baritono||"", baixo:form.baixo||"", letra:form.letra||"", notes:form.notes||"" };
        if (musica) {
            await db.collection("songs").doc(musica.id).update({...d, updatedAt:firebase.firestore.FieldValue.serverTimestamp()});
        } else {
            await db.collection("songs").add({...d, createdAt:firebase.firestore.FieldValue.serverTimestamp()});
            // Aviso automático
            await db.collection("avisos").add({ title:`🎵 Nova música: ${form.title}`, text:`"${form.title}"${form.compositor?" de "+form.compositor:""} foi adicionada ao repertório na categoria ${form.categoria}.`, tipo:"auto_musica", prioridade:"Normal", createdAt:firebase.firestore.FieldValue.serverTimestamp() });
        }
        setSalvando(false);
        onClose();
    }

    async function excluir() {
        if (!window.confirm("Excluir esta música do repertório?")) return;
        await db.collection("songs").doc(musica.id).delete();
        onClose();
    }

    const inp  = { width:"100%", padding:"10px 14px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:13, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#FAFAFA" };
    const lbl  = { display:"block", fontSize:11, fontWeight:700, color:"#888", marginBottom:5, textTransform:"uppercase", letterSpacing:0.8 };
    const g2   = { display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:14 };
    const sec  = { fontSize:11, fontWeight:700, color:cor, textTransform:"uppercase", letterSpacing:1, marginBottom:10, marginTop:6 };

    return (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:300, display:"flex", alignItems:"flex-end", justifyContent:"center" }}
            onClick={e=>e.target===e.currentTarget&&onClose()}>
            <div style={{ background:"#FAFAFA", borderRadius:"20px 20px 0 0", padding:"24px 20px", width:"100%", maxWidth:640, maxHeight:"93vh", overflowY:"auto" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:"#1A1D23" }}>{musica?"Editar Música":"Adicionar Música ao Repertório"}</div>
                    <button onClick={onClose} style={{ background:"#EEE", border:"none", borderRadius:8, width:32, height:32, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <Icon name="x" size={16} color="#666" />
                    </button>
                </div>

                <div style={{ marginBottom:14 }}>
                    <label style={lbl}>Título *</label>
                    <input style={{ ...inp, borderColor:erro&&!form.title?cor:"#E8E0E0" }} value={form.title} onChange={e=>{setForm(f=>({...f,title:e.target.value}));setErro("");}} autoFocus />
                    {erro && <div style={{ fontSize:12, color:cor, marginTop:4 }}>{erro}</div>}
                </div>

                <div style={g2}>
                    <div>
                        <label style={lbl}>Categoria *</label>
                        <div style={{ display:"flex", gap:6 }}>
                            <select style={{ ...inp, flex:1 }} value={form.categoria} onChange={e=>setForm(f=>({...f,categoria:e.target.value}))}>
                                {categorias.map(c=><option key={c}>{c}</option>)}
                            </select>
                            <button onClick={()=>setShowNovaCateg(v=>!v)} title="Nova categoria"
                                style={{ width:36, height:38, background:cor+"15", border:`1px solid ${cor}33`, borderRadius:8, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                                <Icon name="plus" size={14} color={cor} />
                            </button>
                        </div>
                        {showNovaCateg && <div style={{ display:"flex", gap:6, marginTop:6 }}>
                            <input style={{ ...inp, flex:1 }} value={novaCategoria} onChange={e=>setNovaCategoria(e.target.value)} placeholder="Nome da categoria" />
                            <button onClick={()=>{ if(novaCategoria.trim()){setCategorias(c=>[...c,novaCategoria.trim()]);setForm(f=>({...f,categoria:novaCategoria.trim()}));setNovaCategoria("");setShowNovaCateg(false);}}}
                                style={{ padding:"0 12px", background:cor, color:"#fff", border:"none", borderRadius:8, cursor:"pointer", fontFamily:"inherit", fontSize:12, fontWeight:700 }}>Criar</button>
                        </div>}
                    </div>
                    <div>
                        <label style={lbl}>Compositor</label>
                        <input style={inp} value={form.compositor||""} onChange={e=>setForm(f=>({...f,compositor:e.target.value}))} />
                    </div>
                </div>

                <div style={sec}>Materiais (links Google Drive ou URL direta)</div>
                <div style={{ marginBottom:14 }}>
                    <label style={lbl}>🎼 Partitura (PDF)</label>
                    <input style={inp} value={form.partitura||""} onChange={e=>setForm(f=>({...f,partitura:e.target.value}))} placeholder="https://drive.google.com/file/d/..." />
                </div>
                <div style={g2}>
                    <div><label style={lbl}>🎵 Áudio Original</label><input style={inp} value={form.audioOriginal||""} onChange={e=>setForm(f=>({...f,audioOriginal:e.target.value}))} placeholder="Drive ou YouTube (https://...)" /></div>
                    <div><label style={lbl}>🎵 Áudio/Arranjo</label><input style={inp} value={form.audioArranjo||""} onChange={e=>setForm(f=>({...f,audioArranjo:e.target.value}))} placeholder="Drive ou YouTube (https://...)" /></div>
                </div>
                <div style={{ marginBottom:14 }}>
                    <label style={lbl}>🎧 Playback</label>
                    <input style={inp} value={form.playback||""} onChange={e=>setForm(f=>({...f,playback:e.target.value}))} placeholder="Drive ou YouTube (https://...)" />
                </div>

                <div style={sec}>Áudios por naipe</div>
                <div style={g2}>
                    <div><label style={lbl}>Soprano</label><input style={inp} value={form.soprano||""} onChange={e=>setForm(f=>({...f,soprano:e.target.value}))} placeholder="https://drive.google.com/..." /></div>
                    <div><label style={lbl}>Mezzo-soprano</label><input style={inp} value={form.mezzoSoprano||""} onChange={e=>setForm(f=>({...f,mezzoSoprano:e.target.value}))} placeholder="https://drive.google.com/..." /></div>
                </div>
                <div style={g2}>
                    <div><label style={lbl}>Contralto</label><input style={inp} value={form.contralto||""} onChange={e=>setForm(f=>({...f,contralto:e.target.value}))} placeholder="https://drive.google.com/..." /></div>
                    <div><label style={lbl}>Tenor</label><input style={inp} value={form.tenor||""} onChange={e=>setForm(f=>({...f,tenor:e.target.value}))} placeholder="https://drive.google.com/..." /></div>
                </div>
                <div style={g2}>
                    <div><label style={lbl}>Barítono</label><input style={inp} value={form.baritono||""} onChange={e=>setForm(f=>({...f,baritono:e.target.value}))} placeholder="https://drive.google.com/..." /></div>
                    <div><label style={lbl}>Baixo</label><input style={inp} value={form.baixo||""} onChange={e=>setForm(f=>({...f,baixo:e.target.value}))} placeholder="https://drive.google.com/..." /></div>
                </div>

                <div style={{ marginBottom:14 }}>
                    <label style={lbl}>Letra</label>
                    <textarea style={{ ...inp, minHeight:100, resize:"vertical" }} value={form.letra||""} onChange={e=>setForm(f=>({...f,letra:e.target.value}))} />
                </div>
                <div style={{ marginBottom:20 }}>
                    <label style={lbl}>Observações</label>
                    <textarea style={{ ...inp, minHeight:70, resize:"vertical" }} value={form.notes||""} onChange={e=>setForm(f=>({...f,notes:e.target.value}))} />
                </div>

                <div style={{ display:"flex", gap:10 }}>
                    {musica && <button onClick={excluir} style={{ padding:"12px 16px", background:"#FFF0F0", color:"#B41020", border:"1px solid #F5DADA", borderRadius:10, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>Excluir</button>}
                    <button onClick={onClose} style={{ flex:1, padding:"13px", background:"#F0EAE8", color:"#666", border:"none", borderRadius:10, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>Cancelar</button>
                    <button onClick={salvar} disabled={salvando} style={{ flex:1, padding:"13px", background:cor, color:"#fff", border:"none", borderRadius:10, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", opacity:salvando?0.7:1 }}>
                        {salvando?"Salvando...":(musica?"Salvar":"Adicionar")}
                    </button>
                </div>
            </div>
        </div>
    );
}

function Repertorio({ config, isAdmin }) {
    const { data:songs, loading } = useCollection("songs");
    const [busca, setBusca]       = useState("");
    const [filtro, setFiltro]     = useState("Todas as Categorias");
    const [modal, setModal]       = useState(null);
    const [player, setPlayer]     = useState(null);
    const cor = config.corPrimaria||COR;

    if (loading) return <Spinner />;

    const categorias = ["Todas as Categorias", ...Array.from(new Set(songs.map(s=>s.categoria).filter(Boolean))).sort()];

    const filtradas = songs.filter(s => {
        const q  = busca.toLowerCase();
        const ok = !busca || s.title.toLowerCase().includes(q) || (s.compositor||"").toLowerCase().includes(q) || (s.categoria||"").toLowerCase().includes(q);
        const of = filtro==="Todas as Categorias" || s.categoria===filtro;
        return ok && of;
    });

    function MaterialBadge({ label, icon, url }) {
        if (!url) return null;
        return (
            <button onClick={e=>{e.stopPropagation();setPlayer({url,title:label});}}
                style={{ display:"inline-flex", alignItems:"center", gap:4, padding:"3px 8px", borderRadius:10, background:"#F5EAEA", color:cor, fontSize:11, fontWeight:600, border:"none", cursor:"pointer", fontFamily:"inherit", marginRight:4, marginBottom:4 }}>
                <span style={{ fontSize:12 }}>{icon}</span> {label}
            </button>
        );
    }

    function temNaipes(s) { return s.soprano||s.mezzoSoprano||s.contralto||s.tenor||s.baritono||s.baixo; }

    return (
        <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24 }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:cor }}>Repertório</div>
                {isAdmin && <button onClick={()=>setModal("novo")}
                    style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 20px", background:cor, border:"none", borderRadius:10, fontSize:13, fontWeight:700, color:"#fff", cursor:"pointer", fontFamily:"inherit" }}>
                    <Icon name="plus" size={14} color="#fff" /> Adicionar Música
                </button>}
            </div>

            {/* Busca + filtro */}
            <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"12px 16px", marginBottom:20, display:"flex", gap:12, alignItems:"center", boxShadow:"0 1px 4px rgba(0,0,0,0.04)" }}>
                <Icon name="search" size={16} color="#AAA" />
                <input value={busca} onChange={e=>setBusca(e.target.value)} placeholder="Buscar músicas..."
                    style={{ flex:1, border:"none", outline:"none", fontSize:14, fontFamily:"inherit", color:"#1A1D23", background:"none" }} />
                <select value={filtro} onChange={e=>setFiltro(e.target.value)}
                    style={{ border:"1px solid #EEE8E8", borderRadius:8, padding:"7px 12px", fontSize:13, fontFamily:"inherit", color:"#1A1D23", outline:"none", background:"#fff", cursor:"pointer" }}>
                    {categorias.map(c=><option key={c}>{c}</option>)}
                </select>
            </div>

            {/* Grid de cards */}
            {filtradas.length === 0
                ? <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"32px", textAlign:"center", color:"#CCC", fontSize:14 }}>Nenhuma música encontrada.</div>
                : <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))", gap:14 }}>
                    {filtradas.map(s => {
                        const catColor = CAT_COLORS[s.categoria] || "#616161";
                        return (
                            <div key={s.id} style={{ background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", borderTop:`3px solid ${catColor}`, padding:"16px", boxShadow:"0 1px 4px rgba(0,0,0,0.04)", cursor: isAdmin?"pointer":"default" }}
                                onClick={isAdmin?()=>setModal(s):undefined}>
                                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:4 }}>
                                    <div style={{ fontSize:15, fontWeight:700, color:"#1A1D23", flex:1, paddingRight:8 }}>{s.title}</div>
                                    <span style={{ fontSize:11, padding:"2px 8px", borderRadius:10, background:catColor+"18", color:catColor, fontWeight:700, flexShrink:0 }}>{s.categoria}</span>
                                </div>
                                {s.compositor && <div style={{ fontSize:12, color:"#AAA", marginBottom:10 }}>{s.compositor}</div>}
                                <div style={{ display:"flex", flexWrap:"wrap", marginTop:8 }}>
                                    <MaterialBadge label="Partitura" icon="🎼" url={s.partitura} />
                                    <MaterialBadge label="Áudio Original" icon="🎵" url={s.audioOriginal} />
                                    <MaterialBadge label="Arranjo" icon="🎵" url={s.audioArranjo} />
                                    <MaterialBadge label="Playback" icon="🎧" url={s.playback} />
                                    {temNaipes(s) && <button onClick={e=>{e.stopPropagation();setPlayer({url:s.soprano||s.mezzoSoprano||s.contralto||s.tenor||s.baritono||s.baixo,title:"Naipes — "+s.title,naipes:{soprano:s.soprano,mezzoSoprano:s.mezzoSoprano,contralto:s.contralto,tenor:s.tenor,baritono:s.baritono,baixo:s.baixo}});}} style={{ display:"inline-flex", alignItems:"center", gap:4, padding:"3px 8px", borderRadius:10, background:"#F5EAEA", color:cor, fontSize:11, fontWeight:600, border:"none", cursor:"pointer", fontFamily:"inherit", marginRight:4, marginBottom:4 }}>🎶 Naipes</button>}
                                    {s.letra && <button onClick={e=>{e.stopPropagation();setPlayer({url:"letra",title:s.title,letra:s.letra});}} style={{ display:"inline-flex", alignItems:"center", gap:4, padding:"3px 8px", borderRadius:10, background:"#F5F5F5", color:"#666", fontSize:11, fontWeight:600, border:"none", cursor:"pointer", fontFamily:"inherit", marginRight:4, marginBottom:4 }}>📄 Letra</button>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            }

            <div style={{ fontSize:12, color:"#AAA", marginTop:12, textAlign:"right" }}>{filtradas.length} música{filtradas.length!==1?"s":""}</div>

            {modal && <ModalMusica musica={modal==="novo"?null:modal} onClose={()=>setModal(null)} config={config} />}
            {player && <PlayerModal url={player.url} title={player.title} onClose={()=>setPlayer(null)} letra={player.letra} naipes={player.naipes} />}
        </div>
    );
}



// ── SALA DE ESTUDOS ───────────────────────────────────────────────────────────
const TIPOS_MIDIA = [
    { key:"video",  label:"Vídeo",  icon:"video",       bg:"#EFF6FF", color:"#1565C0" },
    { key:"pdf",    label:"PDF",    icon:"file-text",   bg:"#FFF5F5", color:"#B41020" },
    { key:"audio",  label:"Áudio",  icon:"mic",         bg:"#F0FDF4", color:"#2E7D32" },
    { key:"texto",  label:"Texto",  icon:"align-left",  bg:"#FFFBEB", color:"#92400E" },
    { key:"foto",   label:"Foto",   icon:"image",       bg:"#F5F3FF", color:"#6D28D9" },
];
const CATS_ESTUDOS = ["Vocalise","Aula","Documentário","Reportagem","Concerto","Ensaio","Material de Apoio","Outro"];

function ModalEstudo({ estudo, onClose, config }) {
    const cor = config.corPrimaria||COR;
    const vazio = { tipo:"video", categoria:"Aula", title:"", descricao:"", url:"" };
    const [form, setForm]         = useState(estudo?{...vazio,...estudo}:vazio);
    const [salvando, setSalvando] = useState(false);
    const [erro, setErro]         = useState("");

    async function salvar() {
        if (!form.title.trim()) { setErro("Título é obrigatório."); return; }
        if (!form.url.trim())   { setErro("Link é obrigatório."); return; }
        setSalvando(true);
        const d = { tipo:form.tipo, categoria:form.categoria, title:form.title, descricao:form.descricao||"", url:form.url };
        if (estudo) {
            await db.collection("estudos").doc(estudo.id).update({...d, updatedAt:firebase.firestore.FieldValue.serverTimestamp()});
        } else {
            await db.collection("estudos").add({...d, createdAt:firebase.firestore.FieldValue.serverTimestamp()});
            await db.collection("avisos").add({ title:`📚 Novo material: ${form.title}`, text:`Um novo material foi adicionado à Sala de Estudos: "${form.title}" (${TIPOS_MIDIA.find(t=>t.key===form.tipo)?.label||form.tipo} — ${form.categoria}).`, tipo:"auto_estudo", prioridade:"Normal", createdAt:firebase.firestore.FieldValue.serverTimestamp() });
        }
        setSalvando(false);
        onClose();
    }

    async function excluir() {
        if (!window.confirm("Excluir este material?")) return;
        await db.collection("estudos").doc(estudo.id).delete();
        onClose();
    }

    const inp = { width:"100%", padding:"11px 14px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:14, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#FAFAFA" };
    const lbl = { display:"block", fontSize:12, fontWeight:600, color:"#888", marginBottom:6 };

    return (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:300, display:"flex", alignItems:"flex-end", justifyContent:"center" }}
            onClick={e=>e.target===e.currentTarget&&onClose()}>
            <div style={{ background:"#FAFAFA", borderRadius:"20px 20px 0 0", padding:"24px 20px", width:"100%", maxWidth:600, maxHeight:"92vh", overflowY:"auto" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:"#1A1D23" }}>{estudo?"Editar material":"Adicionar material"}</div>
                    <button onClick={onClose} style={{ background:"#EEE", border:"none", borderRadius:8, width:32, height:32, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <Icon name="x" size={16} color="#666" />
                    </button>
                </div>

                {/* Tipo de mídia */}
                <div style={{ marginBottom:20 }}>
                    <label style={lbl}>Tipo de mídia *</label>
                    <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                        {TIPOS_MIDIA.map(t=>(
                            <button key={t.key} onClick={()=>setForm(f=>({...f,tipo:t.key}))}
                                style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:4, padding:"10px 16px", borderRadius:10, border:`2px solid ${form.tipo===t.key?cor:"#EEE"}`, background:form.tipo===t.key?cor+"10":"#fff", cursor:"pointer", fontFamily:"inherit", minWidth:70 }}>
                                <Icon name={t.icon} size={20} color={form.tipo===t.key?cor:"#AAA"} />
                                <span style={{ fontSize:12, fontWeight:700, color:form.tipo===t.key?cor:"#888" }}>{t.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Categoria */}
                <div style={{ marginBottom:20 }}>
                    <label style={lbl}>Categoria *</label>
                    <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                        {CATS_ESTUDOS.map(c=>(
                            <button key={c} onClick={()=>setForm(f=>({...f,categoria:c}))}
                                style={{ padding:"6px 14px", borderRadius:20, border:`1px solid ${form.categoria===c?cor:"#EEE"}`, background:form.categoria===c?cor:"#fff", color:form.categoria===c?"#fff":"#555", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>
                                {c}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ marginBottom:14 }}>
                    <label style={lbl}>Título *</label>
                    <input style={{ ...inp, borderColor:erro&&!form.title?cor:"#E8E0E0" }} value={form.title} onChange={e=>{setForm(f=>({...f,title:e.target.value}));setErro("");}} placeholder="Nome do material..." autoFocus />
                    {erro && <div style={{ fontSize:12, color:cor, marginTop:4 }}>{erro}</div>}
                </div>

                <div style={{ marginBottom:14 }}>
                    <label style={lbl}>Descrição (opcional)</label>
                    <input style={inp} value={form.descricao||""} onChange={e=>setForm(f=>({...f,descricao:e.target.value}))} placeholder="Breve observação..." />
                </div>

                <div style={{ marginBottom:20 }}>
                    <label style={lbl}>Link do YouTube ou Google Drive</label>
                    <input style={{ ...inp, borderColor:erro&&!form.url?cor:"#E8E0E0" }} value={form.url||""} onChange={e=>{setForm(f=>({...f,url:e.target.value}));setErro("");}} placeholder="https://www.youtube.com/watch?v=... ou https://drive.google.com" />
                </div>

                <div style={{ display:"flex", gap:10 }}>
                    {estudo && <button onClick={excluir} style={{ padding:"12px 16px", background:"#FFF0F0", color:"#B41020", border:"1px solid #F5DADA", borderRadius:10, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>Excluir</button>}
                    <button onClick={onClose} style={{ flex:1, padding:"13px", background:"#F0EAE8", color:"#666", border:"none", borderRadius:10, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>Cancelar</button>
                    <button onClick={salvar} disabled={salvando} style={{ flex:1, padding:"13px", background:cor, color:"#fff", border:"none", borderRadius:10, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", opacity:salvando?0.7:1 }}>
                        {salvando?"Salvando...":(estudo?"Salvar":"Adicionar")}
                    </button>
                </div>
            </div>
        </div>
    );
}

function SalaEstudos({ config, isAdmin }) {
    const { data:estudos, loading } = useCollection("estudos");
    const [filtro, setFiltro]       = useState("Todos");
    const [modal, setModal]         = useState(null);
    const [player, setPlayer]       = useState(null);
    const cor = config.corPrimaria||COR;

    if (loading) return <Spinner />;

    // Categorias com contagem
    const contagem = {};
    estudos.forEach(e => { contagem[e.categoria] = (contagem[e.categoria]||0)+1; });
    const cats = ["Todos", ...Object.keys(contagem).sort()];

    const filtrados = filtro==="Todos" ? estudos : estudos.filter(e=>e.categoria===filtro);

    function getMidia(tipo) { return TIPOS_MIDIA.find(t=>t.key===tipo) || TIPOS_MIDIA[0]; }

    return (
        <div>
            {/* Header */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                <div>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:cor }}>Sala de Estudos</div>
                    <div style={{ fontSize:13, color:"#AAA", marginTop:2 }}>Recursos didáticos para o corista</div>
                </div>
                {isAdmin && <button onClick={()=>setModal("novo")}
                    style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 20px", background:cor, border:"none", borderRadius:10, fontSize:13, fontWeight:700, color:"#fff", cursor:"pointer", fontFamily:"inherit", flexShrink:0 }}>
                    <Icon name="plus" size={14} color="#fff" /> Adicionar material
                </button>}
            </div>

            {/* Filtros por categoria */}
            <div style={{ display:"flex", gap:8, flexWrap:"wrap", margin:"16px 0 20px" }}>
                {cats.map(c=>{
                    const count = c==="Todos" ? estudos.length : (contagem[c]||0);
                    return (
                        <button key={c} onClick={()=>setFiltro(c)}
                            style={{ padding:"6px 14px", borderRadius:20, border:`1px solid ${filtro===c?cor:"#EEE"}`, background:filtro===c?cor:"#fff", color:filtro===c?"#fff":"#555", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>
                            {c} <span style={{ fontSize:11, opacity:0.8 }}>({count})</span>
                        </button>
                    );
                })}
            </div>

            {/* Grid de cards */}
            {filtrados.length === 0
                ? <div style={{ background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"32px", textAlign:"center", color:"#CCC", fontSize:14 }}>Nenhum material encontrado.</div>
                : <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))", gap:16 }}>
                    {filtrados.map(e => {
                        const midia = getMidia(e.tipo);
                        return (
                            <div key={e.id} style={{ background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", overflow:"hidden", boxShadow:"0 1px 4px rgba(0,0,0,0.04)" }}>
                                {/* Thumbnail */}
                                <div style={{ height:120, background:midia.bg, display:"flex", alignItems:"center", justifyContent:"center" }}>
                                    <Icon name={midia.icon} size={40} color={midia.color} />
                                </div>
                                {/* Conteúdo */}
                                <div style={{ padding:"12px 14px" }}>
                                    <div style={{ display:"flex", gap:6, marginBottom:8, flexWrap:"wrap" }}>
                                        <span style={{ fontSize:11, padding:"2px 8px", borderRadius:10, background:midia.bg, color:midia.color, fontWeight:700 }}>{midia.label}</span>
                                        <span style={{ fontSize:11, padding:"2px 8px", borderRadius:10, background:"#F5F5F5", color:"#666", fontWeight:600 }}>{e.categoria}</span>
                                    </div>
                                    <div style={{ fontSize:13, fontWeight:700, color:"#1A1D23", marginBottom:4, lineHeight:1.3 }}>{e.title}</div>
                                    {e.descricao && <div style={{ fontSize:12, color:"#AAA", marginBottom:10 }}>{e.descricao}</div>}
                                    <div style={{ display:"flex", gap:8, alignItems:"center", marginTop:8 }}>
                                        <button onClick={()=>setPlayer({url:e.url,title:e.title})}
                                            style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:6, padding:"8px", background:cor, color:"#fff", borderRadius:8, fontSize:13, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                                            <Icon name="play" size={13} color="#fff" /> Abrir
                                        </button>
                                        {isAdmin && <>
                                            <button onClick={()=>setModal(e)} style={{ width:32, height:32, background:"#F5F5F5", border:"none", borderRadius:8, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                                                <Icon name="pencil" size={13} color="#888" />
                                            </button>
                                            <button onClick={async()=>{ if(window.confirm("Excluir este material?")) await db.collection("estudos").doc(e.id).delete(); }}
                                                style={{ width:32, height:32, background:"#FFF0F0", border:"none", borderRadius:8, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>
                                                <Icon name="trash-2" size={13} color="#B41020" />
                                            </button>
                                        </>}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            }

            {modal && <ModalEstudo estudo={modal==="novo"?null:modal} onClose={()=>setModal(null)} config={config} />}
            {player && <PlayerModal url={player.url} title={player.title} onClose={()=>setPlayer(null)} />}
        </div>
    );
}



// ── APRESENTAÇÃO ──────────────────────────────────────────────────────────────
function Apresentacao({ config }) {
    const { data:events }         = useCollection("events","date");
    const [eventoSel, setEventoSel] = useState(null);
    const [setlist, setSetlist]   = useState([]);
    const [tocando, setTocando]   = useState(null);
    const [dragIdx, setDragIdx]   = useState(null);
    const cor = config.corPrimaria||COR;
    const today = todayStr();

    useEffect(()=>{
        if (eventoSel) setSetlist(eventoSel.setlist||[]);
        else setSetlist([]);
        setTocando(null);
    },[eventoSel?.id]);

    const proximos = events.filter(e=>e.date>=today && e.setlist?.length>0).sort((a,b)=>a.date>b.date?1:-1);
    const passados = events.filter(e=>e.date<today  && e.setlist?.length>0).sort((a,b)=>a.date>b.date?-1:1).slice(0,10);

    async function salvarOrdem(nova) {
        if (!eventoSel) return;
        setSetlist(nova);
        await db.collection("events").doc(eventoSel.id).update({
            setlist: nova,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    function moverCima(idx) {
        if (idx===0) return;
        const nova=[...setlist];
        [nova[idx-1],nova[idx]]=[nova[idx],nova[idx-1]];
        salvarOrdem(nova);
    }
    function moverBaixo(idx) {
        if (idx===setlist.length-1) return;
        const nova=[...setlist];
        [nova[idx],nova[idx+1]]=[nova[idx+1],nova[idx]];
        salvarOrdem(nova);
    }

    const mesaUrl = eventoSel ? `${window.location.origin}${window.location.pathname}?mesa=${eventoSel.id}` : "";

    const card = { background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"16px 20px", marginBottom:12, boxShadow:"0 1px 4px rgba(0,0,0,0.04)" };
    const inp  = { padding:"10px 14px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:13, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#FAFAFA" };

    return (
        <div>
            <div style={{ marginBottom:6 }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:cor }}>Apresentação</div>
                <div style={{ fontSize:13, color:"#AAA", marginTop:2 }}>Painel operacional para o dia do show — playbacks e setlist</div>
            </div>

            {/* Seleção de evento */}
            <div style={{ ...card, marginTop:20 }}>
                <div style={{ fontSize:13, fontWeight:700, color:"#1A1D23", marginBottom:12 }}>Selecionar Evento</div>
                <div style={{ display:"flex", gap:10, alignItems:"center", flexWrap:"wrap" }}>
                    <select style={{ ...inp, flex:1, minWidth:200 }}
                        value={eventoSel?.id||""}
                        onChange={e=>{
                            const ev = [...proximos,...passados].find(ev=>ev.id===e.target.value);
                            setEventoSel(ev||null);
                        }}>
                        <option value="">Selecionar evento...</option>
                        {proximos.length>0 && <optgroup label="PRÓXIMOS">
                            {proximos.map(e=><option key={e.id} value={e.id}>{e.date} — {e.title}</option>)}
                        </optgroup>}
                        {passados.length>0 && <optgroup label="PASSADOS">
                            {passados.map(e=><option key={e.id} value={e.id}>{e.date} — {e.title}</option>)}
                        </optgroup>}
                    </select>
                </div>
                {eventoSel && setlist.length===0 && (
                    <div style={{ fontSize:12, color:"#E65100", marginTop:8 }}>Este evento não tem músicas no repertório. Adicione pelo módulo Agenda → editar evento.</div>
                )}
            </div>

            {/* Mesa de Som */}
            {eventoSel && mesaUrl && (
                <div style={{ background:"#1A1D23", borderRadius:12, padding:"16px 20px", marginBottom:12 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                        <Icon name="monitor-speaker" size={16} color="#AAA" />
                        <div style={{ fontSize:14, fontWeight:700, color:"#fff" }}>Mesa de Som — Painel do Sonoplasta</div>
                    </div>
                    <div style={{ fontSize:12, color:"#888", marginBottom:10 }}>Acesso público sem senha — envie este link para o sonoplasta no dia da apresentação.</div>
                    <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                        <input readOnly value={mesaUrl} style={{ ...inp, flex:1, background:"#2A2D33", color:"#CCC", border:"1px solid #333" }} />
                        <button onClick={()=>navigator.clipboard.writeText(mesaUrl).then(()=>alert("Link copiado!"))}
                            style={{ padding:"10px 16px", background:cor, color:"#fff", border:"none", borderRadius:8, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>Copiar</button>
                        <a href={mesaUrl} target="_blank" rel="noreferrer"
                            style={{ padding:"10px 16px", background:"#2A2D33", color:"#CCC", border:"1px solid #444", borderRadius:8, fontSize:13, fontWeight:700, textDecoration:"none" }}>Abrir</a>
                    </div>
                </div>
            )}

            {/* Setlist + Player */}
            {eventoSel && setlist.length>0 && (
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                    {/* Setlist */}
                    <div style={card}>
                        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
                            <Icon name="music" size={16} color={cor} />
                            <div style={{ fontSize:14, fontWeight:700, color:cor }}>Setlist</div>
                            <div style={{ fontSize:12, color:"#AAA" }}>({setlist.length} música{setlist.length!==1?"s":""})</div>
                            <div style={{ fontSize:11, color:"#CCC", marginLeft:"auto" }}>↑↓ para reordenar</div>
                        </div>
                        {setlist.map((s,i)=>(
                            <div key={i} onClick={()=>setTocando(s)}
                                style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 12px", borderRadius:8, marginBottom:6, cursor:"pointer", background: tocando?.id===s.id ? cor+"15" : "#F9F5F5", border: tocando?.id===s.id ? `1px solid ${cor}33` : "1px solid transparent", transition:"background 0.15s" }}>
                                <span style={{ fontSize:13, color:cor, fontWeight:700, minWidth:22, textAlign:"center" }}>{i+1}</span>
                                <div style={{ flex:1 }}>
                                    <div style={{ fontSize:13, fontWeight:600, color:"#1A1D23" }}>{s.title}</div>
                                    {s.compositor && <div style={{ fontSize:11, color:"#AAA" }}>{s.compositor}</div>}
                                </div>
                                <div style={{ display:"flex", flexDirection:"column", gap:2 }}>
                                    <button onClick={e=>{e.stopPropagation();moverCima(i);}}
                                        style={{ background:"none", border:"none", cursor:"pointer", padding:2, color: i===0?"#EEE":"#888" }}>
                                        <Icon name="chevron-up" size={14} color={i===0?"#EEE":"#888"} />
                                    </button>
                                    <button onClick={e=>{e.stopPropagation();moverBaixo(i);}}
                                        style={{ background:"none", border:"none", cursor:"pointer", padding:2, color: i===setlist.length-1?"#EEE":"#888" }}>
                                        <Icon name="chevron-down" size={14} color={i===setlist.length-1?"#EEE":"#888"} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Player */}
                    <div style={card}>
                        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
                            <Icon name="volume-2" size={16} color={cor} />
                            <div style={{ fontSize:14, fontWeight:700, color:cor }}>Player</div>
                        </div>
                        {!tocando
                            ? <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"40px 20px", color:"#CCC", gap:12 }}>
                                <Icon name="music" size={40} color="#EEE" />
                                <div style={{ fontSize:13 }}>Clique em uma música para reproduzir</div>
                              </div>
                            : <div>
                                <div style={{ fontSize:14, fontWeight:700, color:"#1A1D23", marginBottom:4 }}>{tocando.title}</div>
                                {tocando.compositor && <div style={{ fontSize:12, color:"#AAA", marginBottom:12 }}>{tocando.compositor}</div>}
                                {(tocando.playback||tocando.audioOriginal)
                                    ? <iframe src={(()=>{
                                        const url = tocando.playback||tocando.audioOriginal;
                                        const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                                        if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1`;
                                        const dr = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
                                        if (dr) return `https://drive.google.com/file/d/${dr[1]}/preview`;
                                        return url;
                                      })()} style={{ width:"100%", height:200, border:"none", borderRadius:8 }} allow="autoplay; fullscreen" title={tocando.title} />
                                    : <div style={{ padding:"20px", background:"#F5F5F5", borderRadius:8, textAlign:"center", color:"#AAA", fontSize:13 }}>
                                        Esta música não tem playback cadastrado.
                                      </div>
                                }
                                {/* Próxima */}
                                {setlist[setlist.findIndex(s=>s.id===tocando.id)+1] && (
                                    <div style={{ marginTop:12, padding:"8px 12px", background:"#F9F5F5", borderRadius:8, display:"flex", alignItems:"center", gap:8 }}>
                                        <Icon name="skip-forward" size={13} color="#AAA" />
                                        <div style={{ fontSize:12, color:"#AAA" }}>A seguir: <span style={{ color:"#1A1D23", fontWeight:600 }}>{setlist[setlist.findIndex(s=>s.id===tocando.id)+1].title}</span></div>
                                        <button onClick={()=>setTocando(setlist[setlist.findIndex(s=>s.id===tocando.id)+1])}
                                            style={{ marginLeft:"auto", padding:"4px 10px", background:cor, color:"#fff", border:"none", borderRadius:6, fontSize:11, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                                            Próxima
                                        </button>
                                    </div>
                                )}
                              </div>
                        }
                    </div>
                </div>
            )}

            {!eventoSel && (
                <div style={{ ...card, textAlign:"center", padding:"48px 20px", color:"#CCC" }}>
                    <Icon name="qr-code" size={48} color="#EEE" />
                    <div style={{ marginTop:12, fontSize:15, fontWeight:600, color:"#CCC" }}>Selecione um evento acima</div>
                    <div style={{ fontSize:13, marginTop:4 }}>Para gerenciar o setlist e playbacks da apresentação</div>
                </div>
            )}
        </div>
    );
}





// ── FREQUÊNCIA POR EVENTOS (usado no Relatório) ───────────────────────────────
function FrequenciaEventos({ eventos, frequencias, config }) {
    const cor = config.corPrimaria||COR;
    const card = { background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"16px 20px", marginBottom:12, boxShadow:"0 1px 4px rgba(0,0,0,0.04)" };

    // Agrupar frequências por eventoId
    const porEvento = {};
    frequencias.forEach(f=>{
        if (!f.eventoId) return;
        if (!porEvento[f.eventoId]) porEvento[f.eventoId] = [];
        porEvento[f.eventoId].push(f);
    });

    const eventosComFreq = eventos.filter(e=>porEvento[e.id]?.length>0);
    if (eventosComFreq.length===0) return null;

    return (
        <div style={card}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
                <Icon name="clipboard-check" size={16} color={cor} />
                <div style={{ fontSize:14, fontWeight:700, color:"#1A1D23" }}>Frequência por Evento</div>
            </div>
            {eventosComFreq.map(e=>{
                const lista = porEvento[e.id]||[];
                return (
                    <div key={e.id} style={{ marginBottom:16, paddingBottom:16, borderBottom:"1px solid #F5F0F0" }}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                            <div>
                                <div style={{ fontSize:13, fontWeight:700, color:"#1A1D23" }}>{e.title}</div>
                                <div style={{ fontSize:12, color:"#AAA" }}>{e.date ? new Date(e.date+"T12:00:00").toLocaleDateString("pt-BR") : ""}</div>
                            </div>
                            <span style={{ fontSize:13, fontWeight:700, color:cor }}>{lista.length} presente{lista.length!==1?"s":""}</span>
                        </div>
                        <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                            {lista.map(f=>(
                                <span key={f.id} style={{ fontSize:12, padding:"3px 10px", borderRadius:20, background:"#F0EAEA", color:cor, fontWeight:600 }}>
                                    {f.membroNome}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

// ── FREQUÊNCIA DE ACESSO ──────────────────────────────────────────────────────
function FrequenciaAcesso({ config }) {
    const [acessos, setAcessos] = useState([]);
    const cor = config.corPrimaria||COR;

    useEffect(()=>{
        db.collection("acessos").onSnapshot(snap=>{
            setAcessos(snap.docs.map(d=>({id:d.id,...d.data()})));
        });
    },[]);

    const hoje = new Date();
    const trintaDiasAtras = new Date(hoje);
    trintaDiasAtras.setDate(trintaDiasAtras.getDate()-30);
    const trintaStr = trintaDiasAtras.toISOString().split("T")[0];

    // Agrupar por corista
    const porCorista = {};
    acessos.forEach(a=>{
        if (!a.nome) return;
        if (!porCorista[a.nome]) porCorista[a.nome]={ total:0, ultimos30:0, ultimoAcesso:null };
        porCorista[a.nome].total++;
        if (a.data && a.data >= trintaStr) porCorista[a.nome].ultimos30++;
        const ts = a.dataHora?.seconds;
        if (ts && (!porCorista[a.nome].ultimoAcesso || ts > porCorista[a.nome].ultimoAcesso)) {
            porCorista[a.nome].ultimoAcesso = ts;
        }
    });

    const lista = Object.entries(porCorista).sort((a,b)=>b[1].total-a[1].total);
    const maxTotal = Math.max(...lista.map(([,v])=>v.total), 1);

    const card = { background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"16px 20px", marginBottom:12, boxShadow:"0 1px 4px rgba(0,0,0,0.04)" };

    return (
        <div style={card}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                <Icon name="smartphone" size={16} color="#2E7D32" />
                <div style={{ fontSize:14, fontWeight:700, color:"#1A1D23" }}>Frequência de Acesso ao App</div>
            </div>
            <div style={{ fontSize:12, color:"#AAA", marginBottom:16 }}>Quantas vezes cada corista entrou no aplicativo (total e últimos 30 dias)</div>

            {lista.length === 0
                ? <div style={{ fontSize:13, color:"#CCC", textAlign:"center", padding:"16px 0" }}>Nenhum acesso registrado ainda.</div>
                : <>
                    {/* Gráfico de barras horizontal */}
                    <div style={{ marginBottom:16 }}>
                        {lista.slice(0,10).map(([nome, dados])=>(
                            <div key={nome} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                                <div style={{ fontSize:12, color:"#555", minWidth:100, textAlign:"right", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{nome.split(" ")[0]}</div>
                                <div style={{ flex:1, display:"flex", flexDirection:"column", gap:3 }}>
                                    <div style={{ height:8, background:"#F0F0F0", borderRadius:4, overflow:"hidden" }}>
                                        <div style={{ width:`${(dados.total/maxTotal)*100}%`, height:"100%", background:"#2E7D32", borderRadius:4 }} />
                                    </div>
                                    <div style={{ height:8, background:"#F0F0F0", borderRadius:4, overflow:"hidden" }}>
                                        <div style={{ width:`${(dados.ultimos30/maxTotal)*100}%`, height:"100%", background:"#B41020", borderRadius:4 }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div style={{ display:"flex", gap:16, marginTop:8, justifyContent:"center" }}>
                            <div style={{ display:"flex", alignItems:"center", gap:5, fontSize:11, color:"#555" }}><div style={{ width:12, height:12, background:"#2E7D32", borderRadius:2 }} /> Total</div>
                            <div style={{ display:"flex", alignItems:"center", gap:5, fontSize:11, color:"#555" }}><div style={{ width:12, height:12, background:"#B41020", borderRadius:2 }} /> Últimos 30 dias</div>
                        </div>
                    </div>

                    {/* Tabela */}
                    <div style={{ border:"1px solid #EEE", borderRadius:8, overflow:"hidden" }}>
                        <div style={{ display:"grid", gridTemplateColumns:"40px 1fr 80px 80px 1fr", padding:"8px 12px", background:"#FAFAFA", borderBottom:"1px solid #EEE" }}>
                            {["#","Corista","Total","Últ. 30 dias","Último acesso"].map(h=>(
                                <div key={h} style={{ fontSize:11, fontWeight:700, color:cor }}>{h}</div>
                            ))}
                        </div>
                        {lista.map(([nome, dados], i)=>(
                            <div key={nome} style={{ display:"grid", gridTemplateColumns:"40px 1fr 80px 80px 1fr", padding:"10px 12px", borderBottom: i<lista.length-1?"1px solid #F5F5F5":"none", alignItems:"center" }}>
                                <div style={{ fontSize:12, color:"#AAA" }}>{i+1}</div>
                                <div style={{ fontSize:13, fontWeight:600, color:"#1A1D23" }}>{nome}</div>
                                <div><span style={{ display:"inline-block", padding:"2px 8px", borderRadius:20, background:"#E8F5E9", color:"#2E7D32", fontSize:12, fontWeight:700 }}>{dados.total}</span></div>
                                <div><span style={{ display:"inline-block", padding:"2px 8px", borderRadius:20, background:"#FEE2E2", color:"#B41020", fontSize:12, fontWeight:700 }}>{dados.ultimos30}</span></div>
                                <div style={{ fontSize:12, color:"#888" }}>
                                    {dados.ultimoAcesso ? new Date(dados.ultimoAcesso*1000).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}) : "—"}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ fontSize:12, color:"#AAA", marginTop:8 }}>↗ {lista.length} corista{lista.length!==1?"s":""} com acesso registrado</div>
                </>
            }
        </div>
    );
}

// ── RELATÓRIOS ────────────────────────────────────────────────────────────────
function Relatorios({ config }) {
    const { data:events }      = useCollection("events","date");
    const { data:members }     = useCollection("members");
    const { data:songs }       = useCollection("songs");
    const { data:frequencias } = useCollection("frequencias","dataHora");
    const cor = config.corPrimaria||COR;

    const [dataInicio, setDataInicio] = useState(new Date().getFullYear()+"-01-01");
    const [dataFim, setDataFim]       = useState(todayStr());
    const [eventoFiltro, setEventoFiltro] = useState("todos");
    const [textos, setTextos]         = useState({});
    const [editTextos, setEditTextos] = useState(false);
    const [formTextos, setFormTextos] = useState({});
    const [salvandoTextos, setSalvandoTextos] = useState(false);

    // Carregar textos qualitativos do Firebase
    useEffect(()=>{
        db.collection("config").doc("relatorio").get().then(doc=>{
            if (doc.exists) { setTextos(doc.data()); setFormTextos(doc.data()); }
        });
    },[]);

    async function salvarTextos() {
        setSalvandoTextos(true);
        await db.collection("config").doc("relatorio").set(formTextos, {merge:true});
        setTextos(formTextos);
        setSalvandoTextos(false);
        setEditTextos(false);
    }

    // Filtrar eventos por período
    const eventosPeriodo = events.filter(e => e.date >= dataInicio && e.date <= dataFim);
    const eventosFiltrados = eventoFiltro==="todos" ? eventosPeriodo : eventosPeriodo.filter(e=>e.id===eventoFiltro);

    const ativos = members.filter(m=>m.active);
    const apresentacoes = eventosFiltrados.filter(e=>e.tipo==="Apresentação");

    // Contagem por tipo
    const porTipo = {};
    eventosFiltrados.forEach(e=>{ porTipo[e.tipo||"Outro"]=(porTipo[e.tipo||"Outro"]||0)+1; });

    // Contagem por status
    const porStatus = {};
    eventosFiltrados.forEach(e=>{ porStatus[e.status||"—"]=(porStatus[e.status||"—"]||0)+1; });

    const statusColors = { Confirmado:"#2E7D32", Planejada:"#1565C0", Cancelado:"#B41020", Reagendado:"#E65100", Suspenso:"#7B1FA2" };

    const sigLucia  = textos.sigLucia  || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/lucia-sig.png";
    const sigMaestro= textos.sigMaestro|| "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/paulo-sig.png";

    function gerarPDF() {
        const nomeApp   = config.nomeApp   || "Flamboyant Coral";
        const logoUrl   = config.logoUrl   || LOGO_URL;
        const cidade    = textos.cidade    || "Goiânia – GO";
        const maestro   = textos.maestro   || "Maestro";
        const produtora = textos.produtora || "Lucia Kratz";
        const hoje = new Date().toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric"});
        const periodoFmt = `${new Date(dataInicio+"T12:00:00").toLocaleDateString("pt-BR")} a ${new Date(dataFim+"T12:00:00").toLocaleDateString("pt-BR")}`;

        const linhasAtiv = eventosFiltrados.map((e,i)=>`
            <tr>
                <td>${i+1}</td>
                <td>${e.date ? new Date(e.date+"T12:00:00").toLocaleDateString("pt-BR") : ""}</td>
                <td>${e.title||""}</td>
                <td>${e.tipo||""}</td>
                <td>${e.status||""}</td>
                <td>${e.local||""}</td>
            </tr>`).join("");

        const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">
<style>
  body { font-family: Arial, sans-serif; font-size: 12px; color: #222; margin:0; padding:0; }
  @media print { @page { margin: 1.5cm; } }
  .header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid ${cor}; padding-bottom:12px; margin-bottom:20px; }
  .logo { width:50px; height:50px; object-fit:contain; }
  .titulo { text-align:center; margin:20px 0 6px; font-size:16px; font-weight:bold; color:${cor}; text-transform:uppercase; letter-spacing:2px; }
  .periodo { text-align:center; font-size:11px; color:#666; margin-bottom:20px; }
  .cards { display:flex; gap:12px; margin-bottom:20px; }
  .card { flex:1; border:1px solid #EEE; border-radius:6px; padding:12px; text-align:center; }
  .card-num { font-size:24px; font-weight:bold; color:${cor}; }
  .card-lbl { font-size:10px; color:#888; text-transform:uppercase; letter-spacing:1px; }
  .secao { font-size:11px; font-weight:bold; color:${cor}; text-transform:uppercase; letter-spacing:2px; margin:20px 0 10px; border-bottom:1px solid #EEE; padding-bottom:4px; }
  .bloco { border-left:3px solid ${cor}; padding:8px 12px; margin-bottom:10px; background:#FAFAFA; border-radius:0 4px 4px 0; }
  .bloco-titulo { font-size:11px; font-weight:bold; color:${cor}; margin-bottom:4px; }
  table { width:100%; border-collapse:collapse; margin-top:8px; }
  th { background:${cor}; color:#fff; padding:6px 8px; text-align:left; font-size:10px; text-transform:uppercase; }
  td { padding:6px 8px; border-bottom:1px solid #EEE; font-size:11px; }
  .assinaturas { display:flex; justify-content:space-around; margin-top:40px; text-align:center; }
  .assin { display:flex; flex-direction:column; align-items:center; gap:4px; }
  .assin img { height:50px; object-fit:contain; }
  .assin-nome { font-weight:bold; font-size:12px; }
  .assin-cargo { font-size:10px; color:#888; }
  .rodape { text-align:center; font-size:10px; color:#AAA; margin-top:30px; border-top:1px solid #EEE; padding-top:8px; }
  .tipo-linha { display:flex; justify-content:space-between; padding:4px 0; border-bottom:1px solid #F0F0F0; }
</style></head><body>
<div class="header">
  <img src="${logoUrl}" class="logo" />
  <div style="text-align:right; font-size:11px; color:#666">
    <strong>${nomeApp}</strong><br>${cidade}<br>${maestro ? "Maestro: "+maestro : ""}
  </div>
</div>
<div class="titulo">Relatório de Atividades</div>
<div class="periodo">Período: ${periodoFmt}</div>
<div class="cards">
  <div class="card"><div class="card-num">${eventosFiltrados.length}</div><div class="card-lbl">Total atividades</div></div>
  <div class="card"><div class="card-num">${ativos.length}</div><div class="card-lbl">Integrantes ativos</div></div>
  <div class="card"><div class="card-num">${apresentacoes.length}</div><div class="card-lbl">Apresentações</div></div>
</div>
<div class="secao">Distribuição por tipo</div>
${Object.entries(porTipo).map(([k,v])=>`<div class="tipo-linha"><span>${k}</span><span style="font-weight:bold;color:${cor}">${v}</span></div>`).join("")}
${textos.sobreProjeto||textos.curriculoMaestro||textos.equipe ? `
<div class="secao">Informações do Projeto</div>
${textos.sobreProjeto?`<div class="bloco"><div class="bloco-titulo">Sobre o Projeto</div><p>${textos.sobreProjeto}</p></div>`:""}
${textos.curriculoMaestro?`<div class="bloco"><div class="bloco-titulo">Currículo do Maestro</div><p>${textos.curriculoMaestro}</p></div>`:""}
${textos.equipe?`<div class="bloco"><div class="bloco-titulo">Equipe de Produção</div><p>${textos.equipe}</p></div>`:""}
`:""}
<div class="secao">Detalhamento das Atividades</div>
<table><thead><tr><th>#</th><th>Data</th><th>Título</th><th>Tipo</th><th>Status</th><th>Local</th></tr></thead>
<tbody>${linhasAtiv||"<tr><td colspan='6' style='text-align:center;color:#AAA'>Nenhuma atividade no período</td></tr>"}</tbody></table>
<div class="assinaturas">
  <div class="assin">
    ${sigMaestro?`<img src="${sigMaestro}" />`:"<div style='height:50px'></div>"}
    <div style="border-top:1px solid #333;padding-top:4px;min-width:160px">
      <div class="assin-nome">${maestro}</div>
      <div class="assin-cargo">Maestro – ${nomeApp}</div>
    </div>
  </div>
  <div class="assin">
    ${sigLucia?`<img src="${sigLucia}" />`:"<div style='height:50px'></div>"}
    <div style="border-top:1px solid #333;padding-top:4px;min-width:160px">
      <div class="assin-nome">${produtora}</div>
      <div class="assin-cargo">Produtora – ${nomeApp}</div>
    </div>
  </div>
</div>
<div class="rodape">Relatório gerado em ${hoje} pelo sistema de gestão do ${nomeApp}.</div>
</body></html>`;

        const win = window.open("","_blank");
        win.document.write(html);
        win.document.close();
        setTimeout(()=>win.print(), 800);
    }

    const card  = { background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"16px 20px", marginBottom:12, boxShadow:"0 1px 4px rgba(0,0,0,0.04)" };
    const inp   = { padding:"10px 14px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:13, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#FAFAFA" };
    const lbl   = { display:"block", fontSize:11, fontWeight:700, color:"#888", marginBottom:5, textTransform:"uppercase", letterSpacing:0.8 };
    const ta    = { width:"100%", padding:"10px 14px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:13, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#FAFAFA", resize:"vertical", minHeight:80 };

    return (
        <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:cor, marginBottom:4 }}>Relatórios</div>
            <div style={{ fontSize:13, color:"#AAA", marginBottom:20 }}>Relatório de atividades e gestão do coral</div>

            {/* Período */}
            <div style={card}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
                    <Icon name="calendar" size={16} color={cor} />
                    <div style={{ fontSize:14, fontWeight:700, color:"#1A1D23" }}>Período do relatório</div>
                </div>
                <div style={{ display:"flex", gap:16, flexWrap:"wrap", alignItems:"flex-end" }}>
                    <div><label style={lbl}>Data início</label><input type="date" style={inp} value={dataInicio} onChange={e=>setDataInicio(e.target.value)} /></div>
                    <div><label style={lbl}>Data fim</label><input type="date" style={inp} value={dataFim} onChange={e=>setDataFim(e.target.value)} /></div>
                    <div style={{ flex:1, minWidth:200 }}>
                        <label style={lbl}>Filtrar por evento</label>
                        <select style={{ ...inp, width:"100%" }} value={eventoFiltro} onChange={e=>setEventoFiltro(e.target.value)}>
                            <option value="todos">Todos os eventos</option>
                            {eventosPeriodo.map(e=><option key={e.id} value={e.id}>{e.date} — {e.title}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            {/* Métricas */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10, marginBottom:12 }}>
                {[
                    { label:"Total atividades", value:eventosFiltrados.length, icon:"calendar", color:cor },
                    { label:"Integrantes ativos", value:ativos.length, icon:"users", color:"#2E7D32" },
                    { label:"Apresentações", value:apresentacoes.length, icon:"mic", color:cor },
                ].map(m=>(
                    <div key={m.label} style={{ ...card, marginBottom:0, textAlign:"center", padding:"16px" }}>
                        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6, marginBottom:6 }}>
                            <Icon name={m.icon} size={16} color={m.color} />
                        </div>
                        <div style={{ fontSize:28, fontWeight:700, color:m.color, lineHeight:1 }}>{m.value}</div>
                        <div style={{ fontSize:12, color:"#AAA", marginTop:4 }}>{m.label}</div>
                    </div>
                ))}
            </div>

            {/* Gráficos simples */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:12 }}>
                <div style={card}>
                    <div style={{ fontSize:13, fontWeight:700, color:"#1A1D23", marginBottom:14 }}>Atividades por tipo</div>
                    {Object.entries(porTipo).length === 0
                        ? <div style={{ fontSize:13, color:"#CCC", textAlign:"center", padding:"16px 0" }}>Sem atividades no período</div>
                        : Object.entries(porTipo).map(([tipo, qtd])=>{
                            const max = Math.max(...Object.values(porTipo));
                            return (
                                <div key={tipo} style={{ marginBottom:10 }}>
                                    <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                                        <span style={{ fontSize:12, color:"#555" }}>{tipo}</span>
                                        <span style={{ fontSize:12, fontWeight:700, color:cor }}>{qtd}</span>
                                    </div>
                                    <div style={{ height:8, background:"#F0EAEA", borderRadius:4, overflow:"hidden" }}>
                                        <div style={{ width:`${(qtd/max)*100}%`, height:"100%", background:cor, borderRadius:4 }} />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div style={card}>
                    <div style={{ fontSize:13, fontWeight:700, color:"#1A1D23", marginBottom:14 }}>Distribuição por status</div>
                    {Object.entries(porStatus).length === 0
                        ? <div style={{ fontSize:13, color:"#CCC", textAlign:"center", padding:"16px 0" }}>Sem atividades no período</div>
                        : Object.entries(porStatus).map(([status, qtd])=>(
                            <div key={status} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"6px 0", borderBottom:"1px solid #F5F0F0" }}>
                                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                                    <div style={{ width:10, height:10, borderRadius:"50%", background:statusColors[status]||"#888" }} />
                                    <span style={{ fontSize:13, color:"#555" }}>{status}</span>
                                </div>
                                <span style={{ fontSize:13, fontWeight:700, color:statusColors[status]||"#888" }}>{qtd}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Texto qualitativo */}
            <div style={card}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                        <Icon name="pencil" size={15} color={cor} />
                        <div style={{ fontSize:14, fontWeight:700, color:"#1A1D23" }}>Texto Qualitativo do Relatório</div>
                    </div>
                    <button onClick={()=>{ setEditTextos(v=>!v); setFormTextos({...textos}); }}
                        style={{ padding:"6px 14px", background:"#fff", border:"1px solid #EEE", borderRadius:8, fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"inherit", color:"#666" }}>
                        {editTextos ? "Cancelar" : "Editar textos"}
                    </button>
                </div>

                {!editTextos ? (
                    <>
                        {textos.sobreProjeto && <div style={{ marginBottom:14 }}><div style={{ fontSize:11, fontWeight:700, color:cor, textTransform:"uppercase", letterSpacing:1, marginBottom:6 }}>Sobre o Projeto</div><div style={{ fontSize:13, color:"#555", lineHeight:1.6 }}>{textos.sobreProjeto}</div></div>}
                        {textos.curriculoMaestro && <div style={{ marginBottom:14 }}><div style={{ fontSize:11, fontWeight:700, color:cor, textTransform:"uppercase", letterSpacing:1, marginBottom:6 }}>Currículo do Maestro</div><div style={{ fontSize:13, color:"#555", lineHeight:1.6 }}>{textos.curriculoMaestro}</div></div>}
                        {textos.equipe && <div style={{ marginBottom:14 }}><div style={{ fontSize:11, fontWeight:700, color:cor, textTransform:"uppercase", letterSpacing:1, marginBottom:6 }}>Equipe de Produção</div><div style={{ fontSize:13, color:"#555", lineHeight:1.6 }}>{textos.equipe}</div></div>}
                        {!textos.sobreProjeto && !textos.curriculoMaestro && !textos.equipe && <div style={{ fontSize:13, color:"#CCC", textAlign:"center", padding:"16px 0" }}>Clique em "Editar textos" para preencher.</div>}
                    </>
                ) : (
                    <>
                        <div style={{ marginBottom:14 }}><label style={lbl}>Sobre o Projeto</label><textarea style={ta} value={formTextos.sobreProjeto||""} onChange={e=>setFormTextos(f=>({...f,sobreProjeto:e.target.value}))} /></div>
                        <div style={{ marginBottom:14 }}><label style={lbl}>Currículo do Maestro</label><textarea style={ta} value={formTextos.curriculoMaestro||""} onChange={e=>setFormTextos(f=>({...f,curriculoMaestro:e.target.value}))} /></div>
                        <div style={{ marginBottom:14 }}><label style={lbl}>Equipe de Produção</label><textarea style={ta} value={formTextos.equipe||""} onChange={e=>setFormTextos(f=>({...f,equipe:e.target.value}))} /></div>
                        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:14 }}>
                            <div><label style={lbl}>Nome do Maestro</label><input style={{ ...inp, width:"100%" }} value={formTextos.maestro||""} onChange={e=>setFormTextos(f=>({...f,maestro:e.target.value}))} placeholder="Ex: Paulo Sergio Motta" /></div>
                            <div><label style={lbl}>Nome da Produtora</label><input style={{ ...inp, width:"100%" }} value={formTextos.produtora||""} onChange={e=>setFormTextos(f=>({...f,produtora:e.target.value}))} placeholder="Ex: Lucia Kratz" /></div>
                        </div>
                        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:14 }}>
                            <div><label style={lbl}>Cidade</label><input style={{ ...inp, width:"100%" }} value={formTextos.cidade||""} onChange={e=>setFormTextos(f=>({...f,cidade:e.target.value}))} placeholder="Ex: Goiânia – GO" /></div>
                        </div>
                        <div style={{ marginBottom:14 }}>
                            <label style={lbl}>URL assinatura — Lucia Kratz</label>
                            <input style={{ ...inp, width:"100%" }} value={formTextos.sigLucia||""} onChange={e=>setFormTextos(f=>({...f,sigLucia:e.target.value}))} placeholder="https://raw.githubusercontent.com/.../lucia-sig.png" />
                            {(formTextos.sigLucia||sigLucia) && <img src={formTextos.sigLucia||sigLucia} alt="Assinatura Lucia" style={{ maxHeight:40, marginTop:8, objectFit:"contain" }} onError={e=>e.target.style.display="none"} />}
                        </div>
                        <div style={{ marginBottom:20 }}>
                            <label style={lbl}>URL assinatura — Maestro</label>
                            <input style={{ ...inp, width:"100%" }} value={formTextos.sigMaestro||""} onChange={e=>setFormTextos(f=>({...f,sigMaestro:e.target.value}))} placeholder="https://raw.githubusercontent.com/.../paulo-sig.png" />
                            {(formTextos.sigMaestro||sigMaestro) && <img src={formTextos.sigMaestro||sigMaestro} alt="Assinatura Maestro" style={{ maxHeight:40, marginTop:8, objectFit:"contain" }} onError={e=>e.target.style.display="none"} />}
                        </div>
                        <button onClick={salvarTextos} disabled={salvandoTextos} style={{ padding:"11px 24px", background:cor, color:"#fff", border:"none", borderRadius:10, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", opacity:salvandoTextos?0.7:1 }}>
                            {salvandoTextos?"Salvando...":"Salvar textos"}
                        </button>
                    </>
                )}
            </div>

            {/* Frequência por evento */}
            {eventosFiltrados.length > 0 && <FrequenciaEventos eventos={eventosFiltrados} frequencias={frequencias} config={config} />}

            {/* Frequência de acesso */}
            <FrequenciaAcesso config={config} />

            {/* Lista de atividades */}
            <div style={card}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
                    <div style={{ fontSize:14, fontWeight:700, color:"#1A1D23" }}>
                        Atividades no período <span style={{ fontSize:13, color:"#AAA", fontWeight:400 }}>({eventosFiltrados.length})</span>
                    </div>
                    <button onClick={gerarPDF}
                        style={{ display:"flex", alignItems:"center", gap:8, padding:"9px 18px", background:cor, color:"#fff", border:"none", borderRadius:10, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                        <Icon name="printer" size={14} color="#fff" /> Gerar PDF
                    </button>
                </div>
                {eventosFiltrados.length === 0
                    ? <div style={{ fontSize:13, color:"#CCC", textAlign:"center", padding:"16px 0" }}>Nenhuma atividade no período selecionado.</div>
                    : eventosFiltrados.sort((a,b)=>a.date>b.date?1:-1).map((e,i)=>(
                        <div key={e.id} style={{ display:"flex", alignItems:"center", gap:12, padding:"10px 0", borderBottom:"1px solid #F5F0F0" }}>
                            <span style={{ fontSize:12, color:"#AAA", minWidth:20 }}>{i+1}</span>
                            <span style={{ fontSize:12, color:"#888", minWidth:80 }}>{e.date ? new Date(e.date+"T12:00:00").toLocaleDateString("pt-BR") : ""}</span>
                            <div style={{ flex:1 }}>
                                <div style={{ fontSize:13, fontWeight:600, color:"#1A1D23" }}>{e.title}</div>
                                {e.local && <div style={{ fontSize:11, color:"#AAA" }}>{e.local}</div>}
                            </div>
                            <span style={{ fontSize:11, padding:"2px 8px", borderRadius:10, background:"#F0EAEA", color:cor, fontWeight:600 }}>{e.tipo}</span>
                            <span style={{ fontSize:11, padding:"2px 8px", borderRadius:10, background:(statusColors[e.status]||"#888")+"18", color:statusColors[e.status]||"#888", fontWeight:600 }}>{e.status}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}



// ── FREQUÊNCIA VIA QR ─────────────────────────────────────────────────────────
function CheckinPublico({ sessaoId, config }) {
    const [sessao, setSessao]     = useState(null);
    const [membro, setMembro]     = useState(null);
    const [members, setMembers]   = useState([]);
    const [busca, setBusca]       = useState("");
    const [sugestoes, setSugestoes] = useState([]);
    const [status, setStatus]     = useState(null); // null | 'ok' | 'erro' | 'expirado'
    const [loading, setLoading]   = useState(true);
    const cor = config.corPrimaria||COR;

    useEffect(()=>{
        // Carregar sessão
        db.collection("sessoes_checkin").doc(sessaoId).get().then(doc=>{
            if (!doc.exists) { setStatus("erro"); setLoading(false); return; }
            const d = { id:doc.id, ...doc.data() };
            // Verificar validade 24h
            if (d.expiraEm && d.expiraEm.seconds < Date.now()/1000) {
                setStatus("expirado"); setLoading(false); return;
            }
            setSessao(d);
            setLoading(false);
        });
        // Carregar membros
        db.collection("members").onSnapshot(snap=>{
            setMembers(snap.docs.map(d=>({id:d.id,...d.data()})));
        });
    },[sessaoId]);

    useEffect(()=>{
        if (busca.length < 3) { setSugestoes([]); return; }
        const t = busca.toLowerCase();
        setSugestoes(members.filter(m=>m.active&&m.name.toLowerCase().includes(t)).slice(0,6));
    },[busca,members]);

    async function confirmarPresenca(m) {
        // Verificar se já fez check-in
        const snap = await db.collection("frequencias").where("sessaoId","==",sessaoId).where("membroId","==",m.id).get();
        if (!snap.empty) { setMembro(m); setStatus("jaRegistrado"); return; }
        await db.collection("frequencias").add({
            sessaoId,
            eventoId:  sessao.eventoId,
            eventoTitulo: sessao.eventoTitulo,
            eventoData: sessao.eventoData,
            membroId:  m.id,
            membroNome: m.name,
            naipe: m.voice||"",
            dataHora: firebase.firestore.FieldValue.serverTimestamp(),
            data: todayStr()
        });
        setMembro(m);
        setStatus("ok");
    }

    if (loading) return <div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"100vh", background:config.corFundo||COR_FUNDO }}>
        <div style={{ width:32, height:32, border:`3px solid ${cor}`, borderTopColor:"transparent", borderRadius:"50%", animation:"spin 0.8s linear infinite" }} />
    </div>;

    const wrap = { minHeight:"100vh", background:config.corFundo||COR_FUNDO, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"32px 20px" };

    if (status==="expirado") return <div style={wrap}>
        <div style={{ textAlign:"center" }}>
            <div style={{ fontSize:48, marginBottom:16 }}>⏰</div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:700, color:"#1A1D23" }}>QR Code expirado</div>
            <div style={{ fontSize:14, color:"#AAA", marginTop:8 }}>Este link de check-in não é mais válido.</div>
        </div>
    </div>;

    if (status==="erro") return <div style={wrap}>
        <div style={{ textAlign:"center" }}>
            <div style={{ fontSize:48, marginBottom:16 }}>❌</div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:700, color:"#1A1D23" }}>Sessão não encontrada</div>
        </div>
    </div>;

    if (status==="ok") return <div style={wrap}>
        <div style={{ textAlign:"center", background:"#fff", borderRadius:20, padding:"32px 24px", maxWidth:360, width:"100%", boxShadow:"0 4px 24px rgba(0,0,0,0.08)" }}>
            <div style={{ width:72, height:72, background:"#E8F5E9", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px" }}>
                <Icon name="check" size={36} color="#2E7D32" />
            </div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:700, color:"#1A1D23", marginBottom:8 }}>Presença confirmada!</div>
            <div style={{ fontSize:15, color:"#2E7D32", fontWeight:600, marginBottom:4 }}>{membro?.name}</div>
            <div style={{ fontSize:13, color:"#AAA", marginBottom:16 }}>{sessao?.eventoTitulo} · {sessao?.eventoData}</div>
            <div style={{ fontSize:12, color:"#CCC" }}>{config.nomeApp||"Coral Flamboyant"}</div>
        </div>
    </div>;

    if (status==="jaRegistrado") return <div style={wrap}>
        <div style={{ textAlign:"center", background:"#fff", borderRadius:20, padding:"32px 24px", maxWidth:360, width:"100%", boxShadow:"0 4px 24px rgba(0,0,0,0.08)" }}>
            <div style={{ fontSize:48, marginBottom:16 }}>✅</div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:"#1A1D23" }}>Já registrado!</div>
            <div style={{ fontSize:14, color:"#AAA", marginTop:8 }}>{membro?.name}, sua presença já foi confirmada neste evento.</div>
        </div>
    </div>;

    return (
        <div style={wrap}>
            <div style={{ textAlign:"center", marginBottom:24 }}>
                <div style={{ width:64, height:64, background:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 12px", boxShadow:"0 2px 12px rgba(0,0,0,0.1)" }}>
                    <img src={config.logoUrl||LOGO_URL} alt="" style={{ width:44, height:44, objectFit:"contain" }} onError={e=>e.target.style.display="none"} />
                </div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:cor }}>{config.nomeApp||"Coral Flamboyant"}</div>
                <div style={{ fontSize:13, color:"#AAA", marginTop:4 }}>Check-in de presença</div>
            </div>
            <div style={{ background:"#fff", borderRadius:16, padding:"24px 20px", width:"100%", maxWidth:400, boxShadow:"0 4px 24px rgba(0,0,0,0.07)" }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:16, fontWeight:700, color:"#1A1D23", marginBottom:4 }}>{sessao?.eventoTitulo}</div>
                <div style={{ fontSize:13, color:"#AAA", marginBottom:20 }}>{sessao?.eventoData}</div>
                <input value={busca} onChange={e=>{setBusca(e.target.value);}} autoFocus
                    placeholder="Digite seu nome (mín. 3 letras)"
                    style={{ width:"100%", padding:"12px 14px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:14, outline:"none", fontFamily:"inherit", color:"#1A1D23", marginBottom:8 }} />
                {sugestoes.length>0 && <div style={{ border:"1px solid #EEE", borderRadius:10, overflow:"hidden", marginBottom:8 }}>
                    {sugestoes.map(m=>(
                        <button key={m.id} onClick={()=>confirmarPresenca(m)}
                            style={{ display:"block", width:"100%", padding:"12px 14px", background:"none", border:"none", textAlign:"left", cursor:"pointer", fontSize:14, borderBottom:"1px solid #F5F5F5", fontFamily:"inherit", color:"#1A1D23" }}>
                            {m.name} <span style={{ fontSize:12, color:"#AAA", marginLeft:8 }}>{m.voice}</span>
                        </button>
                    ))}
                </div>}
                {busca.length>0&&busca.length<3 && <div style={{ fontSize:12, color:"#AAA" }}>Digite mais {3-busca.length} letra(s)...</div>}
                {busca.length>=3&&sugestoes.length===0 && <div style={{ fontSize:12, color:cor }}>Nenhum corista encontrado.</div>}
            </div>
        </div>
    );
}

function Frequencia({ config }) {
    const { data:events } = useCollection("events","date");
    const [eventoSel, setEventoSel]   = useState("");
    const [sessaoAtiva, setSessaoAtiva] = useState(null);
    const [frequencias, setFrequencias] = useState([]);
    const [qrUrl, setQrUrl]           = useState("");
    const [gerando, setGerando]       = useState(false);
    const [showQR, setShowQR]         = useState(false);
    const cor = config.corPrimaria||COR;
    const today = todayStr();

    // Carregar sessão ativa do evento selecionado
    useEffect(()=>{
        if (!eventoSel) { setSessaoAtiva(null); setQrUrl(""); setShowQR(false); return; }
        const unsub = db.collection("sessoes_checkin")
            .where("eventoId","==",eventoSel)
            .onSnapshot(snap=>{
                const ativas = snap.docs.map(d=>({id:d.id,...d.data()}))
                    .filter(s=>s.expiraEm?.seconds > Date.now()/1000);
                setSessaoAtiva(ativas[0]||null);
                if (ativas[0]) {
                    const url = `${window.location.origin}${window.location.pathname}?checkin=${ativas[0].id}`;
                    setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`);
                    setShowQR(true);
                }
            });
        return unsub;
    },[eventoSel]);

    // Carregar frequências do evento selecionado
    useEffect(()=>{
        if (!eventoSel) { setFrequencias([]); return; }
        const unsub = db.collection("frequencias")
            .where("eventoId","==",eventoSel)
            .onSnapshot(snap=>setFrequencias(snap.docs.map(d=>({id:d.id,...d.data()}))));
        return unsub;
    },[eventoSel]);

    async function gerarQR() {
        if (!eventoSel) return;
        const evento = events.find(e=>e.id===eventoSel);
        if (!evento) return;
        setGerando(true);
        const expiraEm = new Date(Date.now() + 24*60*60*1000); // 24 horas
        const ref = await db.collection("sessoes_checkin").add({
            eventoId: eventoSel,
            eventoTitulo: evento.title,
            eventoData: evento.date,
            criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
            expiraEm: firebase.firestore.Timestamp.fromDate(expiraEm)
        });
        const url = `${window.location.origin}${window.location.pathname}?checkin=${ref.id}`;
        setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`);
        setShowQR(true);
        setGerando(false);
    }

    async function encerrarSessao() {
        if (!sessaoAtiva) return;
        if (!window.confirm("Encerrar sessão de check-in?")) return;
        await db.collection("sessoes_checkin").doc(sessaoAtiva.id).update({
            expiraEm: firebase.firestore.Timestamp.fromDate(new Date(0))
        });
        setSessaoAtiva(null); setShowQR(false); setQrUrl("");
    }

    const proximos = events.filter(e=>e.date>=today).sort((a,b)=>a.date>b.date?1:-1);
    const passados  = events.filter(e=>e.date<today).sort((a,b)=>a.date>b.date?-1:1).slice(0,20);
    const eventoAtual = events.find(e=>e.id===eventoSel);
    const totalMembros = frequencias.length;

    const card = { background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"20px", marginBottom:12, boxShadow:"0 1px 4px rgba(0,0,0,0.04)" };
    const inp  = { padding:"10px 14px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:13, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#FAFAFA" };

    return (
        <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:6 }}>
                <Icon name="qr-code" size={24} color={cor} />
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:cor }}>Frequência via QR</div>
            </div>
            <div style={{ fontSize:13, color:"#AAA", marginBottom:20 }}>Controle de presença em ensaios e eventos</div>

            {/* Seleção de evento + gerar QR */}
            <div style={card}>
                <div style={{ fontSize:14, fontWeight:700, color:"#1A1D23", marginBottom:14 }}>Nova Sessão de Check-in</div>
                <div style={{ display:"flex", gap:12, flexWrap:"wrap", alignItems:"flex-end", marginBottom:16 }}>
                    <div style={{ flex:1, minWidth:200 }}>
                        <label style={{ display:"block", fontSize:11, fontWeight:700, color:"#888", marginBottom:5, textTransform:"uppercase", letterSpacing:0.8 }}>Evento</label>
                        <select style={{ ...inp, width:"100%" }} value={eventoSel} onChange={e=>setEventoSel(e.target.value)}>
                            <option value="">Selecionar evento...</option>
                            {proximos.length>0 && <optgroup label="PRÓXIMOS">
                                {proximos.map(e=><option key={e.id} value={e.id}>{e.date} — {e.title}</option>)}
                            </optgroup>}
                            {passados.length>0 && <optgroup label="PASSADOS">
                                {passados.map(e=><option key={e.id} value={e.id}>{e.date} — {e.title}</option>)}
                            </optgroup>}
                        </select>
                    </div>
                    {eventoSel && !sessaoAtiva && (
                        <button onClick={gerarQR} disabled={gerando}
                            style={{ display:"flex", alignItems:"center", gap:8, padding:"11px 20px", background:cor, color:"#fff", border:"none", borderRadius:10, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit", opacity:gerando?0.7:1 }}>
                            <Icon name="qr-code" size={14} color="#fff" /> {gerando?"Gerando...":"Gerar QR Code"}
                        </button>
                    )}
                    {sessaoAtiva && (
                        <button onClick={encerrarSessao}
                            style={{ padding:"11px 16px", background:"#FFF0F0", color:"#B41020", border:"1px solid #F5DADA", borderRadius:10, fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>
                            Encerrar sessão
                        </button>
                    )}
                </div>

                {/* QR Code */}
                {showQR && qrUrl && eventoAtual && (
                    <div style={{ display:"flex", gap:20, alignItems:"flex-start", flexWrap:"wrap", padding:"16px", background:"#F9F5F5", borderRadius:10 }}>
                        <div style={{ textAlign:"center" }}>
                            <img src={qrUrl} alt="QR Code" style={{ width:160, height:160, borderRadius:8 }} />
                            <div style={{ fontSize:11, color:"#AAA", marginTop:6 }}>
                                {sessaoAtiva ? `Válido até ${new Date(sessaoAtiva.expiraEm.seconds*1000).toLocaleString("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}` : "Válido por 24h"}
                            </div>
                        </div>
                        <div style={{ flex:1 }}>
                            <div style={{ fontSize:15, fontWeight:700, color:"#1A1D23", marginBottom:4 }}>{eventoAtual.title}</div>
                            <div style={{ fontSize:13, color:"#AAA", marginBottom:12 }}>{eventoAtual.date}</div>
                            <div style={{ fontSize:12, color:"#555", marginBottom:8 }}>📲 Coristas escaneiam o QR ou acessam o link:</div>
                            <div style={{ display:"flex", gap:8 }}>
                                <input readOnly value={sessaoAtiva ? `${window.location.origin}${window.location.pathname}?checkin=${sessaoAtiva.id}` : ""}
                                    style={{ ...inp, flex:1, fontSize:11 }} />
                                <button onClick={()=>navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}?checkin=${sessaoAtiva?.id||""}`).then(()=>alert("Link copiado!"))}
                                    style={{ padding:"8px 12px", background:cor, color:"#fff", border:"none", borderRadius:8, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                                    Copiar
                                </button>
                            </div>
                            <div style={{ marginTop:12, display:"flex", alignItems:"center", gap:8 }}>
                                <div style={{ width:8, height:8, borderRadius:"50%", background:"#2E7D32", animation:"pulse 1.5s infinite" }} />
                                <span style={{ fontSize:13, color:"#2E7D32", fontWeight:600 }}>{totalMembros} presença{totalMembros!==1?"s":""} registrada{totalMembros!==1?"s":""}</span>
                            </div>
                        </div>
                    </div>
                )}

                {eventoSel && !showQR && (
                    <div style={{ textAlign:"center", padding:"32px 20px", color:"#CCC" }}>
                        <Icon name="qr-code" size={48} color="#EEE" />
                        <div style={{ marginTop:12, fontSize:14 }}>Clique em "Gerar QR Code" para iniciar o check-in</div>
                    </div>
                )}
                {!eventoSel && (
                    <div style={{ textAlign:"center", padding:"32px 20px", color:"#CCC" }}>
                        <Icon name="qr-code" size={48} color="#EEE" />
                        <div style={{ marginTop:12, fontSize:15, fontWeight:600 }}>Selecione um evento acima</div>
                        <div style={{ fontSize:13, marginTop:4 }}>Para gerenciar sessões QR de check-in de presença</div>
                    </div>
                )}
            </div>

            {/* Lista de presenças */}
            {eventoSel && (
                <div style={card}>
                    <div style={{ fontSize:14, fontWeight:700, color:"#1A1D23", marginBottom:14 }}>
                        Presenças registradas <span style={{ fontSize:13, color:"#AAA", fontWeight:400 }}>({frequencias.length})</span>
                    </div>
                    {frequencias.length === 0
                        ? <div style={{ fontSize:13, color:"#CCC", textAlign:"center", padding:"16px 0" }}>Nenhuma presença registrada ainda.</div>
                        : <div style={{ border:"1px solid #EEE", borderRadius:8, overflow:"hidden" }}>
                            <div style={{ display:"grid", gridTemplateColumns:"40px 1fr 100px 1fr", padding:"8px 12px", background:"#FAFAFA", borderBottom:"1px solid #EEE" }}>
                                {["#","Nome","Naipe","Horário"].map(h=>(
                                    <div key={h} style={{ fontSize:11, fontWeight:700, color:cor }}>{h}</div>
                                ))}
                            </div>
                            {frequencias.sort((a,b)=>(a.dataHora?.seconds||0)-(b.dataHora?.seconds||0)).map((f,i)=>(
                                <div key={f.id} style={{ display:"grid", gridTemplateColumns:"40px 1fr 100px 1fr", padding:"10px 12px", borderBottom:i<frequencias.length-1?"1px solid #F5F5F5":"none", alignItems:"center" }}>
                                    <div style={{ fontSize:12, color:"#AAA" }}>{i+1}</div>
                                    <div style={{ fontSize:13, fontWeight:600, color:"#1A1D23" }}>{f.membroNome}</div>
                                    <div style={{ fontSize:12, color:"#888" }}>{f.naipe||"—"}</div>
                                    <div style={{ fontSize:12, color:"#AAA" }}>
                                        {f.dataHora?.seconds ? new Date(f.dataHora.seconds*1000).toLocaleString("pt-BR",{hour:"2-digit",minute:"2-digit"}) : "—"}
                                    </div>
                                </div>
                            ))}
                          </div>
                    }
                </div>
            )}
        </div>
    );
}



// ── DECLARAÇÃO DIGITAL ────────────────────────────────────────────────────────
function Declaracao({ config }) {
    const { data:events }      = useCollection("events","date");
    const { data:members }     = useCollection("members");
    const { data:frequencias } = useCollection("frequencias","dataHora");
    const [tipo, setTipo]          = useState("evento"); // 'evento' | 'corista'
    const [eventoSel, setEventoSel] = useState("");
    const [coristaId, setCoristaId] = useState("");
    const [dataInicio, setDataInicio] = useState(new Date().getFullYear()+"-01-01");
    const [dataFim, setDataFim]       = useState(todayStr());
    const [textos, setTextos]         = useState({});
    const cor = config.corPrimaria||COR;

    useEffect(()=>{
        db.collection("config").doc("relatorio").get().then(doc=>{
            if (doc.exists) setTextos(doc.data());
        });
    },[]);

    const today = todayStr();
    const proximos = events.filter(e=>e.date>=today).sort((a,b)=>a.date>b.date?1:-1);
    const passados  = events.filter(e=>e.date<today).sort((a,b)=>a.date>b.date?-1:1);

    // Frequências do evento selecionado
    const freqEvento = frequencias.filter(f=>f.eventoId===eventoSel);

    // Eventos que o corista participou no período
    const freqCorista = frequencias.filter(f=>
        f.membroId===coristaId &&
        f.eventoData >= dataInicio &&
        f.eventoData <= dataFim
    ).sort((a,b)=>a.eventoData>b.eventoData?1:-1);

    const eventoAtual  = events.find(e=>e.id===eventoSel);
    const coristaAtual = members.find(m=>m.id===coristaId);

    function gerarPDFEvento() {
        if (!eventoAtual || freqEvento.length===0) return;
        const nomeApp   = config.nomeApp   || "Flamboyant Coral";
        const logoUrl   = config.logoUrl   || LOGO_URL;
        const maestro   = textos.maestro   || "Maestro";
        const produtora = textos.produtora || "Lucia Kratz";
        const cidade    = textos.cidade    || "Goiânia – GO";
        const sigLucia  = textos.sigLucia  || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/lucia-sig.png";
        const sigMaestro= textos.sigMaestro|| "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/paulo-sig.png";
        const hoje = new Date().toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric"});
        const dataEvento = eventoAtual.date ? new Date(eventoAtual.date+"T12:00:00").toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric"}) : "";

        const linhas = freqEvento.map((f,i)=>`
            <tr>
                <td style="text-align:center">${i+1}</td>
                <td>${f.membroNome}</td>
                <td>${f.naipe||"—"}</td>
                <td style="text-align:center">${f.dataHora?.seconds ? new Date(f.dataHora.seconds*1000).toLocaleString("pt-BR",{hour:"2-digit",minute:"2-digit"}) : "—"}</td>
            </tr>`).join("");

        const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">
<style>
  body { font-family: Arial, sans-serif; font-size: 12px; color: #222; margin:0; padding:0; }
  @media print { @page { margin: 2cm; } }
  .header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid ${cor}; padding-bottom:14px; margin-bottom:24px; }
  .logo { width:50px; height:50px; object-fit:contain; }
  .titulo { text-align:center; font-size:16px; font-weight:bold; color:${cor}; text-transform:uppercase; letter-spacing:2px; margin-bottom:6px; }
  .subtitulo { text-align:center; font-size:13px; color:#444; margin-bottom:24px; }
  .info-box { border:1px solid #EEE; border-radius:6px; padding:12px 16px; margin-bottom:20px; background:#FAFAFA; }
  .info-row { display:flex; gap:8px; margin-bottom:4px; }
  .info-label { font-weight:bold; color:${cor}; min-width:80px; font-size:11px; text-transform:uppercase; }
  .info-valor { font-size:12px; color:#333; }
  table { width:100%; border-collapse:collapse; margin-bottom:24px; }
  th { background:${cor}; color:#fff; padding:8px 10px; text-align:left; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; }
  td { padding:8px 10px; border-bottom:1px solid #EEE; font-size:12px; }
  tr:nth-child(even) td { background:#FAFAFA; }
  .assinaturas { display:flex; justify-content:space-around; margin-top:48px; text-align:center; }
  .assin img { height:50px; object-fit:contain; display:block; margin:0 auto 6px; }
  .assin-linha { border-top:1px solid #333; padding-top:6px; min-width:180px; }
  .assin-nome { font-weight:bold; font-size:12px; }
  .assin-cargo { font-size:10px; color:#888; }
  .rodape { text-align:center; font-size:10px; color:#AAA; margin-top:32px; border-top:1px solid #EEE; padding-top:8px; }
</style></head><body>
<div class="header">
  <img src="${logoUrl}" class="logo" />
  <div style="text-align:right;font-size:11px;color:#666"><strong>${nomeApp}</strong><br>${cidade}</div>
</div>
<div class="titulo">Lista de Presença</div>
<div class="subtitulo">${eventoAtual.title}</div>
<div class="info-box">
  <div class="info-row"><span class="info-label">Evento:</span><span class="info-valor">${eventoAtual.title}</span></div>
  <div class="info-row"><span class="info-label">Data:</span><span class="info-valor">${dataEvento}</span></div>
  ${eventoAtual.local?`<div class="info-row"><span class="info-label">Local:</span><span class="info-valor">${eventoAtual.local}</span></div>`:""}
  <div class="info-row"><span class="info-label">Presenças:</span><span class="info-valor">${freqEvento.length} participante${freqEvento.length!==1?"s":""}</span></div>
</div>
<table>
  <thead><tr><th style="width:40px;text-align:center">#</th><th>Nome</th><th>Naipe</th><th style="text-align:center">Check-in</th></tr></thead>
  <tbody>${linhas}</tbody>
</table>
<div class="assinaturas">
  <div class="assin">
    ${sigMaestro?`<img src="${sigMaestro}" />`:"<div style='height:50px'></div>"}
    <div class="assin-linha"><div class="assin-nome">${maestro}</div><div class="assin-cargo">Maestro – ${nomeApp}</div></div>
  </div>
  <div class="assin">
    ${sigLucia?`<img src="${sigLucia}" />`:"<div style='height:50px'></div>"}
    <div class="assin-linha"><div class="assin-nome">${produtora}</div><div class="assin-cargo">Produtora – ${nomeApp}</div></div>
  </div>
</div>
<div class="rodape">Documento gerado em ${hoje} pelo sistema de gestão do ${nomeApp}.</div>
</body></html>`;

        const win = window.open("","_blank");
        win.document.write(html);
        win.document.close();
        setTimeout(()=>win.print(), 800);
    }

    function gerarPDFCorista() {
        if (!coristaAtual || freqCorista.length===0) return;
        const nomeApp   = config.nomeApp   || "Flamboyant Coral";
        const logoUrl   = config.logoUrl   || LOGO_URL;
        const maestro   = textos.maestro   || "Maestro";
        const produtora = textos.produtora || "Lucia Kratz";
        const cidade    = textos.cidade    || "Goiânia – GO";
        const sigLucia  = textos.sigLucia  || "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/lucia-sig.png";
        const sigMaestro= textos.sigMaestro|| "https://raw.githubusercontent.com/luciakratz-arch/coral-flamboyant/main/paulo-sig.png";
        const hoje = new Date().toLocaleDateString("pt-BR",{day:"numeric",month:"long",year:"numeric"});
        const periodoFmt = `${new Date(dataInicio+"T12:00:00").toLocaleDateString("pt-BR")} a ${new Date(dataFim+"T12:00:00").toLocaleDateString("pt-BR")}`;

        const linhas = freqCorista.map((f,i)=>`
            <tr>
                <td style="text-align:center">${i+1}</td>
                <td>${f.eventoData ? new Date(f.eventoData+"T12:00:00").toLocaleDateString("pt-BR") : ""}</td>
                <td>${f.eventoTitulo||"—"}</td>
            </tr>`).join("");

        const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">
<style>
  body { font-family: Arial, sans-serif; font-size: 12px; color: #222; margin:0; padding:0; }
  @media print { @page { margin: 2cm; } }
  .header { display:flex; justify-content:space-between; align-items:flex-start; border-bottom:2px solid ${cor}; padding-bottom:14px; margin-bottom:24px; }
  .logo { width:50px; height:50px; object-fit:contain; }
  .titulo { text-align:center; font-size:16px; font-weight:bold; color:${cor}; text-transform:uppercase; letter-spacing:2px; margin-bottom:6px; }
  .subtitulo { text-align:center; font-size:13px; color:#444; margin-bottom:8px; }
  .info-box { border:1px solid #EEE; border-radius:6px; padding:12px 16px; margin-bottom:20px; background:#FAFAFA; }
  .info-row { display:flex; gap:8px; margin-bottom:4px; }
  .info-label { font-weight:bold; color:${cor}; min-width:80px; font-size:11px; text-transform:uppercase; }
  .info-valor { font-size:12px; color:#333; }
  .declaracao { border-left:3px solid ${cor}; padding:10px 14px; margin:20px 0; background:#FAFAFA; font-size:13px; line-height:1.7; color:#333; }
  table { width:100%; border-collapse:collapse; margin-bottom:24px; }
  th { background:${cor}; color:#fff; padding:8px 10px; text-align:left; font-size:11px; text-transform:uppercase; }
  td { padding:8px 10px; border-bottom:1px solid #EEE; font-size:12px; }
  tr:nth-child(even) td { background:#FAFAFA; }
  .assinaturas { display:flex; justify-content:space-around; margin-top:48px; text-align:center; }
  .assin img { height:50px; object-fit:contain; display:block; margin:0 auto 6px; }
  .assin-linha { border-top:1px solid #333; padding-top:6px; min-width:180px; }
  .assin-nome { font-weight:bold; font-size:12px; }
  .assin-cargo { font-size:10px; color:#888; }
  .rodape { text-align:center; font-size:10px; color:#AAA; margin-top:32px; border-top:1px solid #EEE; padding-top:8px; }
</style></head><body>
<div class="header">
  <img src="${logoUrl}" class="logo" />
  <div style="text-align:right;font-size:11px;color:#666"><strong>${nomeApp}</strong><br>${cidade}</div>
</div>
<div class="titulo">Declaração de Participação</div>
<div class="subtitulo">${nomeApp}</div>
<div class="info-box">
  <div class="info-row"><span class="info-label">Corista:</span><span class="info-valor"><strong>${coristaAtual.name}</strong></span></div>
  <div class="info-row"><span class="info-label">Naipe:</span><span class="info-valor">${coristaAtual.voice||"—"}</span></div>
  <div class="info-row"><span class="info-label">Período:</span><span class="info-valor">${periodoFmt}</span></div>
  <div class="info-row"><span class="info-label">Participações:</span><span class="info-valor">${freqCorista.length} evento${freqCorista.length!==1?"s":""}</span></div>
</div>
<div class="declaracao">
  Declaramos para os devidos fins que <strong>${coristaAtual.name}</strong> é integrante do ${nomeApp},
  participando ativamente das atividades do grupo no período de ${periodoFmt},
  com registro de presença em ${freqCorista.length} evento${freqCorista.length!==1?"s":""} conforme detalhado abaixo.
</div>
<table>
  <thead><tr><th style="width:40px;text-align:center">#</th><th>Data</th><th>Evento</th></tr></thead>
  <tbody>${linhas}</tbody>
</table>
<div class="assinaturas">
  <div class="assin">
    ${sigMaestro?`<img src="${sigMaestro}" />`:"<div style='height:50px'></div>"}
    <div class="assin-linha"><div class="assin-nome">${maestro}</div><div class="assin-cargo">Maestro – ${nomeApp}</div></div>
  </div>
  <div class="assin">
    ${sigLucia?`<img src="${sigLucia}" />`:"<div style='height:50px'></div>"}
    <div class="assin-linha"><div class="assin-nome">${produtora}</div><div class="assin-cargo">Produtora – ${nomeApp}</div></div>
  </div>
</div>
<div class="rodape">Documento gerado em ${hoje} pelo sistema de gestão do ${nomeApp}.</div>
</body></html>`;

        const win = window.open("","_blank");
        win.document.write(html);
        win.document.close();
        setTimeout(()=>win.print(), 800);
    }

    const card = { background:"#fff", borderRadius:12, border:"1px solid #EEE8E8", padding:"20px", marginBottom:12, boxShadow:"0 1px 4px rgba(0,0,0,0.04)" };
    const inp  = { padding:"10px 14px", border:"1px solid #E8E0E0", borderRadius:10, fontSize:13, outline:"none", fontFamily:"inherit", color:"#1A1D23", background:"#FAFAFA" };
    const lbl  = { display:"block", fontSize:11, fontWeight:700, color:"#888", marginBottom:5, textTransform:"uppercase", letterSpacing:0.8 };

    return (
        <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:cor, marginBottom:4 }}>Declaração Digital</div>
            <div style={{ fontSize:13, color:"#AAA", marginBottom:20 }}>Emissão de listas de presença e declarações individuais</div>

            {/* Tipo */}
            <div style={{ display:"flex", gap:10, marginBottom:16 }}>
                {[
                    { key:"evento",  label:"Lista de presença por evento",  icon:"clipboard-list" },
                    { key:"corista", label:"Declaração individual do corista", icon:"user-check" },
                ].map(t=>(
                    <button key={t.key} onClick={()=>setTipo(t.key)}
                        style={{ flex:1, display:"flex", alignItems:"center", gap:8, padding:"12px 16px", borderRadius:10, border:`2px solid ${tipo===t.key?cor:"#EEE"}`, background:tipo===t.key?cor+"10":"#fff", cursor:"pointer", fontFamily:"inherit", fontWeight:tipo===t.key?700:500, color:tipo===t.key?cor:"#555", fontSize:13 }}>
                        <Icon name={t.icon} size={16} color={tipo===t.key?cor:"#AAA"} />
                        {t.label}
                    </button>
                ))}
            </div>

            {/* Lista de presença por evento */}
            {tipo==="evento" && (
                <div style={card}>
                    <div style={{ fontSize:14, fontWeight:700, color:"#1A1D23", marginBottom:14 }}>Lista de Presença por Evento</div>
                    <div style={{ marginBottom:16 }}>
                        <label style={lbl}>Evento</label>
                        <select style={{ ...inp, width:"100%" }} value={eventoSel} onChange={e=>setEventoSel(e.target.value)}>
                            <option value="">Selecionar evento...</option>
                            {proximos.length>0 && <optgroup label="PRÓXIMOS">
                                {proximos.map(e=><option key={e.id} value={e.id}>{e.date} — {e.title}</option>)}
                            </optgroup>}
                            {passados.length>0 && <optgroup label="PASSADOS">
                                {passados.map(e=><option key={e.id} value={e.id}>{e.date} — {e.title}</option>)}
                            </optgroup>}
                        </select>
                    </div>

                    {eventoSel && (
                        <>
                            {freqEvento.length===0
                                ? <div style={{ fontSize:13, color:"#CCC", textAlign:"center", padding:"16px 0" }}>Nenhuma presença registrada neste evento.</div>
                                : <>
                                    <div style={{ marginBottom:12 }}>
                                        {freqEvento.map((f,i)=>(
                                            <div key={f.id} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom:"1px solid #F5F0F0" }}>
                                                <span style={{ fontSize:12, color:"#AAA", minWidth:20 }}>{i+1}</span>
                                                <span style={{ fontSize:13, fontWeight:600, color:"#1A1D23", flex:1 }}>{f.membroNome}</span>
                                                <span style={{ fontSize:12, color:"#888" }}>{f.naipe||"—"}</span>
                                                <span style={{ fontSize:12, color:"#AAA" }}>{f.dataHora?.seconds ? new Date(f.dataHora.seconds*1000).toLocaleString("pt-BR",{hour:"2-digit",minute:"2-digit"}) : "—"}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={gerarPDFEvento}
                                        style={{ display:"flex", alignItems:"center", gap:8, padding:"11px 20px", background:cor, color:"#fff", border:"none", borderRadius:10, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                                        <Icon name="printer" size={14} color="#fff" /> Gerar PDF — Lista de Presença
                                    </button>
                                </>
                            }
                        </>
                    )}
                </div>
            )}

            {/* Declaração individual */}
            {tipo==="corista" && (
                <div style={card}>
                    <div style={{ fontSize:14, fontWeight:700, color:"#1A1D23", marginBottom:14 }}>Declaração Individual do Corista</div>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12, marginBottom:16 }}>
                        <div>
                            <label style={lbl}>Corista</label>
                            <select style={{ ...inp, width:"100%" }} value={coristaId} onChange={e=>setCoristaId(e.target.value)}>
                                <option value="">Selecionar corista...</option>
                                {members.filter(m=>m.active).sort((a,b)=>a.name>b.name?1:-1).map(m=>(
                                    <option key={m.id} value={m.id}>{m.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label style={lbl}>Data início</label>
                            <input type="date" style={{ ...inp, width:"100%" }} value={dataInicio} onChange={e=>setDataInicio(e.target.value)} />
                        </div>
                        <div>
                            <label style={lbl}>Data fim</label>
                            <input type="date" style={{ ...inp, width:"100%" }} value={dataFim} onChange={e=>setDataFim(e.target.value)} />
                        </div>
                    </div>

                    {coristaId && (
                        <>
                            {freqCorista.length===0
                                ? <div style={{ fontSize:13, color:"#CCC", textAlign:"center", padding:"16px 0" }}>Nenhuma participação registrada no período.</div>
                                : <>
                                    <div style={{ marginBottom:12 }}>
                                        {freqCorista.map((f,i)=>(
                                            <div key={f.id} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom:"1px solid #F5F0F0" }}>
                                                <span style={{ fontSize:12, color:"#AAA", minWidth:20 }}>{i+1}</span>
                                                <span style={{ fontSize:12, color:"#888", minWidth:90 }}>{f.eventoData ? new Date(f.eventoData+"T12:00:00").toLocaleDateString("pt-BR") : ""}</span>
                                                <span style={{ fontSize:13, fontWeight:600, color:"#1A1D23", flex:1 }}>{f.eventoTitulo}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button onClick={gerarPDFCorista}
                                        style={{ display:"flex", alignItems:"center", gap:8, padding:"11px 20px", background:cor, color:"#fff", border:"none", borderRadius:10, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>
                                        <Icon name="printer" size={14} color="#fff" /> Gerar PDF — Declaração Individual
                                    </button>
                                </>
                            }
                        </>
                    )}
                </div>
            )}
        </div>
    );
}


// ── PLACEHOLDER ───────────────────────────────────────────────────────────────
function EmBreve({ label, icon }) {
    return <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:80, gap:12 }}>
        <Icon name={icon} size={40} color="#DDD" />
        <div style={{ fontSize:18, fontWeight:600, color:"#CCC" }}>{label}</div>
        <div style={{ fontSize:13, color:"#DDD" }}>Em construção</div>
    </div>;
}

// ── NAV ───────────────────────────────────────────────────────────────────────
const NAV_ADMIN = [
    { key:"painel",       label:"Painel",            icon:"layout-dashboard" },
    { key:"integrantes",  label:"Integrantes",        icon:"users" },
    { key:"musicas",      label:"Músicas",            icon:"music" },
    { key:"estudos",      label:"Sala de Estudos",    icon:"graduation-cap" },
    { key:"agenda",       label:"Agenda",             icon:"calendar" },
    { key:"avisos",       label:"Avisos",             icon:"megaphone" },
    { key:"frequencia",   label:"Frequência",         icon:"bar-chart-2" },
    { key:"apresentacao", label:"Apresentação",       icon:"mic" },
    { key:"declaracao",   label:"Declaração Digital", icon:"file-text" },
    { key:"relatorios",   label:"Relatórios",         icon:"chart-bar" },
    { key:"config",       label:"Configurações",      icon:"settings" },
];
const NAV_CORISTA = [
    { key:"agenda",  label:"Agenda",   icon:"calendar" },
    { key:"musicas", label:"Músicas",  icon:"music" },
    { key:"estudos", label:"Estudos",  icon:"graduation-cap" },
    { key:"avisos",  label:"Avisos",   icon:"megaphone" },
];

// ── APP ───────────────────────────────────────────────────────────────────────
function App() {
    const [user, setUser]       = useState(()=>{ try{return JSON.parse(localStorage.getItem("cf_user"));}catch{return null;} });
    const [members, setMembers] = useState([]);
    const [tab, setTab]         = useState("painel");
    const { config, save }      = useConfig();

    useEffect(()=>{
        const unsub = db.collection("members").onSnapshot(snap=>setMembers(snap.docs.map(d=>({id:d.id,...d.data()}))));
        return unsub;
    },[]);

    function handleLogin(u) {
        localStorage.setItem("cf_user", JSON.stringify(u));
        setUser(u);
        setTab(u.isAdmin ? "painel" : "agenda");
        // Registrar acesso do corista
        if (u.role === "corista" && u.name) {
            const agora = new Date();
            db.collection("acessos").add({
                nome: u.name,
                dataHora: firebase.firestore.FieldValue.serverTimestamp(),
                data: agora.toISOString().split("T")[0]
            });
        }
    }
    function handleLogout()  { localStorage.removeItem("cf_user"); setUser(null); }

    const params = new URLSearchParams(window.location.search);
    const isCadastro = params.get("cadastro") === "1";
    const mesaId     = params.get("mesa");
    const checkinId  = params.get("checkin");
    if (isCadastro) return <CadastroPublico config={config} />;
    if (mesaId)     return <MesaSom eventoId={mesaId} config={config} />;
    if (checkinId)  return <CheckinPublico sessaoId={checkinId} config={config} />;
    if (!user) return <Login members={members} onLogin={handleLogin} config={config} />;

    const isAdmin  = user.isAdmin;
    const cor      = config.corPrimaria||COR;
    const fundo    = config.corFundo||COR_FUNDO;
    const navItems = isAdmin ? NAV_ADMIN : NAV_CORISTA;

    const pages = {
        painel:       <Painel user={user} config={config} />,
        integrantes:  <Integrantes config={config} />,
        musicas:      <Repertorio config={config} isAdmin={isAdmin} />,
        estudos:      <SalaEstudos config={config} isAdmin={isAdmin} />,
        agenda:       <Agenda config={config} isAdmin={isAdmin} />,
        avisos:       <Avisos config={config} isAdmin={isAdmin} />,
        frequencia:   <Frequencia config={config} />,
        apresentacao: <Apresentacao config={config} />,
        declaracao:   <Declaracao config={config} />,
        relatorios:   <Relatorios config={config} />,
        config:       <Configuracoes config={config} save={save} />,
    };

    const mobileNav = isAdmin
        ? [NAV_ADMIN[0], NAV_ADMIN[1], NAV_ADMIN[4], NAV_ADMIN[5], NAV_ADMIN[10]]
        : NAV_CORISTA;

    return (
        <div style={{ display:"flex", minHeight:"100vh", background:fundo }}>
            <aside style={{ width:260, background:"#fff", borderRight:"1px solid #EEE0E0", display:"flex", flexDirection:"column", position:"fixed", top:0, left:0, height:"100vh", zIndex:200, boxShadow:"2px 0 12px rgba(0,0,0,0.04)" }} className="sidebar-desktop">
                <div style={{ padding:"20px 20px 16px", borderBottom:"1px solid #F5EAEA" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                        <div style={{ width:40, height:40, background:fundo, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center" }}>
                            <img src={config.logoUrl||LOGO_URL} alt="" style={{ width:28, height:28, objectFit:"contain" }} onError={e=>e.target.style.display="none"} />
                        </div>
                        <div>
                            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:15, fontWeight:700, color:cor, lineHeight:1.2 }}>{config.nomeApp||"Flamboyant Coral"}</div>
                            <div style={{ fontSize:11, color:"#AAA" }}>{config.subtitulo||"Portal de Gestão"}</div>
                        </div>
                    </div>
                </div>
                <nav style={{ flex:1, padding:"12px 10px", overflowY:"auto" }}>
                    {navItems.map(item=>(
                        <button key={item.key} onClick={()=>setTab(item.key)}
                            style={{ display:"flex", alignItems:"center", gap:12, width:"100%", padding:"10px 12px", borderRadius:10, border:"none", background:tab===item.key?cor:"none", color:tab===item.key?"#fff":"#444", cursor:"pointer", fontFamily:"inherit", fontSize:14, fontWeight:tab===item.key?700:500, marginBottom:2, textAlign:"left", transition:"background 0.15s" }}>
                            <Icon name={item.icon} size={16} color={tab===item.key?"#fff":"#888"} />
                            {item.label}
                        </button>
                    ))}
                </nav>
                <div style={{ padding:"12px 16px", borderTop:"1px solid #F5EAEA" }}>
                    <div style={{ fontSize:13, color:"#AAA", marginBottom:2 }}>{isAdmin?"Administrador":"Corista"}</div>
                    <div style={{ fontSize:14, fontWeight:600, color:"#1A1D23", marginBottom:10 }}>{user.name}</div>
                    <button onClick={handleLogout} style={{ width:"100%", padding:"9px", background:fundo, color:cor, border:`1px solid ${cor}33`, borderRadius:8, fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>Sair</button>
                </div>
            </aside>

            <main style={{ flex:1, paddingBottom:72, minHeight:"100vh" }} className="main-content">
                <div style={{ background:cor, padding:"12px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", position:"sticky", top:0, zIndex:100 }} className="header-mobile">
                    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                        <div style={{ width:32, height:32, background:"rgba(255,255,255,0.15)", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
                            <img src={config.logoUrl||LOGO_URL} alt="" style={{ width:22, height:22, objectFit:"contain" }} onError={e=>e.target.style.display="none"} />
                        </div>
                        <div style={{ fontFamily:"'Playfair Display',serif", color:"#fff", fontSize:15, fontWeight:700 }}>{config.nomeApp||"Flamboyant Coral"}</div>
                    </div>
                    <button onClick={handleLogout} style={{ background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.3)", color:"#fff", borderRadius:6, padding:"5px 12px", fontSize:10, cursor:"pointer", fontFamily:"inherit", textTransform:"uppercase", letterSpacing:0.8 }}>Sair</button>
                </div>
                <div style={{ padding:"24px 20px", maxWidth:900 }}>
                    {pages[tab]||<EmBreve label={tab} icon="layout-dashboard" />}
                </div>
            </main>

            <nav style={{ position:"fixed", bottom:0, left:0, right:0, background:"#fff", borderTop:"1px solid #EEE0E0", display:"flex", zIndex:150 }} className="nav-mobile">
                {mobileNav.map(item=>(
                    <button key={item.key} onClick={()=>setTab(item.key)}
                        style={{ flex:1, padding:"9px 0 7px", border:"none", background:"none", cursor:"pointer", fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:0.4, display:"flex", flexDirection:"column", alignItems:"center", gap:3, fontFamily:"inherit", color:tab===item.key?cor:"#CCC", borderTop:`2px solid ${tab===item.key?cor:"transparent"}`, transition:"color 0.15s" }}>
                        <Icon name={item.icon} size={18} color={tab===item.key?cor:"#CCC"} />
                        {item.label}
                    </button>
                ))}
            </nav>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
