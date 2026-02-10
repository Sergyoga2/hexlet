import { Container, Group, Text, Anchor, Divider } from '@mantine/core'

const links = [
  { label: 'О нас', href: '#' },
  { label: 'Блог', href: '#' },
  { label: 'Документация', href: '#' },
  { label: 'Контакты', href: '#' },
  { label: 'Политика конфиденциальности', href: '#' },
]

export function FooterSection() {
  return (
    <div style={{ padding: '40px 0' }}>
      <Container size="lg">
        <Divider mb="xl" />
        <Group justify="space-between" align="center">
          <Text size="sm" c="dimmed">
            © 2026 Company. Все права защищены.
          </Text>
          <Group gap="lg">
            {links.map((link) => (
              <Anchor key={link.label} href={link.href} size="sm" c="dimmed">
                {link.label}
              </Anchor>
            ))}
          </Group>
        </Group>
      </Container>
    </div>
  )
}
