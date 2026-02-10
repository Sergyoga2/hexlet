import { Container, Title, Text, Button, Group } from '@mantine/core'

export function CtaSection() {
  return (
    <div style={{ backgroundColor: 'var(--mantine-color-blue-6)', color: 'white', padding: '80px 0' }}>
      <Container size="sm" style={{ textAlign: 'center' }}>
        <Title order={2} mb="md" c="white">
          Готовы начать?
        </Title>
        <Text size="lg" mb="xl" style={{ opacity: 0.9 }}>
          Присоединяйтесь к тысячам компаний, которые уже используют нашу платформу.
          Первые 14 дней — бесплатно.
        </Text>
        <Group justify="center">
          <Button size="lg" variant="white" color="blue">
            Попробовать бесплатно
          </Button>
        </Group>
      </Container>
    </div>
  )
}
