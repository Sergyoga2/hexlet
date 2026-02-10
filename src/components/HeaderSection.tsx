import { Container, Group, Text, Button, Anchor } from '@mantine/core'

const navLinks = [
  { label: 'Возможности', href: '#features' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
]

export function HeaderSection() {
  return (
    <div style={{ borderBottom: '1px solid var(--mantine-color-gray-2)', padding: '16px 0' }}>
      <Container size="lg">
        <Group justify="space-between" align="center">
          <Text fw={700} size="xl">
            Company
          </Text>
          <Group gap="lg" visibleFrom="sm">
            {navLinks.map((link) => (
              <Anchor key={link.label} href={link.href} c="dark" size="sm" underline="never">
                {link.label}
              </Anchor>
            ))}
          </Group>
          <Button variant="filled">Войти</Button>
        </Group>
      </Container>
    </div>
  )
}
