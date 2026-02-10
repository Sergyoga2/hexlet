import {
  Container,
  Title,
  Text,
  Button,
  Group,
} from '@mantine/core'

export function HeroSection() {
  return (
    <div style={{ backgroundColor: 'var(--mantine-color-indigo-6)', color: 'white', padding: '80px 0' }}>
      <Container size="lg">
        <Title order={1} style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Ваш продукт — быстрее, проще, лучше
        </Title>
        <Text size="xl" style={{ maxWidth: 600, marginBottom: '2rem', opacity: 0.9 }}>
          Мы помогаем бизнесу расти с помощью современных технологий.
          Автоматизация, аналитика и удобные инструменты — всё в одном месте.
        </Text>
        <Group>
          <Button size="lg" variant="white" color="indigo">
            Начать бесплатно
          </Button>
          <Button size="lg" variant="outline" color="white">
            Узнать больше
          </Button>
        </Group>
      </Container>
    </div>
  )
}
