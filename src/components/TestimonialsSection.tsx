import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Avatar,
  Group,
} from '@mantine/core'

const testimonials = [
  {
    name: 'Алексей Петров',
    role: 'CEO, TechStart',
    text: 'Этот продукт полностью изменил наш подход к работе. Рекомендую всем!',
    avatar: 'АП',
  },
  {
    name: 'Мария Иванова',
    role: 'CTO, DataFlow',
    text: 'Отличная интеграция и потрясающая поддержка. Мы перешли за один день.',
    avatar: 'МИ',
  },
  {
    name: 'Дмитрий Козлов',
    role: 'Founder, GrowUp',
    text: 'Наконец-то инструмент, который действительно экономит время. Никакой воды.',
    avatar: 'ДК',
  },
]

export function TestimonialsSection() {
  return (
    <Container size="lg" py={80}>
      <Title order={2} ta="center" mb="md">
        Что говорят клиенты
      </Title>
      <Text ta="center" c="dimmed" mb={50}>
        Реальные отзывы от реальных людей
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
        {testimonials.map((t) => (
          <Card key={t.name} shadow="sm" padding="xl" radius="md">
            <Text size="sm" c="dimmed" mb="md" style={{ fontStyle: 'italic' }}>
              &ldquo;{t.text}&rdquo;
            </Text>
            <Group>
              <Avatar color="indigo" radius="xl">
                {t.avatar}
              </Avatar>
              <div>
                <Text fw={600} size="sm">
                  {t.name}
                </Text>
                <Text c="dimmed" size="xs">
                  {t.role}
                </Text>
              </div>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  )
}
