import './header.scss'

export default function Header({ title, children }) {
  return (
    <header className="page-header">
      <h1>{title}</h1>
      {children}
    </header>
  )
}
