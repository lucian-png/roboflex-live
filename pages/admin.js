export default function AdminPage() {
 const [password, setPassword] = useState('');
 const [submissions, setSubmissions] = useState([]);
 const [error, setError] = useState('');
 const [loading, setLoading] = useState(false);
 const [authed, setAuthed] = useState(false);

 const handleLogin = async (e) => {
 e.preventDefault();
 setLoading(true);
 setError('');

 const res = await fetch('/api/admin-get-submissions', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ password })
 });

 const data = await res.json();
 setLoading(false);

 if (res.ok) {
 setSubmissions(data.submissions);
 setAuthed(true);
 } else {
 setError(data.error || 'Login failed');
 }
 };

 return (
 <div style={{ padding: '2rem', color: 'white', background: 'black', minHeight: '100vh' }}>
 {!authed ? (
 <form onSubmit={handleLogin} style={{ maxWidth:400, margin: 'auto' }}>
 <h2>Admin Login</h2>
 <input type="password"
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 placeholder="Enter admin password"
 style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
 />
 <button type="submit" style={{ width: '100%', padding: '0.75rem', fontWeight: 'bold' }}>
 {loading ? 'Loading...' : 'Login'}
 </button>
 {error && <p style={{ color: 'red' }}>{error}</p>}
 </form>
 ) : (
 <div>
 <h2>Applications</h2>
 <table style={{ width: '100%', borderCollapse: 'collapse' }}>
 <thead>
 <tr>
 <th style={th}>Name</th>
 <th style={th}>Email</th>
 <th style={th}>Message</th>
 <th style={th}>Submitted At</th>
 </tr>
 </thead>
 <tbody>
 {submissions.map((row) => (
 <tr key={row.id}>
 <td style={td}>{row.name}</td>
 <td style={td}>{row.email}</td>
 <td style={td}>{row.message || ''}</td>
 <td style={td}>{new Date(row.submitted_at).toLocaleString()}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 )}
 </div>
 );
}

const th = {
 borderBottom: '1px solid #555',
 padding: '8px',
 textAlign: 'left',
 background: '#111',
};

const td = {
 borderBottom: '1px solid #333',
 padding: '8px',
};