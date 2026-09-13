import logoImage from '../assets/logo-text.png'

type LogoProps = {
  variant?: 'header' | 'footer'
}

function Logo({ variant = 'header' }: LogoProps) {
  return (
    <a href="#" className="flex shrink-0 items-center">
      <img
        src={logoImage}
        alt="Dev Stack"
        className={variant === 'footer' ? 'h-7 w-auto' : 'h-7 w-auto sm:h-9'}
      />
    </a>
  )
}

export default Logo
