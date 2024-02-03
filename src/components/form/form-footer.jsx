import classNames from 'classnames'

export default function FormFooter({ className, children }) {
  return (
    <footer className={classNames('form-footer', className)}>{children}</footer>
  )
}
