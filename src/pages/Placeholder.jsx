export default function Placeholder({ title }) {
  return (
    <section style={{
      minHeight: 'calc(100vh - 68px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 40,
      textAlign: 'center',
      color: 'rgb(109, 67, 0)',
    }}>
      <i className="fa-solid fa-screwdriver-wrench" style={{ fontSize: '4rem', marginBottom: 20 }}></i>
      <h1 style={{ fontSize: '2rem', marginBottom: 10 }}>{title}</h1>
      <p style={{ fontSize: '1rem', color: '#666' }}>
        Trang này đang được xây dựng. Vui lòng quay lại sau! 🚧
      </p>
    </section>
  )
}