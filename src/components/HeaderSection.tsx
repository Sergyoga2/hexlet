import { Container, Group, Button, Anchor } from '@mantine/core'

const navLinks = [
  { label: 'Все курсы', href: '#features' },
  { label: 'О Хекслете', href: '#about' },
  { label: 'Подписка', href: '#pricing' },
]

function HexletLogo() {
  return (
    <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      <svg width="134" height="32" viewBox="0 0 134 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 2L2 6v12l6.5 4 6.5-4V6L8.5 2Z" fill="#3B37E0" />
        <path d="M8.5 8L5 10v4l3.5 2 3.5-2v-4L8.5 8Z" fill="#fff" />
        <text x="22" y="18" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="700" fill="#333">
          Hexlet
        </text>
      </svg>
    </a>
  )
}

export function HeaderSection() {
  return (
    <div style={{ padding: '12px 0' }}>
      <Container size="lg">
        <Group justify="space-between" align="center">
          <HexletLogo />
          <Group gap="xl" visibleFrom="sm">
            {navLinks.map((link) => (
              <Anchor
                key={link.label}
                href={link.href}
                c="dark"
                size="sm"
                underline="never"
                fw={500}
              >
                {link.label}
              </Anchor>
            ))}
          </Group>
          <Group gap="sm">
            <Button variant="subtle" color="dark" size="sm">
              Войти
            </Button>
            <Button variant="filled" color="indigo" size="sm" radius={0}>
              Регистрация
            </Button>
          </Group>
        </Group>
      </Container>
    </div>
  )
}
