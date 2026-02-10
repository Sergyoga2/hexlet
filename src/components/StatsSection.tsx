import { Container, SimpleGrid, Text, Title } from '@mantine/core'

const stats = [
  { value: '10,000+', label: 'Пользователей' },
  { value: '99.9%', label: 'Uptime' },
  { value: '50+', label: 'Интеграций' },
  { value: '24/7', label: 'Поддержка' },
]

export function StatsSection() {
  return (
    <div style={{ backgroundColor: 'var(--mantine-color-gray-0)', padding: '60px 0' }}>
      <Container size="lg">
        <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="xl">
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <Title order={2} c="indigo">
                {stat.value}
              </Title>
              <Text c="dimmed" size="sm" mt="xs">
                {stat.label}
              </Text>
            </div>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  )
}
